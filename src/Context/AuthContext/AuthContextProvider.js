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

        const unSubscribe = onAuthStateChanged(auth, (user)=>{
                            if(user){
                                dispatch({type:'AUTH', payload: user});
                                console.log('sign in');
                            }

                            else{
                                dispatch({type:'AUTH', payload:null})
                                console.log('not signed in')
                            }
                        });

                        const checkEmailVerification = async ()=>{
                            const user = auth.currentUser;
                            if (user){
                                await user.reload();
                                if (user.emailVerified){
                                    dispatch({type: 'AUTH', payload: user});
                                    // console.log('email verified')
                                    clearInterval(intervalId);
                                }
                            }
                        }
                        const intervalId = setInterval(checkEmailVerification, 5000);
                        //check emailveri every 5 seconds
              return ()=> {
                unSubscribe();
                clearInterval(intervalId);
            };  
            
    },[]);

    return(
        <AuthProvider.Provider value={{...state, dispatch}}>
            {children}
        </AuthProvider.Provider>
    )
}