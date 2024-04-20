import { ReactNode, createContext, useState } from "react";
import { SelectOption } from "../../shared/types.d";

type FileContextType = {
    file: File | undefined;
    setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
    pickedTime: SelectOption;
    setPickedTime: React.Dispatch<React.SetStateAction<SelectOption>>;
};

export const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider = ({ children }: { children: ReactNode }) => {
    const [file, setFile] = useState<File>();
    const [pickedTime, setPickedTime] = useState<SelectOption>();

    return <FileContext.Provider value={{ file, setFile, pickedTime, setPickedTime }}>{children}</FileContext.Provider>;
};
