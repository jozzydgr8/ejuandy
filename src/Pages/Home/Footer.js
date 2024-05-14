export const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return(
        <>
            <section id='footer-section'>
                <div className='container-fluid background'>
                <h4><a className="footer-section-link" href="https://instagram.com/gistmetvmag?igshid=NTc4MTIwNjQ2YQ==" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a> <a className="footer-section-link" href="https://www.facebook.com/GistMeTvMag" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a> <a className="footer-section-link" target="_blank" href="https://www.youtube.com/@YobaMovies"><ion-icon name="logo-youtube"></ion-icon></a></h4>
                   <h6 className="monserrat">© copyright ejuandy {currentYear}</h6>
                </div>

            </section>
        </>
    )
}