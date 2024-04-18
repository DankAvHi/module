import { Typography } from "../Typography";
import styles from "./Button.module.css";

type ButtonProps = {
    children: string;
    type?: "primary" | "secondary";
    size?: "big" | "small";
};

export const Button: React.FC<ButtonProps> = ({ children, type = "primary", size = "big" }) => {
    const textSize = size === "big" ? "bigger" : "standart";
    const textColor = type === "primary" ? "white" : "blackText";
    return (
        <button className={`${styles.Button} ${styles[`Button_${type}`]} ${styles[`Button_${size}`]}`}>
            <Typography size={textSize} color={textColor}>
                {children}
            </Typography>
        </button>
    );
};
