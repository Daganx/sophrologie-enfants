import "./usages.css";

export default function Usages() {
  return (
    <section className="usages" id="usages">
      <div className="usages__inner">
        <p className="usages__eyebrow">Usages & bienfaits</p>
        <h2>Les effets positifs se ressentent semaine après semaine</h2>
        <p className="usages__lead">
          En pratiquant régulièrement les séances à la maison, l’enfant intègre
          des outils simples qui l’aident à accueillir ses émotions, à se
          recentrer et à gagner en confiance.
        </p>

        <div className="usages__grid">
          <article className="usage-card">
            <div className="usage-card__icon">✨</div>
            <h3>Calme & sérénité</h3>
            <p>
              Respiration et relaxation pour diminuer le stress et retrouver un
              apaisement durable.
            </p>
            <ul>
              <li>Calme retrouvé</li>
              <li>Sommeil facilité</li>
            </ul>
          </article>

          <article className="usage-card">
            <div className="usage-card__icon">🧭</div>
            <h3>Connaissance de soi</h3>
            <p>
              Visualisations et prise de conscience du corps pour mieux se
              connaître et s’accepter.
            </p>
            <ul>
              <li>Meilleure estime de soi</li>
              <li>Emotions comprises et exprimées</li>
            </ul>
          </article>

          <article className="usage-card">
            <div className="usage-card__icon">🚀</div>
            <h3>Confiance & concentration</h3>
            <p>
              Exercices ludiques pour renforcer l’attention, la motivation et la
              confiance dans les apprentissages.
            </p>
            <ul>
              <li>Plus de confiance et de positivité</li>
              <li>Meilleure concentration</li>
            </ul>
          </article>

          <article className="usage-card usage-card--accent">
            <div className="usage-card__icon">🤝</div>
            <h3>Relation aux autres</h3>
            <p>
              Relâcher les tensions pour communiquer plus sereinement et
              accueillir les changements.
            </p>
            <ul>
              <li>Relations apaisées</li>
              <li>Adaptation aux transitions</li>
            </ul>
          </article>
        </div>

        <div className="usages__note">
          Mise en garde : la sophrologie ne se substitue pas à un suivi médical.
          Les bénéfices dépendent de l’assiduité et peuvent nécessiter un
          accompagnement complémentaire selon la situation.
        </div>
      </div>
    </section>
  );
}
