import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const categories = [
  { name: 'Aerospace', desc: 'Precision components and assemblies for aerospace platforms.' },
  { name: 'Defence', desc: 'Defense-grade parts and sub-systems built to spec.' },
  { name: 'Robotics', desc: 'High-precision parts for automation and robotic systems.' },
  { name: 'Space', desc: 'Manufacturing for space-bound systems and assemblies.' },
  { name: 'UAVs', desc: 'Components and structures for unmanned aerial vehicles.' },
  { name: 'Oil & Gas', desc: 'Reliable components for harsh industrial environments.' }
];

export default function Products() {
  const [ref, shown] = useRevealOnScroll();
  return (
    <section id="products" className="rv-section reveal" style={{ background: 'linear-gradient(0deg, var(--rv-elev-1), var(--rv-surface))' }}>
      <div className="rv-container">
        <div ref={ref} className={`reveal ${shown ? 'show' : ''}`} data-parallax="0.12">
          <div className="rv-eyebrow">Products and Capabilities</div>
          <h2 className="rv-title title-slide reveal">Sectors we serve</h2>
        </div>
        <div className="rv-bg-shapes" aria-hidden="true">
          <div className="shape" data-parallax="0.05"></div>
        </div>
        <div className="rv-card-grid" style={{ marginTop: 28 }}>
          {categories.map((c, i) => (
            <div
              key={c.name}
              className="rv-card reveal"
              data-parallax={0.08 + (i%3)*0.02}
              data-anim={["up","left","right","tilt"][i % 4]}
              style={{ display: 'grid', gap: 10, transitionDelay: `${60 + i*70}ms` }}
            >
              <div className="rv-thumb" style={{ backgroundImage: `url(${images[i%images.length]})` }} />
              <div style={{ fontWeight: 800, fontSize: 18 }}>{c.name}</div>
              <div style={{ color: 'var(--rv-text-muted)' }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const images = [
  'https://images.unsplash.com/photo-1457364847821-58861bbda116?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVyb3NwYWNlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000',
  'https://images.pexels.com/photos/78783/submachine-gun-rifle-automatic-weapon-weapon-78783.jpeg?cs=srgb&dl=pexels-pixabay-78783.jpg&fm=jpg',
  'https://img.freepik.com/free-photo/futuristic-scene-with-high-tech-robot-used-construction-industry_23-2151329542.jpg?semt=ais_hybrid&w=740&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
  'https://img.freepik.com/free-photo/drone-flying_1048-3494.jpg?semt=ais_hybrid&w=740&q=80',
  'https://st2.depositphotos.com/1155256/5597/i/450/depositphotos_55970755-stock-photo-oil-and-gas-industry-refinery.jpg'
];


