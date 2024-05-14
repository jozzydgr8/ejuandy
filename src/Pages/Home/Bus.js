import busVid from '../../asset/WhatsApp Video 2023-06-07 at 13.50.57.mp4'
export const Bus = ()=>{
    return(
     <>
        <section id="business-section" className="background">

        <div className="container-fluid">

            <h1 className="monserrat">EIC business</h1>

            <div className="row">

                <div className="col-md-6 monserrat">
                    <div className="business-text">
                        <p>
                            For business enquiries, loans, distribution, partnership and more we are just a mail away

                        </p>

                         

                         <a href="mailto:eicomunications@gmail.com" target="_blank" rel='noreferrer'>
                            <button type="button" className="btn btn-secondary btn-md fifth-section-button business">Mail us</button>
                         </a>
                    </div>
                   
                    
                </div>
                <div className="col-md-6">

                   
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