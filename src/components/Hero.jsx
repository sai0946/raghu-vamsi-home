import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import useParallax from '../hooks/useParallax';
import heroVideo from '../assets/hero.mp4';

function SlideRightWrapper({ children, index = 0, totalElements = 0, className = '', style = {} }) {
  const ref = React.useRef(null);
  const controls = useAnimation();
  const hasBeenVisible = React.useRef(false);
  const inView = useInView(ref, { amount: 0.2, margin: '0px 0px -10% 0px', once: false });

  const baselineOffset = 56; // px to the left of wrapper to feel like it's coming from a line
  const hiddenX = -(baselineOffset + 200); // ensure fully clipped - element starts to the LEFT

  React.useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (inView) {
      // Entering viewport: slide RIGHT from left one by one (x: hiddenX -> x: 0)
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
      // Leaving viewport: slide LEFT in reverse order (x: 0 -> x: hiddenX)
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
    <div ref={ref} className="relative overflow-hidden" style={{ width: '100%', ...style }}>
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

export default function Hero() {
  const [ref, shown] = useRevealOnScroll();
  useParallax();
  
  const heroElements = [
    { type: 'name', content: <h1 className="rv-title" style={{ margin: '0 0 16px 0' }}>Raghuvamsi</h1> },
    { type: 'eyebrow', content: <div className="rv-eyebrow rv-hero-eyebrow">Creating value with precision.</div> },
    { type: 'description', content: <p className="rv-subtitle rv-hero-subtitle">Raghu Vamsi Group has carved a space for itself in the Aerospace & Defense industry worldwide since 2004, delivering high precision engineering components and sub-assemblies to global corporations.</p> },
    { 
      type: 'history', 
      content: (
        <div className="rv-hero-history reveal" data-anim="up">
          <div className="rv-hero-history-title">History</div>
          <p className="rv-hero-history-text">The early foundations of the business started by Mr. G. Thrimurthulu in 1992 in the area of Power Transmission and initiated cast iron castings and machining in 1998 led the group into gaining expertise and developing the capabilities in precision engineering.</p>
          <div className="rv-hero-history-years">
            <div className="year">1992 · Power Transmission foundations</div>
            <div className="year">1998 · Cast iron castings and machining</div>
            <div className="year">2004 · Raghu Vamsi Group incorporated</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="home" className="rv-section rv-hero">
      <div className="rv-hero-media">
        <video className="rv-hero-video" autoPlay muted loop>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="rv-hero-overlay" />
      </div>
      <div className="rv-container rv-hero-inner single">
        <div ref={ref} className={`reveal ${shown ? 'show' : ''}`} data-parallax="0.35">
          {heroElements.map((element, idx) => (
            <SlideRightWrapper
              key={element.type}
              index={idx}
              totalElements={heroElements.length}
            >
              {element.content}
            </SlideRightWrapper>
          ))}
          <div className="rv-hero-badges">
            <span className="rv-badge" data-parallax="0.25">Aerospace</span>
            <span className="rv-badge" data-parallax="0.2">Defense</span>
            <span className="rv-badge" data-parallax="0.18">Robotics</span>
            <span className="rv-badge" data-parallax="0.22">Space</span>
            <span className="rv-badge" data-parallax="0.2">UAVs</span>
            <span className="rv-badge" data-parallax="0.16">Oil & Gas</span>
          </div>
        </div>
      </div>
    </section>
  );
}


