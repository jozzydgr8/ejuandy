import { NavLink } from 'react-router-dom';
import NavLogo from '../../asset/ejuandy_logo_black-removebg-preview.png';
import { ContextConsumer } from '../../Context/IpCon/ContextConsumer';




export const Navbar = ()=>{
    const {addy} = ContextConsumer();
    
    return(
        <nav className="navbar navbar-expand-lg bg-light navbar-light ">


                            

        <a href="/" className="navbar-brand"><img src={NavLogo} alt="logo" className="ejuandy-logo"/> <span className="nav-texts">PR | Fintech | Movies | Distribution | communications</span></a>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>



        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a href="#distribution-section" className="nav-link">EIC Distribution</a>
                </li>


                <li className="nav-item">
                    <a href="#fintech-section" className="nav-link"> EIC Fintech</a>
                </li>


                <li className="nav-item">
                    <a href="#business-section" className="nav-link">EIC business</a>
                </li>


                <li className="nav-item">
                    <a href="#entertainment-section" className="nav-link"> entertainments</a>
                </li>

                <li className='nav-item'>
                    <a className='nav-link' href='http://www.gistmetvmag.blogspot.com/' target='_blank' >Blog</a>
                </li>

                {addy && <li className='nav-item'><NavLink className='nav-link' to='admin'>view forms</NavLink></li>}


            </ul>

        </div>

    </nav>
    )
}