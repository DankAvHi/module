import styles from "./TimePickPage.module.css";
import pageStyles from "../../shared/styles/global.module.css";
import { Logo } from "../../shared/UI/Logo";
import { Typography } from "../../shared/UI/Typography";
import { Button } from "../../shared/UI/Button";
import { Select } from "../../shared/UI/Select";

export const TimePickPage = () => {
    return (
        <div className={`${pageStyles.verticalPage} ${styles.TimePickPage}`}>
            <Logo size="small" />

            <Typography align="center" size="titleBig" color="black">{`Выберите нужный временной интервал`}</Typography>

            <Typography
                align="center"
                size="standart"
                color="gray"
            >{`Выберите варианты из выпадающего списка`}</Typography>

            <Select />

            <Button>{`Подтвердить`}</Button>
        </div>
    );
};
