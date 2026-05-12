import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <a href="/" className="logo">
          
<img
  src="/logo.webp"
  srcSet=""
  sizes=""
  width="140"
  height="40"
  alt="Logo"
  loading="eager"
  fetchpriority="high"
/>    </a>
          <div className="desktop-nav">
            <div className="nav-dropdown">
              <button className="nav-btn">About <span className="dropdown-icon">▼</span></button>
              <div className="dropdown-menu">
                <a href="#">About Us</a><a href="#">Accreditations</a><a href="#">Leadership</a>
              </div>
            </div>
            <div className="nav-dropdown">
              <button className="nav-btn">Program <span className="dropdown-icon">▼</span></button>
              <div className="dropdown-menu">
                <a href="#">One-To-One</a><a href="#">Group Learning</a><a href="#">Self-Learning</a>
              </div>
            </div>
            <div className="nav-dropdown">
              <button className="nav-btn">Resources <span className="dropdown-icon">▼</span></button>
              <div className="dropdown-menu">
                <a href="#">Student Zone</a><a href="#">Parent Portal</a><a href="#">Blog</a>
              </div>
            </div>
            <a href="#" className="nav-btn-outline">BOOK DEMO</a>
            <a href="#" className="nav-btn-outline">CALL BACK</a>
            <a href="#" className="nav-link">LOG IN</a>
            <a href="#" className="nav-btn-primary">ENROLL NOW</a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>☰</button>
        </div>
        {mobileOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-item"><button className="mobile-nav-btn">About +</button></div>
            <div className="mobile-nav-item"><button className="mobile-nav-btn">Program +</button></div>
            <div className="mobile-nav-item"><button className="mobile-nav-btn">Resources +</button></div>
            <div className="mobile-actions"><a href="#" className="mobile-btn-primary">ENROLL NOW</a><a href="#">LOG IN</a></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;