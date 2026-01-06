import React from 'react';

function Sidebar({ activePanel, onNavigate }) {
  const handleClick = (e, panelId) => {
    e.preventDefault();
    onNavigate(panelId);
  };

  return (
    <aside className="sidebar" aria-label="Sidebar">
      <div className="sidebar-profile">
        <div className="sidebar-avatar">
          <img src="/samim.jpeg" alt="Samim Reza" />
        </div>
        <h1 className="sidebar-name">Samim Reza</h1>
        <p className="sidebar-role">
          <span className="sidebar-accent">CSE Student</span> in Bangladesh
        </p>
      </div>

      <nav className="sidebar-nav" aria-label="Primary">
        <a 
          className={`sidebar-link ${activePanel === 'home' ? 'is-active' : ''}`}
          href="#home" 
          onClick={(e) => handleClick(e, 'home')}
        >
          HOME
        </a>
        <a 
          className={`sidebar-link ${activePanel === 'about' ? 'is-active' : ''}`}
          href="#about" 
          onClick={(e) => handleClick(e, 'about')}
        >
          ABOUT
        </a>
        <a 
          className={`sidebar-link ${activePanel === 'research' ? 'is-active' : ''}`}
          href="#research" 
          onClick={(e) => handleClick(e, 'research')}
        >
          RESEARCH
        </a>
        <a 
          className={`sidebar-link ${activePanel === 'experience' ? 'is-active' : ''}`}
          href="#experience" 
          onClick={(e) => handleClick(e, 'experience')}
        >
          EXPERIENCE
        </a>
        <a 
          className={`sidebar-link ${activePanel === 'education' ? 'is-active' : ''}`}
          href="#education" 
          onClick={(e) => handleClick(e, 'education')}
        >
          EDUCATION
        </a>
        <a 
          className={`sidebar-link ${activePanel === 'skills' ? 'is-active' : ''}`}
          href="#skills" 
          onClick={(e) => handleClick(e, 'skills')}
        >
          SKILLS
        </a>
        <a 
          className={`sidebar-link ${activePanel === 'projects' ? 'is-active' : ''}`}
          href="#projects" 
          onClick={(e) => handleClick(e, 'projects')}
        >
          PROJECTS
        </a>
        <a 
          className={`sidebar-link ${activePanel === 'achievements' ? 'is-active' : ''}`}
          href="#achievements" 
          onClick={(e) => handleClick(e, 'achievements')}
        >
          ACHIEVEMENTS
        </a>
        <a 
          className="sidebar-link" 
          href="/writing/index.html"
        >
          WRITINGS
        </a>
        <a 
          className={`sidebar-link ${activePanel === 'contact' ? 'is-active' : ''}`}
          href="#contact" 
          onClick={(e) => handleClick(e, 'contact')}
        >
          CONTACT
        </a>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-social">
          <a 
            href="mailto:samimreza2111@gmail.com" 
            aria-label="Email"
            style={{ pointerEvents: 'auto' }}
          >
            <i className="fas fa-envelope" style={{ pointerEvents: 'none' }}></i>
          </a>
          <a 
            href="https://github.com/samim-reza" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            style={{ pointerEvents: 'auto' }}
          >
            <i className="fab fa-github" style={{ pointerEvents: 'none' }}></i>
          </a>
          <a 
            href="https://linkedin.com/in/samim-reza" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            style={{ pointerEvents: 'auto' }}
          >
            <i className="fab fa-linkedin-in" style={{ pointerEvents: 'none' }}></i>
          </a>
          <a 
            href="https://www.facebook.com/samimreza101" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            style={{ pointerEvents: 'auto' }}
          >
            <i className="fab fa-facebook-f" style={{ pointerEvents: 'none' }}></i>
          </a>
        </div>
        <p className="sidebar-copy">&copy; 2025 Samim Reza</p>
      </div>
    </aside>
  );
}

export default Sidebar;
