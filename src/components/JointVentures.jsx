import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const ventures = [
  'Comprutech Engineering Pvt Limited',
  'Skanda Aerospace Technology Pvt Ltd',
  'TISA Aerospace Pvt Ltd',
  'Raghuvamshi Siri Aerospace Pvt Ltd'
];

export default function JointVentures() {
  const [ref, shown] = useRevealOnScroll();
  return (
    <section className="rv-section">
      <div className="rv-container">
        <div ref={ref} className={`reveal ${shown ? 'show' : ''}`}>
          <div className="rv-eyebrow">Joint Ventures</div>
          <h2 className="rv-title">Strategic partnerships</h2>
          <p className="rv-subtitle">Focused collaborations enabling world-class defence industrial capabilities.</p>
        </div>
        <div className="rv-card-grid" style={{ marginTop: 28 }}>
          {ventures.map(v => (
            <div key={v} className="rv-card">
              <div style={{ fontWeight: 700 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


