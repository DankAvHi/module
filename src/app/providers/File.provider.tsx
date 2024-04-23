import { ReactNode, createContext, useState } from "react";

type FileContextType = {};

export const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider = ({ children }: { children: ReactNode }) => {
    return <FileContext.Provider value={{}}>{children}</FileContext.Provider>;
};
