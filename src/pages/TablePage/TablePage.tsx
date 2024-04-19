import styles from "./TablePage.module.css";
import pageStyles from "../../shared/styles/global.module.css";
import { Logo } from "../../shared/UI/Logo";
import { Typography } from "../../shared/UI/Typography";
import { Button } from "../../shared/UI/Button";

export const TablePage = () => {
    return (
        <div className={`${pageStyles.verticalPage} ${styles.TablePage}`}>
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

            <Button>{`Прикрепить файл`}</Button>
        </div>
    );
};
