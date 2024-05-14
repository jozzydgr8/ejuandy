import { useContext } from "react";
import { AuthProvider } from "./AuthContextProvider";

export const AuthContext = ()=>{
    const context = useContext(AuthProvider)
    if (!context){
        throw Error('context requires a provider')
    }
    return context
}