
import { createContext, useReducer, useEffect } from "react"

export const Ip = createContext();

const reducer = (state, action)=>{
    switch(action.type){
        case 'ADDRESS':
            return {...state, addy:action.payload}
    }
}
export const IpContext = ({children})=>{
    const [state, dispatch] = useReducer(reducer, {
        addy:null
    })

    //valid address
    const ipAddress = process.env.REACT_APP_address;
    //function
    const getAddress = async()=>{
        const fetchAddress = await fetch('https://api.ipify.org/?format=json'); 
    
        const json = await fetchAddress.json();
    
        if(fetchAddress.ok){
            localStorage.setItem('ip', JSON.stringify(json.ip));
            if(json.ip == ipAddress){
                dispatch({type:'ADDRESS', payload:json.ip})
            }

        }
      }
    useEffect(() => {
        const address = JSON.parse(localStorage.getItem('ip'));
        if(address){
            if( address == ipAddress){
                dispatch({type:'ADDRESS', payload:address})
            }else{return}
        }
        if(!address){
            getAddress()
        }

        
      
      
      },[])
    return(
        <Ip.Provider value={{...state, dispatch}}>
            {children}
        </Ip.Provider>
    )
}