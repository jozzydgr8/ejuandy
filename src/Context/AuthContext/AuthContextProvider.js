import { onAuthStateChanged } from "firebase/auth"
import { createContext, useEffect, useReducer } from "react"
import { auth } from "../../App"

export const AuthProvider = createContext();
const initialState = {
    user:null,
    loading:true
};

const reducer = (state, action)=>{
    switch (action.type){
        case 'AUTH':
            return{...state, user:action.payload, loading: false};

        case 'SET-LOADING':
            return{...state, loading:action.payload};
        
        default:
            return state;
    }
}
export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{

        dispatch({type:'SET-LOADING', payload:true});

        const client = JSON.parse(localStorage.getItem('user'));
        if(client){
            dispatch({type:'AUTH', payload:client })
        }else{dispatch({type:'SET-LOADING', payload:false});}
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
                            if(user){
                                dispatch({type:'AUTH', payload: user})
                                console.log('sign in')
                            }else{
                                dispatch({type:'AUTH', payload:null})
                                console.log('not signed in')
                            }
                        });
            return ()=> unSubscribe();  
    },[]);

    return(
        <AuthProvider.Provider value={{...state, dispatch}}>
            {children}
        </AuthProvider.Provider>
    )
}