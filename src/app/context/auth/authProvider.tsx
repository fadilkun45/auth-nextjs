"use client"
import { createContext, useContext, useState } from "react"

export type AuthContextType = {
    login?: string,
    setLogin: (arg: any) => void
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({children}: {children: React.ReactNode}) => {

    const [login, setLogin] = useState()

  return (
    <AuthContext.Provider value={{login,setLogin}}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
    return  useContext(AuthContext) as AuthContextType
}