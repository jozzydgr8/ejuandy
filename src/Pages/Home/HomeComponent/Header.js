import { FlatButton } from '../../../shared/FlatButton'

export const Header = ()=>{
    return(
        <section id="hero">
            <div className='container-fluid'>
                <h1>Your Content,</h1>
                <h1 className='hero-write'>Distributed Across Africa</h1>
                <p className='subtopic'>
                    EIC Communications connects filmmakers, brands, and content creators with audiences across Africa.
                     As a licensed, Netflix, Amazon & Canal + Distribution company with over a decade of Multichoice partnership,
                      we deliver your story to millions.
                </p>
                <div className="button-container">
                <FlatButton
                    title="Learn More"
                    className="btn btnPrimary btn-xl"
                />

                <FlatButton
                    title="Explore Our Services"
                    className="btn btnSecondary btn-xl"
                />
                </div>



                
                
            </div>
          
           
        </section>
    )
}