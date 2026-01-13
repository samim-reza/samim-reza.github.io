import React from 'react';

function About() {
  return (
    <section className="panel-section">
      <div className="panel-container">
        <div className="section-label">About</div>
        <h2 className="section-heading">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Hello, I'm Samim Reza</h3>
            <p>
              I am a Computer Science & Engineering student at Green University of
              Bangladesh with a strong passion for programming, machine learning, robotics, and
              problem-solving. As a three-time ICPC regionalist with over 1000+
              problems solved on various online judges, I have demonstrated
              excellence in competitive programming.
            </p>
            <p>
              Having served as a Teaching Assistant, Programming Trainer,
              and Robotics Engineer Intern, I have gained valuable experience
              tackling challenging problems and sharing my knowledge with others. My technical
              expertise spans various programming languages, LLM integration, and robotics systems.
            </p>
            <p>
              I specialize in competitive programming, machine learning, robotics, and AI development with 
              experience in building LLM-powered applications. I am passionate about crafting intelligent 
              solutions that not only solve problems but also push the boundaries of what's possible with technology.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <i className="fas fa-code"></i>
              <h4>1000+</h4>
              <p>Problems Solved</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-trophy"></i>
              <h4>3x</h4>
              <p>ICPC Regionalist</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-project-diagram"></i>
              <h4>7+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-graduation-cap"></i>
              <h4>3.80</h4>
              <p>Current CGPA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
