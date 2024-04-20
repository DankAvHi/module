import styles from "./TablePage.module.css";
import { Typography } from "../../shared/UI/Typography";
import { Button } from "../../shared/UI/Button";
import { Select } from "../../shared/UI/Select";
import { useFileContext } from "../../app/providers";
import { useNavigate } from "react-router-dom";
import { Input } from "../../shared/UI/Input";

const modelTypeOptions = [
    { label: "Линейная Регрессия", value: "LR" },
    { label: "ARIMA", value: "SARIMA(X)" },
];

export const TablePage = () => {
    const { pickedTime } = useFileContext();
    const navigate = useNavigate();

    const value = pickedTime?.value;
    if (!value) {
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <Typography align="center" size="titleBig" color="black">{`Ошибка при загрузке файла`}</Typography>
                <Button onClick={() => navigate("/")}>{`Вернутся назад`}</Button>
            </div>
        );
    }

    const intervalOptions =
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
            : [{ value: "Y", label: "Год" }];

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
                        <Select options={modelTypeOptions} />
                    </div>
                    <div className={styles.option}>
                        <Typography color="gray">{`Количество шагов прогнозирования* `}</Typography>
                        <Input placeholder="Введите количество шагов" type="number" />
                    </div>
                    <div className={styles.option}>
                        <Typography color="gray">{`Интервал прогнозирования*`}</Typography>
                        <Select options={intervalOptions} />
                    </div>
                </div>
                <Button size="small">{`Подтвердить`}</Button>
            </div>
            <div className={styles.result}></div>
        </div>
    );
};
