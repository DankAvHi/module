import styles from "./TimePickPage.module.css";
import pageStyles from "../../shared/styles/global.module.css";
import { Logo } from "../../shared/UI/Logo";
import { Typography } from "../../shared/UI/Typography";
import { Button } from "../../shared/UI/Button";
import { Select } from "../../shared/UI/Select";
import { useFileContext } from "../../app/providers";
import { useNavigate } from "react-router-dom";
import { SelectOption } from "../../shared/types.d";
import { useEffect } from "react";

const options: SelectOption[] = [
    { value: "D", label: "День" },
    { value: "W", label: "Неделя" },
    { value: "M", label: "Месяц" },
    { value: "Y", label: "Год" },
];

export const TimePickPage = () => {
    const { setPickedTime } = useFileContext();
    const navigate = useNavigate();

    useEffect(() => {
        setPickedTime(options[0]);
    }, [setPickedTime]);

    const selectOnChangeHandler = (newValue: unknown) => {
        const time = newValue as SelectOption;
        setPickedTime(time);
    };

    const acceptButtonOnClickHandler = () => {
        navigate("/fileinfo");
    };

    return (
        <div className={`${pageStyles.verticalPage} ${styles.TimePickPage}`}>
            <Logo size="small" />

            <Typography align="center" size="titleBig" color="black">{`Выберите нужный временной интервал`}</Typography>

            <Typography
                align="center"
                size="standart"
                color="gray"
            >{`Выберите варианты из выпадающего списка`}</Typography>

            <Select options={options as []} onChange={selectOnChangeHandler} />

            <Button onClick={acceptButtonOnClickHandler}>{`Подтвердить`}</Button>
        </div>
    );
};
