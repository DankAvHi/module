import { ReactNode, createContext, useState } from "react";
import { SelectOption } from "../../shared/types.d";

type FileContextType = {
    file: File | undefined;
    setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
    pickedTime: SelectOption;
    setPickedTime: React.Dispatch<React.SetStateAction<SelectOption>>;
    prediction:
        | {
              [key: string]: number;
          }
        | undefined;
    setPrediction: React.Dispatch<
        React.SetStateAction<
            | {
                  [key: string]: number;
              }
            | undefined
        >
    >;
};

export const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider = ({ children }: { children: ReactNode }) => {
    const [file, setFile] = useState<File>();
    const [pickedTime, setPickedTime] = useState<SelectOption>();
    const [prediction, setPrediction] = useState<{ [key: string]: number }>();

    return (
        <FileContext.Provider value={{ file, setFile, pickedTime, setPickedTime, prediction, setPrediction }}>
            {children}
        </FileContext.Provider>
    );
};
