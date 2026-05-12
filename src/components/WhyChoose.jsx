import React from "react";
import { Award, Clock, Languages, Compass, Home, Eye } from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      icon: <Award size={32} />,
      title: "Accredited & University-Ready",
      problem: "Parents want a credible U.S. high school qualification.",
      solution: "Your child earns recognized transcripts and a U.S. High School Diploma from a fully accredited school.",
    },
    {
      icon: <Clock size={32} />,
      title: "Schedules That Fit UAE Life",
      problem: "Busy routines make fixed school timings difficult.",
      solution: "We offer Live one-to-one or group classes designed for maximum flexibility.",
    },
    {
      icon: <Languages size={32} />,
      title: "Built for Multilingual Learners",
      problem: "Students need strong academic English support.",
      solution: "Our teachers, from 50+ countries speaking 40+ languages, guide learners with patient instruction.",
    },
    {
      icon: <Compass size={32} />,
      title: "Great for Families Who Travel",
      problem: "Relocation interrupts learning in traditional systems.",
      solution: "Your child can continue the same program seamlessly, even if you move across cities or countries.",
    },
    {
      icon: <Home size={32} />,
      title: "Comfortable & Safe Learning",
      problem: "Commute time creates unnecessary stress.",
      solution: "Students learn from home with a consistent, stress-free routine.",
    },
    {
      icon: <Eye size={32} />,
      title: "Parent Visibility",
      problem: "Parents want clear insight into their child's progress.",
      solution: "We provide live performance tracking and regular updates.",
    },
  ];

  // Inline style objects
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
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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

  const iconStyle = {
    color: "#3b82f6",
    marginBottom: "1rem",
  };

  const titleStyle = {
    fontSize: "1.25rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: "#ffffff",
  };

  const problemStyle = {
    color: "#f87171",
    fontSize: "0.85rem",
    marginBottom: "0.5rem",
  };

  const solutionStyle = {
    color: "#4ade80",
    fontSize: "0.85rem",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          Why UAE Families Choose International Online School in UAE
        </h2>
        <div style={gridStyle}>
          {features.map((feat, i) => (
            <div
              key={i}
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
              <div style={iconStyle}>{feat.icon}</div>
              <h3 style={titleStyle}>{feat.title}</h3>
              <p style={problemStyle}>Problem: {feat.problem}</p>
              <p style={solutionStyle}>Solution: {feat.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;