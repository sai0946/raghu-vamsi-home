import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const items = [
  { title: 'Manufacturing and Infrastructure', desc: 'End-to-end facilities with aerospace-grade QA, modern CNC cells, and automated inspection.', img: 'https://img.freepik.com/free-photo/modern-automated-assembly-line-cars-latest-technological-neutral-technologies-production-cars-plant-assembly-shop-modern-cars_645730-531.jpg?semt=ais_hybrid&w=740&q=80' },
  { title: 'Engineering', desc: 'DFM, tooling, and process engineering to accelerate prototypes to production.', img: 'https://t4.ftcdn.net/jpg/03/21/03/19/360_F_321031954_RX4bH9saYe4nZvhrzjc0Jxci1bxxPkzh.jpg' },
  { title: 'Precision Machining', desc: 'High-precision multi-axis machining for complex aerospace and defense components.', img: 'https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Electro mechanical assembly', desc: 'Clean assembly lines with traceability and testing for electromechanical systems.', img: 'https://img.freepik.com/free-photo/professional-video-camera-movie-set-with-lot-cables_1268-17211.jpg?semt=ais_hybrid&w=740&q=80' },
  { title: 'Composites', desc: 'Composite layup and curing for lightweight, high-strength structures.', img: 'https://media.istockphoto.com/id/629601388/photo/carbon-fiber-composite-raw-material-background.jpg?s=612x612&w=0&k=20&c=UMdtUuelV1eTqc_RyWZFAsYJwr8M778EUqVftqlMXCY=' },
  { title: 'Sheet metal fabrication', desc: 'Forming, bending, and precision fabrication with aerospace tolerances.', img: 'https://img.freepik.com/premium-photo/gloved-hands-male-worker-industrial-plant-producing-huge-machines_274679-37730.jpg?semt=ais_hybrid&w=740&q=80' },
  { title: 'High Precision gears', desc: 'Precision gear cutting, grinding, and inspection.', img: 'https://img.freepik.com/free-photo/gear-close-up_1112-873.jpg?semt=ais_hybrid&w=740&q=80' },
  { title: 'Surface treatment', desc: 'Anodizing, plating, and coatings with certified processes.', img: 'https://media.istockphoto.com/id/2216384450/photo/industrial-cnc-water-jet-cutting-machine-cutting-steel-plate.jpg?s=612x612&w=0&k=20&c=Xc7Fwq7iwzoaRVLzEZhEBKDOeUFAfPaD3a9gircFjn0=' },
  { title: 'Fasteners', desc: 'Aerospace-grade fasteners with full material traceability.', img: 'https://media.istockphoto.com/id/155321159/photo/fasteners.jpg?s=612x612&w=0&k=20&c=VMLfKOdDIN2hcvwHH4Jy2HliWqDqugPtxgV-I5TIs7Y=' },
  { title: 'Assembly and weld', desc: 'Certified welding and sub-assembly for complex builds.', img: 'https://media.istockphoto.com/id/1359352103/photo/welder-erecting-technical-steel.jpg?s=612x612&w=0&k=20&c=0NF64JVhGa7I6IyDIi39MmmOtkHtzMbRSrkg9d3oTms=' },
  { title: 'Electronic and wire Harenesses', desc: 'Harness manufacturing and testing for aerospace applications.', img: 'https://static.vecteezy.com/system/resources/thumbnails/058/519/026/small/wires-connectors-modules-and-connections-from-a-new-car-wiring-harness-photo.jpg' },
  { title: 'UAV/Drones', desc: 'Components and sub-systems for UAV platforms.', img: 'https://media.istockphoto.com/id/1401444200/photo/drone-white-color-flying-close-up.jpg?s=612x612&w=0&k=20&c=aYgpQHT_0hJUDOsmcd9CYjWNq-hJZYKQALNw6GGFAPo=' }
];

export default function WhatWeDo() {
  const [ref, shown] = useRevealOnScroll();
  return (
    <section id="manufacturing" className="rv-section reveal">
      <div className="rv-container">
        <div ref={ref} className={`reveal ${shown ? 'show' : ''}`} data-parallax="0.15">
          <div className="rv-eyebrow">What we do</div>
          <h2 className="rv-title title-slide reveal">Manufacturing Verticals & Infrastructure</h2>
          <p className="rv-subtitle">Full-stack precision engineering capabilities from design to delivery.</p>
        </div>
        <div className="rv-bg-shapes" aria-hidden="true">
          <div className="shape" data-parallax="0.06"></div>
          <div className="shape" data-parallax="0.04"></div>
        </div>
        <div className="rv-card-grid" style={{ marginTop: 28 }}>
          {items.map((it, idx) => (
            <div
              key={it.title}
              className="rv-card reveal"
              data-parallax={0.08 + (idx%3)*0.02}
              data-anim={["up","left","right","tilt"][idx % 4]}
              style={{ transitionDelay: `${60 + idx*70}ms`, display: 'grid', gap: 12 }}
            >
              <div className="rv-thumb" style={{ backgroundImage: `url(${it.img})` }} />
              <div style={{ fontWeight: 700 }}>{it.title}</div>
              <p style={{ marginTop: 4, color: 'var(--rv-text-muted)' }}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


