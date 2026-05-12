import React from 'react';
import './Graduation.css';

const Graduation = () => {
  return (
    <section className="graduation">
      <div className="container">
        <div className="graduation-badge">First Ever Graduation</div>
        <h2>Graduation Ceremony 2025 – Dubai</h2>
        <p className="graduation-description">
          International Schooling hosted its first Graduation Ceremony in 2025 at
          Atlantis, The Palm, Dubai, reflecting our global community and commitment
          to a premium schooling experience beyond the classroom.
        </p>
        <div className="graduation-image-wrapper">
          <div className="graduation-image-glow"></div>
          <img
            src="/graduation.webp"
            srcSet="/graduation-400.webp 400w, /graduation-800.webp 800w, /graduation-1200.webp 1200w"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
            width="1200"
            height="600"
            loading="lazy"
            alt="Graduation ceremony 2025 at Atlantis The Palm, Dubai"
            className="graduation-image"
          />
        </div>
        <div className="graduation-stats">
          <div className="stat">
            <span className="stat-value">150+</span>
            <span className="stat-label">Graduates</span>
          </div>
          <div className="stat">
            <span className="stat-value">30+</span>
            <span className="stat-label">Countries</span>
          </div>
          <div className="stat">
            <span className="stat-value">100%</span>
            <span className="stat-label">University Acceptance</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graduation;