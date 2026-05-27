import {serviceData} from "../../../Data"
import { FlatButton } from "../../../shared/FlatButton"
export const Services = ()=>{
    return(
        <section id="services">
            <div className="container-fluid">
                <div style={{textAlign: "center"}}>
                <p className='badge'>What we do</p>
                <h2>Comprehensive Media & Entertainment Solutions</h2>
                <p style={{padding:'0 55px'}}>From content creation to distribution, PR services to fintech solutions,
                     we provide end-to-end support for your media, entertainment and fintech needs.</p>
                </div>
                <div className="row">
                        {
                            serviceData.map((service, index)=>(
                                <div key= {index} className="col-md-4  mb-4">
                                    <div className="serviceCard d-flex flex-column h-100 animate-up">
                                        <div className="icon-style">
                                            <ion-icon name={service.icon} size="large"></ion-icon>
                                        </div> 
                                        <br/> 
                                            <h3>{service.name}</h3>
                                            <p>{service.description}</p>
                                            <FlatButton
                                            title="Learn More"
                                            className='borderlessbtn mt-auto text-start'
                                            
                                            />
                                        
                                    </div>

                                </div>
                            ))
                        }
                </div>
            </div>
        </section>
    )
}