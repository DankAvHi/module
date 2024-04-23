import styles from "./TimePickPage.module.css";
import pageStyles from "../../shared/styles/global.module.css";
import { Logo } from "../../shared/UI/Logo";
import { Typography } from "../../shared/UI/Typography";
import { Button } from "../../shared/UI/Button";
import { Select } from "../../shared/UI/Select";
import { useNavigate } from "react-router-dom";
import { SelectOption } from "../../shared/types.d";
import { useState } from "react";
import { apiClient } from "../../shared/api";
import { useFileContext } from "../../app/providers";

const options: SelectOption[] = [
    { value: "D", label: "День" },
    { value: "W", label: "Неделя" },
    { value: "M", label: "Месяц" },
    { value: "Y", label: "Год" },
];

export const TimePickPage = () => {
    const { fileId } = useFileContext();
    const [time, setTime] = useState<SelectOption>();

    const navigate = useNavigate();

    const selectOnChangeHandler = (newValue: unknown) => {
        const time = newValue as SelectOption;
        setTime(time);
    };

    const acceptButtonOnClickHandler = async () => {
        await apiClient.putAPISetTu(fileId as number, { timeUnit: time?.value as string });

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
