import { useContext } from "react";
import { FileContext } from "./File.provider";

export const useFileContext = () => {
    const fileContext = useContext(FileContext);
    if (!fileContext) {
        throw new Error("No FileContext.Provider found when calling useFileContext");
    }
    return fileContext;
};
