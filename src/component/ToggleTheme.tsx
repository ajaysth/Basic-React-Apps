import { useBio } from "../context/bio/useBio"
import { useTheme } from "../context/theme/useTheme"
const ToggleTheme = () => {

    const name = useBio()

    const { theme, setTheme } = useTheme();
    return (
        <>
            <div className={`${theme === "light" ? "dark" : "light"} min-h-screen transition duration-500`} >
                <h1>{name}</h1>

                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "Dark" : "Light "}</button>
            </div >
        </>
    )
}

export default ToggleTheme