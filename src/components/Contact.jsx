import React from 'react';
import bgVideo from '../assets/bg.mp4';

export default function Contact() {
  return (
    <section id="contact" className="rv-section reveal">
      <div className="rv-contact-media">
        <video className="rv-contact-video" autoPlay muted loop playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="rv-contact-overlay" />
      </div>
      <div className="rv-container grid-2">
        <div>
          <div className="rv-eyebrow">Reach Out</div>
          <h2 className="rv-title title-slide reveal">Have a Query?</h2>
          <p className="rv-subtitle">We’ll get back within 1–2 business days.</p>
        </div>
        <form className="reveal show" style={{ display: 'grid', gap: 12 }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'grid', gap: 8 }}>
            <label>Name</label>
            <input className="rv-input" placeholder="Your name" />
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            <label>Email</label>
            <input type="email" className="rv-input" placeholder="you@example.com" />
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            <label>Message</label>
            <textarea rows={5} className="rv-textarea" placeholder="How can we help?" />
          </div>
          <button className="rv-button" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}


