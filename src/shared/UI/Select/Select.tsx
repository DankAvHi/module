import { DownIcon } from "../../assets/icons";
import styles from "./Select.module.css";
import CustomSelect, { ActionMeta, components, DropdownIndicatorProps, OnChangeValue } from "react-select";
import { SelectStyles } from "./Select.styles";

type SelectPropsType = {
    onChange?: (newValue: unknown, actionMeta?: ActionMeta<unknown>) => void;
    options: { value: string; label: string }[];
};

export const Select: React.FC<SelectPropsType> = ({ onChange, options }) => {
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
            defaultValue={options[0]}
        />
    );
};
