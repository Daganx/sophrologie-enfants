import "./about.css";
import ProfilePicture from "../../assets/images/hero.png";

export default function About() {
  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__commitment">
          <p className="about__eyebrow">Mon engagement</p>
          <h2>Une approche bienveillante et adaptée</h2>
          <p className="about__commitment-text">
            Je m'engage à réaliser chaque séance dans la bienveillance, la
            confidentialité, l'écoute et le respect. Si votre enfant est bloqué
            et refuse de faire un exercice, je m'adapte, l'écoute et lui propose
            un autre exercice s'il le souhaite. Mon approche repose avant tout
            sur la douceur.
          </p>
          <div className="about__values">
            <div className="value-item">
              <span className="value-icon">🤲</span>
              <span>Bienveillance</span>
            </div>
            <div className="value-item">
              <span className="value-icon">🔒</span>
              <span>Confidentialité</span>
            </div>
            <div className="value-item">
              <span className="value-icon">👂</span>
              <span>Écoute</span>
            </div>
            <div className="value-item">
              <span className="value-icon">💚</span>
              <span>Respect</span>
            </div>
          </div>
        </div>

        <div className="about__profile">
          <div className="about__profile-content">
            <p className="about__eyebrow">Qui suis-je ?</p>
            <h2>Maella Letot</h2>
            <div className="about__image-wrapper">
              <img src={ProfilePicture} alt="Maella Letot" />
            </div>
            <div className="about__bio">
              <p>
                Depuis très jeune, j'aime écouter, soutenir, protéger, aider les
                plus faibles. Cela fait partie de moi. C'est naturellement que
                je me tourne vers la sophrologie, le reiki et quelques années
                plus tard la psychologie pour enfants.
              </p>
              <p>
                Aujourd'hui je pratique tous les jours sur moi-même, cela m'aide à me poser,
                à prendre du recul sur des situations et des émotions et à être
                plus confiante dans ma vie. Vous l'avez compris, j'adore la
                sophrologie !
              </p>
            </div>
          </div>

          <div className="about__why">
            <h3>Pourquoi les enfants ?</h3>
            <p>
              Je travaille depuis 4 ans avec des enfants en situation d'handicap, dans les écoles ( autisme, trouble de l'attention, surdité ). Je suis une personne très douce, sensible, empathique et
              bienveillante. Je perçois leurs émotions et leurs sensibilités.
              J'aime utiliser le jeu et les outils ludiques. C'est une méthode
              simple que j'aimerais leur transmettre pour les aider à se
              construire sereinement.
            </p>
            <div className="about__qualities">
              <span className="quality-tag">Douceur</span>
              <span className="quality-tag">Empathie</span>
              <span className="quality-tag">Approche ludique</span>
              <span className="quality-tag">Bienveillance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
