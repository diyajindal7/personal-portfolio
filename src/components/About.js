import React from 'react';

const About = () => (
  <section id="about" className="about aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-offset="120" style={{ position: 'relative', overflow: 'hidden' }}>
    {/* Animated background */}
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      style={{
        position: 'absolute',
        top: '-60px',
        right: '-60px',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, #764ba2 0%, #667eea 100%)',
        opacity: 0.13,
        zIndex: 0,
        borderRadius: '50%',
        pointerEvents: 'none',
      }}
    />
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <h2 data-aos="fade-right" data-aos-delay="100">About Me</h2>
      <div className="about-content" data-aos="fade-up" data-aos-delay="200">
        <div className="about-text">
          <p>
            I'm a passionate developer with experience in building modern web applications.
            I love creating user-friendly interfaces and solving complex problems through code.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source projects, or enjoying a good cup of coffee.
          </p>
          <a href="resume.pdf" download className="primary-button" style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            padding: '0.75rem 2rem',
            background: '#2563eb',
            color: '#fff',
            borderRadius: '30px',
            fontWeight: 600,
            fontSize: '1.1rem',
            textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(37,99,235,0.15)',
            transition: 'background 0.2s',
          }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About; 