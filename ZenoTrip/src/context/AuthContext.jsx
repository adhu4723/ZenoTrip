import { createContext, useState } from "react";

export const AuthContext=createContext()

export const Authprovider=({children})=>{

    const [isAuth,setisAuth]=useState(false)

    const login=(e)=>{
        e.preventDefault()
        setisAuth(true)
        console.log('cli');
       
    }

    const logout =()=>{
        setisAuth(false)
    }

    console.log(isAuth);

    return (
        <AuthContext.Provider value={{login,isAuth,logout}}>{children}</AuthContext.Provider>
    )
}

