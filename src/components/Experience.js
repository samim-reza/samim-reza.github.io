import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Lead Engineer",
      date: "May 2026 - Present",
      subtitle: "SolaneCode, New York",
      link: "https://remitjob.com/",
      linkLabel: "Live Platform",
      points: [
        "Lead engineering for a live restaurant AI phone receptionist SaaS sold in New York",
        "Built and own the AI voice workflow, frontend, backend, QA, CRM, menu, kitchen flow, and reporting systems"
      ]
    },
    {
      title: "Machine Learning Engineer",
      date: "Dec 2025 - Present",
      subtitle: "Brandifies",
      points: [
        "Built end-to-end ML pipelines, fine-tuned LLMs, and implemented RAG-based chatbot systems",
        "Developed predictive models using boosting algorithms"
      ]
    },
    {
      title: "Robotics Engineer Intern",
      date: "Jul 2025 - Sept 2025",
      subtitle: "RoboTech Valley",
      points: [
        "Designed robotics modules using embedded systems and ROS for autonomous navigation"
      ]
    },
    {
      title: "Teaching Assistant",
      date: "May 2025 - Aug 2025",
      subtitle: "Green University of Bangladesh",
      points: [
        "Conducting demo classes on C Programming and Data Structures",
        "Evaluate exam scripts and prepare grade sheets"
      ]
    },
    {
      title: "Programming Trainer",
      date: "Jan 2025 - Dec 2025",
      subtitle: "Green University of Bangladesh",
      points: [
        "Training students for competitive programming; conducted weekly sessions"
      ]
    },
    {
      title: "Mentor",
      date: "Jun 2023 - Aug 2025",
      subtitle: "University Mentorship Program",
      points: [
        "Mentored first-year students in programming fundamentals and professional tools"
      ]
    }
  ];

  return (
    <section className="panel-section">
      <div className="panel-container">
        <div className="section-label">Experience</div>
        <h2 className="section-heading">Work Experience</h2>

          <div className="services-grid">
            {experiences.map((exp, index) => (
              <div key={index} className="service-card">
                <div className="stat-icon" style={{marginBottom: '12px', background: 'rgba(78, 70, 229, 0.08)'}}>
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="timeline-header" style={{marginBottom: '4px'}}>
                  <h4 style={{fontSize: '1.04rem', margin: '0'}}>{exp.title}</h4>
                </div>
                <div className="timeline-subtitle" style={{color: 'var(--brand)', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600'}}>
                  {exp.subtitle} | {exp.date}
                  {exp.link && (
                    <> | <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-link">{exp.linkLabel}</a></>
                  )}
                </div>
                <ul className="timeline-list" style={{paddingLeft: '16px', color: 'var(--muted)', fontSize: '0.92rem', margin: '0'}}>
                  {exp.points.map((point, idx) => (
                    <li key={idx} style={{marginBottom: '4px'}}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
