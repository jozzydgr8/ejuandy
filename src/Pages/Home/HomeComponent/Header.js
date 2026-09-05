import { FlatButton } from '../../../shared/FlatButton';
import busVid from '../../../asset/WhatsApp Video 2023-06-07 at 13.50.57.mp4';

export const Header = () => {
  return (
    <section id="hero">

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={busVid} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="container-fluid hero-content">
        <h1>Your Content,</h1>

        <h1 className="hero-write">
          Distributed Across Africa
        </h1>

        <p className="subtopic">
          EIC Communications connects filmmakers, brands, and content
          creators with audiences across Africa. As a licensed, Netflix,
          Amazon & Canal + Distribution company with over a decade of
          Multichoice partnership, we deliver your story to millions.
        </p>

        <div className="button-container mx-auto">
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
  );
};
