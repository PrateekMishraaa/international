import React from 'react';
import './LearningPlans.css';

const plans = [
  { title: "Group Learning", sub: "1 Teacher | 10-15 Students", desc: "Dynamic classroom experience with fixed timings.", features: ["Group Live Classes","Fixed Timings","60 min each","Fixed Assessments","Collaborative Assignments","3 Counseling Sessions","3 Career Sessions","3 Parent Meetings"] },
  { title: "One-To-One Learning", sub: "1 Teacher | 1 Student", desc: "Personalized live classes, flexible schedule.", features: ["One-To-One Live","Flexible Timings","50 min each","Flexible Assessments","Exempt from group work","6 Counseling","6 Career Sessions"] },
  { title: "Self-Learning", sub: "500+ courses", desc: "Self-paced with teacher feedback.", features: ["Self-paced","No live classes","Flexible dates","Personalized material","No deadlines","24/7 support","500+ courses","Flexible start"] },
  { title: "Self-Learning Plus", sub: "500+ courses + 1 live class/week", desc: "Self-paced plus doubt clearing.", features: ["Self-paced","1 live class/week","60 min","Flexible assessments","No deadlines","Mon-Fri support","500+ courses","Flexible start"] }
];

const LearningPlans = () => (
  <section className="learning-plans">
    <div className="container">
      <h2>Choose the Learning Plan That Fits Your Child</h2>
      <div className="plans-grid">
        {plans.map((plan,i)=>(
          <div key={i} className="plan-card">
            <h3>{plan.title}</h3>
            <div className="plan-sub">{plan.sub}</div>
            <p className="plan-desc">{plan.desc}</p>
            <ul className="plan-features">{plan.features.map((f,idx)=><li key={idx}><span className="check-icon">✓</span> {f}</li>)}</ul>
          </div>
        ))}
      </div>
      <button className="btn-demo">Book Free Demo</button>
    </div>
  </section>
);
export default LearningPlans;