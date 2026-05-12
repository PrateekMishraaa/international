import React, { useState } from 'react';
import './FAQ.css';

const questions = [
  "What is International Schooling?","Is International Schooling an 'ACCREDITED' school?",
  "Does my child need advanced technology skills?","What is SAT?","What is AP?",
  "How will my child choose a course?","What programs and courses can my child choose?",
  "Can my child change subjects after enrollment?","How will the classes be conducted?",
  "How will my child be monitored?","What is 'Meet Your Classmates'?","Is attendance mandatory?"
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq-section">
      <div className="container"><h2>We Got Answers!</h2>
        <div className="faq-list">{questions.map((q,i)=>(
          <div key={i} className="faq-item">
            <button className="faq-question" onClick={()=>setOpen(open===i?null:i)}>{q} <span>{open===i?'▲':'▼'}</span></button>
            {open===i && <div className="faq-answer">Answer for {q} goes here.</div>}
          </div>
        ))}</div>
      </div>
    </section>
  );
};
export default FAQ;