import Netflix from '../../../asset/Netflix-img.png';
import Dstv from '../../../asset/dstv-use-img.png';
import AfricaMagic from '../../../asset/africa-magic.png';

import sakaTawa from '../../../asset/sakatawa.jpg';
import single from '../../../asset/30s single andbored.jpeg';
import annabel from '../../../asset/annabel_series.jpg';
import prime from '../../../asset/prime.png';
import hangout from '../../../asset/teens-hangout.jpg';

import DoualaDeSeries from '../../../asset/doualadeseriesw.jpg';
import DurbanFilmMart from '../../../asset/durbanfilmmart.jpg';
import FameWeekAfrica from '../../../asset/fameweekafrica.jpg';
import JamaicaFilmFestival from '../../../asset/jamaicafilmfestival.png';
import bantuFilmFestival from '../../../asset/bantufilmfestival.jpg';
import camiff from '../../../asset/camiff.jpg';
import botswanaFilmFestival from '../../../asset/botswanafilmfestival.jpg';
import ubuntuFilmFestival from '../../../asset/ubuntufilmfestival.jpg';

import Marquee from 'react-fast-marquee';


export const featuredMedia = [
  {
    name: 'hangout',
    image: hangout,
    alt: 'hangout',
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
    alt: 'Prime',
  },
  {
    name: 'Netflix',
    image: Netflix,
    alt: 'Netflix',
  },
  {
    name: 'DStv',
    image: Dstv,
    alt: 'DStv',
  },
  {
    name: 'Africa Magic',
    image: AfricaMagic,
    alt: 'Africa Magic',
  },
  {
    name: 'Douala De Series',
    image: DoualaDeSeries,
    alt: 'Douala De Series',
  },
  {
    name: 'Durban FilmMart',
    image: DurbanFilmMart,
    alt: 'Durban FilmMart',
  },
  {
    name: 'Fame Week Africa',
    image: FameWeekAfrica,
    alt: 'Fame Week Africa',
  },
  {
    name: 'Jamaica Film Festival',
    image: JamaicaFilmFestival,
    alt: 'Jamaica Film Festival',
  },
  {
    name: 'Bantu Film Festival',
    image: bantuFilmFestival,
    alt: 'Bantu Film Festival',
  },
  {
    name: 'CAMIFF',
    image: camiff,
    alt: 'CAMIFF',
  },
  {
    name: 'Botswana Film Festival',
    image: botswanaFilmFestival,
    alt: 'Botswana Film Festival',
  },
  {
    name: 'Ubuntu Film Festival',
    image: ubuntuFilmFestival,
    alt: 'Ubuntu Film Festival',
  },
];


export const Media = () => {
  return (
    <>
      {/* Featured Media */}
      <div className="row">
        {featuredMedia.map((featured, index) => (
          <div
            key={index}
            className="col-md-3 mb-4 animate-up"
          >
            <img
              src={featured.image}
              alt={featured.alt}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </div>
        ))}
      </div>

      {/* Distribution Partners & Film Festivals */}
      <Marquee direction="left">
        {distributionPartners.map((partner, index) => (
          <div
            key={index}
            style={{
              margin: '0 20px',
            }}
          >
            <img
              src={partner.image}
              alt={partner.alt}
              style={{
                width: '150px',
                height: '100px',
                objectFit: 'contain',
              }}
            />
          </div>
        ))}
      </Marquee>
    </>
  );
};
