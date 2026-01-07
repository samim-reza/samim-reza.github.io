import React from 'react';

function Home({ onNavigate }) {
  const handleViewPortfolio = (e) => {
    e.preventDefault();
    onNavigate('projects');
  };

  return (
    <section className="panel is-active" aria-label="Home">
      <div className="panel-inner home-hero">
        <div className="home-copy">
          <h2 className="home-title">I am</h2>
          <h3 className="home-subtitle">a Programmer</h3>
          <p className="home-lead">
            Computer Science & Engineering student focused on competitive programming,
            robotics, and applied AI & ML. Try{' '}
            <a href="https://samim-chatbot-app.azurewebsites.net/" target="_blank" rel="noopener noreferrer">
              my AI Assistant
            </a>{' '}
            when I am not available.
          </p>
          <div className="home-actions">
            <button 
              className="btn btn-outline" 
              onClick={handleViewPortfolio}
              type="button"
              style={{ pointerEvents: 'auto', cursor: 'pointer' }}
            >
              VIEW PORTFOLIO
            </button>
            <a 
              className="btn btn-primary" 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ pointerEvents: 'auto', cursor: 'pointer' }}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
        <div className="home-image" aria-hidden="true">
          {/* <img src="/samim.png" alt="" /> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
