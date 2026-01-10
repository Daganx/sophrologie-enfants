import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Sophrologie</Link>
        </li>
        <li>
          <Link to="/about">Qui suis-je ?</Link>
        </li>
        <li>
          <Link to="/booking">Réservations</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
