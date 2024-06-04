import { deleteObject, getMetadata, ref } from "firebase/storage";
import { db, storage} from '../../App';
import {query, deleteDoc, doc, addDoc, collection, where, getDocs} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../Auth/Admin/LoanClient";

export const HandleReapplyHook = ()=>{

    // console.log('lol')
    const context = useContext(ContextProvider);
    
   
    
        //logic for handleReApply
        const handleReApply = async ()=>{
           
            


            // console.log(context.email);
            // console.log(context)

             const docSnap = await getDocs(query(collection(db, 'Users'), where('email', '==', context.email)));
            let data ={}
             docSnap.forEach(doc=>{
                data ={...doc.data(), id:doc.id}
                    
             });
             
             

            //subcollection
                const UserDocRef = doc(db, 'Users',data.id);
            
            
            const settledLoanDocRef = collection(UserDocRef, 'settledLoans')

            const settledDoc ={
                requestDate:context.date,
                name:context.name,
                phone:context.phone,
                repaymentDate: JSON.stringify(new Date()),
                amountGranted: context.amountGranted,
                amountBalanced: context.amountBalanced,
                address: context.homeAddress,
                trade: context.trade,
                guarantor: context.guarantor.name,
                guarantorPhone: context.guarantor.guarantorPhone,
                guarantorAddy: context.guarantor.address
        
                
        
            } 
        
    
            try{
              const docAdd =  await addDoc(settledLoanDocRef, settledDoc);
    
              if(docAdd){
                const fileStorage = ref(storage, context.applicantPath);
                const guarantorFileStorage = ref(storage, context.guarantor.guarantorPath);
                const validation = ref(storage, context.verificationPath);
                const metaData = getMetadata(fileStorage);
                const guarantorMetaData= getMetadata(guarantorFileStorage);
                const validationMetaData= getMetadata(validation);
                if(metaData){
                    deleteObject(fileStorage)
                };
                if(guarantorMetaData){
                    deleteObject(guarantorFileStorage)
                };
                if(validationMetaData){
                    deleteObject(validation)
                };
    
                
    
              }
    
    
    
            }catch (error){
    
                console.error('error adding doc' + error);
    
            }
    
            const docRef = doc(db, 'Data', context.id);
            await deleteDoc(docRef);
            console.log('deleted items successfully')
    
            
    
    
        }

        
        return {handleReApply}
}