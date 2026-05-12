import React from 'react';
import './Testimonials.css';

const reviews = [
  { name: "Rachel Rouquet", loc: "Parent from USA", text: "This is our first year with International Schooling. The website and platform are easy to use... my child will have an advantage." },
  { name: "Nahed Salem", loc: "Parent from UAE", text: "I have my 4 boys attending this school. Their website is easy to use... I highly recommend." },
  { name: "Alexander V Mosiol", loc: "Parent from Brazil", text: "I am amazed to see how easy it is to learn, as simple as that." }
];

const Testimonials = () => (
  <section className="testimonials">
    <div className="container">
      <h2>TOP RATED INTERNATIONAL ONLINE SCHOOL</h2>
      <div className="google-rating"><span className="stars">★★★★★</span> 4.8 <span>Google</span></div>
      <div className="review-grid">
        {reviews.map((r,i)=>(
          <div key={i} className="review-card"><p className="review-text">"{r.text}"</p><p className="review-name">{r.name}</p><p className="review-loc">{r.loc}</p></div>
        ))}
      </div>
      <div className="payment-note">Trusted Worldwide for Secure Payments | Multiple international payment methods</div>
    </div>
  </section>
);
export default Testimonials;