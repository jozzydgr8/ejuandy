import { signOut } from "firebase/auth"
import { auth, colRef } from "../../../App"
import { AuthContext } from "../../../Context/AuthContext/AuthContext"
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { RequestTemplate } from "./RequestTemplate";
import { Button } from "antd";

export const Admin = ()=>{
    const {dispatch} = AuthContext();
    const [request, setRequest] = useState(null)
    useEffect(()=>{
        onSnapshot(colRef, (snapshot)=>{
            const data = [];
            const dataRef = snapshot.docs.forEach(doc=>{
                data.push({...doc.data(), id:doc.id})
            });
            setRequest(data)
            console.log(data);
        
            })
    },[]);

    //logout function
    const logOut = ()=>{
        signOut(auth)
            .then(()=>{
                
                localStorage.removeItem('user');
                dispatch({type: 'AUTH', payload:null})
                
            })
    }

    //component
    return(
        <>
        <div>
            <div>
                {request && 
                    <RequestTemplate request = {request}/>
                }
                  <Button type="primary" onClick={logOut}>sign out</Button>

            </div>
            {/* first grid */}

        </div>
        </>
    )
}