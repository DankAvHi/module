import styles from "./Select.module.css";
import CustomSelect from "react-select";

const options = [
    { value: "D", label: "День" },
    { value: "W", label: "Неделя" },
    { value: "M", label: "Месяц" },
];

export const Select = () => {
    return <CustomSelect options={options} />;
};
