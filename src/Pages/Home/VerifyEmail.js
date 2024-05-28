import { NavLink } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../App"
import { AuthContext } from "../../Context/AuthContext/AuthContext"
import { useEffect } from "react";

export const VerifyEmail = ()=>{
    
    return(
        <div>
            <p>please verify email to proceed... !</p>
            <NavLink to='/ejuandy'>back to homePage</NavLink>
        </div>
        
    )
}