import {  doc, setDoc} from "firebase/firestore";
import { db} from '../../App'
import { HandleOwingHook } from "./HandleOwingHook";
import { useContext } from "react";
import { ContextProvider } from "../Auth/Admin/LoanClient";
export const HandleBalanceHook = ()=>{
    const {handleOwing} = HandleOwingHook();
        // function to handle balance
    const context = useContext(ContextProvider);


       
        const handleBalance = (amountBalance)=>{

             console.log(context)
            
            if (amountBalance == 0 || amountBalance == null){
                return
            }
            // define document
            const documentRef = doc(db, 'Data', context.id);
            //update loan with proper arithmetic
            const updateLoan = context.amountBalanced ? parseFloat(context.amountBalanced) + parseFloat(amountBalance): amountBalance;
            const owing = handleOwing(updateLoan, context.amountGranted, context.repaymentDate, context);
            console.log(owing);
            
            //logic if debt has been settled
            if( owing <= 0){
    
            try{
                setDoc(documentRef, {
 
                    amountBalanced: updateLoan,
                    status:'Settled',
                             repaymentDate: JSON.stringify(new Date()),
                            owing:owing
                   
                }, {merge:true})
                // .then(()=>{
                //     setDoc(documentRef, {
                //        
                //     }, {merge:true})
                // });
    
                console.log('settled')
            }catch (error){
                console.error('error setting balance:', error)
            }
    
        }else{
            try{
                 setDoc(documentRef, {
                    amountBalanced: updateLoan,
                }, {merge:true}).then(()=>{
                    console.log('hey')
                    setDoc(documentRef,{
                        owing:owing
                    }, {merge:true})
                });
    
                console.log('balance has been updatedssrt')
            }catch (error){
                console.error('error setting balance:', error)
            }
        }
    
        //logic if client is still owing
        }

        return {handleBalance}
}