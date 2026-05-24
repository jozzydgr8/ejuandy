
import aboutImage from '../../../asset/rubberstampbackground.jpg'
import { FlatButton } from "../../../shared/FlatButton"

export const About = ()=>{
    return(
        <>
        <section id="second-section" className="background">
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-md-6 animate-up">
                        <div style={{backgroundImage: `url(${aboutImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', borderRadius: '8px', minHeight:"300px"}}></div  >
                    </div>
                    <div className='col-md-6 animate-up'>
                        <div>
                            <p className='badge'>About EIC Communications</p>
                            <h2>Bridging Content Creators with African Audiences</h2>
                            <p className='' style={{color:'white'}} >
                                EIC Communications is a registered Production, PR and Entertainment consultancy
                                Company in Nigeria and South Africa, your one-stop shop with
                                a defined vision to always render uniquely quality production, PR and other services to our clients.
                            </p>
                            
                            <p >
                                At EIC Communications, we take pride in providing the best experiences to our clients.

                                Our commitment to excellence is the foundation of our client's trust in our services. 
                                We believe in offering wholesome
                                and unique options that provide greater experience to our clients.
                            </p>

                                <div style={{display:'flex', gap:'20px', margin:'20px 0', justifyContent:"space-between"}}>
                                    <div>
                                        <div className="icon-style">
                                            <ion-icon name='location' size="large"></ion-icon>
                                        </div>
                                        <p>Nigeria (Head quarters)</p>
                                    </div>
                                    <div>
                                        <div className="icon-style">
                                            <ion-icon name='location' size="large"></ion-icon>
                                        </div>
                                        <p>South Africa (Regional Office)</p>
                                    </div>
                                </div>
                            <div>
                                <FlatButton title='Learn More' className='btn btnPrimary btn-xl'/>
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