import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo">
            <img
  src="/logo-white.webp"
  srcSet="/logo-white-180.webp 180w, /logo-white-360.webp 360w"
  sizes="180px"
  width="180"
  height="48"
  alt="International Schooling"
  loading="lazy"
/>
            <p>Your Location, Your School, Your Time.</p>
            <div className="social-icons"><a href="#">f</a><a href="#">X</a><a href="#">in</a><a href="#">📎</a></div>
          </div>
          <div><h4>COUNTRIES</h4><div className="country-list"><Link to="/online-school-in-uae">UAE</Link><a href="#">USA</a><a href="#">Mexico</a><a href="#">Brazil</a><a href="#">Colombia</a><a href="#">Saudi</a><a href="#">China</a><a href="#">Spain</a></div></div>
          <div><h4>QUICK LINKS</h4><ul><li><a href="#">Mobile App</a></li><li><a href="#">Partnerships</a></li><li><a href="#">Blog</a></li><li><a href="#">Careers</a></li><li><a href="#">Scholarship Program</a></li></ul></div>
          <div><h4>CONTACT</h4><ul><li className="uae-link"><Link to="/online-school-in-uae">Online School in UAE</Link></li><li><a href="#">Contact Us</a></li><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Use</a></li></ul></div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2026 - International Schooling - All Rights Reserved.</p>
          <div className="live-chat-buttons"><button className="btn-livechat">Connect on Live Chat</button><button className="btn-rep">Talk to a Representative Live</button></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;