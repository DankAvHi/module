import { RouterProvider } from "react-router-dom";
import { Header } from "../widgets/Header";
import styles from "./App.module.css";
import { appRouter } from "./App.routes";
import { FileProvider } from "./providers/File.provider";

function App() {
    return (
        <>
            <Header />
            <FileProvider>
                <main className={styles.App}>
                    <RouterProvider router={appRouter} />
                </main>
            </FileProvider>
        </>
    );
}

export default App;
