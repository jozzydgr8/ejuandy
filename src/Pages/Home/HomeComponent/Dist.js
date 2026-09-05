import { useState } from "react"
import { Media } from "./Media";

export const Dist = ()=>{
    const [more,setMore]= useState(false);
    return(
      <>
        <section id="distribution-section" className="background text-center">
            <div className="container-fluid ">
               <div style={{textAlign: "center"}}>
                 <p className='badge'>EIC Distribution</p>
            <h2 className="animate-up">
                Where Our Stories Reach the World
            </h2>

               </div>
                <p className="subtopic animate-up">
                            Licensed Amazon Distribution company,
                            Over a decade Distribution Partnership with Multichoice Group (Mnet, Africa Magic & More),
                            Our Francophone Distribution network is not left out, over 1,000 & more french,
                            Wolof & other African language titles on distribution.

                            
                            
                            

                </p>
            

            <Media/>
             <p className="mt-4"> 
                                    
                p.s : while sending us a mail for business concerning distribution send us a link to your 
                    movie/series trailer Thank you.
            
            </p>
            </div>
        </section>
        <hr />
      </>
    )
}