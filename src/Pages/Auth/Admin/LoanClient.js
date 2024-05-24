import { doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from "../../../App";
import { LoanClientTemp } from "./LoanClientTemp";

export const LoanClient = ()=>{
    const{id} = useParams();
    const [loanData, setLoanData] = useState('')

    useEffect(()=>{
        const docRef = doc(db, 'Data', id);
        onSnapshot(docRef, (docSnap)=>{
            setLoanData({...docSnap.data(), id: docSnap.id});
        } );

    },[id])
console.log(loanData)
    return(
        <LoanClientTemp loanData={loanData} />
    )
}