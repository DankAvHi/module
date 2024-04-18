import { Logo } from "../../shared/UI/Logo";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.container}>
                <Logo size="big" />
            </div>
        </header>
    );
};
