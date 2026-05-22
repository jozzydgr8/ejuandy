import { useState } from "react";
import { Link } from "react-router-dom";

export const Carousel = ()=>{
    const [more, setMore] = useState(false);
    
    return (
        <section id="first-section">

         <div id="carouselExampleIndicators" className="carousel" data-bs-ride="carousel" data-pause="hover">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-block w-100 carousel-section distribute-car cover">
                        <h1>EIC Distribution</h1>
                            we offer distribution services that will target your consumer audience.
                            We are a Licensed Amazon Distribution Company,
                            With over a decade Distribution Partnership with Multichoice Group (Mnet, Africa Magic & More).
                            {more ? <span>
                                Our Francophone Distribution network is not left out, over 1,000 & more french, Wolof &
                                other African language titles on distribution.
                            </span>
                            :
                            <span>...</span>}
                            
                            <button onClick={()=>!more ? setMore(true): setMore(false)} className="readmore-btn carousel-readmore" >
                                {more ? <span>read less</span> : <span>read more</span>}
                            </button>
                                {/* mailto button */}
                            <div className="button-container" >
                            <a href="mailto:eicomunications@gmail.com" rel="noreferrer" target="_blank">
                                <button type="button" className="btn btn-secondary btn-lg business">Mail us</button>
                            </a>
                            </div>

                    </div>


                </div>
                                    {/* end of first carousel */}

                <div className="carousel-item">
                <div className="d-block w-100 carousel-section fintech-car cover carousel-section">
                    <h1>
                            EIC FINTECH
                    </h1>
                
                        we seek to improve and automate the delivery and use 
                        of your financial operations.
                        At EIC Fintech, We Believe in Small Beginings
                        and your dream is important to our growth.
                        {more ? <span>
                            Together we can grow to no bounds.
                            We finance small scale movie production as we will review your pitchdeck
                            and comission your project to help spark your dream to life.
                            </span>
                            :
                            <span>...</span>}
                            
                            <button onClick={()=>!more ? setMore(true): setMore(false)}  className="readmore-btn carousel-readmore" >
                                {more ? <span>read less</span> : <span>read more</span>}
                            </button>

                            <div className="button-container">
                            <Link to={'form'} type="button" className="btn btn-secondary btn-lg">Get Loan</Link>
                            </div>

                        </div>

                </div>

                {/* end of second carousel */}
                <div className="carousel-item ">
                <div className="d-block w-100 bus-car cover carousel-section ">
                <h1>
                        EIC Business
                       </h1>
            
                       For business enquiries, loans, distribution and more we are just a mail away

                    {more ? <span>
                                    p.s : while sending us a mail for business concerning distribution send us a link to your 
                                    movie/series trailer Thank you.
                            </span>
                            :
                            <span>...</span>}
                            
                            <button onClick={()=>!more ? setMore(true): setMore(false)} className="readmore-btn carousel-readmore" >
                                {more ? <span>read less</span> : <span>read more</span>}
                            </button>


                            <div className="button-container">
                            <a href="mailto:eicomunications@gmail.com" rel="noreferrer" target="_blank">
                                <button type="button" className="btn btn-secondary btn-lg business">Mail us</button>
                            </a>
                           </div>

                </div>
                    
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>

        </section>
    )
}