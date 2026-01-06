import React from 'react';

function Contact() {
  return (
    <section className="panel is-active" data-panel="contact" aria-label="Contact">
      <div className="panel-inner">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <div className="divider"></div>
          </div>

          <div className="footer-content">
            <h3>Let's Connect!</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <a href="mailto:samimreza2111@gmail.com" className="btn btn-primary">Email Me</a>
          </div>

          <div className="copyright">
            <p>&copy; 2025 Samim Reza. All rights reserved.</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
