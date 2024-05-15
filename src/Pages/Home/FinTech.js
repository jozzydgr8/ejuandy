import { useState } from 'react'
import fintech from '../../asset/2112.i607.022.S.m012.c12.fintech_isometric_composition-removebg-preview.png'
import { Link } from 'react-router-dom'
export const Fintech = ()=>{
    const [more,setMore] = useState(false)
    return(
        <>
        <section id="fintech-section" className="background">
            <div className="container-fluid">
            <h1 className="monserrat">EIC FINTECH</h1>
                <div className="row">
                    <div className="col-md-6">

                        <img src={fintech} alt="fint"/>
                        

                    </div>

                    <div className="col-md-6 monserrat">
                        <p className="justify fourth-section-text">
                                     At EIC Fintech, We Believe in Small Beginings
                                     and your dream is important to our growth.
                                     Together we can grow to no bounds.
                                     We finance small scale movie production as we will review your pitchdeck
                                     and comission your project to help spark your dream to life.

                                     
                            {more ? <span>
                                <h6> 
                                    
                                    p.s : while sending us a mail for business concerning distribution send us a link to your 
                                     movie/series trailer Thank you.
                                
                             </h6>
                            </span>
                            :
                            <span>...</span>}
                            
                            <button onClick={()=>!more ? setMore(true): setMore(false)} className="more-less-button readmore-btn" >
                                {more ? <span>read less</span> : <span>read more</span>}
                            </button>
                        </p>
                        <div className="button-container">
                            <Link to={'form'} type="button" className="btn btn-secondary btn-md">Get Loan</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr />
        </>
    )
}