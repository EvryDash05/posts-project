import { createContext } from "react";

interface Theme {
    theme: string,
    handleTheme: () => void,
    isDark: boolean
}

export const ThemeContext = createContext<Theme>({
    theme: 'light',
    handleTheme: () => { },
    isDark: false,
})
