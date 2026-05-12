import React from 'react';
import './UAEHero.css';

const UAEHero = () => {
  return (
    <section className="uae-hero">
      <div className="container">
        <h1>Most Trusted & Recommended Online School in UAE</h1>
        <p>Trusted by families in the UAE since 2014 | 2,000+ UAE families</p>
        <div className="uae-stats">
          <div><strong>2500+</strong> Students from UAE</div>
          <div><strong>600+</strong> Certified Teachers</div>
          <div><strong>500+</strong> Course Options</div>
        </div>
        <button className="btn-enroll">Get Free School Demo</button>
      </div>
    </section>
  );
};

export default UAEHero;