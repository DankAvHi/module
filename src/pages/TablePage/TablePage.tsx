import styles from "./TablePage.module.css";
import { Typography } from "../../shared/UI/Typography";
import { Button } from "../../shared/UI/Button";
import { Select } from "../../shared/UI/Select";
import { Input } from "../../shared/UI/Input";
import { Graph } from "../../widgets/Graph";

const modelTypeOptions = [
    { label: "Линейная Регрессия", value: "LR" },
    { label: "ARIMA", value: "SARIMA(X)" },
];

export const TablePage = () => {
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
                        <Select options={[]} />
                    </div>
                </div>
                <Button size="small">{`Подтвердить`}</Button>
            </div>
            <div className={styles.result}>
                <Typography align="center" size="titleSmall" color="black">{`Результат прогноза `}</Typography>
                <Graph prediction={{} as { [key: string]: number }} />
                <Button size="small" type="secondary">{`Скачать результат`}</Button>
            </div>
        </div>
    );
};
