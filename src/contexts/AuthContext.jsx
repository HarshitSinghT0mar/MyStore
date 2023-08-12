import React, { useContext } from "react";
import { createContext } from "react";

export default AuthContext=createContext();

const useAuth=()=>{
    return useContext(AuthContext);
}

export const authContextProvider=({children})=>{


    return <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
}