import React, { useState } from 'react';

const starStyle = {
  position: 'absolute',
  top: '60px',
  right: '80px',
  width: '60px',
  height: '60px',
  zIndex: 1,
  animation: 'floatStar 3s ease-in-out infinite',
  opacity: 0.7,
  pointerEvents: 'none',
};

const gradientCircleStyle = {
  position: 'absolute',
  top: '-120px',
  left: '-120px',
  width: '600px',
  height: '600px',
  background: 'radial-gradient(circle, #667eea 0%, #764ba2 100%)',
  opacity: 0.18,
  zIndex: 0,
  borderRadius: '50%',
  pointerEvents: 'none',
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        @keyframes floatStar {
          0% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
          100% { transform: translateY(0); }
        }
      `}</style>
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
      <section id="home" className="hero" data-aos="fade-down" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Animated gradient circle */}
        <div style={gradientCircleStyle} />
        {/* Floating SVG star */}
        <svg style={starStyle} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="32,4 39,24 60,24 42,38 48,58 32,46 16,58 22,38 4,24 25,24" fill="#fff8dc" stroke="#facc15" strokeWidth="2" />
        </svg>
        <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
          <h1>Hi, I'm DIYA JINDAL </h1>
          <h2>Full Stack Developer</h2>
          <p>I create beautiful and functional web experiences</p>
          <button className="cta-button" onClick={() => scrollToSection('projects')}>
            View My Work
          </button>
        </div>
      </section>
    </>
  );
};

export default Header; 