import React, { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ========== HERO SECTION (inline styles, critical) ==========
const Hero = () => {
  const heroStyle = {
    position: "relative",
    background: "linear-gradient(135deg, #1e3a8a, #312e81, #4c1d95)",
    padding: "6rem 0 4rem",
    textAlign: "center",
    overflow: "hidden",
  };
  const containerStyle = { maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" };
  const badgeStyle = {
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.5rem",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(4px)",
    padding: "0.5rem 1.25rem",
    borderRadius: "40px",
    fontSize: "0.75rem",
    fontWeight: 500,
    color: "#e0e0ff",
    marginBottom: "1.5rem",
  };
  const headingStyle = {
    fontSize: "2rem",
    fontWeight: 800,
    background: "linear-gradient(135deg, #ffffff, #a0c0ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "1rem",
  };
  const subStyle = { fontSize: "1rem", color: "#cbd5e1", marginTop: "0.5rem" };
  const accredStyle = { fontSize: "0.9rem", color: "#3b82f6", fontWeight: 600, marginTop: "0.5rem" };
  const buttonStyle = {
    background: "linear-gradient(95deg, #3b82f6, #2563eb)",
    border: "none",
    padding: "0.75rem 2rem",
    borderRadius: "50px",
    fontWeight: 700,
    color: "white",
    marginTop: "1.5rem",
    cursor: "pointer",
    transition: "all 0.2s",
  };
  const statsRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "2rem",
  };
  const statCardStyle = {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(8px)",
    padding: "0.75rem 1.25rem",
    borderRadius: "2rem",
    minWidth: "100px",
  };
  const statNumberStyle = { fontSize: "1.5rem", fontWeight: 800, color: "#3b82f6", display: "block" };
  const statLabelStyle = { fontSize: "0.7rem", color: "#b0b0d0" };
  const uniLogosStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.8rem",
    marginTop: "2rem",
    fontSize: "0.75rem",
    color: "#cbd5e1",
  };
  return (
    <section style={heroStyle}>
      <div style={containerStyle}>
        <div style={badgeStyle}>
          <span>🏆 15,000+ Students</span>
          <span>🌍 From 190+ Countries</span>
          <span>👩‍🏫 600+ Teachers</span>
        </div>
        <h1 style={headingStyle}>The Most Trusted & Recommended International Online School</h1>
        <p style={subStyle}>Fully Accredited by NEASC, WASC & Cognia, USA | College Board Approved | NCAA Recognized</p>
        <p style={accredStyle}>Globally Recognized | KG-Grade 12 American Curriculum</p>
        <button style={buttonStyle}>ENROLL NOW</button>
        <div style={statsRowStyle}>
          <div style={statCardStyle}><span style={statNumberStyle}>3.8</span><span style={statLabelStyle}>Average GPA</span></div>
          <div style={statCardStyle}><span style={statNumberStyle}>100%</span><span style={statLabelStyle}>Universities Acceptance</span></div>
          <div style={statCardStyle}><span style={statNumberStyle}>7%</span><span style={statLabelStyle}>Acceptance in Ivy League</span></div>
          <div style={statCardStyle}><span style={statNumberStyle}>75%</span><span style={statLabelStyle}>International Scholarships</span></div>
        </div>
        <div style={uniLogosStyle}>
          <span>Stanford University</span> <span>University of Michigan</span> <span>South Africa</span>
          <span>Netherlands</span> <span>USA</span> <span>UAE</span> <span>Philippines</span>
        </div>
      </div>
    </section>
  );
};

// ========== TRUSTED SECTION (lazy loaded) ==========
const TrustedSection = () => {
  const sectionStyle = { padding: "4rem 0", background: "#0f0f2a", textAlign: "center" };
  const containerStyle = { maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" };
  const headingStyle = {
    fontSize: "2rem",
    fontWeight: 800,
    background: "linear-gradient(135deg, #ffffff, #a0c0ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "1.5rem",
  };
  const textStyle = { maxWidth: "900px", margin: "0 auto", color: "#cbd5e1", lineHeight: 1.6 };
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>THE MOST TRUSTED & RECOMMENDED AMERICAN ONLINE SCHOOL</h2>
        <p style={textStyle}>
          International Schooling is the best American online school serving <strong>15,000+ students</strong> and is the most trusted & recommended American online school by parents across <strong>190+ countries</strong>.
          Fully accredited by <strong>NEASC, WASC & Cognia, USA</strong>, approved by <strong>College Board</strong> and <strong>NCAA</strong>.
          Offers American curriculum for KG-12, supported by 600+ certified teachers speaking 40+ languages.
          As a proud member of United Nations, International Schooling is <strong style={{ color: "#3b82f6" }}>"Changing Lives for the Best™"</strong>.
        </p>
      </div>
    </section>
  );
};

