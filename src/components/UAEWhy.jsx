import React from 'react';

const UAEWhy = () => {
  const reasons = [
    {
      title: "Accredited & University-Ready",
      desc: "Your child earns recognized transcripts and a U.S. High School Diploma from a fully accredited school.",
    },
    {
      title: "Schedules That Fit UAE Life",
      desc: "Live one-to-one or group classes designed for maximum flexibility around busy routines.",
    },
    {
      title: "Built for Multilingual Learners",
      desc: "Support for students who speak multiple languages, with teachers speaking 40+ languages.",
    },
  ];

  const sectionStyle = {
    padding: "4rem 0",
    background: "linear-gradient(135deg, #0f0f2a 0%, #0a0a1a 100%)",
  };

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1rem",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: 700,
    textAlign: "center",
    background: "linear-gradient(135deg, #ffffff, #a0c0ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "2rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
  };

  const cardStyle = {
    background: "rgba(20,20,45,0.7)",
    backdropFilter: "blur(8px)",
    borderRadius: "1rem",
    padding: "1.5rem",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "transform 0.3s, background 0.3s",
  };

  const titleStyle = {
    fontSize: "1.25rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: "#3b82f6",
  };

  const descStyle = {
    color: "#cbd5e1",
    lineHeight: 1.6,
    fontSize: "0.9rem",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          Why UAE Families Choose International Online School in UAE
        </h2>
        <div style={gridStyle}>
          {reasons.map((reason, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.background = "rgba(59,130,246,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(20,20,45,0.7)";
              }}
            >
              <h3 style={titleStyle}>{reason.title}</h3>
              <p style={descStyle}>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UAEWhy;