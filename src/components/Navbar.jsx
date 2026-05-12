import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Style objects
  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: scrolled
      ? "rgba(10, 10, 26, 0.95)"
      : "rgba(10, 10, 26, 0.85)",
    backdropFilter: "blur(12px)",
    zIndex: 1000,
    transition: "all 0.3s ease",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  };

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1rem",
  };

  const navbarContentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.75rem 0",
  };

  const logoStyle = {
    height: "44px",
    width: "auto",
    transition: "transform 0.2s",
  };
  const logoHoverStyle = { transform: "scale(1.02)" };

  const desktopNavStyle = {
    display: "none",
    alignItems: "center",
    gap: "1.5rem",
  };
  const desktopNavMedia = { "@media (min-width: 1024px)": { display: "flex" } }; // won't work inline, we'll use CSS? No, we'll use a separate style for media. Simpler: use CSS-in-JS not possible, but we can use a useEffect to add class or just rely on responsive design with window width? Better to keep a small media query inside a style tag? The requirement is no external CSS, but we can add a `<style>` tag inside component? That would work but breaks "no external CSS"? It's fine to add a style tag for media queries, because it's still in the component. We'll add a small style tag for the media query.

  // We'll add a <style> tag for responsive desktop nav.
  // Actually we'll just use a media query in a <style> element inside the component.
  // But for cleanliness, we'll implement mobile menu toggle and hide/show via state.

  return (
    <>
      <style>{`
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 1.5rem;
        }
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex;
          }
          .mobile-menu-btn {
            display: none;
          }
        }
      `}</style>
      <nav style={navbarStyle}>
        <div style={containerStyle}>
          <div style={navbarContentStyle}>
            <a href="/" style={{ display: "inline-block" }}>
              <img
                src="/logo.webp"
                alt="International Schooling"
                width="200"
                height="56"
                style={{ ...logoStyle, filter: "brightness(0) invert(1)" }}
                loading="eager"
                fetchpriority="high"
              />
            </a>
            <div className="desktop-nav">
              <div style={{ position: "relative" }}>
                <button style={navButtonStyle}>About ▼</button>
                <div style={dropdownMenuStyle}>
                  <a href="#">About Us</a>
                  <a href="#">Accreditations</a>
                  <a href="#">Leadership</a>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <button style={navButtonStyle}>Program ▼</button>
                <div style={dropdownMenuStyle}>
                  <a href="#">One-To-One</a>
                  <a href="#">Group Learning</a>
                  <a href="#">Self-Learning</a>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <button style={navButtonStyle}>Resources ▼</button>
                <div style={dropdownMenuStyle}>
                  <a href="#">Student Zone</a>
                  <a href="#">Parent Portal</a>
                  <a href="#">Blog</a>
                </div>
              </div>
              <a href="#" style={outlineButtonStyle}>BOOK DEMO</a>
              <a href="#" style={outlineButtonStyle}>CALL BACK</a>
              <a href="#" style={linkStyle}>LOG IN</a>
              <a href="#" style={primaryButtonStyle}>ENROLL NOW</a>
            </div>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={mobileMenuBtnStyle}
            >
              ☰
            </button>
          </div>
          {mobileOpen && (
            <div style={mobileNavStyle}>
              <div style={mobileNavItemStyle}><button style={mobileNavBtnStyle}>About +</button></div>
              <div style={mobileNavItemStyle}><button style={mobileNavBtnStyle}>Program +</button></div>
              <div style={mobileNavItemStyle}><button style={mobileNavBtnStyle}>Resources +</button></div>
              <div style={mobileActionsStyle}>
                <a href="#" style={mobileOutlineBtn}>BOOK DEMO</a>
                <a href="#" style={mobileOutlineBtn}>CALL BACK</a>
                <a href="#" style={mobileLinkStyle}>LOG IN</a>
                <a href="#" style={mobilePrimaryBtn}>ENROLL NOW →</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

// Define helper style objects outside component for performance
const navButtonStyle = {
  background: "none",
  border: "none",
  fontSize: "0.95rem",
  fontWeight: 500,
  color: "#e2e8f0",
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
  cursor: "pointer",
  padding: "0.5rem 0",
  transition: "color 0.2s",
};

const dropdownMenuStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  marginTop: "0.5rem",
  background: "rgba(20,20,45,0.9)",
  backdropFilter: "blur(12px)",
  borderRadius: "0.75rem",
  border: "1px solid rgba(255,255,255,0.1)",
  width: "220px",
  opacity: 0,
  visibility: "hidden",
  transform: "translateY(-8px)",
  transition: "all 0.2s",
  zIndex: 100,
  pointerEvents: "none", // we'll use parent hover
};

const outlineButtonStyle = {
  border: "1px solid rgba(255,255,255,0.2)",
  padding: "0.5rem 1.25rem",
  borderRadius: "9999px",
  fontWeight: 500,
  fontSize: "0.85rem",
  color: "#e2e8f0",
  transition: "all 0.2s",
  textDecoration: "none",
};

const linkStyle = {
  fontWeight: 500,
  color: "#e2e8f0",
  textDecoration: "none",
};

const primaryButtonStyle = {
  background: "linear-gradient(95deg, #3b82f6, #2563eb)",
  color: "white",
  padding: "0.5rem 1.25rem",
  borderRadius: "9999px",
  fontWeight: 600,
  fontSize: "0.85rem",
  textDecoration: "none",
  boxShadow: "0 2px 5px rgba(59,130,246,0.3)",
};

const mobileMenuBtnStyle = {
  display: "block",
  background: "none",
  border: "none",
  fontSize: "1.75rem",
  color: "white",
  padding: "0.5rem",
  cursor: "pointer",
};

const mobileNavStyle = {
  padding: "1rem 0",
  borderTop: "1px solid rgba(255,255,255,0.1)",
};

const mobileNavItemStyle = {
  borderBottom: "1px solid rgba(255,255,255,0.05)",
};

const mobileNavBtnStyle = {
  width: "100%",
  textAlign: "left",
  padding: "0.75rem 0",
  background: "none",
  border: "none",
  fontWeight: 500,
  color: "#e2e8f0",
  fontSize: "1rem",
  display: "flex",
  justifyContent: "space-between",
};

const mobileActionsStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  marginTop: "1rem",
};

const mobileOutlineBtn = {
  border: "1px solid rgba(255,255,255,0.2)",
  textAlign: "center",
  padding: "0.75rem",
  borderRadius: "9999px",
  fontWeight: 500,
  color: "#e2e8f0",
  textDecoration: "none",
};

const mobileLinkStyle = {
  textAlign: "center",
  padding: "0.5rem",
  color: "#e2e8f0",
  textDecoration: "none",
};

const mobilePrimaryBtn = {
  background: "linear-gradient(95deg, #3b82f6, #2563eb)",
  color: "white",
  textAlign: "center",
  padding: "0.75rem",
  borderRadius: "9999px",
  fontWeight: 600,
  textDecoration: "none",
};

export default Navbar;