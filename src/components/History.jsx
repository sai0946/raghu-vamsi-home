import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

export default function History() {
  const [ref, shown] = useRevealOnScroll();
  return (
    <section className="rv-section rv-history reveal">
      <div className="rv-container">
        <div ref={ref} className={`reveal ${shown ? 'show' : ''}`}>
          <div className="rv-eyebrow">History</div>
          <h2 className="rv-title">From power transmission to precision engineering</h2>
          <p className="rv-subtitle" style={{ maxWidth: 900 }}>
            The early foundations of the business started by Mr. G. Thrimurthulu in 1992 in the area of Power Transmission and initiated cast iron castings and machining in 1998 led the group into gaining expertise and developing the capabilities in precision engineering.
          </p>
        </div>
        <div className="rv-history-grid">
          <div className="rv-history-card reveal" data-anim="left">
            <div className="rv-history-year">1992</div>
            <div className="rv-history-text">Power Transmission business foundations set by Mr. G. Thrimurthulu.</div>
          </div>
          <div className="rv-history-card reveal" data-anim="up">
            <div className="rv-history-year">1998</div>
            <div className="rv-history-text">Cast iron castings and machining initiated to expand manufacturing depth.</div>
          </div>
          <div className="rv-history-card reveal" data-anim="right">
            <div className="rv-history-year">2004</div>
            <div className="rv-history-text">Raghu Vamsi Group incorporated; precision engineering capabilities scaled.</div>
          </div>
        </div>
      </div>
    </section>
  );
}


