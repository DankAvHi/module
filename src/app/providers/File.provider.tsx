import { ReactNode, createContext, useState } from "react";

type FileContextType = {
    fileId: number | undefined;
    setFileId: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider = ({ children }: { children: ReactNode }) => {
    const [fileId, setFileId] = useState<number>();
    return <FileContext.Provider value={{ fileId, setFileId }}>{children}</FileContext.Provider>;
};
