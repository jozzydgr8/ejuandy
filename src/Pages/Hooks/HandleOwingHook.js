
export const HandleOwingHook =()=>{
    
        // function to output owing invluding default
        const handleOwing = (amountBalanced, amountGranted, repaymentDate, context)=>{
 

            //algebra for define owing amount
           const owing =  amountBalanced ? amountGranted - amountBalanced : amountGranted ? amountGranted : <span>client hasnt received loan</span>
          
           //code logic to find out default in repayment date stamps
           const dateStampsArray = context && repaymentDate.split(',');
       
           const dateStamp1 =  dateStampsArray.slice(1, 2);
           const dateStamp2 =  dateStampsArray.slice(3,5);
          
         
       
           const date1 =  new Date(dateStamp1);
           const date2 =  new Date(dateStamp2);
       
           const currentDate = new Date();
       
           const diff =  currentDate - date2;
           const difference =  diff / (1000 * 3600 * 24);
       
               if (difference <= 0){
                
                   return owing
               }
               if (difference  <= 3){
                
                   return ((5/100)*owing) + owing;
             
               }
               if (difference >=4){
                       return ((10/100)*owing) + owing;
                   
               }
              
           }

           return {handleOwing}
}