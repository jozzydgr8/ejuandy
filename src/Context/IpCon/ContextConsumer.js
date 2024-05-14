
import { useContext } from "react";
import { Ip } from "./IpContext";

export const ContextConsumer=()=>{
    const context = useContext(Ip);
    if(!context){
        throw Error('context always require a provider')
    }
    return context
}