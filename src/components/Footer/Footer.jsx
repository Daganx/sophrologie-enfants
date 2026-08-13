import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Contact</h3>
            <div className="footer__contact">
              <a
                href="mailto:maellatherapie@gmail.com"
                className="footer__link"
              >
                <span className="footer__icon">✉️</span>
                <span>maellatherapie@gmail.com</span>
              </a>
              <a href="tel:0666442135" className="footer__link">
                <span className="footer__icon">📞</span>
                <span>06.66.44.21.35</span>
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Navigation</h3>
            <nav className="footer__nav">
              <Link to="/" className="footer__nav-link">
                Accueil
              </Link>
              <Link to="/about" className="footer__nav-link">
                Qui suis-je ?
              </Link>
              <Link to="/booking" className="footer__nav-link">
                Réservations
              </Link>
            </nav>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Lieu d'exercice</h3>
            <p className="footer__location">
              <span className="footer__icon">📍</span>
              A votre domicile
            </p>
            <p>Appel visio</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Sophrologie Enfants - Tous droits réservés
          </p>
          <p className="footer__tagline">
            Aider les enfants à grandir sereinement
          </p>
        </div>
      </div>
    </footer>
  );
}
