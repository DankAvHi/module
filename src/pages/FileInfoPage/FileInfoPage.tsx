import styles from "./FileInfoPage.module.css";
import pageStyles from "../../shared/styles/global.module.css";
import { Logo } from "../../shared/UI/Logo";
import { Typography } from "../../shared/UI/Typography";
import { Button } from "../../shared/UI/Button";

export const FileInfoPage = () => {
    return (
        <div className={`${pageStyles.verticalPage} ${styles.FileInfoPage}`}>
            <Logo size="small" />

            <Typography align="center" size="titleBig" color="black">{`Информация о загруженном файле`}</Typography>

            <Typography
                align="center"
                size="standart"
                color="gray"
            >{`Для того чтобы получить прогноз необходимо нажать кнопку спрогнозировать `}</Typography>

            <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Название вашего файла:`}</Typography>
                    <Typography color="gray">{`AirPassengers.csv`}</Typography>
                </li>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Тип файла:`}</Typography>
                    <Typography color="gray">{`.csv`}</Typography>
                </li>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Временной интервал прогноза:`}</Typography>
                    <Typography color="gray">{`месяц`}</Typography>
                </li>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Дата создания:`}</Typography>
                    <Typography color="gray">{`11.03.2024 15:32`}</Typography>
                </li>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Дата последнего использования:`}</Typography>
                    <Typography color="gray">{`17.04.2024  11:22`}</Typography>
                </li>
            </ul>

            <div className={styles.actions}>
                <Button size="small">{`Спрогнозировать`}</Button>
                <Button size="small" type="secondary">{`Удалить файл`}</Button>
            </div>
        </div>
    );
};
