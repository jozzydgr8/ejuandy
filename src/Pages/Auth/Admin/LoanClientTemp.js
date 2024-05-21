import { useState } from "react";

export const LoanClientTemp = ({loanData})=>{
    const [display, setDisplay] = useState(true)
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
                {display &&
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
                }
            </div>
        </div>
        </section>
    )
}