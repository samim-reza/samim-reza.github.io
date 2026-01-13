import React from 'react';

function Research() {
  return (
    <section className="panel-section">
      <div className="panel-container">
        <div className="section-label">Research</div>
        <h2 className="section-heading">Research on Going</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">DDPM with Edge Detection</h3>
                  <div className="timeline-date">Thesis Work - Ongoing</div>
                </div>
                <div className="timeline-subtitle">
                  B.Sc. Thesis - Green University of Bangladesh
                </div>
                <p>
                  Conducting research on Denoising Diffusion Probabilistic Models (DDPM)
                  integrated with edge detection techniques for improved image synthesis
                  and quality enhancement in computer vision applications.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">Federated Learning Adaptive Client Selection</h3>
                  <div className="timeline-date">Research Project - Ongoing</div>
                </div>
                <div className="timeline-subtitle">
                  Machine Learning Research
                </div>
                <p>
                  Investigating adaptive client selection strategies in federated learning
                  environments to optimize model performance while maintaining privacy and
                  reducing communication costs in distributed machine learning systems.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">A Survey of Human-in-the-Loop for Machine Learning</h3>
                  <div className="timeline-date">Survey Paper - Ongoing</div>
                </div>
                <div className="timeline-subtitle">
                  Literature Review & Analysis
                </div>
                <p>
                  Conducting a comprehensive survey on Human-in-the-Loop (HITL) approaches
                  in machine learning, analyzing current methodologies, challenges, and
                  future directions in interactive machine learning systems.
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Research;
