import { FlatButton } from '../../../shared/FlatButton';

export const Bus = () => {
  return (
    <>
      <section id="business-section" className="background text-center">

        <div className="container-fluid business-content">

          <p className="badge">
            EIC Business
          </p>

          <h1 className="animate-up">
            Empowering Your Business Journey
          </h1>

          <div className="business-text animate-up">

            <p className="subtopic">
              For business enquiries, loans, distribution, partnership and
              more we are just a mail away.
            </p>

            <a
              href="mailto:eicomunications@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FlatButton
                title="Mail us"
                className="btn btnPrimary btn-xl fifth-section-button business"
              />
            </a>

          </div>

        </div>

      </section>

      <hr />
    </>
  );
};
