import { useState } from "react"
import { Media } from "./Media";

export const Dist = ()=>{
    const [more,setMore]= useState(false);
    return(
      <>
        <section id="distribution-section" className="background">
            <div className="container-fluid">
            <h1 className="monserrat">
                EIC distribution
            </h1>

                <p className="monserrat">
                            Licensed Amazon Distribution company,
                            Over a decade Distribution Partnership with Multichoice Group (Mnet, Africa Magic & More),
                            Our Francophone Distribution network is not left out, over 1,000 & more french,
                            Wolof & other African language titles on distribution.

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
            

            <Media/>
            </div>
        </section>
        <hr />
      </>
    )
}