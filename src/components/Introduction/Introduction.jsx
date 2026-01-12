import "./introduction.css";

export default function Introduction() {
  return (
    <section className="introduction">
      <div className="intro__inner">
        <p className="intro__eyebrow">Comprendre la sophrologie</p>
        <h2>
          Une méthode douce pour aider les enfants à retrouver calme et
          confiance
        </h2>
        <p className="intro__lead">
          La sophrologie a été découverte par le neuro psychiatre Alfonso
          Caycedo en 1960. D’abord pratiquée en milieu hospitalier pour aider à
          gérer la douleur{" "}
          <span className="bold">
            en prenant conscience des sensations corporelles
          </span>
          , elle est aujourd’hui reconnue pour relâcher le stress et les
          tensions grâce à la voix du sophrologue.
        </p>

        <div className="intro__tags">
          <span>Respiration</span>
          <span>Relaxation</span>
          <span>Visualisation</span>
          <span>Corps & esprit</span>
        </div>

        <div className="intro__grid">
          <div className="intro__card">
            <h3>Ce que vivent les enfants</h3>
            <p>Ils peuvent être confrontés à des défis variés au quotidien :</p>
            <ul>
              <li>gestion des émotions et anxiété sociale</li>
              <li>manque de confiance ou d’estime de soi</li>
              <li>difficultés d’apprentissage et de concentration</li>
              <li>troubles du sommeil ou stress scolaire</li>
              <li>hypersensibilité, séparation ou changements</li>
            </ul>
          </div>

          <div className="intro__card intro__card--accent">
            <h3>Comment la sophrologie aide</h3>
            <p>
              Des exercices doux, en mouvement ou statiques, détendent et font
              prendre conscience du corps. Le stress se libère progressivement,
              le calme revient.
            </p>
            <div className="intro__pill-row">
              <span className="pill">Respirer</span>
              <span className="pill">Relâcher</span>
              <span className="pill">Visualiser</span>
            </div>
            <p className="intro__note">
              Vous observez un comportement alertant ? Restez sereins : des
              solutions existent et la sophrologie en est une.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
