import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#050510",
    color: "#cbd5e1",
    padding: "3rem 0 1.5rem",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  };

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "2rem",
    marginBottom: "2rem",
  };

  const logoStyle = {
    height: "48px",
    marginBottom: "1rem",
    filter: "brightness(0) invert(1)",
  };

  const headingStyle = {
    fontSize: "1.125rem",
    fontWeight: 600,
    marginBottom: "1rem",
    color: "white",
  };

  const linkStyle = {
    color: "#cbd5e1",
    textDecoration: "none",
    transition: "color 0.2s",
    fontSize: "0.875rem",
    display: "block",
    marginBottom: "0.5rem",
  };

  const countryGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "0.25rem",
  };

  const socialIconStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.1)",
    marginRight: "0.5rem",
    color: "white",
    textDecoration: "none",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          <div>
            <img src="/logo-white.webp" alt="International Schooling" style={logoStyle} />
            <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>Your Location, Your School, Your Time.</p>
            <div style={{ marginTop: "1rem" }}>
              <a href="#" style={socialIconStyle}>f</a>
              <a href="#" style={socialIconStyle}>X</a>
              <a href="#" style={socialIconStyle}>in</a>
              <a href="#" style={socialIconStyle}>📎</a>
            </div>
          </div>
          <div>
            <h4 style={headingStyle}>COUNTRIES</h4>
            <div style={countryGridStyle}>
              <Link to="/online-school-in-uae" style={linkStyle}>UAE</Link>
              <a href="#" style={linkStyle}>USA</a>
              <a href="#" style={linkStyle}>Mexico</a>
              <a href="#" style={linkStyle}>Brazil</a>
              <a href="#" style={linkStyle}>Colombia</a>
              <a href="#" style={linkStyle}>Saudi</a>
              <a href="#" style={linkStyle}>China</a>
              <a href="#" style={linkStyle}>Spain</a>
            </div>
          </div>
          <div>
            <h4 style={headingStyle}>QUICK LINKS</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#" style={linkStyle}>Mobile App</a></li>
              <li><a href="#" style={linkStyle}>Partnerships</a></li>
              <li><a href="#" style={linkStyle}>Blog</a></li>
              <li><a href="#" style={linkStyle}>Careers</a></li>
              <li><a href="#" style={linkStyle}>Scholarship Program</a></li>
            </ul>
          </div>
          <div>
            <h4 style={headingStyle}>CONTACT</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link to="/online-school-in-uae" style={{ ...linkStyle, color: "#60a5fa", fontWeight: 500 }}>Online School in UAE</Link>
              </li>
              <li><a href="#" style={linkStyle}>Contact Us</a></li>
              <li><a href="#" style={linkStyle}>Privacy Policy</a></li>
              <li><a href="#" style={linkStyle}>Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #334155", paddingTop: "1.5rem", textAlign: "center", fontSize: "0.75rem" }}>
          <p>Copyright © {new Date().getFullYear()} - International Schooling - All Rights Reserved.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
            <button style={{ background: "#3b82f6", border: "none", padding: "0.5rem 1.25rem", borderRadius: "9999px", color: "white", cursor: "pointer" }}>Connect on Live Chat</button>
            <button style={{ background: "#334155", border: "none", padding: "0.5rem 1.25rem", borderRadius: "9999px", color: "white", cursor: "pointer" }}>Talk to a Representative Live</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;