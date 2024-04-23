import { useNavigate } from "react-router-dom";
import { useFileContext } from "../../app/providers";
import { Button } from "../../shared/UI/Button";
import { Logo } from "../../shared/UI/Logo";
import { Typography } from "../../shared/UI/Typography";
import pageStyles from "../../shared/styles/global.module.css";
import styles from "./FileInfoPage.module.css";

export const FileInfoPage = () => {
    const navigate = useNavigate();

    const deleteFile = () => {
        navigate("/");
    };

    const acceptFile = async () => {
        navigate("/table");
    };

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
                    <Typography color="gray"></Typography>
                </li>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Тип файла:`}</Typography>
                    <Typography color="gray"></Typography>
                </li>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Временной интервал прогноза:`}</Typography>
                    <Typography color="gray"></Typography>
                </li>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Дата последнего использования:`}</Typography>
                    <Typography color="gray"></Typography>
                </li>
            </ul>

            <div className={styles.actions}>
                <Button onClick={acceptFile} size="small">{`Спрогнозировать`}</Button>
                <Button onClick={deleteFile} size="small" type="secondary">{`Удалить файл`}</Button>
            </div>
        </div>
    );
};
