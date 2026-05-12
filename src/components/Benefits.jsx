import React from "react";
import { Award, Trophy, Heart, Lightbulb, Languages, DollarSign, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Award size={32} />,
      title: "Fully Accredited U.S. Schooling",
      desc: "Receive a globally recognized U.S. High School Diploma accepted by universities worldwide.",
    },
    {
      icon: <Trophy size={32} />,
      title: "NCAA & College Board Approved",
      desc: "Ideal for students aiming for international universities, AP courses, or scholarships.",
    },
    {
      icon: <Heart size={32} />,
      title: "Inclusive for All Learning Styles",
      desc: "Ideal for advanced learners, struggling students, or children needing personalized pacing.",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Strong Academic Foundation",
      desc: "U.S. curriculum focused on critical thinking, creativity, and practical skills.",
    },
    {
      icon: <Languages size={32} />,
      title: "Multilingual Teacher Support",
      desc: "Teachers from 50+ countries speaking 40+ languages support diverse learners.",
    },
    {
      icon: <DollarSign size={32} />,
      title: "Lower Fees Than Traditional Schools",
      desc: "Premium American education at the most affordable cost in the UAE.",
    },
    {
      icon: <Users size={32} />,
      title: "Support for Multicultural Families",
      desc: "Designed for families from 200+ nationalities living in the UAE.",
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

  const iconStyle = {
    color: "#3b82f6",
    marginBottom: "1rem",
  };

  const titleStyle = {
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: "#ffffff",
  };

  const descStyle = {
    color: "#cbd5e1",
    fontSize: "0.9rem",
    lineHeight: 1.5,
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Benefits of Online School for UAE Families</h2>
        <div style={gridStyle}>
          {benefits.map((benefit, i) => (
            <div
              key={i}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.background = "rgba(59,130,246,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(20,20,45,0.7)";
              }}
            >
              <div style={iconStyle}>{benefit.icon}</div>
              <h3 style={titleStyle}>{benefit.title}</h3>
              <p style={descStyle}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;