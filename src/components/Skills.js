import React from 'react';

function Skills() {
  return (
    <section className="panel is-active" data-panel="skills" aria-label="Skills">
      <div className="panel-inner">
        <div className="container">
          <div className="section-title">
            <h2>Technical Skills</h2>
            <div className="divider"></div>
          </div>

          <div className="skills-wrapper">
            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-code"></i>
                <h3>Programming Languages</h3>
              </div>
              <div className="skills-tags">
                <span className="skill-badge">C/C++</span>
                <span className="skill-badge">Python</span>
                <span className="skill-badge">Java</span>
                <span className="skill-badge">JavaScript</span>
                <span className="skill-badge">PHP</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-brain"></i>
                <h3>AI & Machine Learning</h3>
              </div>
              <div className="skills-tags">
                <span className="skill-badge">Machine Learning</span>
                <span className="skill-badge">LLM Integration</span>
                <span className="skill-badge">Transformer Models</span>
                <span className="skill-badge">LangChain</span>
                <span className="skill-badge">RAG</span>
                <span className="skill-badge">Vector Databases</span>
                <span className="skill-badge">PyTorch</span>
                <span className="skill-badge">TensorFlow</span>
                <span className="skill-badge">Scikit-learn</span>
                <span className="skill-badge">Numpy</span>
                <span className="skill-badge">Pandas</span>
                <a href="https://samim-chatbot-app.azurewebsites.net/" target="_blank" rel="noopener noreferrer" className="skill-badge special">
                  <i className="fas fa-robot"></i> My AI Assistant
                </a>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-robot"></i>
                <h3>Robotics & Embedded Systems</h3>
              </div>
              <div className="skills-tags">
                <span className="skill-badge">ROS</span>
                <span className="skill-badge">Arduino</span>
                <span className="skill-badge">ESP32</span>
                <span className="skill-badge">Raspberry Pi</span>
                <span className="skill-badge">Jetson</span>
                <span className="skill-badge">IoT</span>
                <span className="skill-badge">Embedded Systems</span>
                <span className="skill-badge">Sensor Integration</span>
                <span className="skill-badge">Motor Control</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-globe"></i>
                <h3>Web Development</h3>
              </div>
              <div className="skills-tags">
                <span className="skill-badge">React</span>
                <span className="skill-badge">Node.js</span>
                <span className="skill-badge">HTML/CSS</span>
                <span className="skill-badge">MySQL</span>
                <span className="skill-badge">IndexDB</span>
                <span className="skill-badge">PWA</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-tools"></i>
                <h3>Tools & Technologies</h3>
              </div>
              <div className="skills-tags">
                <span className="skill-badge">Git</span>
                <span className="skill-badge">Linux</span>
                <span className="skill-badge">Docker</span>
                <span className="skill-badge">Azure</span>
                <span className="skill-badge">LaTeX</span>
                <span className="skill-badge">Pinecone</span>
                <span className="skill-badge">ChromaDB</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-trophy"></i>
                <h3>Competitive Programming</h3>
              </div>
              <div className="skills-tags">
                <span className="skill-badge highlight">1000+ Problems Solved</span>
                <span className="skill-badge">Data Structures</span>
                <span className="skill-badge">Algorithms</span>
                <span className="skill-badge">OOP</span>
                <span className="skill-badge">System Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
