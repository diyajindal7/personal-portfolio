import React from 'react';

const Skills = () => (
  <section id="skills" className="skills aos-init aos-animate" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="120" style={{ position: 'relative', overflow: 'hidden' }}>
    {/* Animated background */}
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      style={{
        position: 'absolute',
        bottom: '-60px',
        left: '-60px',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, #667eea 0%, #764ba2 100%)',
        opacity: 0.13,
        zIndex: 0,
        borderRadius: '50%',
        pointerEvents: 'none',
      }}
    />
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <h2 data-aos="fade-left" data-aos-delay="100">Skills & Technologies</h2>
      <div className="skills-grid">
        <div className="skill-category" data-aos="zoom-in" data-aos-delay="200">
          <h3>Frontend</h3>
          <div className="skill-items">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML/CSS</span>
            <span>TypeScript</span>
          </div>
        </div>
        <div className="skill-category" data-aos="zoom-in" data-aos-delay="300">
          <h3>Backend</h3>
          <div className="skill-items">
            <span>Node.js</span>
            <span>Python</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
        </div>
        <div className="skill-category" data-aos="zoom-in" data-aos-delay="400">
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
);

export default Skills; 