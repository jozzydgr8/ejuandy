import {About} from './HomeComponent/About'
import { Bus } from "./HomeComponent/Bus"
import { Dist } from "./HomeComponent/Dist"
import { Entertainment } from "./HomeComponent/Entertainment"
import { Fintech } from "./HomeComponent/FinTech"
import { Footer } from "../../shared/Footer"
import { Header } from "./HomeComponent/Header"
import { Services } from "./HomeComponent/Services"
import { Testimonial } from './HomeComponent/Testimonial'

export const Home = ()=>{
    return(
        <div>
            <Header/>
            <Testimonial/>
            <Services/>
            <About />
            <Dist />
            <Fintech />
            <Bus/>
            <Entertainment />
            <Footer />
        </div>
    )
}