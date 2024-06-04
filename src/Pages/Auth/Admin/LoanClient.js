import { doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { createContext, useEffect, useState, memo, useMemo } from "react";
import { useParams } from "react-router-dom"
import { db } from "../../../App";
import { LoanClientTemp } from "./LoanClientTemp";

export const ContextProvider = createContext();
export const LoanClient = memo( ()=>{
    const{id} = useParams();
    const [loanData, setLoanData] = useState('');
    

    useEffect(()=>{
        const docRef = doc(db, 'Data', id);
     const unSubscribe = onSnapshot(docRef, (docSnap)=>{
            const newData ={...docSnap.data(), id: docSnap.id};
            if(JSON.stringify(loanData) !== JSON.stringify(newData)){
                setLoanData(newData)
            }
        } );

        return ()=> unSubscribe();
    },[id, loanData])
// console.log(loanData)
    const memoizedLoanData = useMemo (()=> loanData, [loanData])
    return(
        <ContextProvider.Provider value={memoizedLoanData}>
        <LoanClientTemp  />
        </ContextProvider.Provider>
    )
})