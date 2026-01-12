import "./curriculum.css";

export default function Curriculum() {
  return (
    <section className="curriculum">
      <div className="curriculum__inner">
        <div className="curriculum__section">
          <p className="curriculum__eyebrow">Mon parcours</p>
          <h2>Parcours professionnel</h2>
          <div className="curriculum__timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">2020</span>
              </div>
              <div className="timeline-content">
                <h3>Formation Sophrologue</h3>
                <p>
                  Début de ma formation pour devenir sophrologue avec
                  l'organisme SOHO
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">2022</span>
              </div>
              <div className="timeline-content">
                <h3>Certification & Début de carrière</h3>
                <p>
                  Certification obtenue. Travail ponctuel avec séances
                  individuelles et collectives dans des foyers en situation de
                  handicap, des écoles et des maisons de quartiers.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">2022</span>
              </div>
              <div className="timeline-content">
                <h3>Accompagnante d'élèves</h3>
                <p>
                  Accompagnement d'élèves en situation de handicap dans les
                  quartiers prioritaires de la ville de Nantes
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker timeline-marker--current">
                <span className="timeline-year">2024</span>
              </div>
              <div className="timeline-content">
                <h3>Formation continue</h3>
                <p>
                  Inscription à une formation « psychologie des enfants » pour
                  développer mes connaissances
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="curriculum__section">
          <p className="curriculum__eyebrow">Formations</p>
          <h2>Mes formations dans le bien-être</h2>
          <div className="curriculum__formations">
            <div className="formation-card">
              <div className="formation-header">
                <span className="formation-icon">🧘</span>
                <div>
                  <h3>Sophrologie holistique</h3>
                  <p className="formation-org">Organisme SOHO</p>
                </div>
              </div>
              <div className="formation-period">2020 - 2022</div>
            </div>

            <div className="formation-card">
              <div className="formation-header">
                <span className="formation-icon">✨</span>
                <div>
                  <h3>Reiki 1er degré</h3>
                  <p className="formation-org">Séline</p>
                </div>
              </div>
            </div>

            <div className="formation-card">
              <div className="formation-header">
                <span className="formation-icon">🌟</span>
                <div>
                  <h3>Reiki 2ème degré</h3>
                  <p className="formation-org">Séline</p>
                </div>
              </div>
            </div>

            <div className="formation-card formation-card--current">
              <div className="formation-header">
                <span className="formation-icon">🧠</span>
                <div>
                  <h3>Psychologie de l'enfant</h3>
                  <p className="formation-org">Koreva</p>
                </div>
              </div>
              <div className="formation-period formation-period--current">
                En cours - 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
