import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">
          <span>🏆 15,000+ Students</span>
          <span>🌍 From 190+ Countries</span>
          <span>👩‍🏫 600+ Teachers</span>
        </div>
        <h1>The Most Trusted & Recommended<br />International Online School</h1>
        <p className="hero-sub">Fully Accredited by NEASC, WASC & Cognia, USA | College Board Approved | NCAA Recognized</p>
        <p className="hero-accred">Globally Recognized | KG-Grade 12 American Curriculum</p>
        <button className="btn-enroll">ENROLL NOW</button>
        <div className="stats-row">
          <div className="stat-item"><span className="stat-number">3.8</span><span className="stat-label">Average GPA</span></div>
          <div className="stat-item"><span className="stat-number">100%</span><span className="stat-label">Universities Acceptance</span></div>
          <div className="stat-item"><span className="stat-number">7%</span><span className="stat-label">Acceptance in Ivy League</span></div>
          <div className="stat-item"><span className="stat-number">75%</span><span className="stat-label">International Scholarships</span></div>
        </div>
        <div className="university-logos">
          <span>Stanford University</span> <span>University of Michigan</span> <span>South Africa</span> <span>Netherlands</span> <span>USA</span> <span>UAE</span> <span>Philippines</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;