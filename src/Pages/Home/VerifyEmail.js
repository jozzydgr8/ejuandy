import { NavLink, useNavigate } from "react-router-dom"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../App"
import { AuthContext } from "../../Context/AuthContext/AuthContext"
import { useEffect } from "react";

export const VerifyEmail = ()=>{
    const navigate = useNavigate();
    const homePage = ()=>{
        signOut(auth)
            .then(()=>{
                localStorage.removeItem('user')
                navigate('/ejuandy')
            })
    }
    
    return(
        <div>
            <p>please verify email to proceed... !</p>
            <button className="btn btn-primary" onClick={homePage}>back to homePage</button>
        </div>
        
    )
}