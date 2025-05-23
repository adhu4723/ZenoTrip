import { createContext, useState } from "react";

export const AuthContext=createContext()

export const Authprovider=({children})=>{

    const [isAuth,setisAuth]=useState(false)

    const login=()=>{
        setisAuth(true)
        
        
    }

    console.log(isAuth);

    return (
        <AuthContext.Provider value={{login,isAuth}}>{children}</AuthContext.Provider>
    )
}

