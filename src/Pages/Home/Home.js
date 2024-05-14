import { About } from "./About"
import { Bus } from "./Bus"
import { Dist } from "./Dist"
import { Entertainment } from "./Entertainment"
import { Fintech } from "./FinTech"
import { Footer } from "./Footer"
import { Header } from "./Header"

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