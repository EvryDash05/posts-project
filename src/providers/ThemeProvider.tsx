import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const [theme, setGlobalTheme] = useState<string>(() => {
        const currentTheme = localStorage.getItem('theme');
        return currentTheme ? currentTheme : 'light'; 
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            console.log(`Tema dark añadido, ${theme}`)
        } else {
            document.documentElement.classList.remove('dark');
            console.log(`Tema dark removido, ${theme}`)
        }
    }, [theme]);

    const handleTheme = () => {
        const currentTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        setGlobalTheme(currentTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, handleTheme, isDark: theme === 'dark' }}>
            {children}
        </ThemeContext.Provider>
    );
}
