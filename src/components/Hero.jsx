import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import useParallax from '../hooks/useParallax';
import useSplitText from '../hooks/useSplitText';
import heroVideo from '../assets/hero.mp4';

export default function Hero() {
  const [ref, shown] = useRevealOnScroll();
  useParallax();
  const splitRef = useSplitText();
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
          <div className="rv-eyebrow rv-hero-eyebrow">Creating value with precision.</div>
          <h1 className="rv-title" ref={splitRef}>Raghuvamsi</h1>
          <p className="rv-subtitle rv-hero-subtitle">
            Raghu Vamsi Group has carved a space for itself in the Aerospace & Defense industry worldwide since 2004, delivering high precision engineering components and sub-assemblies to global corporations.
          </p>
          <div className="rv-hero-history reveal" data-anim="up">
            <div className="rv-hero-history-title">History</div>
            <p className="rv-hero-history-text">The early foundations of the business started by Mr. G. Thrimurthulu in 1992 in the area of Power Transmission and initiated cast iron castings and machining in 1998 led the group into gaining expertise and developing the capabilities in precision engineering.</p>
            <div className="rv-hero-history-years">
              <div className="year">1992 · Power Transmission foundations</div>
              <div className="year">1998 · Cast iron castings and machining</div>
              <div className="year">2004 · Raghu Vamsi Group incorporated</div>
            </div>
          </div>
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


