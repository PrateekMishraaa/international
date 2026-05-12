import React from "react";
import { Users, User, BookOpen, Calendar, CheckCircle } from "lucide-react";

const LearningPrograms = () => {
  const programs = [
    {
      icon: <Users size={48} />,
      title: "Live Group Classes",
      sub: "1 Teacher | 10-15 Students",
      desc: "Dynamic classroom experience with fixed timings and collaborative projects.",
      features: [
        "Group Live Classes",
        "Fixed Timings",
        "60 min each",
        "Fixed Assessments",
        "Collaborative Assignments",
        "3 Counseling Sessions",
        "3 Career Sessions",
        "3 Parent Meetings",
      ],
    },
    {
      icon: <User size={48} />,
      title: "Live One-to-One Classes",
      sub: "1 Teacher | 1 Student",
      desc: "Personalized live classes designed to fit your schedule.",
      features: [
        "One-To-One Live",
        "Flexible Timings",
        "50 min each",
        "Flexible Assessments",
        "Exempt from group work",
        "6 Counseling",
        "6 Career Sessions",
        "6 Parent Meetings",
      ],
    },
    {
      icon: <BookOpen size={48} />,
      title: "Self-Learning",
      sub: "500+ Courses",
      desc: "Self-paced study with teacher feedback.",
      features: [
        "Self-paced Study",
        "Flexible timings",
        "No Live Classes",
        "Flexible dates",
        "Personalized material",
        "No deadlines",
        "24/7 support",
        "500+ courses",
      ],
    },
    {
      icon: <Calendar size={48} />,
      title: "Self-Learning Plus",
      sub: "500+ Courses + 1 Live Class/Week",
      desc: "Self-paced plus doubt clearing sessions.",
      features: [
        "Self-paced with doubt clearing",
        "Flexible timings",
        "1 live class/week (60 min)",
        "Flexible assessments",
        "Personalized material",
        "No deadlines",
        "Mon-Fri support",
        "500+ courses",
      ],
    },
  ];

  // Inline style objects
  const sectionStyle = {
    padding: "4rem 0",
    background: "rgba(15, 15, 42, 0.3)",
    backdropFilter: "blur(8px)",
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
    fontSize: "1.25rem",
    fontWeight: 700,
    marginBottom: "0.25rem",
    color: "#ffffff",
  };

  const subStyle = {
    color: "#3b82f6",
    fontSize: "0.8rem",
    marginBottom: "0.5rem",
  };

  const descStyle = {
    color: "#cbd5e1",
    fontSize: "0.85rem",
    marginBottom: "1rem",
    lineHeight: 1.5,
  };

  const featuresListStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const featureItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
    fontSize: "0.8rem",
    color: "#b0b0d0",
    marginBottom: "0.5rem",
  };

  const checkIconStyle = {
    color: "#4ade80",
    flexShrink: 0,
    marginTop: "2px",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Choose the Learning Plan That Fits Your Child</h2>
        <div style={gridStyle}>
          {programs.map((program, i) => (
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
              <div style={iconStyle}>{program.icon}</div>
              <h3 style={titleStyle}>{program.title}</h3>
              <p style={subStyle}>{program.sub}</p>
              <p style={descStyle}>{program.desc}</p>
              <ul style={featuresListStyle}>
                {program.features.map((feat, idx) => (
                  <li key={idx} style={featureItemStyle}>
                    <CheckCircle size={14} style={checkIconStyle} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPrograms;