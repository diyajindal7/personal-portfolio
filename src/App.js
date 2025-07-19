import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">Portfolio</div>
          <ul className="nav-menu">
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero" data-aos="fade-down">
        <div className="hero-content">
          <h1>Hi, I'm DIYA JINDAL </h1>
          <h2>Full Stack Developer</h2>
          <p>I create beautiful and functional web experiences</p>
          <button className="cta-button" onClick={() => scrollToSection('projects')}>
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about" data-aos="fade-up">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate developer with experience in building modern web applications.
                I love creating user-friendly interfaces and solving complex problems through code.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or enjoying a good cup of coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills" data-aos="fade-right">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML/CSS</span>
                <span>TypeScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <span>Node.js</span>
                <span>Python</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <div className="skill-items">
                <span>Git</span>
                <span>Docker</span>
                <span>AWS</span>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects" data-aos="zoom-in-up">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card" data-aos="fade-up" data-aos-delay="100">
              <div className="project-image">
                <div className="project-placeholder">Project 1</div>
              </div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>A full-stack e-commerce application built with React and Node.js</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card" data-aos="fade-up" data-aos-delay="200">
              <div className="project-image">
                <div className="project-placeholder">Project 2</div>
              </div>
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>A collaborative task management application with real-time updates</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Firebase</span>
                  <span>Material-UI</span>
                </div>
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card" data-aos="fade-up" data-aos-delay="300">
              <div className="project-image">
                <div className="project-placeholder">Project 3</div>
              </div>
              <div className="project-content">
                <h3>Weather Dashboard</h3>
                <p>A weather application with location-based forecasts and interactive maps</p>
                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>Weather API</span>
                  <span>CSS3</span>
                </div>
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact" data-aos="fade-up">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>I'm always interested in new opportunities and exciting projects.</p>
              <div className="contact-links">
                <a href="mailto:your.email@example.com" className="contact-link">
                  diyajindal265@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/diya-jindal-7309302a2/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  LinkedIn
                </a>
                <a href="https://github.com/diyajindal7" target="_blank" rel="noopener noreferrer" className="contact-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 DIYA JINDAL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
