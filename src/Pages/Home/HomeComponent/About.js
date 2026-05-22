import { Testimonial } from "./Testimonial"

export const About = ()=>{
    return(
        <>
        <section id="second-section" className="background">
            <div className="container-fluid">
                <h1 className='card-title'>About Us</h1>

                <div className="row">
                    <div className="col-md-6">

                        <div className="card hover">

                            <div className="card-body monserrat">


                            <h1 className="card-title"> <ion-icon name="person-outline"></ion-icon> </h1> 
                                <h1 className="card-subtitle">profile</h1>
                                    <p className="second-section-card-texts">
                                        EIC Communications is a registered Production, PR and Entertainment consultancy
                                        Company in Nigeria and South Africa, your one-stop shop with
                                        a defined vision to always render uniquely quality production, PR and other services to our clients.
                                    </p>


                            </div>
                        </div>

                    </div>

                    {/* end of first card */}

                    <div className="col-md-6">

                            <div className="card hover">

                                <div className="card-body monserrat">


                                    <h1 className="card-title"><ion-icon name="podium-outline"></ion-icon></h1>
                                    <h1 className="card-subtitle">our mission</h1>
                                        <p className="second-section-card-texts">
                                            At EIC Communications, we take pride in providing the best experiences to our clients.

                                            Our commitment to excellence is the foundation of our client's trust in our services. 
                                            We believe in offering wholesome
                                            and unique options that provide greater experience to our clients.
                                        </p>


                                </div>


                            </div>

                    </div>
                    {/* end of second card */}
                    <div className="col-md-6">

                        <div className="card hover">

                            <div className="card-body monserrat">


                                <h1 className="card-title"><ion-icon name="eye-outline"></ion-icon></h1>
                                <h1 className="card-subtitle">our vision</h1>
                                    <p className="second-section-card-texts">
                                        Our vision at EIC communications is to become one of the top choice  
                                        content development company that renders unique quality production, PR and other services to our clients.
                                    </p>


                            </div>


                        </div>

                    </div>
                    {/* end of third card */}
                    <div className="col-md-6">

                        <div className="card hover">

                            <div className="card-body justify monserrat">

                                <h1 className="card-title">our Services</h1>

                                        <h6 className="card-subtitle card-edit">EIC Communication specializes in</h6>


                                    <div className="row">

                                    <div className="col-6">

                                            <ul>
                                                <li>
                                                    PR services
                                                </li>
                                                <li>
                                                    TV Entertainment
                                                </li>
                                                <li>
                                                    Corporate-communications
                                                </li>
                                                <li>
                                                    Fintech
                                                </li>
                                                <li>
                                                    Distribution-services
                                                </li>
                                            </ul>
                                                

                                    </div>

                                <div className="col-6">


                                            <ul>
                                                <li>
                                                    voice-over-production
                                                </li>
                                                <li>
                                                    Event-management
                                                </li>
                                                <li>
                                                    Celebrity-endorsement
                                                </li>
                                                <li>
                                                    ICT
                                                </li>
                                                
                                            </ul>


                                </div>
                                        
                            
                        </div>

                        </div>


                        </div>

                    </div>




                    {/*close tag div of className row */}
                </div>




                <Testimonial/>

                {/* container-fluid closing tgag */}
            </div>

        </section>
        <hr />
        </>
    )
}