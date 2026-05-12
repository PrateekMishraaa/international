import React from 'react';
import './UAEWhy.css';

const UAEWhy = () => {
  const reasons = [
    { title: "Accredited & University-Ready", desc: "Your child earns recognized transcripts and a U.S. High School Diploma from a fully accredited school." },
    { title: "Schedules That Fit UAE Life", desc: "Live one-to-one or group classes designed for maximum flexibility around busy routines." },
    { title: "Built for Multilingual Learners", desc: "Support for students who speak multiple languages, with teachers speaking 40+ languages." }
  ];
  return (
    <section className="why-uae">
      <div className="container">
        <h2>Why UAE Families Choose International Online School in UAE</h2>
        <div className="reasons">
          {reasons.map((r, i) => (
            <div key={i} className="reason">
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UAEWhy;