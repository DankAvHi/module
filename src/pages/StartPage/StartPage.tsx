import styles from "./StartPage.module.css";
import pageStyles from "../../shared/styles/global.module.css";
import { Logo } from "../../shared/UI/Logo";
import { Typography } from "../../shared/UI/Typography";
import { FilePicker } from "../../shared/UI/FilePicker";
import { useFileContext } from "../../app/providers";
import { useNavigate } from "react-router-dom";

export const StartPage = () => {
    const { setFile } = useFileContext();
    const navigate = useNavigate();

    const filePickerOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
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
