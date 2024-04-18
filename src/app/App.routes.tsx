import { createBrowserRouter } from "react-router-dom";
import { StartPage } from "../pages/StartPage";

export const appRouter = createBrowserRouter([{ path: "/", element: <StartPage /> }]);
