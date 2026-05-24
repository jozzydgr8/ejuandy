import Netflix from '../../../asset/Netflix-img.png';
import ShowMax from '../../../asset/showmax-img-removebg-preview.png';
import Dstv from '../../../asset/dstv-use-img.png';
import Wap from '../../../asset/waptv-removebg-preview.png';
import AfricaMagic from '../../../asset/africa-magic.png';
import crazy from '../../../asset/crazy-world..jpeg';
import single from '../../../asset/30s single andbored.jpeg';
import anniversary from '../../../asset/anniversary.png.jpeg';
import prime from '../../../asset/prime.png';
import hangout from '../../../asset/teens-hangout.jpg';
import Marquee from "react-fast-marquee";

export const featuredMedia = [
    {
        name:'hangout',
        image:hangout,
        alt:'hangout'
    },
  {
    name: 'Crazy World',
    image: crazy,
    alt: 'crazy_world',
  },
  {
    name: '30s Single and Bored',
    image: single,
    alt: '30s_single_and_bored',
  },
  {
    name: 'Anniversary',
    image: anniversary,
    alt: 'anniversary',
  },
];

export const distributionPartners = [
  {
    name: 'Prime',
    image: prime,
    alt: 'p',
  },
  {
    name: 'Netflix',
    image: Netflix,
    alt: 'netflix',
  },
  {
    name: 'ShowMax',
    image: ShowMax,
    alt: 'showmax',
  },
  {
    name: 'DStv',
    image: Dstv,
    alt: 'dstv',
  },
  {
    name: 'WAP TV',
    image: Wap,
    alt: 'wtv',
  },
  {
    name: 'Africa Magic',
    image: AfricaMagic,
    alt: 'am',
  },
];

export const Media = ()=>{
    return(
        <>
            <div className="row">
                {
                    featuredMedia.map((featured, index)=>(
                        <div key={index} className="col-md-3 mb-4 animate-up">
                           
                                <img src={featured.image} alt={featured.alt} style={{width:"100%", height:"300px", objectFit:"cover", borderRadius:"8px"}}/>                        
                        </div>
                    )
                )
                }
            </div>


            <Marquee direction='left'>
                {
                    distributionPartners.map((partner, index)=>(
                        <div key={index} style={{margin:"0 20px"}}>
                            <img src={partner.image} alt={partner.alt} style={{width:"150px", height:"100px", objectFit:"contain"}}/>
                        </div>
                    ))
                }
            </Marquee>
        </>
    )
}