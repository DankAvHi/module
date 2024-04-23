import { useNavigate } from "react-router-dom";
import { useFileContext } from "../../app/providers";
import { Button } from "../../shared/UI/Button";
import { Logo } from "../../shared/UI/Logo";
import { Typography } from "../../shared/UI/Typography";
import pageStyles from "../../shared/styles/global.module.css";
import styles from "./FileInfoPage.module.css";
import { useEffect, useState } from "react";
import { apiClient } from "../../shared/api";
import { InlineResponse200 } from "../../shared/api/generated";

export const FileInfoPage = () => {
    const [fileInfo, setFileInfo] = useState<InlineResponse200>();

    const { fileId, setFileId } = useFileContext();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInfo = async () => {
            const info = await apiClient.getAPIOneRecord(fileId as number);
            setFileInfo(info);
        };
        fetchInfo();
    }, [fileId]);

    const deleteFile = () => {
        setFileId(undefined);

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
                    <Typography color="gray">{fileInfo?.name}</Typography>
                </li>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Тип файла:`}</Typography>
                    <Typography color="gray">{fileInfo?.fileType}</Typography>
                </li>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Временной интервал прогноза:`}</Typography>
                    <Typography color="gray">{fileInfo?.timeUnit}</Typography>
                </li>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Дата создания:`}</Typography>
                    <Typography color="gray">{fileInfo?.creationDate}</Typography>
                </li>
                <li className={styles.infoItem}>
                    <Typography size="big">{`Дата последнего использования:`}</Typography>
                    <Typography color="gray">{fileInfo?.lastUsage}</Typography>
                </li>
            </ul>

            <div className={styles.actions}>
                <Button onClick={acceptFile} size="small">{`Спрогнозировать`}</Button>
                <Button onClick={deleteFile} size="small" type="secondary">{`Удалить файл`}</Button>
            </div>
        </div>
    );
};
