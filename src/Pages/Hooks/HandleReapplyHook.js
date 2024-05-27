import { deleteObject, getMetadata, ref } from "firebase/storage";
import { db, storage} from '../../App';
import { addDoc, collection, deleteDoc, doc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const HandleReapplyHook = ()=>{
    const navigate = useNavigate();
    
        //logic for handleReApply
        const handleReApply = async (loanData)=>{
           
            navigate('/ejuandy/admin')
          
            console.log('wtf')
            const secColRef= collection(db, 'settled');
            const settledDoc ={
                name:loanData.name,
                phone:loanData.phone,
                repaymentDate: loanData.repaymentDate,
                amountGranted: loanData.amountGranted,
                amountBalanced: loanData.amountBalanced,
                address: loanData.homeAddress,
                trade: loanData.trade,
                guarantor: loanData.guarantor.name,
                guarantorPhone: loanData.guarantor.guarantorPhone,
                guarantorAddy: loanData.guarantor.address
        
                
        
            }
        
    
            try{
              const docAdd =  await addDoc(secColRef,settledDoc);
    
              if(docAdd){
                const fileStorage = ref(storage, loanData.applicantPath);
                const guarantorFileStorage = ref(storage, loanData.guarantor.guarantorPath);
                const validation = ref(storage, loanData.verificationPath);
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
    
            const docRef = doc(db, 'Data', loanData.id);
            await deleteDoc(docRef);
            console.log('deleted items successfully')
    
            
    
    
        }

        
        return {handleReApply}
}