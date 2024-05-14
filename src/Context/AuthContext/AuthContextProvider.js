import { onAuthStateChanged } from "firebase/auth"
import { createContext, useEffect, useReducer } from "react"
import { auth } from "../../App"

export const AuthProvider = createContext()
const reducer = (state, action)=>{
    switch (action.type){
        case 'AUTH':
            return{...state, user:action.payload}
    }
}
export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, {user:null});
    useEffect(()=>{

        const client = JSON.parse(localStorage.getItem('user'));
        if(client){
            dispatch({type:'AUTH', payload:client })
        }
    },[])
    onAuthStateChanged(auth, (user)=>{
        if(user){
            console.log('sign in')
        }else{
            console.log('not signed in')
        }
    })
    return(
        <AuthProvider.Provider value={{...state, dispatch}}>
            {children}
        </AuthProvider.Provider>
    )
}