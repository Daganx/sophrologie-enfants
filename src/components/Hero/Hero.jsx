import heroImage from "../../assets/images/hero.png";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Sophrologie pour enfants</p>
          <h1>La sophrologie pour aider les enfants à grandir sereinement</h1>
          <p className="hero__lead">
            Des séances ludiques, douces et rassurantes pour apaiser les
            émotions, renforcer la confiance et retrouver le calme intérieur.
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="/booking">
              Prendre rendez-vous
            </a>
            <a className="btn btn-ghost" href="#sessionflow">
              Découvrir une séance
            </a>
          </div>
          <div className="hero__chips">
            <span>Respiration</span>
            <span>Relaxation</span>
            <span>Visualisation</span>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__shape" />
          <img src={heroImage} alt="Enfant détendu pendant une séance" />
        </div>
      </div>
    </section>
  );
}
