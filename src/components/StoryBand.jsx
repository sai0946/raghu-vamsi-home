import React from 'react';

export default function StoryBand({ eyebrow, title, subtitle }) {
  return (
    <section className="rv-story">
      <div className="rv-story-sticky">
        <div className="rv-container">
          <div className="rv-eyebrow reveal">{eyebrow}</div>
          <h3 className="rv-story-title reveal">{title}</h3>
          {subtitle ? <p className="rv-subtitle reveal">{subtitle}</p> : null}
        </div>
      </div>
    </section>
  );
}


