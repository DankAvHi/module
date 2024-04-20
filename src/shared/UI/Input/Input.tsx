import styles from "./Input.module.css";

type InputProps = {
    type?: React.HTMLInputTypeAttribute;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    name?: string;
    placeholder?: string;
};

export const Input: React.FC<InputProps> = ({ type, onChange, name, placeholder }) => {
    return <input className={styles.Input} onChange={onChange} type={type} name={name} placeholder={placeholder} />;
};
