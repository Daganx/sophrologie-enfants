import "./sessionFlow.css";
import SessionImage from "../../assets/images/sessionflow.png";
import { Link } from "react-router-dom";

export default function SessionFlow() {
  return (
    <section className="session-flow" id="sessionflow">
      <div className="session-flow__inner">
        <p className="session-flow__eyebrow">Déroulement d'une séance</p>
        <h2>Une boîte à outils pour être autonome et confiant au quotidien</h2>
        <p className="session-flow__subtitle">
          Comment se pratique une séance avec un enfant ?
        </p>

        <div className="session-flow__content">
          <div className="session-flow__media">
            <div className="session-flow__image-wrapper">
              <img src={SessionImage} alt="Séance de sophrologie avec enfant" />
            </div>
            <div className="session-flow__age-badge">
              <span className="age-label">Âge</span>
              <span className="age-range">3 à 11 ans</span>
            </div>
          </div>

          <div className="session-flow__details">
            <div className="session-flow__info">
              <div className="info-item">
                <span className="info-icon">⏱</span>
                <div>
                  <strong>Durée</strong>
                  <p>45 minutes par séance</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🏠</span>
                <div>
                  <strong>Autonomie</strong>
                  <p>Enregistrements fournis pour pratiquer à la maison</p>
                </div>
              </div>
            </div>

            <div className="session-flow__tools">
              <h3>Ma boîte à outils</h3>
              <div className="tools-grid">
                <div className="tool-item">
                  <span className="tool-icon">🧸</span>
                  <span>Peluches pour identifier les émotions</span>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">🫁</span>
                  <span>Doudous pour aider à respirer</span>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">💃</span>
                  <span>Exercices en mouvement pour relâcher</span>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">🎭</span>
                  <span>Jeux de relation et de miroir</span>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">✍️</span>
                  <span>Écriture et dessin</span>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">📖</span>
                  <span>Histoires et automassage</span>
                </div>
              </div>
            </div>

            <div className="session-flow__contact">
              <p className="contact-text">
                Besoin de plus de détails ou vous avez une question ?
              </p>
              <div className="contact-info">
                <a href="tel:0666442135" className="contact-link">
                  📞 06.66.44.21.35
                </a>
                <a href="mailto:maellatherapie@gmail.com" className="contact-link">
                  ✉️ maellatherapie@gmail.com
                </a>
              </div>
              <Link to="/booking" className="btn-reservation">
                Réserver une séance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
