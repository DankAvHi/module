import styles from "./FilePicker.module.css";
import { Button } from "../Button";
import { useRef } from "react";

type FilePickerProps = {
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const FilePicker: React.FC<FilePickerProps> = ({ onChange }) => {
    const filePickerRef = useRef<HTMLInputElement>(null);
    return (
        <>
            <input
                className={styles.filePicker}
                ref={filePickerRef}
                type="file"
                accept=".csv,.json"
                name="table"
                id="table"
                onChange={onChange}
            />
            <Button
                onClick={() => {
                    filePickerRef.current?.click();
                }}
            >{`Прикрепить файл`}</Button>
        </>
    );
};
