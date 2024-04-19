import { createBrowserRouter } from "react-router-dom";
import { StartPage } from "../pages/StartPage";
import { TimePickPage } from "../pages/TimePickPage";
import { FileInfoPage } from "../pages/FileInfoPage";
import { TablePage } from "../pages/TablePage";

export const appRouter = createBrowserRouter([
    { path: "/", element: <StartPage /> },
    { path: "/timepick", element: <TimePickPage /> },
    { path: "/fileinfo", element: <FileInfoPage /> },
    { path: "/table", element: <TablePage /> },
]);
