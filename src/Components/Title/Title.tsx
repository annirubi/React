import React, { FC } from "react";
//@ts-ignore
import styles from "./Title.module.css"
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";
import classNames from "classnames";

type TitleProps = {
    title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
    const { theme } = useThemeContext();
    return <div className={classNames(styles.container, { [styles.darkContainer]: theme === Theme.Dark})}>{title}</div>
};

export default Title 