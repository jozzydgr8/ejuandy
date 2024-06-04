import { useCallback, useContext, useMemo } from "react"

import {ContextProvider} from '../Auth/Admin/LoanClient';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../App";
export const HandleOwing = ()=>{
    const result = useContext(ContextProvider)
    const context = useMemo(()=>result,[result]);
    //code logic to find out default in repayment date stamps
    const {amountBalanced, amountGranted, status} = context;
//actions
    const owing = useCallback(()=>{
        if(amountGranted && amountBalanced){
            return parseFloat(amountGranted) - parseFloat(amountBalanced)
        }else if(amountGranted && !amountBalanced){
            return amountGranted
        }else if(!amountGranted && amountBalanced || !amountGranted && !amountBalanced){
            return <span>client needs to be granted</span>
        }else{
            return
        }
    }, [amountBalanced, amountGranted, status]);
    //actions
    const action = useCallback( (update)=>{
        const docRef = doc(db, 'Data', context.id)
        if(update < 0){
            setDoc(docRef,{
               owing:update ,
               status: 'refund'
           }, {merge:true}).then(()=>{
               return update * -1
           })
       }  else if (update === 0){
            setDoc(docRef, {
               owing:update,
               status:'Settled'
           }, {merge:true}).then(()=>{
               return update
           })
       } else{
            setDoc(docRef,{
               owing:update,
           }, {merge:true}).then(()=>{
               return update
           })
       }         
    }, [context.id])


    const dateStampsArray = context && context.repaymentDate.split(',');

    const dateStamp1 =  dateStampsArray.slice(1, 2);
    const dateStamp2 =  dateStampsArray.slice(3,5);
    
    

    const date1 =  new Date(dateStamp1);
    const date2 =  new Date(dateStamp2);

    const currentDate = new Date();

    const diff =  currentDate - date2;
    const difference =  diff / (1000 * 3600 * 24);
           

                       
                   
    const handleOwing = useCallback(()=>{
      // return parseFloat( context.amountGranted) - parseFloat( context.amountBalanced)
      if(status == 'Settled'){
        return <span>client needs to be granted</span>
    }
       if (difference <= 0){
        if (typeof owing() !== 'number'){
            return owing();
        }
        const update = owing();
        action(update);
        
    }
    if (difference  >= 1){
        if (typeof owing() !== 'number'){
            return owing();
        }
        const update = ((5/100)*owing()) + owing();
        action(update);
         
  
    }
    if (difference >=4){
        if (typeof owing() !== 'number'){
            return owing();
        }
        const update = ((10/100)*owing()) + owing();
        action(update);
    }
    }, [context.repaymentDate, owing, action, status, context.amountGranted])
    return {handleOwing}
}