import React, { FC, ReactElement } from "react"
import { Theme } from "../../Constants/@types"
import ThemeContext from "./ThemeContext"

type ThemeProviderProps = {
    theme: Theme,
    children: ReactElement;
    onChangeTheme: (value: Theme) => void;
}



const ThemeProvider: FC<ThemeProviderProps> = ({ theme, onChangeTheme, children }) => {
    return (
        <ThemeContext.Provider 
    value={{ theme, onChangeTheme }}>
        {children}
    </ThemeContext.Provider>
    );
}

export default ThemeProvider