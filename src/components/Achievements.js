import React from 'react';

function Achievements() {
  return (
    <section className="panel is-active" data-panel="achievements" aria-label="Achievements">
      <div className="panel-inner">
        <div className="container">
          <div className="section-title">
            <h2>Achievements & Recognition</h2>
            <div className="divider"></div>
          </div>

          <div className="achievements-grid">
            <div className="achievement-card gold">
              <div className="achievement-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="achievement-content">
                <span className="achievement-badge">Competitive Programming</span>
                <h4>ICPC Regionalist (3x)</h4>
                <p>
                  Qualified for the International Collegiate Programming Contest Regional
                  round in 2022, 2023, and 2024. Solved 1000+ problems across various online judges.
                </p>
              </div>
            </div>

            <div className="achievement-card champion">
              <div className="achievement-icon">
                <i className="fas fa-crown"></i>
              </div>
              <div className="achievement-content">
                <span className="achievement-badge">Champion</span>
                <h4>IDPC-2024 Champion</h4>
                <p>Secured 1st place in the Intra Department Programming Contest 2024</p>
              </div>
            </div>

            <div className="achievement-card silver">
              <div className="achievement-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="achievement-content">
                <span className="achievement-badge">Hackathon</span>
                <h4>BAIC 2025 - 8th Position</h4>
                <p>
                  Secured 8th position out of 50+ teams at BAIC 2025 - BUBT Artificial Intelligence Conquest,
                  a 24-hour inter-university ML hackathon with 14.5% improvement over baseline.
                </p>
              </div>
            </div>

            <div className="achievement-card academic">
              <div className="achievement-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="achievement-content">
                <span className="achievement-badge">Academic Excellence</span>
                <h4>Vice Chancellor's & DEAN's Award</h4>
                <p>
                  Received prestigious awards for outstanding academic performance with a CGPA of 3.80/4.00
                </p>
              </div>
            </div>

            <div className="achievement-card silver">
              <div className="achievement-icon">
                <i className="fas fa-medal"></i>
              </div>
              <div className="achievement-content">
                <span className="achievement-badge">National Competition</span>
                <h4>National School Programming Contest</h4>
                <p>First Runner-up in National School Programming Contest</p>
              </div>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="achievement-content">
                <span className="achievement-badge">Competition</span>
                <h4>National IT Quiz Competition</h4>
                <p>Medal recipient in National IT Quiz Competition</p>
              </div>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-edit"></i>
              </div>
              <div className="achievement-content">
                <span className="achievement-badge">Problem Setter</span>
                <h4>Contest Problem Setter</h4>
                <p>
                  Set problems for Junior Intra Department Programming Contest and Math Olympiad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
