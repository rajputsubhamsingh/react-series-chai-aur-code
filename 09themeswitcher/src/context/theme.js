import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider
// useTheme ko isliye use kar rhe hai ki har file me
// hme useContext ko import na karna padega
export default function useTheme(){
    return useContext(ThemeContext)
}

// this is better approach to defining the context api 