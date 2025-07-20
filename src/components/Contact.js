import React from 'react';

const Contact = () => (
  <section id="contact" className="contact aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-offset="120" style={{ position: 'relative', overflow: 'hidden' }}>
    {/* Animated background */}
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      style={{
        position: 'absolute',
        bottom: '-60px',
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
      <h2 data-aos="fade-up" data-aos-delay="100">Get In Touch</h2>
      <div className="contact-content" data-aos="fade-up" data-aos-delay="200">
        <div className="contact-info">
          <h3 data-aos="fade-right" data-aos-delay="300">Let's work together!</h3>
          <p>I'm always interested in new opportunities and exciting projects.</p>
          <div className="contact-links">
            <a href="mailto:diyajindal265@gmail.com" className="contact-link">
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
);

export default Contact; 