"use client"
import { auth } from "@/app/service/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react"

export type AuthContextType = {
    login?: any,
    setLogin: (arg: any) => void,
    user?: any,
    setUser?: (arg: any) => void,
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({children}: {children: React.ReactNode}) => {

  const [user, setUser] = useState<any>(null)
  const [login, setLogin] = useState<any>()


  useEffect(() => {
    if (typeof window !== "undefined") {
      setLogin(localStorage.getItem('refreshtoken') || "")
    }
    
  },[])

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }, [user]);

  return (
    <AuthContext.Provider value={{login,setLogin, user, setUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
    return  useContext(AuthContext) as AuthContextType
}