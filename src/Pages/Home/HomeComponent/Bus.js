import busVid from '../../../asset/WhatsApp Video 2023-06-07 at 13.50.57.mp4'
import { FlatButton } from '../../../shared/FlatButton'
export const Bus = ()=>{
    return(
     <>
        <section id="business-section" className="background">

        <div className="container-fluid">
            <p className='badge'>EIC Business</p>
            <h2 className="animate-up">
                Empowering Your Business Journey
            </h2>

            <div className="row">

                <div className="col-md-6 animate-up">
                    <div >
                        <p className="subtopic">
                            For business enquiries, loans, distribution, partnership and more we are just a mail away

                        </p>

                         

                         <a href="mailto:eicomunications@gmail.com" target="_blank" rel='noreferrer'>
                            <FlatButton title='Mail us' className="btn btnPrimary btn-xl fifth-section-button business"/>
                         </a>
                    </div>
                   
                    
                </div>
                <div className="col-md-6 animate-up">

                   
                    <video className="hover" width="320" height="240" autoPlay loop muted>
                        <source className="vid" src ={busVid}
                        type="video/mp4"/>
                    </video>
                   

                </div>
        </div>
        
        </div>

    </section>
    <hr/>
    </>
    )
}