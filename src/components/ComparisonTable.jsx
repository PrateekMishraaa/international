import React from 'react';
import './ComparisonTable.css';

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
  return (
    <section className="comparison">
      <div className="container">
        <h2>Why 15,000+ Families Trusted International Schooling</h2>
        <div className="comparison-table">
          <table>
            <thead><tr><th>What your child needs</th><th>Best Choice – International Schooling</th><th>Other Online Schools</th><th>Traditional Schools</th></tr></thead>
            <tbody>{rows.map((row,i)=>(
              <tr key={i}><td>{row[0]}</td><td className="ischool-highlight">{row[1]}</td><td className="other-text">{row[2]}</td><td className="other-text">{row[3]}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
export default ComparisonTable;