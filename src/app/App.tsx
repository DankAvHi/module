import { RouterProvider } from "react-router-dom";
import { Header } from "../widgets/Header";
import styles from "./App.module.css";
import { appRouter } from "./App.routes";

function App() {
    return (
        <>
            <Header />
            <main className={styles.App}>
                <RouterProvider router={appRouter} />
            </main>
        </>
    );
}

export default App;
