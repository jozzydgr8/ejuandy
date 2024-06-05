export const TermsHook = ()=>{
    const termStyle ={
        textAlign:'left',
        overflow: 'auto',
        height: '400px'
    }
    const guarantorTerm = ()=>{
        return (
            <div style={termStyle}>
                <h1>Before Accepting Carefully Read Terms And Conditions</h1>
                <p >
                By accepting this loan agreement, the guarantor acknowledges 
                and agress that in the event the borrower fails to repay the loan,
                <ul>
                    <li>the guarantor will be held responsible for setlling the outstanding debt.</li>
                    <li>The guarantor further consents to the details uploaded for identity verification purposes
                        and may or may not provide other necessary personal details during progress of loan request
                        for identity verification purposes.
                    </li>
                    <li>
                        Our company reserves the right to utilize all available means to recover the loan amount from the guarantor
                        if the borrower defaults on payments. By aggreeing to this term, the guarantor commits to fulfilling the 
                        financial obligations outlined in this agreement. 
                    </li>
                </ul>
                

 
                </p>


            </div>
        )
    }
    const applicantTerm = ()=>{
        return (
            <div style={termStyle}>
                <h1>Before Accepting Carefully Read Terms And Conditions</h1>
                <p>
                    By accepting these terms you agree
                    <ul>
                        <li>
                            to fulfill and pay all weekly dues promptly,
                        </li>

                        <li>
                            in the event of non-payment of weekly installments, the company reserves the right to 
                            employ all lawful means to recover outstanding amounts,
                        </li>
                        <li>
                            Furthermore, it is mandatory to upload a government issued document for identification purposes. 
                        </li>
                        <li>any default results in a 5% penalty and repeated defaults, defined as four or more consecutive occurences
                            will incur a 10% penalty on the loan amount,    
                        </li>
                        <li>
                            while the guarantor  acknowledges and consents to all terms and conditions here in throughout this process
                        </li>

                    </ul>
                </p>
            </div>
        )
    }
    return { guarantorTerm, applicantTerm}
}