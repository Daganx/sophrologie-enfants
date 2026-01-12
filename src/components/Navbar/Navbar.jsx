import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <span className="logo-icon">🧘</span>
          <span className="logo-text">Sophrologie Enfants</span>
        </Link>

        <button
          className={`navbar__toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              className={`navbar__link ${isActive("/") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`navbar__link ${isActive("/about") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Qui suis-je ?
            </Link>
          </li>
          <li>
            <Link
              to="/booking"
              className={`navbar__link ${isActive("/booking") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Réservations
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`navbar__link navbar__link--cta ${isActive("/contact") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
