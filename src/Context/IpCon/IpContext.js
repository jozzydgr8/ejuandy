
import { type } from "@testing-library/user-event/dist/type";
import { createContext, useReducer, useEffect } from "react"

export const Ip = createContext();

const initialState={
    addy:null,
    loading:true
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'ADDRESS':
            return {...state, addy:action.payload, load:false};
        case 'LOADING':
            return {...state, load:action.payload};

        default:
            return state

    }
}
export const IpContext = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

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
        dispatch({type:'LOADING', payload:true});

        const address = JSON.parse(localStorage.getItem('ip'));
        if(address){
            if( address == ipAddress){
                dispatch({type:'ADDRESS', payload:address})
            }else{
                dispatch({type:'LOADING', payload:false})
                return
            }
        }
        if(!address){
            dispatch({type:'LOADING', payload:false})
            getAddress()
        }

    
      
      
      },[])
    return(
        <Ip.Provider value={{...state, dispatch}}>
            {children}
        </Ip.Provider>
    )
}