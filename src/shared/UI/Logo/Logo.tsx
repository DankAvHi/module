import { LogoImage } from "../../assets/images";
import styles from "./Logo.module.css";

type LogoProps = {
    size?: "big" | "small";
};

export const Logo: React.FC<LogoProps> = ({ size = "big" }) => {
    return size === "big" ? (
        <img className={`${styles.Logo} ${styles.Logo_big}`} src={LogoImage} alt="Логотип" />
    ) : (
        <img className={`${styles.Logo} ${styles.Logo_small}`} src={LogoImage} alt="Логотип" />
    );
};
