import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import { motion, useAnimation, useInView } from 'framer-motion';

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

function SlideRightWrapper({
  children,
  index = 0,
  totalCards = 0,
  wrapperClassName = '',
  className = '',
  dataParallax,
  dataAnim,
  style
}) {
  const ref = React.useRef(null);
  const controls = useAnimation();
  const hasBeenVisible = React.useRef(false);
  const inView = useInView(ref, { amount: 0.3, margin: '0px 0px -15% 0px', once: false });

  const baselineOffset = 56; // px to the left of wrapper to feel like it's coming from a line
  const hiddenX = -(baselineOffset + 240); // fully clipped — card starts to the LEFT

  React.useEffect(() => {
    controls.set({ x: hiddenX, opacity: 0 });
  }, [controls, hiddenX]);

  React.useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (inView) {
      // Entering viewport: slide RIGHT from the left (x: hiddenX -> 0)
      hasBeenVisible.current = true;
      controls.start({
        x: 0,
        opacity: 1,
        transition: prefersReduced
          ? { duration: 0 }
          : {
              type: 'spring',
              duration: 0.8,
              damping: 18,
              stiffness: 120,
              delay: index * 0.15
            }
      });
    } else if (hasBeenVisible.current) {
      // Leaving viewport: slide LEFT back out (x: 0 -> hiddenX), in reverse order
      const reverseIndex = totalCards - 1 - index;
      controls.start({
        x: hiddenX,
        opacity: 0,
        transition: prefersReduced
          ? { duration: 0 }
          : {
              type: 'spring',
              duration: 0.6,
              damping: 18,
              stiffness: 120,
              delay: reverseIndex * 0.1
            }
      });
    }
  }, [inView, controls, index, totalCards, hiddenX]);

  return (
    <div
      ref={ref}
      className={`rv-card-wrapper relative overflow-hidden ${wrapperClassName}`}
      style={{ willChange: 'transform' }}
    >
      <motion.div
        className={className}
        data-parallax={dataParallax}
        data-anim={dataAnim}
        style={{ width: '100%', height: '100%', ...(style || {}) }}
        initial={{ x: hiddenX, opacity: 0 }} // start off-screen to the LEFT
        animate={controls}
        whileHover={{ scale: 1.03 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

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
            <SlideRightWrapper
              key={it.title}
              index={idx}
              totalCards={items.length}
              wrapperClassName=""
              className="rv-card reveal"
              dataParallax={0.08 + (idx % 3) * 0.02}
              dataAnim={['up', 'left', 'right', 'tilt'][idx % 4]}
              style={{ display: 'grid', gap: 12 }}
            >
              <div className="rv-thumb" style={{ backgroundImage: `url(${it.img})` }} />
              <div style={{ fontWeight: 700 }}>{it.title}</div>
              <p style={{ marginTop: 4, color: 'var(--rv-text-muted)' }}>{it.desc}</p>
            </SlideRightWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
