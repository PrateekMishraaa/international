import React from 'react';
import './TrustedSection.css';

const TrustedSection = () => {
  const stats = [
    { value: '15,000+', label: 'Students' },
    { value: '190+', label: 'Countries' },
    { value: '600+', label: 'Teachers' },
    { value: '40+', label: 'Languages' },
  ];

  return (
    <section className="trusted-section">
      <div className="container">
        <div className="trusted-badge">Proud Member of United Nations</div>
        <h2>The Most Trusted & Recommended American Online School</h2>
        <p className="trusted-description">
          International Schooling is the best American online school serving <strong>15,000+ students</strong> and is the most trusted & recommended American online school by parents across <strong>190+ countries</strong>. 
          International Schooling, fully accredited by <strong>NEASC, WASC & Cognia, USA</strong>, approved by <strong>College Board, USA</strong> and <strong>National Collegiate Athletics Association (NCAA, USA)</strong> offers the American curriculum for Grades KG-12, supported by <strong>600+ internationally trained and certified teachers</strong> speaking <strong>40+ languages</strong>. 
          As a proud member of United Nations, International Schooling is <strong className="highlight">"Changing Lives for the Best™"</strong> by spreading smiles across the world with premium quality school education.
        </p>
        <div className="trusted-stats">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;