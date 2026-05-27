import Netflix from '../../../asset/Netflix-img.png';
import aitLogo from '../../../asset/ait.jpg';
import Dstv from '../../../asset/dstv-use-img.png';
import always from '../../../asset/alwaysLogo.png';
import mtn from '../../../asset/mtn.jpg';
import pepsi from '../../../asset/pepsiLogo.png';
import Wap from '../../../asset/waptv-removebg-preview.png';
import AfricaMagic from '../../../asset/africa-magic.png';
import sakaTawa from '../../../asset/sakatawa.jpg';
import single from '../../../asset/30s single andbored.jpeg';
import annabel from '../../../asset/annabel_series.jpg';
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
    name: 'sakaTawa World',
    image: sakaTawa,
    alt: 'sakaTawa_world',
  },
  {
    name: '30s Single and Bored',
    image: single,
    alt: '30s_single_and_bored',
  },
  {
    name: 'annabel',
    image: annabel,
    alt: 'annabel',
  },
];

export const distributionPartners = [
  {
    name: 'Prime',
    image: prime,
    alt: 'p',
  },
  {
    name: 'always',
    image: always,
    alt: 'a',
  },
  {
    name: 'mtn',
    image: mtn,
    alt: 'm',
  },
  
  {
    name: 'Netflix',
    image: Netflix,
    alt: 'netflix',
  },
  {
    name: 'aitLogo',
    image: aitLogo,
    alt: 'aitLogo',
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