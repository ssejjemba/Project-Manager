import { createContext, useState } from "react";

export const Theme = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

export const ThemeProvider = ({children}) => {
    const [theme, toggleTheme] = useState('light');

    const toggleThemeHandler = () => {
        console.log(theme)
        toggleTheme(theme=='light'?'dark':'light');
    }
    
    const value = {
        theme,
        toggleThemeHandler,
    }
    return <Theme.Provider value={value}>{children}</Theme.Provider>
    
}