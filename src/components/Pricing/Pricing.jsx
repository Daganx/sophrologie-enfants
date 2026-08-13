import "./pricing.css";

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing__inner">
        <div className="pricing__header">
          <p className="pricing__eyebrow">Tarifs</p>
          <h2>Des séances adaptées à chaque besoin</h2>
          <p className="pricing__lead">
            Séances ludiques pour les enfants et accompagnements dédiés aux
            adultes ou aux structures. Toutes les séances incluent un temps
            d’écoute, des exercices guidés et, si besoin, des supports pour
            pratiquer chez soi.
          </p>
        </div>

        <div className="pricing__grid">
          <article className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__badge">Enfant · individuel</span>
              <div className="pricing-card__price">
                <span className="price-main">45€</span>
                <span className="price-note">/ séance</span>
              </div>
            </div>
            <p className="pricing-card__desc">
              45 min : temps de parole, sophrologie ludique, restitution
              écrite/orale, enregistrement pour pratiquer à la maison.
            </p>
            <ul className="pricing-card__list">
              <li>Accompagnement personnalisé</li>
              <li>Supports audio fournis</li>
              <li>Adapté 3-11 ans</li>
            </ul>
            <button
              type="button"
              className="pricing-card__cta"
              onClick={() =>
                window.open(
                  "https://meet.brevo.com/maella-letot/enfant-individuel",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Réserver
            </button>
          </article>

          <article className="pricing-card pricing-card--highlight">
            <div className="pricing-card__header">
              <span className="pricing-card__badge">Enfant · forfait 5</span>
              <div className="pricing-card__price">
                <span className="price-main">200€</span>
                <span className="price-note">5 séances</span>
              </div>
            </div>
            <p className="pricing-card__desc">
              Programme de 5 séances pour installer durablement les outils. Avec
              une séance à moitié prix. (-50%)
            </p>
            <ul className="pricing-card__list">
              <li>Suivi régulier</li>
              <li>Progression guidée</li>
              <li>Supports récapitulatifs</li>
            </ul>
            <button
              type="button"
              className="pricing-card__cta pricing-card__cta--dark"
              onClick={() =>
                window.open(
                  "https://meet.brevo.com/maella-letot/enfant-forfait-5-seances",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Choisir le forfait
            </button>
          </article>

          <article className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__badge">Duo parents/enfants</span>
              <div className="pricing-card__price">
                <span className="price-main">50€</span>
                <span className="price-note">/ séance</span>
              </div>
            </div>
            <p className="pricing-card__desc">
              45 min : expression des émotions, exercices en mouvement, retour
              au calme.
            </p>
            <ul className="pricing-card__list">
              <li>Jeux et mouvements</li>
              <li>Apprentissages partagés</li>
            </ul>
            <button
              type="button"
              className="pricing-card__cta"
              onClick={() =>
                window.open(
                  "https://meet.brevo.com/maella-letot/collectif-enfants",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Réserver
            </button>
          </article>

          <article className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__badge">Adultes</span>
              <div className="pricing-card__price">
                <span className="price-main">50€</span>
                <span className="price-note">/ séance</span>
              </div>
            </div>
            <p className="pricing-card__desc">
              1h : temps de parole, exercices de sophrologie, restitution,
              enregistrement à pratiquer à la maison. Appel visio disponible.
            </p>
            <ul className="pricing-card__list">
              <li>Accompagnement personnalisé</li>
              <li>Outils pour l’autonomie</li>
              <li>Supports audio inclus</li>
            </ul>
            <button
              type="button"
              className="pricing-card__cta"
              onClick={() =>
                window.open(
                  "https://meet.brevo.com/maella-letot/adultes",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Réserver
            </button>
          </article>

          <article className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__badge">Adultes · forfait 5</span>
              <div className="pricing-card__price">
                <span className="price-main">225€</span>
                <span className="price-note">5 séances</span>
              </div>
            </div>
            <p className="pricing-card__desc">
              1h : temps de parole, exercices de sophrologie, restitution,
              enregistrement à pratiquer à la maison. Avec une séance à moitié prix. (-50%)
            </p>
            <ul className="pricing-card__list">
              <li>Accompagnement personnalisé</li>
              <li>Outils pour l’autonomie</li>
              <li>Supports audio inclus</li>
            </ul>
            <button
              type="button"
              className="pricing-card__cta"
              onClick={() =>
                window.open(
                  "https://meet.brevo.com/maella-letot/adulte-forfait-5-seances",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Réserver
            </button>
          </article>

          <article className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__badge">Ateliers nature</span>
              <div className="pricing-card__price">
                <span className="price-main">20€</span>
                <span className="price-note">/ séance</span>
              </div>
            </div>
            <p className="pricing-card__desc">
              45 min : Séance collectives ou individuelles selon les demandes. Lieu en nature ( parc, bord de mer ).
            </p>
            <ul className="pricing-card__list">
              <li>Découverte de la sophrologie</li>
              <li>Transmission des exercices</li>
            </ul>
            <button
              type="button"
              className="pricing-card__cta"
              onClick={() =>
                window.open(
                  "https://meet.brevo.com/maella-letot/ateliers-nature",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Réserver
            </button>
          </article>

          <article className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__badge">Séance de Reiki</span>
              <div className="pricing-card__price">
                <span className="price-main">50€</span>
                <span className="price-note">/ séance</span>
              </div>
            </div>
            <p className="pricing-card__desc">
              1h : Harmoniser votre aura, nettoyer vos énergies stagnantes. Redynamiser votre corps.
              Appel visio possible.
            </p>
            <ul className="pricing-card__list">
              <li>Soin personnalisé</li>
              <li>Bien-être</li>
            </ul>
            <button
              type="button"
              className="pricing-card__cta"
              onClick={() =>
                window.open(
                  "https://meet.brevo.com/maella-letot/seance-de-reiki",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Réserver
            </button>
          </article>

          <article className="pricing-card pricing-card--outline">
            <div className="pricing-card__header">
              <span className="pricing-card__badge">
                Collectifs · structures
              </span>
              <div className="pricing-card__price">
                <span className="price-main">Sur devis</span>
              </div>
            </div>
            <p className="pricing-card__desc">
              Séances collectives pour entreprises sociales, écoles, foyers :
              programme sur mesure selon vos besoins.
            </p>
            <ul className="pricing-card__list">
              <li>Adapté au public</li>
              <li>Objectifs co-construits</li>
              <li>Devis rapide</li>
            </ul>
            <button
              type="button"
              className="pricing-card__cta pricing-card__cta--ghost"
              onClick={() =>
                window.open(
                  "https://meet.brevo.com/maella-letot/collectifs-structures",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Demander un devis
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
