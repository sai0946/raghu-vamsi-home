import React from 'react';

const leaders = [
  { name: 'Vamshi Vikas Ganesula', role: 'Managing Director' },
  { name: 'Preethi Pallepati', role: 'Executive Director' },
  { name: 'Uppendra Thummala', role: 'CEO- Raghuvamshi' },
  { name: 'Ravindra Naidu', role: 'CEO of Computech' }
];

export default function Leadership() {
  return (
    <section className="rv-section" id="about" style={{ background: 'linear-gradient(180deg, var(--rv-surface), var(--rv-elev-1))' }}>
      <div className="rv-container">
        <div className="rv-eyebrow">Leadership</div>
        <h2 className="rv-title">Experienced leadership team</h2>
        <div className="rv-card-grid" style={{ marginTop: 28 }}>
          {leaders.map((l, idx) => (
            <div key={l.name} className="rv-card" style={{ display: 'grid', gap: 10 }}>
              <div style={{ height: 160, borderRadius: 12, backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid var(--rv-border)', backgroundImage: `url(${leaderImages[idx % leaderImages.length]})` }} />
              <div style={{ fontWeight: 800 }}>{l.name}</div>
              <div style={{ color: 'var(--rv-text-muted)' }}>{l.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const leaderImages = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop'
];


