import React from 'react';
import './Graduation.css';

const Graduation = () => {
  // Placeholder image – replace with your actual WebP image path
  const imageBase = '/graduation-placeholder.webp';
  return (
    <section className="graduation">
      <div className="container">
        <h2>Graduation Ceremony 2025 - Dubai</h2>
        <p>
          International Schooling hosted its first Graduation Ceremony in 2025 at
          Atlantis, The Palm, Dubai, reflecting our global community and commitment
          to a premium schooling experience beyond the classroom.
        </p>
        <div className="graduation-image">
         <img
  src="/graduation.webp"
  srcSet="/graduation-400.webp 400w, /graduation-800.webp 800w, /graduation-1200.webp 1200w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  width="1200"
  height="600"
  loading="lazy"
  alt="Graduation"
/>
        </div>
      </div>
    </section>
  );
};

export default Graduation;