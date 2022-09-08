import { createContext, useContext, useState } from "react";



export const DarkModeContext = createContext()

export const DarkModeProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false)

    return (
        <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkMode = () => {
    return useContext(DarkModeContext)
}