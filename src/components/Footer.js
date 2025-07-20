import React from 'react';

const Footer = () => (
  <footer className="footer aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-offset="80" style={{ position: 'relative', overflow: 'hidden' }}>
    {/* Animated background */}
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      style={{
        position: 'absolute',
        top: '-40px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, #667eea 0%, #764ba2 100%)',
        opacity: 0.10,
        zIndex: 0,
        borderRadius: '50%',
        pointerEvents: 'none',
      }}
    />
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <p>&copy; 2024 DIYA JINDAL. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer; 