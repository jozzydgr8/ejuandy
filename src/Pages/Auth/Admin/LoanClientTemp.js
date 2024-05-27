import {  doc, setDoc } from "firebase/firestore";
import { db} from '../../../App'
import { useContext, useState } from "react";

import { HandleReapplyHook } from "../../Hooks/HandleReapplyHook";
import { HandleOwingHook } from "../../Hooks/HandleOwingHook";
 import { HandleBalanceHook } from "../../Hooks/HandleBalanceHook";
import { ContextProvider } from "./LoanClient";

export const LoanClientTemp = ()=>{
    const [loanAmout, setLoanAmount] = useState(null);
    const [amountBalance, setAmoutBalance] = useState(null);
    const {handleReApply} = HandleReapplyHook();
    const {handleOwing} = HandleOwingHook();
     const {handleBalance} = HandleBalanceHook();
    
    const context = useContext(ContextProvider);
    const owing = handleOwing(context.amountBalanced, context.amountGranted, context.repaymentDate, context);
    console.log(context)
    console.log(owing)

    const balance =  (e)=>{
        e.preventDefault();

         handleBalance( amountBalance )
    }
    const deleteClient = async ()=>{
        await handleReApply(context)
    }
    //amount grant logic

    const grant = async(e)=>{
        e.preventDefault();
        if (loanAmout <= 0 || loanAmout == null){
            return
        }
        const documentRef = doc(db, 'Data', context.id);
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
                    <img src={context.passport} alt="clientPAss" />
                </div>
                <div className="col-md-6 governmentID">
                    <header>governmentID</header>
                    <img src={context.verification} alt='verification' />
                </div>
            </div>
            <hr/>
            
            <div className="details">
                <h1>Details</h1>
                <div className="">
                        <p>status: {context.status}</p>
                        <p>Name: {context.name}</p>
                        <p>trade: {context.trade}</p>
                        <p>Loan Amount in naira: {context.loanAmount}</p>
                        <p>repayment period: {context.repaymentDate}</p>
                </div>


            </div>

            <hr/>
            {/* second div */}
            <div className="contact">
                <h1>Contact</h1>
               <p> phone: <a href={`tel:${context.phone}`}>{context.phone} call now</a> </p>
                <p> email: <a href={`mailto:${context.email}`}>{context.email}</a> </p>
                <p> home Address: {context.homeAddress}</p>
                <p>office Address: {context.office}</p>
            </div>
                {/* /* another div*/}
            <div>
                <h1>Guarantor</h1>
                
                    <div>
                        {
                            context.guarantor && 
                               
                                    <div className="">
                                    <img src={context.guarantor.passport} alt="guarantorimage" id="guarantorImage"/>
                                    
                                
                                    <p>Name: {context.guarantor.name}</p>
                                    <p>address: {context.guarantor.address}</p>
                                    <p>phone:{context.guarantor.phone}</p>
                                    
                                    </div>
                                    
                              
                            
                        }
                    </div>
                
                <div id="task">
                    <h1>Task</h1>
                    <div className="row">

                        {
                            context.amountGranted && context.amountGranted != 0 && context.status !='Settled'?                    
                            <div className="col-md-4">
                                loan amount: {context.amountGranted}
                            </div>:
                            <form className="col-md-4" onSubmit={grant}>
                            <input type="number" placeholder='amount loaned in naira' onChange={(e)=>{setLoanAmount( e.target.value)}}/>
                                <button type="submit" className=" btn btn-primary">submit</button>
                                {context.status == 'Settled' && <div>loan of {context.amountGranted} settled including default  <p>since all loans are settled want to delete client </p><button onClick={deleteClient} className="btn btn-primary"> delete so client can reapply </button></div>}
                            </form>
                        }


                    <div className="col-md-4">
                        amount balanced = {context.amountBalanced}

                        <form onSubmit={balance} >
                        <input type="number" placeholder="amount balanced" onChange={(e)=>setAmoutBalance(e.target.value)}/>
                        <button type='submit' className=" btn btn-primary">submit</button>
                        </form>
                    </div>

                    <div className="col-md-4">
                        owing :{
                           owing
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