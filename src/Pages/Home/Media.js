import Netflix from '../../asset/Netflix-img.png';
import ShowMax from '../../asset/showmax-img-removebg-preview.png';
import Dstv from '../../asset/dstv-use-img.jpg';
import Wap from '../../asset/waptv-removebg-preview.png';
import AfricaMagic from '../../asset/africa-magic.png';
import crazy from '../../asset/crazy-world..jpeg';
import single from '../../asset/30s single andbored.jpeg';
import anniversary from '../../asset/anniversary.png.jpeg';
import prime from '../../asset/prime.png';
export const Media = ()=>{
    return(

                <>

                    <div className="row">

                                            

                    <div  className="col-4">

                        <img  src={crazy} alt="cr"/>

                    </div>

                    <div  className="col-4">

                        <img  src={single} alt="si"/>

                    </div>
                    <div  className="col-4">
                        <img  src={anniversary} alt="an"/>
                    </div>

                    </div>


                    {/* media distriiubtiona  */}
                    <div className="row media-grid">

                        <div className="col-2">

                            <img src={prime} alt="p"/>

                        </div>

                        <div className="col-2">

                            <img src={Netflix} alt="netflix"/>

                        </div>

                        <div className="col-2">

                            <img src={ShowMax} alt="showmax"/>

                        </div>

                        <div className="col-2">

                            <img src={Dstv} alt="dstv"/>

                        </div>

                        <div className="col-2">

                            <img src={Wap} alt="Wtv"/>

                        </div>

                        <div className="col-2">

                            <img src={AfricaMagic} alt="AM"/>

                        </div>
                        
                    </div>
                </>
    )
}