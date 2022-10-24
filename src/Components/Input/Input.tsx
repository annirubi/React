import React, { FC, ChangeEvent} from "react";
//@ts-ignore
import styles from "./Input.module.css";
import classnames from "classnames";

type InputProps = {
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    disabled?: boolean,
    title?: string,
    error?: string,
};

const Input: FC<InputProps> = ({value, onChange, placeholder, disabled, title, error}) => {
    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };
    return (
        <div className={styles.container}>
            {title && <div className={styles.title}>{title}</div>}
            <input value={value}
            onChange={onChangeInput}
            placeholder={placeholder}
            disabled={disabled}
            className={classnames(styles.input, {
                [styles.disabled]: !!disabled,
              })} />
            {error && <div className={styles.error}>{error}</div>}
        </div>
    ) 
}

export default Input