// ========== GRADUATION SECTION ==========
const Graduation = () => {
  const sectionStyle = { padding: "4rem 0", background: "#0a0a1a", textAlign: "center" };
  const containerStyle = { maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" };
  const headingStyle = { fontSize: "2rem", fontWeight: 700, color: "white", marginBottom: "1rem" };
  const textStyle = { maxWidth: "700px", margin: "0 auto 2rem", color: "#cbd5e1" };
  const imagePlaceholder = {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "1rem",
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748b",
  };
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Graduation Ceremony 2025 - Dubai</h2>
        <p style={textStyle}>
          International Schooling hosted its first Graduation Ceremony in 2025 at Atlantis, The Palm, Dubai,
          reflecting our global community and commitment to a premium schooling experience beyond the classroom.
        </p>
        <div style={imagePlaceholder}>[ Graduation Image Placeholder ]</div>
      </div>
    </section>
  );
};

// ========== COMPARISON TABLE ==========
const ComparisonTable = () => {
  const rows = [
    ["Curriculum", "100% International Curriculum", "Limited & unverified", "100-year-old system"],
    ["Teachers", "600+ certified international teachers", "Local only, no global exposure", "Local only"],
    ["Learning approach", "Personalized for every child", "One-size-fits-all", "One-size-fits-all"],
    ["Class format", "Live + interactive, real-time", "Pre-recorded videos only", "In-person rigid schedule"],
    ["Assessments", "Continuous & ongoing", "No structured assessments", "Single year-end exam"],
    ["Environment", "Safe, comfortable, from home", "Unmonitored online spaces", "Physical constraints"],
    ["Skills", "Future-ready: AI, global, digital", "Outdated skill sets", "Outdated"],
    ["Schedule", "Fully flexible, learn anytime", "Fixed rigid timings", "Strict fixed hours"],
  ];
  const sectionStyle = { padding: "4rem 0", background: "#0f0f2a" };
  const containerStyle = { maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" };
  const headingStyle = {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: 700,
    background: "linear-gradient(135deg, #ffffff, #a0c0ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "2rem",
  };
  const tableWrapper = { overflowX: "auto", marginTop: "1rem" };
  const tableStyle = { width: "100%", borderCollapse: "collapse", minWidth: "600px", background: "rgba(20,20,45,0.7)", borderRadius: "1rem", overflow: "hidden" };
  const thStyle = { padding: "1rem", textAlign: "left", background: "rgba(255,255,255,0.05)", color: "white", fontWeight: 600 };
  const tdStyle = { padding: "1rem", borderBottom: "1px solid rgba(255,255,255,0.1)", color: "#cbd5e1" };
  const highlightStyle = { color: "#3b82f6", fontWeight: 500 };
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Why 15,000+ Families Trusted International Schooling</h2>
        <div style={tableWrapper}>
          <table style={tableStyle}>
            <thead>
              <tr><th style={thStyle}>What your child needs</th><th style={thStyle}>Best Choice – International Schooling</th><th style={thStyle}>Other Online Schools</th><th style={thStyle}>Traditional Schools</th></tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td style={tdStyle}>{row[0]}</td>
                  <td style={{ ...tdStyle, ...highlightStyle }}>{row[1]}</td>
                  <td style={tdStyle}>{row[2]}</td>
                  <td style={tdStyle}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// ========== LEARNING PLANS ==========
const LearningPlans = () => {
  const plans = [
    { title: "Group Learning", sub: "1 Teacher | 10-15 Students", features: ["Group Live Classes","Fixed Timings","60 min each","Fixed Assessments","Collaborative Assignments","3 Counseling Sessions","3 Career Sessions","3 Parent Meetings"] },
    { title: "One-To-One Learning", sub: "1 Teacher | 1 Student", features: ["One-To-One Live","Flexible Timings","50 min each","Flexible Assessments","Exempt from group work","6 Counseling","6 Career Sessions","6 Parent Meetings"] },
    { title: "Self-Learning", sub: "500+ Courses", features: ["Self-paced Study","Flexible timings","No Live Classes","Flexible dates","Personalized material","No deadlines","24/7 support","500+ courses","Flexible start"] },
    { title: "Self-Learning Plus", sub: "500+ Courses + 1 Live Class/Week", features: ["Self-paced with doubt clearing","Flexible timings","1 live class/week (60 min)","Flexible assessments","Personalized material","No deadlines","Mon-Fri support","500+ courses","Flexible start"] },
  ];
  const sectionStyle = { padding: "4rem 0", background: "#0a0a1a" };
  const containerStyle = { maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" };
  const headingStyle = {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: 700,
    background: "linear-gradient(135deg, #ffffff, #a0c0ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "2rem",
  };
  const gridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" };
  const cardStyle = { background: "rgba(20,20,45,0.7)", borderRadius: "1rem", padding: "1.5rem", border: "1px solid rgba(255,255,255,0.1)", transition: "transform 0.2s" };
  const titleStyle = { fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.25rem", color: "white" };
  const subStyle = { fontSize: "0.75rem", color: "#3b82f6", marginBottom: "0.5rem" };
  const featureStyle = { display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "#b0b0d0", marginBottom: "0.25rem" };
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Choose the Learning Plan That Fits Your Child</h2>
        <div style={gridStyle}>
          {plans.map((plan, i) => (
            <div key={i} style={cardStyle}>
              <h3 style={titleStyle}>{plan.title}</h3>
              <p style={subStyle}>{plan.sub}</p>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
                {plan.features.map((feat, j) => (
                  <li key={j} style={featureStyle}><span style={{ color: "#4ade80" }}>✓</span> {feat}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ========== STUDENT LOVE ==========
const StudentLove = () => {
  const sectionStyle = { padding: "4rem 0", background: "#0f0f2a", textAlign: "center" };
  const containerStyle = { maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" };
  const headingStyle = {
    fontSize: "2rem",
    fontWeight: 700,
    background: "linear-gradient(135deg, #ffffff, #a0c0ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "2rem",
  };
  const cardContainer = { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" };
  const cardStyle = { background: "rgba(20,20,45,0.7)", padding: "1.5rem", borderRadius: "1rem", width: "280px", border: "1px solid rgba(255,255,255,0.1)" };
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>15,000+ Students Globally Love Learning With Us</h2>
        <div style={cardContainer}>
          <div style={cardStyle}><p style={{ fontStyle: "italic" }}>"I LOVE TAKING EXAM! IN MY SCHOOL!"</p><p style={{ fontWeight: 600, marginTop: "0.5rem", color: "#3b82f6" }}>Grade 6, Croatia</p></div>
          <div style={cardStyle}><p style={{ fontStyle: "italic" }}>"AMAZING STUDENT COMMUNITY!"</p><p style={{ fontWeight: 600, marginTop: "0.5rem", color: "#3b82f6" }}>Grade 10, Philippines</p></div>
          <div style={cardStyle}><p style={{ fontStyle: "italic" }}>"CULTURALLY RICH CLASSROOM!"</p><p style={{ fontWeight: 600, marginTop: "0.5rem", color: "#3b82f6" }}>Grade 10, Mexico</p></div>
        </div>
        <p style={{ marginTop: "2rem", fontWeight: 600 }}>2,500+ Student Athletes Choose Us to Balance Sports & Schooling</p>
      </div>
    </section>
  );
};

// ========== PARENT TRUST ==========
const ParentTrust = () => {
  const sectionStyle = { padding: "4rem 0", background: "#0a0a1a", textAlign: "center" };
  const containerStyle = { maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" };
  const headingStyle = {
    fontSize: "2rem",
    fontWeight: 700,
    background: "linear-gradient(135deg, #ffffff, #a0c0ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "1rem",
  };
  const countriesStyle = { display: "flex", justifyContent: "center", gap: "2rem", margin: "1.5rem 0", fontWeight: 500, color: "#3b82f6" };
  const storyStyle = { maxWidth: "400px", margin: "2rem auto", background: "rgba(20,20,45,0.7)", padding: "1.5rem", borderRadius: "1rem" };
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Trusted & Recommended by Parents in 190+ Countries</h2>
        <div style={countriesStyle}><span>Parents From Kuwait</span><span>Parents From USA</span><span>Parents From UAE</span></div>
        <div style={storyStyle}>
          <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Success Stories</h3>
          <p>Real journeys from students and families balancing ambition, academics, and support.</p>
          <p><strong>Emily's Life Now:</strong> From Skipping School to Feeling Excited Again</p>
        </div>
      </div>
    </section>
  );
};

// ========== TESTIMONIALS ==========
const Testimonials = () => {
  const reviews = [
    { name: "Rachel Rouquet", loc: "Parent from USA", text: "This is our first year with International Schooling. The website and platform are easy to use... my child will have an advantage." },
    { name: "Nahed Salem", loc: "Parent from UAE", text: "I have my 4 boys attending this school. Their website is easy to use... I highly recommend." },
    { name: "Alexander V Mosiol", loc: "Parent from Brazil", text: "I am amazed to see how easy it is to learn, as simple as that." }
  ];
  const sectionStyle = { padding: "4rem 0", background: "#0f0f2a", textAlign: "center" };
  const containerStyle = { maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" };
  const headingStyle = {
    fontSize: "2rem",
    fontWeight: 700,
    background: "linear-gradient(135deg, #ffffff, #a0c0ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "1rem",
  };
  const gridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2rem" };
  const cardStyle = { background: "rgba(20,20,45,0.7)", padding: "1.5rem", borderRadius: "1rem", textAlign: "left", border: "1px solid rgba(255,255,255,0.1)" };
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>TOP RATED INTERNATIONAL ONLINE SCHOOL</h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
          <span style={{ color: "#fbbf24" }}>★★★★★</span> <span>4.8</span> <span style={{ color: "#cbd5e1" }}>Google</span>
        </div>
        <div style={gridStyle}>
          {reviews.map((r, i) => (
            <div key={i} style={cardStyle}>
              <p style={{ fontStyle: "italic", color: "#cbd5e1" }}>"{r.text}"</p>
              <p style={{ fontWeight: 700, marginTop: "1rem", color: "#3b82f6" }}>{r.name}</p>
              <p style={{ fontSize: "0.8rem", color: "#94a3b8" }}>{r.loc}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "2rem", fontSize: "0.75rem", color: "#94a3b8" }}>Trusted Worldwide for Secure Payments | Multiple international payment methods</p>
      </div>
    </section>
  );
};

// ========== NEWS SECTION ==========
const NewsSection = () => {
  const sectionStyle = { padding: "4rem 0", background: "#0a0a1a", textAlign: "center" };
  const containerStyle = { maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" };
  const headingStyle = {
    fontSize: "2rem",
    fontWeight: 700,
    background: "linear-gradient(135deg, #ffffff, #a0c0ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "1rem",
  };
  const linksStyle = { display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginTop: "1.5rem" };
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>NEASC Accreditation in the News</h2>
        <div style={linksStyle}>
          <a href="#" style={{ color: "#3b82f6", fontWeight: 600, textDecoration: "underline" }}>USA News →</a>
          <a href="#" style={{ color: "#3b82f6", fontWeight: 600, textDecoration: "underline" }}>Yahoo Finance →</a>
          <a href="#" style={{ color: "#3b82f6", fontWeight: 600, textDecoration: "underline" }}>KTLA 5 News →</a>
        </div>
      </div>
    </section>
  );
};

// ========== FAQ SECTION ==========
const FAQ = () => {
  const [open, setOpen] = React.useState(null);
  const questions = [
    "What is International Schooling?",
    "Is International Schooling an 'ACCREDITED' school?",
    "Does my child need advanced technology skills?",
    "What is SAT?", "What is AP?",
    "How will my child choose a course?",
    "What programs and courses can my child choose?",
    "Can my child change subjects after enrollment?",
    "How will the classes be conducted?",
    "How will my child be monitored?",
    "What is 'Meet Your Classmates'? Also, when is it held?",
    "Is attendance mandatory?"
  ];
  const sectionStyle = { padding: "4rem 0", background: "#0f0f2a" };
  const containerStyle = { maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" };
  const headingStyle = {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: 700,
    background: "linear-gradient(135deg, #ffffff, #a0c0ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "2rem",
  };
  const listStyle = { maxWidth: "800px", margin: "0 auto" };
  const itemStyle = { borderBottom: "1px solid rgba(255,255,255,0.1)" };
  const btnStyle = {
    width: "100%",
    textAlign: "left",
    background: "none",
    border: "none",
    padding: "1rem 0",
    fontSize: "1rem",
    fontWeight: 500,
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    color: "white",
  };
  const answerStyle = { padding: "0 0 1rem 0", color: "#cbd5e1" };
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>We Got Answers!</h2>
        <div style={listStyle}>
          {questions.map((q, i) => (
            <div key={i} style={itemStyle}>
              <button onClick={() => setOpen(open === i ? null : i)} style={btnStyle}>
                {q} <span style={{ fontSize: "1.2rem" }}>{open === i ? "▲" : "▼"}</span>
              </button>
              {open === i && <div style={answerStyle}>Answer for "{q}" goes here.</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ========== LAZY LOAD WRAPPER ==========
const LazyComponents = () => (
  <>
    <TrustedSection />
    <Graduation />
    <ComparisonTable />
    <LearningPlans />
    <StudentLove />
    <ParentTrust />
    <Testimonials />
    <NewsSection />
    <FAQ />
  </>
);

// ========== MAIN HOMEPAGE COMPONENT ==========
const Homepage = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a1a", color: "white", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navbar />
      <main style={{ paddingTop: "5rem" }}>
        <Hero />
        <Suspense fallback={<div style={{ textAlign: "center", padding: "2rem" }}>Loading sections...</div>}>
          <LazyComponents />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;