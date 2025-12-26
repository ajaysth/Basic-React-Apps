import { useState, type ReactNode } from "react"
import { ThemeContext } from "./ThemeContext"

interface ThemeProviderProps {
    children: ReactNode
}




export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [theme, setTheme] = useState("light")

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}