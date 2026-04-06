import { useEffect } from 'react'
import './style.css'
import { useEffect, useState } from 'react' // Add useState
import './style.css'

function App() {
  // Initialize theme from localStorage so it remembers the user's choice
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') !== 'light'
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="logo">jm<span>.dev</span></div> 
        
        {/* THE TOGGLE SWITCH */}
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        <div className="status-card">
          {/* ... existing status card code ... */}
        </div>
      </nav>
      {/* ... rest of your components ... */}
    </div>
  )
}

function App() {
  // 1. UPDATED DATA: Added LinkedIn and all 3 projects
  const skills = [
    { name: "HTML", pct: 55, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", pct: 45, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", pct: 40, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PHP", pct: 40, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "React JS", pct: 35, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Figma", pct: 45, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
  ];

  return (
    <div className="container">
      <nav className="nav-bar">
  <div className="logo">jm<span>.dev</span></div> 
  <div className="status-card">
    <div className="status-indicator"></div>
    <div className="status-text">
      <span className="status-label">Current Status</span>
      <span className="status-value">Available for Internship</span>
    </div>
  </div>
</nav>

  

      <header className="hero">
        <div className="hero-layout">
          <div className="photo-wrapper">
            <div className="photo-circle">
              {/* Ensure image is in /public folder */}
              <img src="/aefbf37f-2e32-4b84-9580-5a0bb61d46d6.jpg" alt="John Michael Aguirre" className="profile-img" />
              <div className="photo-overlay"></div>
            </div>
            <div className="status-indicator"></div>
          </div>
          
          <div className="hero-content">
            <p className="eyebrow">2nd Year BSIT Student</p>
            <h1>John Michael <span>Aguirre</span></h1>
            <p className="description">
              Building functional web experiences with a focus on clean code and intuitive design at <strong>Western Institute of Technology</strong>.
            </p>
            
            {/* 2. FIXED: Added logos to the Hero badges */}
            <div className="badge-group">
              {skills.map((skill, index) => (
                <span key={index} className="badge">
                  <img src={skill.logo} alt={skill.name} style={{ width: '14px', marginRight: '8px' }} />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 3. ADDED: About Me Section (Missing before) */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-flex">
          <div className="about-text">
            <p>I am a passionate IT student dedicated to mastering modern web technologies. My goal is to create seamless digital solutions that combine functionality with aesthetic appeal.</p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="label">Location</span>
              <p>Iloilo City, Philippines</p>
            </div>
            <div className="stat-item">
              <span className="label">Education</span>
              <p>BS in Information Technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL BACKGROUND SECTION */}
<section id="education">
  <h2 className="section-title">Education</h2>
  <div className="education-timeline">
    
    {/* College Entry */}
    <div className="education-card highlight-edu">
      <div className="edu-content-layout">
        <div className="edu-logo-wrapper">
          <img src="/wit.jpg" alt="WIT Logo" className="edu-logo" />
        </div>
        <div className="edu-info">
          <div className="edu-header">
            <span className="edu-year">2024 — Present</span>
            <span className="edu-status">In Progress</span>
          </div>
          <div className="edu-body">
            <h3>Bachelor of Science in Information Technology</h3>
            <p className="school-name">Western Institute of Technology</p>
            <ul className="edu-details">
              <li>Specializing in Web Development and Database Management.</li>
              <li>Relevant Coursework: Data Structures, Web Programming, and System Analysis.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Senior High Entry */}
    <div className="education-card">
      <div className="edu-content-layout">
        <div className="edu-logo-wrapper">
          <img src="/nasyo.jpg" alt="DNHS Logo" className="edu-logo" />
        </div>
        <div className="edu-info">
          <div className="edu-header">
            <span className="edu-year">2022 — 2024</span>
            <span className="edu-status">Graduated</span>
          </div>
          <div className="edu-body">
            <h3>TVL - Technical Drafting & ICT</h3>
            <p className="school-name">Dingle National High School</p>
            <ul className="edu-details">
              <li>Architectural Layouting and CAD software to create precise floor plans and structural 3D models.</li>
              <li>Strong foundation in Visual Composition and scale, which I now apply to UI/UX wireframing.</li>
              <li>Awarded for excellence in "Best Research Paper" during the Senior Research project.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="skills">
        <h2 className="section-title">Technical Stack</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.pct}%</span>
              </div>
              <div className="progress-bg">
                <div className="progress-fill" style={{ width: `${skill.pct}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section class="skills-marquee">
        <h2 class="section-title"></h2>
  <div class="marquee-inner">
    <div class="marquee-content">
      <span>HTML5</span> <span>CSS3</span> <span>JAVASCRIPT</span> 
      <span>REACT</span> <span>NODE.JS</span> <span>PHP</span> 
      <span>SQL</span> <span>FIGMA</span>
      <span>HTML5</span> <span>CSS3</span> <span>JAVASCRIPT</span> 
      <span>REACT</span> <span>NODE.JS</span> <span>PHP</span> 
      <span>SQL</span> <span>FIGMA</span>
    </div>
  </div>
</section>

  <section id="projects">
  <h2 className="section-title">Projects</h2>
  <div className="project-grid">
    
    {/* Project 1: Pixelites */}
    <div className="project-card">
      <div className="project-image-container">
        {/* CHANGED THIS: Pointing to /pixelites.png in your public folder */}
        <img src="/pixelites.png" alt="Pixelites" className="project-img" />
        <div className="image-overlay">
        </div>
      </div>
      <div className="card-body">
        <div className="card-header">
          <span className="code-icon">&lt;/&gt;</span>
          <span className="project-year">2025</span>
        </div>
        <h3>Pixelites</h3>
        <p>A gamified study tool designed to make learning more engaging through interactive challenges.</p>
        <div className="card-footer">HTML • CSS • JS • FIGMA</div>
      </div>
    </div>

    {/* Project 2: Trashtalk */}
    <div className="project-card highlight">
      <div className="project-image-container">
        {/* CHANGED THIS: Pointing to /trashtalk.png */}
        <img src="/trashtalk.png" alt="Trashtalk" className="project-img" />
        <div className="image-overlay">
        </div>
      </div>
      <div className="card-body">
        <div className="card-header">
          <span className="code-icon">&lt;/&gt;</span>
          <span className="project-year">2026</span>
        </div>
        <h3>Trashtalk</h3>
        <p>A smart waste management system focusing on community reporting and sustainability tracking.</p>
        <div className="card-footer">PHP • SQL • JS • FIGMA</div>
      </div>
    </div>

    {/* Project 3: Task Master */}
    <div className="project-card">
      <div className="project-image-container">
        {/* CHANGED THIS: Pointing to /todo.png */}
        <img src="/todo.png" alt="Todo App" className="project-img" />
        <div className="image-overlay">
        </div>
      </div>
      <div className="card-body">
        <div className="card-header">
          <span className="code-icon">&lt;/&gt;</span>
          <span className="project-year">2026</span>
        </div>
        <h3>Todo List</h3>
        <p>A high-performance task management app featuring local storage persistence and dynamic priority filtering.</p>
        <div className="card-footer">React • Node • HTML5 • CSS3</div>
      </div>
    </div>
  </div>

</section>

      <section id="contact">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-grid">
          {/* GitHub */}
          <a href="https://github.com/AguirreJM" target="_blank" rel="noreferrer" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">AguirreJM</span>
            </div>
          </a>

          {/* 5. FIXED: Added the missing LinkedIn link */}
          <a href="https://www.linkedin.com/in/john-michael-aguirre-7368773bb/" target="_blank" rel="noreferrer" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">jmaguirre</span>
            </div>
          </a>

          <a href="https://www.facebook.com/j.em.2406" target="_blank" rel="noreferrer" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">Facebook</span>
              <span className="contact-value">John Michael Aguirre</span>
            </div>
          </a>
        </div>
      </section>

     

      <footer>
        <p>// Designed & Built by John Michael Aguirre</p>
      </footer>
    </div>

    
    
  )
}

export default App