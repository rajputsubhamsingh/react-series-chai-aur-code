import { createContext, useContext } from "react";

export const userContext = createContext({
    user: '',
    setUser: () => {}
})

export const UserContextProvider = userContext.Provider

export default function useUser(){
    return useContext(userContext)
}