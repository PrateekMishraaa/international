import React, { lazy, Suspense, useState } from "react";
import {
  Users,
  Globe,
  BookOpen,
  Calendar,
  Star,
  ChevronDown,
  CheckCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Lazy load non-critical sections (these components keep their own styling)
const DemoBooking = lazy(() => import("../components/DemoBooking"));
const WhyChoose = lazy(() => import("../components/WhyChoose"));
const LearningPrograms = lazy(() => import("../components/LearningPrograms"));
const Benefits = lazy(() => import("../components/Benefits"));
const FeeStructure = lazy(() => import("../components/FeeStructure"));
const EnrollmentSteps = lazy(() => import("../components/EnrollmentSteps"));
const FAQ = lazy(() => import("../components/FAQ"));

const UAE = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const stats = [
    { icon: <Users size={28} />, value: "2,500+", label: "Students from UAE" },
    { icon: <Globe size={28} />, value: "600+", label: "Certified Teachers" },
    { icon: <BookOpen size={28} />, value: "500+", label: "Course Options" },
    { icon: <Calendar size={28} />, value: "11+", label: "Years of Trust" },
  ];
  const logos = ["NEASC", "WASC", "Cognia", "College Board", "NCAA"];
  const reviews = [
    { quote: "International Schooling provided my child with a seamless and high-quality education.", name: "Parent From Colombia, Living in UAE" },
    { quote: "The flexibility and support have been amazing for our family.", name: "Parent From Malaysia, Living in UAE" },
    { quote: "My child's academic growth has been remarkable since joining.", name: "Parent From UAE" },
  ];
  const faqs = [
    { q: "Is your diploma accepted in the UAE and internationally?", a: "Yes. Our accreditation supports recognition of transcripts and diploma for admissions and transfers." },
    { q: "Are class timings suitable for UAE time zones?", a: "Yes. Group schedules are GST-friendly, and one-to-one classes are fully flexible." },
    { q: "Is it suitable for expat families?", a: "Yes. It works well for families who relocate or travel often." },
    { q: "What grades do you offer?", a: "We offer a full KG-12 American curriculum." },
    { q: "How do students socialize?", a: "Through live classes, group projects, clubs, and online activities." },
  ];

  // Inline style objects
  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a0a1a 0%, #0f0f2a 100%)",
    color: "#ffffff",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const heroStyle = {
    position: "relative",
    background: "linear-gradient(135deg, #1e3a8a, #312e81, #4c1d95)",
    padding: "6rem 0 4rem",
    textAlign: "center",
    overflow: "hidden",
  };

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1rem",
  };

  const statsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
    margin: "2rem 0",
  };

  const statCardStyle = {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(8px)",
    borderRadius: "1rem",
    padding: "1rem 1.5rem",
    minWidth: "130px",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "transform 0.2s",
  };

  const statValueStyle = {
    fontSize: "2rem",
    fontWeight: 800,
    background: "linear-gradient(135deg, #ffffff, #a0c0ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    display: "block",
  };

  const statLabelStyle = {
    fontSize: "0.75rem",
    color: "#b0b0d0",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  const buttonStyle = {
    background: "linear-gradient(95deg, #3b82f6, #2563eb)",
    border: "none",
    padding: "0.75rem 2rem",
    borderRadius: "50px",
    fontWeight: 700,
    fontSize: "1rem",
    color: "white",
    cursor: "pointer",
    transition: "all 0.2s",
    boxShadow: "0 4px 14px rgba(59,130,246,0.3)",
    margin: "1rem 0",
  };

  const sectionStyle = {
    padding: "3rem 0",
    textAlign: "center",
  };

  const sectionAltStyle = {
    ...sectionStyle,
    background: "rgba(15, 15, 42, 0.5)",
    backdropFilter: "blur(8px)",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: 700,
    background: "linear-gradient(135deg, #ffffff, #a0c0ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "2rem",
  };

  const logosContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
  };

  const logoSpanStyle = {
    background: "linear-gradient(135deg, #1e3a8a, #312e81)",
    padding: "0.5rem 1.25rem",
    borderRadius: "40px",
    fontWeight: 600,
    fontSize: "0.9rem",
    color: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  };

  const reviewGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
  };

  const reviewCardStyle = {
    background: "rgba(20,20,45,0.7)",
    backdropFilter: "blur(8px)",
    borderRadius: "1rem",
    padding: "1.5rem",
    border: "1px solid rgba(255,255,255,0.1)",
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <main style={{ paddingTop: "5rem" }}>
        {/* Hero Section */}
        <div style={heroStyle}>
          <div style={containerStyle}>
            <div style={{ position: "relative", zIndex: 2 }}>
              <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem", background: "linear-gradient(135deg, #ffffff, #a0c0ff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Most Trusted & Recommended Online School in UAE
              </h1>
              <p style={{ fontSize: "1.2rem", color: "#e0e0ff", marginBottom: "2rem" }}>
                Trusted by families in the UAE since 2014 | 2,000+ UAE families
              </p>
              <div style={statsContainerStyle}>
                {stats.map((stat, i) => (
                  <div key={i} style={statCardStyle}>
                    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "64px", height: "64px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)", marginBottom: "0.5rem" }}>
                      {stat.icon}
                    </div>
                    <span style={statValueStyle}>{stat.value}</span>
                    <span style={statLabelStyle}>{stat.label}</span>
                  </div>
                ))}
              </div>
              <button style={buttonStyle}>Get Free School Demo</button>
            </div>
          </div>
        </div>

        {/* Accreditation Section */}
        <div style={sectionAltStyle}>
          <div style={containerStyle}>
            <h2 style={headingStyle}>Fully Accredited By</h2>
            <div style={logosContainerStyle}>
              {logos.map((logo, i) => (
                <span key={i} style={logoSpanStyle}>{logo}</span>
              ))}
            </div>
            <p style={{ maxWidth: "800px", margin: "2rem auto 0", color: "#cbd5e1" }}>
              International Schooling, since 2014, is the most trusted international online school
              in Dubai & UAE, offering American Curriculum, accredited by NEASC, WASC, and Cognia.
            </p>
          </div>
        </div>

        {/* Reviews */}
        <div style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={headingStyle}>Satisfied and Happy Parents</h2>
            <div style={reviewGridStyle}>
              {reviews.map((review, i) => (
                <div key={i} style={reviewCardStyle}>
                  <Star style={{ color: "#fbbf24", marginBottom: "0.75rem" }} size={32} />
                  <p style={{ fontStyle: "italic", color: "#e0e0ff", marginBottom: "1rem" }}>"{review.quote}"</p>
                  <p style={{ fontWeight: 700, color: "#3b82f6" }}>— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lazy sections */}
        <Suspense fallback={<div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>}>
          <DemoBooking />
          <WhyChoose />
          <LearningPrograms />
          <Benefits />
          <FeeStructure />
          <EnrollmentSteps />

          {/* FAQ Section */}
          <div style={sectionAltStyle}>
            <div style={containerStyle}>
              <h2 style={headingStyle}>Frequently Asked Questions</h2>
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        background: "none",
                        border: "none",
                        padding: "1rem 0",
                        fontSize: "1rem",
                        fontWeight: 600,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                        color: "#ffffff",
                      }}
                    >
                      {faq.q}
                      <ChevronDown size={20} style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                    </button>
                    {openFaq === i && (
                      <div style={{ paddingBottom: "1rem", color: "#cbd5e1" }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default UAE;