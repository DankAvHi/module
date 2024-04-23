import styles from "./Typography.module.css";

type TypographyProps = {
    children?: React.JSX.Element | string;
    size?: "titleSmall" | "titleBig" | "standart" | "small" | "big" | "bigger";
    color?: "black" | "blackText" | "gray" | "white";
    align?: "center" | "left";
};

export const Typography: React.FC<TypographyProps> = ({
    children,
    size = "standart",
    color = "blackText",
    align = "left",
}) => {
    return <span className={`${styles.Typography} ${styles[size]} ${styles[color]} ${styles[align]}`}>{children}</span>;
};
