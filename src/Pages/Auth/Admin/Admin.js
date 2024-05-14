import { signOut } from "firebase/auth"
import { auth, colRef } from "../../../App"
import { AuthContext } from "../../../Context/AuthContext/AuthContext"
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

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
        <div className="row">
            <div className="col-md-8">
                {request && request.map((request)=>(
                    <div key={request.id}>
                        <img src={request.profile} alt="profile-pic" />
                        {request.name}
                    </div>
                ))}
                  <button onClick={logOut}>sign out</button>

            </div>
            {/* first grid */}

            <div className="col-md-4">
                second grid
            </div>
        </div>
        </>
    )
}