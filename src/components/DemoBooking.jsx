import React, { useState } from "react";
import { Calendar, Clock, MapPin, X } from "lucide-react";

const DemoBooking = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    date: "",
    time: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo booked! We'll contact you soon.");
    setIsOpen(false);
  };

  // Inline style objects
  const sectionStyle = {
    padding: "4rem 0",
    background: "linear-gradient(135deg, rgba(30,58,138,0.5), rgba(88,28,135,0.5))",
    textAlign: "center",
  };

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1rem",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: 700,
    background: "linear-gradient(135deg, #ffffff, #a0c0ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "1rem",
  };

  const descriptionStyle = {
    color: "#cbd5e1",
    maxWidth: "600px",
    margin: "0 auto 2rem",
    lineHeight: 1.6,
  };

  const buttonStyle = {
    background: "linear-gradient(95deg, #3b82f6, #2563eb)",
    border: "none",
    padding: "0.75rem 2rem",
    borderRadius: "0.75rem",
    fontWeight: 700,
    fontSize: "1rem",
    color: "white",
    cursor: "pointer",
    transition: "all 0.2s",
    boxShadow: "0 4px 14px rgba(59,130,246,0.3)",
  };

  // Modal overlay
  const overlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "1rem",
  };

  const modalStyle = {
    background: "rgba(20,20,45,0.95)",
    backdropFilter: "blur(12px)",
    borderRadius: "1.5rem",
    maxWidth: "500px",
    width: "100%",
    padding: "1.5rem",
    border: "1px solid rgba(255,255,255,0.1)",
    position: "relative",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "none",
    border: "none",
    color: "#94a3b8",
    cursor: "pointer",
    transition: "color 0.2s",
  };

  const modalTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: "#ffffff",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    background: "rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "0.75rem",
    color: "white",
    fontSize: "0.9rem",
    outline: "none",
  };

  const selectStyle = {
    ...inputStyle,
  };

  const dateTimeGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.5rem",
  };

  const submitButtonStyle = {
    ...buttonStyle,
    width: "100%",
    padding: "0.75rem",
    marginTop: "0.5rem",
  };

  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Book Free School Demo</h2>
        <p style={descriptionStyle}>
          Our academic expert will guide you through our programs and answer your questions.
        </p>
        <button style={buttonStyle} onClick={() => setIsOpen(true)}>
          Schedule Your Free Demo
        </button>
      </div>

      {isOpen && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <button
              style={closeButtonStyle}
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <h3 style={modalTitleStyle}>Book Your Free Demo</h3>
            <form onSubmit={handleSubmit} style={formStyle}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                style={selectStyle}
                required
              >
                <option value="">Select Grade</option>
                <option>KG-5</option>
                <option>6-8</option>
                <option>9-12</option>
              </select>
              <div style={dateTimeGridStyle}>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <button type="submit" style={submitButtonStyle}>
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoBooking;