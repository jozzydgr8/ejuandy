import { addDoc, collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import {db, storage} from '../../../App'
import { useState } from "react";
import { deleteObject, getMetadata, ref } from "firebase/storage";

export const LoanClientTemp = ({loanData})=>{
    const [loanAmout, setLoanAmount] = useState(null);
    const [amountBalance, setAmoutBalance] = useState(null);

    const settledDoc ={
        name:loanData.name,
        phone:loanData.phone,
        repaymentDate: loanData.repaymentDate,
        amountGranted: loanData.amountGranted,
        amountBalanced: loanData.amountBalanced,
        address: loanData.address,
        trade: loanData.trade
        

    }

    //logic for handleReApply
    const handleReApply = async ()=>{
        const secColRef= collection(db, 'settled');

        try{
          const docAdd =  await addDoc(secColRef,loanData);

          if(docAdd){
            const fileStorage = ref(storage, loanData.passport);
            const guarantorFileStorage = ref(storage, loanData.guarantor.passport);
            const validation = ref(storage, loanData.verification);
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

    //algebra for define owing amount
    const owing = loanData.amountBalanced ? loanData.amountGranted - loanData.amountBalanced : loanData.amountGranted ? loanData.amountGranted : <span>client hasnt received loan</span>
   
    //code logic to find out default in repayment date stamps
    const dateStampsArray = loanData && loanData.repaymentDate.split(',');

    const dateStamp1 = dateStampsArray.slice(1, 2);
    const dateStamp2 = dateStampsArray.slice(3,5);
   
  

    const date1 = new Date(dateStamp1);
    const date2 = new Date(dateStamp2);

    const currentDate = new Date();

    const diff = currentDate - date2;
    const difference = diff / (1000 * 3600 * 24)

    // function to output owing invluding default
    const handleOwing= ()=>{
        if (difference <= 0){
            return owing
        }
        if (difference  <= 3){
            if (typeof owing === 'number'){
            return ((5/100)*owing) + owing;
         } 
         return
        }
        if (difference >=4){
            if(typeof owing === 'number'){
                return ((10/100)*owing) + owing;
            }

            return
        }
    }
   

    // function to handle balance
    const handleBalance = async (e)=>{
        e.preventDefault();
        if (amountBalance == 0 || amountBalance == null){
            return
        }
        // define document
        const documentRef = doc(db, 'Data', loanData.id);
        //update loan with proper arithmetic
        const updateLoan = loanData.amountBalanced ? parseFloat(loanData.amountBalanced) + parseFloat(amountBalance): amountBalance
        
        //logic if debt has been settled
        if(owing <= 0){

        try{
            await setDoc(documentRef, {
                amountBalanced: updateLoan,
                status: 'Settled',
                repaymentDate: JSON.stringify(new Date()),
                amountBalanced: JSON.stringify(handleOwing())
            }, {merge:true});

            console.log('balance has been updated')
        }catch (error){
            console.error('error setting balance:', error)
        }

    }

    //logic if client is still owing
    if(owing > 0){

        try{
            await setDoc(documentRef, {
                amountBalanced: updateLoan
            }, {merge:true});

            console.log('balance has been updated')
        }catch (error){
            console.error('error setting balance:', error)
        }

    }


 

    }


    //amount grant logic

    const grant = async(e)=>{
        e.preventDefault();
        if (loanAmout == 0 || loanAmout == null){
            return
        }
        const documentRef = doc(db, 'Data', loanData.id);
        await setDoc(documentRef,{
            amountGranted:parseFloat(loanAmout),
            status:'Indebt'
        }, {merge:true})
    }

    return(
        <section id="LoanClientSection" >
        <div className="container-fluid background">
            <div className='row'>
                <div className="col-md-6 clientPassport">
                    <header>passport photo</header>
                    <img src={loanData.passport} alt="clientPAss" />
                </div>
                <div className="col-md-6 governmentID">
                    <header>governmentID</header>
                    <img src={loanData.verification} alt='verification' />
                </div>
            </div>
            <hr/>
            
            <div className="details">
                <h1>Details</h1>
                <div className="">
                        <p>status: {loanData.status}</p>
                        <p>Name: {loanData.name}</p>
                        <p>trade: {loanData.trade}</p>
                        <p>Loan Amount in naira: {loanData.loanAmount}</p>
                        <p>repayment period: {loanData.repaymentDate}</p>
                </div>


            </div>

            <hr/>
            {/* second div */}
            <div className="contact">
                <h1>Contact</h1>
               <p> phone: <a href={`tel:${loanData.phone}`}>{loanData.phone} call now</a> </p>
                <p> email: <a href={`mailto:${loanData.email}`}>{loanData.email}</a> </p>
                <p> home Address: {loanData.homeAddress}</p>
                <p>office Address: {loanData.office}</p>
            </div>
                {/* /* another div*/}
            <div>
                <h1>Guarantor</h1>
                
                    <div>
                        {
                            loanData.guarantor && 
                               
                                    <div className="">
                                    <img src={loanData.guarantor.passport} alt="guarantorimage" id="guarantorImage"/>
                                    
                                
                                    <p>Name: {loanData.guarantor.name}</p>
                                    <p>address: {loanData.guarantor.address}</p>
                                    <p>phone:{loanData.guarantor.phone}</p>
                                    
                                    </div>
                                    
                              
                            
                        }
                    </div>
                
                <div id="task">
                    <h1>Task</h1>
                    <div className="row">

                        {
                            loanData.amountGranted && loanData.amountGranted !== 0 && loanData.status !== 'Settled'?                    
                            <div className="col-md-4">
                                loan amount: {loanData.amountGranted}
                            </div>:
                            <form className="col-md-4" onSubmit={grant}>
                            <input type="number" placeholder='amount loaned in naira' onChange={(e)=>{setLoanAmount( e.target.value)}}/>
                                <button type="submit" className=" btn btn-primary">submit</button>
                                {loanData.status == 'settled' && <div>loan of {loanData.amountGranted} settled including default  <p>since all loans are settled want to delete client </p><button onClick={handleReApply} className="btn btn-primary"> delete so client can reapply </button></div>}
                            </form>
                        }


                    <div className="col-md-4">
                        amount balanced = {loanData.amountBalanced}

                        <form onSubmit={handleBalance} >
                        <input type="number" placeholder="amount balanced" onChange={(e)=>setAmoutBalance(e.target.value)}/>
                        <button type='submit' className=" btn btn-primary">submit</button>
                        </form>
                    </div>

                    <div className="col-md-4">
                        owing :{
                            handleOwing() 
                        }
                        <p>there is a 5% on default and 4x default attracts 10% of loan</p>
                    </div>

                    </div>

                </div>
            </div>
        </div>
        </section>
    )
}