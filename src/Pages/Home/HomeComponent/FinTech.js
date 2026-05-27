import { useState } from 'react'
import fintech from '../../../asset/2112.i607.022.S.m012.c12.fintech_isometric_composition-removebg-preview.png'
import { NavLink } from 'react-router-dom';
import { FlatButton } from '../../../shared/FlatButton';
export const Fintech = ()=>{
    const [more,setMore] = useState(false)
    return(
        <>
        <section id="fintech-section" className="background">
            <div className="container-fluid">
                <p className='badge'>eic fintech</p>
                <h2 className="">Smart Finance. Seamless Experience</h2>
                
                <div className="row">
                    <div className="col-md-6 animate-up">

                      <div>
                          <img src={fintech} alt="fint" style={{width:'80%'}}/>
                      </div>
                        

                    </div>

                    <div className="col-md-6 animate-up ">
                        <div>

                            <p className="subtopic ">
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
                        <div >
                            <NavLink to={'form'} type="button" className="btn btnPrimary btn-xl">Get Loan</NavLink>
                            <FlatButton className='btn btnSecondary btn-xl' title='Submit Pitch'/>
                        </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr />
        </>
    )
}