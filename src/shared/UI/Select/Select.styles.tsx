import { StylesConfig } from "react-select";

export const SelectStyles: StylesConfig = {
    container: (provided) => ({
        ...provided,
        boxShadow: "var(--shadow)",
    }),
    control: (provided) => ({
        ...provided,
        borderRadius: "8px",
        border: "2px solid var(--green)",
        "&:hover": {
            border: "2px solid var(--green)",
        },
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: "18px 14px",
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        paddingRight: "36px",
        transition: "0.5s",
        transform: state.selectProps.menuIsOpen ? "rotateX(180deg)" : "",
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: "8px",

        padding: 0,
    }),
    menuList: (provided) => ({
        ...provided,
        borderRadius: "8px",

        padding: 0,
        boxShadow: "var(--shadow)",
    }),
    option: (provided, state) => ({
        ...provided,
        padding: "12px 16px",
        backgroundColor: state.isSelected ? "var(--green-transparent)" : "var(--white)",
        color: "var(--black-text)",
    }),
};
