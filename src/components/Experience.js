import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Robotics Engineer Intern",
      date: "July 2025 - Sept 2025",
      subtitle: "RoboTech Valley",
      points: [
        "Designing and developing robotics modules using embedded systems and ROS",
        "Assisting in sensor integration, motor control, and autonomous navigation logic"
      ]
    },
    {
      title: "Teaching Assistant",
      date: "May 2025 - Aug 2025",
      subtitle: "Green University of Bangladesh",
      points: [
        "Conduct demo classes on C Programming and Data Structures",
        "Assist with grade sheet preparation and evaluate exam scripts"
      ]
    },
    {
      title: "Robotics Software Engineer – GUB Mars Rover Team",
      date: "Jun 2024 – Jul 2025",
      subtitle: "Part-time",
      points: [
        "Developed and integrated software modules for Mars Rover's robotic arm and autonomous navigation.",
        "Worked on ROS (Robot Operating System) for sensor fusion and control architecture.",
        "Designed and implemented communication protocols between onboard systems.",
        "Integrated and tested various sensors (IMU, GPS, encoders) for real-time decision-making.",
        "Collaborated with cross-functional teams for system testing and field validation."
      ]
    },
    {
      title: "Mentor",
      date: "June 2023 - Aug 2025",
      subtitle: "Mentorship Program, Green University of Bangladesh",
      points: [
        "Guide first-semester students through regular weekly sessions",
        "Teach coding basics and tools like LaTeX, GitHub, and LinkedIn"
      ]
    },
    {
      title: "Programming Trainer",
      date: "Jan 2025 - Dec 2025",
      subtitle: "Green University of Bangladesh",
      points: [
        "Conduct weekly programming sessions for beginner to advanced level students",
        "Help students prepare for contests through training and mock competitions"
      ]
    }
  ];

  return (
    <section className="panel is-active" aria-label="Experience">
      <div className="panel-inner">
        <div className="container">
          <div className="section-title">
            <h2>Work Experience</h2>
            <div className="divider"></div>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <div className="timeline-date">{exp.date}</div>
                  </div>
                  <div className="timeline-subtitle">{exp.subtitle}</div>
                  <ul className="timeline-list">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
