import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import bgVideo from '../assets/bg.mp4';

function SlideLeftWrapper({ children, index = 0, totalElements = 0, className = '' }) {
  const ref = React.useRef(null);
  const controls = useAnimation();
  const hasBeenVisible = React.useRef(false);
  const inView = useInView(ref, { amount: 0.2, margin: '0px 0px -10% 0px', once: false });

  const baselineOffset = 56; // px to the right of wrapper
  const hiddenX = baselineOffset + 200; // ensure fully clipped - element starts to the RIGHT

  React.useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (inView) {
      // Entering viewport: slide LEFT from right one by one (x: hiddenX -> x: 0)
      hasBeenVisible.current = true;
      controls.start({
        x: 0,
        opacity: 1,
        transition: prefersReduced ? { duration: 0 } : { 
          type: 'spring', 
          duration: 0.8, 
          damping: 18, 
          stiffness: 120, 
          delay: index * 0.15 
        }
      });
    } else if (hasBeenVisible.current) {
      // Leaving viewport: slide RIGHT in reverse order (x: 0 -> x: hiddenX)
      // Only animate if it was previously visible
      const reverseIndex = totalElements - 1 - index;
      controls.start({
        x: hiddenX,
        opacity: 0,
        transition: prefersReduced ? { duration: 0 } : { 
          type: 'spring', 
          duration: 0.6, 
          damping: 18, 
          stiffness: 120,
          delay: reverseIndex * 0.1 
        }
      });
    }
    // If not in view and never been visible, stay at initial position (no animation)
  }, [inView, controls, index, totalElements, hiddenX]);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ width: '100%' }}>
      <motion.div
        className={className}
        style={{ width: '100%' }}
        initial={{ x: hiddenX, opacity: 0 }}
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Contact() {
  const formElements = [
    { type: 'name', label: 'Name', input: <input className="rv-input" placeholder="Your name" /> },
    { type: 'email', label: 'Email', input: <input type="email" className="rv-input" placeholder="you@example.com" /> },
    { type: 'message', label: 'Message', input: <textarea rows={5} className="rv-textarea" placeholder="How can we help?" /> },
    { type: 'button', label: null, input: <button className="rv-button" type="submit">Submit</button> }
  ];

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
          <p className="rv-subtitle">We'll get back within 1–2 business days.</p>
        </div>
        <form className="reveal show" style={{ display: 'grid', gap: 12 }} onSubmit={(e) => e.preventDefault()}>
          {formElements.map((element, idx) => (
            <SlideLeftWrapper
              key={element.type}
              index={idx}
              totalElements={formElements.length}
            >
              {element.label ? (
                <div style={{ display: 'grid', gap: 8 }}>
                  <label>{element.label}</label>
                  {element.input}
                </div>
              ) : (
                element.input
              )}
            </SlideLeftWrapper>
          ))}
        </form>
      </div>
    </section>
  );
}


