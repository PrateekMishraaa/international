import React from "react";

const FeeStructure = () => {
  const oneToOne = [
    { grade: "Elementary", aed: "AED 8,998", usd: "$2,450 USD" },
    { grade: "Middle School", aed: "AED 10,650", usd: "$2,900 USD" },
    { grade: "High School", aed: "AED 15,057", usd: "$4,100 USD" },
  ];
  const group = [
    { grade: "Elementary", aed: "AED 6,978", usd: "$1,900 USD" },
    { grade: "Middle School", aed: "AED 8,263", usd: "$2,250 USD" },
    { grade: "High School", aed: "AED 12,119", usd: "$3,300 USD" },
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
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  };

  const cardStyle = {
    background: "rgba(20,20,45,0.7)",
    backdropFilter: "blur(8px)",
    borderRadius: "1rem",
    padding: "1.5rem",
    border: "1px solid rgba(255,255,255,0.1)",
  };

  const cardTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "1rem",
    color: "#3b82f6",
  };

  const tableRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 0",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  };

  const gradeStyle = {
    fontWeight: 600,
    color: "#ffffff",
  };

  const aedStyle = {
    color: "#cbd5e1",
  };

  const usdStyle = {
    color: "#94a3b8",
    fontSize: "0.8rem",
  };

  const noteStyle = {
    fontSize: "0.7rem",
    color: "#94a3b8",
    textAlign: "center",
    marginTop: "1.5rem",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Fee Structure</h2>
        <div style={gridStyle}>
          {/* One-to-One Learning Card */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>One-to-One Learning</h3>
            <div>
              {oneToOne.map((item, i) => (
                <div key={i} style={tableRowStyle}>
                  <span style={gradeStyle}>{item.grade}</span>
                  <span style={aedStyle}>{item.aed}</span>
                  <span style={usdStyle}>{item.usd}</span>
                </div>
              ))}
            </div>
            <p style={noteStyle}>
              Final fees may vary based on student requirements and enrollment plan.
            </p>
          </div>

          {/* Group Learning Card */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Group Learning</h3>
            <div>
              {group.map((item, i) => (
                <div key={i} style={tableRowStyle}>
                  <span style={gradeStyle}>{item.grade}</span>
                  <span style={aedStyle}>{item.aed}</span>
                  <span style={usdStyle}>{item.usd}</span>
                </div>
              ))}
            </div>
            <p style={noteStyle}>
              Final fees may vary based on student requirements and enrollment plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;