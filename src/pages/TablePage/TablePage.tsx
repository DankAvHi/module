import styles from "./TablePage.module.css";
import { Typography } from "../../shared/UI/Typography";
import { Button } from "../../shared/UI/Button";
import { Select } from "../../shared/UI/Select";
import { Input } from "../../shared/UI/Input";
import { Graph } from "../../widgets/Graph";
import { useFileContext } from "../../app/providers";
import { apiClient } from "../../shared/api";
import { useEffect, useState } from "react";
import { SelectOption } from "../../shared/types.d";
import { PredictionTimeUnit } from "../../shared/api/generated";

const modelTypeOptions = [
    { label: "Линейная Регрессия", value: "LR" },
    { label: "ARIMA", value: "SARIMA(X)" },
];

export const TablePage = () => {
    const { fileId } = useFileContext();
    const [pred, setPred] = useState<{ [key: string]: number }>();
    const [intervalOptions, setIntervalOptions] = useState<{ value: string; label: string }[]>([]);
    const [predInterval, setPredInterval] = useState<SelectOption>();
    const [steps, setSteps] = useState<number>();
    const [modelType, setModelType] = useState<{ label: string; value: string }>();

    useEffect(() => {
        const fetchInfo = async () => {
            const pred = await apiClient.postAPIMakePredictions(fileId as number).then(async (res) => res.result);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setPred(pred);
            const info = await apiClient.getAPIOneRecord(fileId as number);
            const value = info.timeUnit;
            setIntervalOptions(
                value === "D"
                    ? [
                          { value: "D", label: "День" },
                          { value: "W", label: "Неделя" },
                          { value: "M", label: "Месяц" },
                          { value: "Y", label: "Год" },
                      ]
                    : value === "W"
                    ? [
                          { value: "W", label: "Неделя" },
                          { value: "M", label: "Месяц" },
                          { value: "Y", label: "Год" },
                      ]
                    : value === "M"
                    ? [
                          { value: "M", label: "Месяц" },
                          { value: "Y", label: "Год" },
                      ]
                    : [{ value: "Y", label: "Год" }],
            );
        };

        fetchInfo();
    }, [fileId, pred]);

    const timeUnitSelectOnChangeHandler = (newValue: unknown) => {
        const time = newValue as SelectOption;
        setPredInterval(time);
    };
    const modelTypeSelectOnChangeHandler = (newValue: unknown) => {
        const modelType = newValue as SelectOption;
        setModelType(modelType);
    };

    const stepsInutOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSteps(+event.target.value);
    };

    const regeneratePred = async () => {
        const newPred = await apiClient
            .postAPIMakePredictions(fileId as number, {
                predictionTimeUnit: PredictionTimeUnit[predInterval!.value],
                steps: steps as number,
                predictionType: modelType!.value,
            })
            .then(async (res) => res.result);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        setPred(newPred);
    };

    return (
        <div className={`${styles.TablePage}`}>
            <div className={styles.settings}>
                <div className={styles.settingsTitle}>
                    <Typography
                        align="center"
                        size="titleSmall"
                        color="black"
                    >{`Спрогнозируйте свой временной ряд`}</Typography>
                    <Typography align="center" color="gray">{`Все поля обязательны для заполнения`}</Typography>
                </div>
                <div className={styles.settingsOptions}>
                    <div className={styles.option}>
                        <Typography color="gray">{`Тип модели*`}</Typography>
                        <Select onChange={modelTypeSelectOnChangeHandler} options={modelTypeOptions} />
                    </div>
                    <div className={styles.option}>
                        <Typography color="gray">{`Количество шагов прогнозирования* `}</Typography>
                        <Input
                            onChange={stepsInutOnChangeHandler}
                            placeholder="Введите количество шагов"
                            type="number"
                        />
                    </div>
                    <div className={styles.option}>
                        <Typography color="gray">{`Интервал прогнозирования*`}</Typography>
                        <Select onChange={timeUnitSelectOnChangeHandler} options={intervalOptions} />
                    </div>
                </div>
                <Button onClick={regeneratePred} size="small">{`Подтвердить`}</Button>
            </div>
            <div className={styles.result}>
                <Typography align="center" size="titleSmall" color="black">{`Результат прогноза `}</Typography>
                <Graph prediction={pred || {}} />
                <Button size="small" type="secondary">{`Скачать результат`}</Button>
            </div>
        </div>
    );
};
