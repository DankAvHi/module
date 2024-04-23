import styles from "./FileInfoPage.module.css";
import pageStyles from "../../shared/styles/global.module.css";
import { Logo } from "../../shared/UI/Logo";
import { Typography } from "../../shared/UI/Typography";
import { Button } from "../../shared/UI/Button";
import { useFileContext } from "../../app/providers";
import { useNavigate } from "react-router-dom";

const fetchPrediction = async (file: File) => {
    return {
        predictions: {
            message: "OK",

            code: 200,

            result: {
                pred: {
                    "2023-08-01": 25.6,

                    "2023-08-02": 28.1,

                    "2023-08-03": 26.3,

                    "2023-08-04": 29.7,

                    "2023-08-05": 27.9,

                    "2023-08-06": 30.2,

                    "2023-08-07": 28.8,

                    "2023-08-08": 31.5,

                    "2023-08-09": 32.1,

                    "2023-08-10": 30.7,

                    "2023-08-11": 33.4,

                    "2023-08-12": 31.9,
                },
            },
        },

        record: {
            id: 10,

            name: "someTS",

            file_type: "CSV",

            time_unit: "MONTH",

            path: "/mnt/data/save_files/someTS.csv",

            creation_date: "2023-08-09T15:30:00+05:30",

            last_usage: "2023-08-09T15:30:00+05:30",
        },
    };
};

export const FileInfoPage = () => {
    const { file, pickedTime, setFile, setPickedTime, setPrediction } = useFileContext();
    const navigate = useNavigate();

    const deleteFile = () => {
        setFile(undefined);
        setPickedTime(undefined);
        navigate("/");
    };

    const acceptFile = async () => {
        await fetchPrediction(file as File).then((prediction) =>
            setPrediction({ ...prediction.predictions.result.pred }),
        );
        navigate("/table");
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
                <Button onClick={acceptFile} size="small">{`Спрогнозировать`}</Button>
                <Button onClick={deleteFile} size="small" type="secondary">{`Удалить файл`}</Button>
            </div>
        </div>
    );
};
