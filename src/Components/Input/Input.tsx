import React, { FC, ChangeEvent} from "react";
//@ts-ignore
import styles from "./Input.module.css";
import classnames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";
import classNames from "classnames";

type InputProps = {
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    disabled?: boolean,
    title?: string,
    error?: string,
    className?: string
    type?: string
};

const Input: FC<InputProps> = ({value, onChange, placeholder, disabled, title, error, className}) => {
    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };
    const { theme } = useThemeContext();
    return (
        <div className={classNames(styles.container, { [styles.darkContainer]: theme === Theme.Dark})}>
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