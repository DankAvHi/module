import { DownIcon } from "../../assets/icons";
import styles from "./Select.module.css";
import CustomSelect, { components, DropdownIndicatorProps } from "react-select";
import { SelectStyles } from "./Select.styles";

const options = [
    { value: "D", label: "День" },
    { value: "W", label: "Неделя" },
    { value: "M", label: "Месяц" },
];

export const Select = () => {
    const DropdownIndicator: React.FC<DropdownIndicatorProps> = ({ children, ...props }) => (
        <components.DropdownIndicator {...props}>
            <img src={DownIcon} alt="" />
        </components.DropdownIndicator>
    );

    return (
        <CustomSelect
            styles={SelectStyles}
            components={{ DropdownIndicator }}
            className={styles.Select}
            options={options}
            defaultValue={options[2]}
        />
    );
};
