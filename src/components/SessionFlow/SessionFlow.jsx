import "./sessionFlow.css";
import SessionImage from "../../assets/images/sessionflow.png";
import { Link } from "react-router-dom";

export default function SessionFlow() {
  return (
    <section className="session-flow">
      <h2>
        « Une boite à outils pour être autonome et confiant au quotidien »
      </h2>
      <p>Comment se pratique une séance avec un enfant ?</p>
      <div className="session-flow-section">
        <div className="session-flow-left">
          <br />
          <img src={SessionImage} alt="" />
          <p>Âge : à partir de 3 ans jusqu’à 11 ans.</p>
        </div>
        <div className="session-flow-right">
          <p>
            Lors d’une séance de 45 minutes, j’utilise plusieurs techniques que
            votre enfant pourra refaire à la maison en autonomie, je transmets
            des enregistrements.
            <br />
            <br />
            Dans ma boite à outils, il y a des peluches pour identifier et
            exprimer les émotions des doudous pour aider à respirer des
            exercices fou-fou en mouvement pour relâcher et extérioriser les
            tensions des jeux de relation, de miroir, d’écriture, de dessin des
            temps calme avec histoire, automassage.
            <br />
            <br /> Si vous avez besoin de plus de détails ou que vous avez une
            question, n’hésitez pas à me contacter au :<br />
            <br /> 06.66.44.21.35 / maellatherapie@gmail.com
          </p>
          <Link to="">Réservation</Link>
        </div>
      </div>
    </section>
  );
}
