import {createContext, useContext} from 'react'

export const ThemeContext = createContext({ // providing default values to Provider
    themeMode: "light", // variable
    darkTheme: () => {}, // can also provide method(s)
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider // another way/syntax of writing ContextProvider

// now we will have to write only one import statement rather than two (useContext and UserContext in components)
export default function useTheme() {
    return useContext(ThemeContext)
} // now by using useTheme we can get access of all values inside our context (themeMode, darkTheme(), lightTheme()) 