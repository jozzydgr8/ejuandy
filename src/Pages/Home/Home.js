import {About} from './HomeComponent/About'
import { Bus } from "./HomeComponent/Bus"
import { Dist } from "./HomeComponent/Dist"
import { Entertainment } from "./HomeComponent/Entertainment"
import { Fintech } from "./HomeComponent/FinTech"
import { Footer } from "../../shared/Footer"
import { Header } from "./HomeComponent/Header"

export const Home = ()=>{
    return(
        <div>
            <Header/>
            <About />
            <Dist />
            <Fintech />
            <Bus/>
            <Entertainment />
            <Footer />
        </div>
    )
}