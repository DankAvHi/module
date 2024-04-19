import styles from "./FilePicker.module.css";
import { Button } from "../Button";
import { useRef } from "react";

export const FilePicker = () => {
    const filePickerRef = useRef<HTMLInputElement>(null);
    return (
        <>
            <input className={styles.filePicker} ref={filePickerRef} type="file" name="table" id="table" />
            <Button
                onClick={() => {
                    filePickerRef.current?.click();
                }}
            >{`Прикрепить файл`}</Button>
        </>
    );
};
