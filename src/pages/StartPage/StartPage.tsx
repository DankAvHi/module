import styles from "./StartPage.module.css";
import pageStyles from "../../shared/styles/global.module.css";
import { Logo } from "../../shared/UI/Logo";
import { Typography } from "../../shared/UI/Typography";
import { FilePicker } from "../../shared/UI/FilePicker";
import { useNavigate } from "react-router-dom";
import { sendFile } from "../../shared/api/kostyl";
import { useFileContext } from "../../app/providers";

export const StartPage = () => {
    const { setFileId } = useFileContext();
    const navigate = useNavigate();

    const filePickerOnChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const res = await sendFile(event.target.files[0]);
            setFileId(res.id);

            navigate("/timepick");
        }
    };

    return (
        <div className={`${pageStyles.verticalPage} ${styles.StartPage}`}>
            <Logo size="small" />

            <Typography
                align="center"
                size="titleBig"
                color="black"
            >{`Загрузите свой файл временных рядов`}</Typography>

            <Typography
                align="center"
                size="standart"
                color="gray"
            >{`Загрузка возможна в формате .csv .json`}</Typography>

            <FilePicker onChange={filePickerOnChangeHandler} />
        </div>
    );
};
