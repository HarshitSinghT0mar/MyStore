import React, { useContext, useState } from "react";
import { createContext } from "react";
import { auth } from "../utils/firebase";


const AuthContext=createContext();

export const useAuth=()=>{
    return useContext(AuthContext);
}

export const AuthProvider=({children})=>{
    const initialState = { email: "", password: "", confirmPwd: "" };
    const [user, setUser] = useState(initialState);
    const userId=auth?.currentUser?.uid

    return <AuthContext.Provider value={{user,setUser,initialState,userId}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;