import React from 'react';

function Education() {
  return (
    <section className="panel is-active" aria-label="Education">
      <div className="panel-inner">
        <div className="container">
          <div className="section-title">
            <h2>Education</h2>
            <div className="divider"></div>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">
                    B.Sc. in Computer Science and Engineering
                  </h3>
                  <div className="timeline-date">Jan 2022 - Present</div>
                </div>
                <div className="timeline-subtitle">
                  Green University of Bangladesh
                </div>
                <p><strong>Current CGPA:</strong> 3.80/4.00</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">
                    Higher Secondary School Certificate
                  </h3>
                  <div className="timeline-date">Apr 2017 - Mar 2019</div>
                </div>
                <div className="timeline-subtitle">
                  Government Bangabandhu College, Gopalganj
                </div>
                <p><strong>GPA:</strong> 4.75/5.00</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">Secondary School Certificate</h3>
                  <div className="timeline-date">Jan 2012 - Mar 2017</div>
                </div>
                <div className="timeline-subtitle">
                  S.M. Model Govt. High School, Gopalganj
                </div>
                <p><strong>GPA:</strong> 5.00/5.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
