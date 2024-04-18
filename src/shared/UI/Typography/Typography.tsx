import styles from "./Typography.module.css";

type TypographyProps = {
    children: React.JSX.Element | string;
    size?: "titleSmall" | "titleBig" | "standart" | "small" | "big" | "bigger";
    color?: "black" | "blackText" | "gray" | "white";
};

export const Typography: React.FC<TypographyProps> = ({ children, size = "standart", color = "blackText" }) => {
    return <p className={`${styles.Typography} ${styles[size]} ${styles[color]}`}>{children}</p>;
};
