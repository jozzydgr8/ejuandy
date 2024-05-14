export const Testimonial = ()=>{
    return(
        <section id="carousel-section-testimonial">
        <div id="carouselExampleLight" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="container-fluid">

            <div className="carousel-inner">  

              <div className="carousel-item active" data-bs-interval="1000">

                     <h1 className="testimonials ubuntu"> 
                          licensed amazon distributor
                     </h1>


              </div>


              <div className="carousel-item" data-bs-interval="2000">


                <h1 className="testimonials ubuntu">
                    over 100 French Films & TV Series across Africa
                  </h1>


              </div>

              <div className="carousel-item">


                <h1 className="testimonials ubuntu"> 
                    AMVCA award winning content
                </h1>


              </div>

              <div className="carousel-item">


                <h1 className="testimonials ubuntu"> 
                    over 1,000 Movies & Series on DSTV & Other Cable TV  across Africa
                </h1>


              </div>

              <div className="carousel-item">


                  <h1 className="testimonials ubuntu"> 
                         over 3m+ impressions on facebook   
                  </h1>

              </div>

        </div>

        </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

        </div>

    </section>
    )
}