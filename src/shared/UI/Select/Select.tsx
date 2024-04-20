import { DownIcon } from "../../assets/icons";
import styles from "./Select.module.css";
import CustomSelect, { ActionMeta, components, DropdownIndicatorProps, OnChangeValue } from "react-select";
import { SelectStyles } from "./Select.styles";

const options = [
    { value: "D", label: "День" },
    { value: "W", label: "Неделя" },
    { value: "M", label: "Месяц" },
];

type SelectPropsType = {
    onChange?: (newValue: unknown, actionMeta?: ActionMeta<unknown>) => void;
};

export const Select: React.FC<SelectPropsType> = ({ onChange }) => {
    const DropdownIndicator: React.FC<DropdownIndicatorProps> = ({ children, ...props }) => (
        <components.DropdownIndicator {...props}>
            <img src={DownIcon} alt="" />
        </components.DropdownIndicator>
    );

    return (
        <CustomSelect
            onChange={onChange}
            styles={SelectStyles}
            components={{ DropdownIndicator }}
            className={styles.Select}
            options={options}
            defaultValue={options[2]}
        />
    );
};
