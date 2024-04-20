import styles from "./FileInfoPage.module.css";
import pageStyles from "../../shared/styles/global.module.css";
import { Logo } from "../../shared/UI/Logo";
import { Typography } from "../../shared/UI/Typography";
import { Button } from "../../shared/UI/Button";
import { useFileContext } from "../../app/providers";
import { useNavigate } from "react-router-dom";

export const FileInfoPage = () => {
    const { file, pickedTime, setFile, setPickedTime } = useFileContext();
    const navigate = useNavigate();

    const deleteFile = () => {
        setFile(undefined);
        setPickedTime(undefined);
        navigate("/");
    };

    if (!file || !pickedTime) {
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <Typography align="center" size="titleBig" color="black">{`Ошибка при загрузке файла`}</Typography>
                <Button onClick={() => navigate("/")}>{`Вернутся назад`}</Button>
            </div>
        );
    }

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
                    <Typography color="gray">{file.name}</Typography>
                </li>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Тип файла:`}</Typography>
                    <Typography color="gray">{file.type === "text/csv" ? ".csv" : ".json"}</Typography>
                </li>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Временной интервал прогноза:`}</Typography>
                    <Typography color="gray">{pickedTime.label}</Typography>
                </li>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Дата последнего использования:`}</Typography>
                    <Typography color="gray">{`${new Date(file.lastModified).toLocaleDateString("ru")} 
                    ${new Date(file.lastModified).toLocaleTimeString("ru")}
                    `}</Typography>
                </li>
            </ul>

            <div className={styles.actions}>
                <Button size="small">{`Спрогнозировать`}</Button>
                <Button onClick={deleteFile} size="small" type="secondary">{`Удалить файл`}</Button>
            </div>
        </div>
    );
};
