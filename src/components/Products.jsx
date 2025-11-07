import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import { motion, useAnimation, useInView } from 'framer-motion';

const categories = [
  { name: 'Aerospace', desc: 'Precision components and assemblies for aerospace platforms.' },
  { name: 'Defence', desc: 'Defense-grade parts and sub-systems built to spec.' },
  { name: 'Robotics', desc: 'High-precision parts for automation and robotic systems.' },
  { name: 'Space', desc: 'Manufacturing for space-bound systems and assemblies.' },
  { name: 'UAVs', desc: 'Components and structures for unmanned aerial vehicles.' },
  { name: 'Oil & Gas', desc: 'Reliable components for harsh industrial environments.' }
];

const images = [
  'https://images.unsplash.com/photo-1457364847821-58861bbda116?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVyb3NwYWNlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000',
  'https://images.pexels.com/photos/78783/submachine-gun-rifle-automatic-weapon-weapon-78783.jpeg?cs=srgb&dl=pexels-pixabay-78783.jpg&fm=jpg',
  'https://img.freepik.com/free-photo/futuristic-scene-with-high-tech-robot-used-construction-industry_23-2151329542.jpg?semt=ais_hybrid&w=740&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
  'https://img.freepik.com/free-photo/drone-flying_1048-3494.jpg?semt=ais_hybrid&w=740&q=80',
  'https://st2.depositphotos.com/1155256/5597/i/450/depositphotos_55970755-stock-photo-oil-and-gas-industry-refinery.jpg'
];

function BaselineWrapper({
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

  const inView = useInView(ref, { amount: 0.2, margin: '0px 0px -10% 0px', once: false });

  const baselineOffset = 56; // px below wrapper to feel like it lifts off a baseline
  const hiddenY = baselineOffset + 200; // fully off-screen BELOW

  React.useEffect(() => {
    controls.set({ y: hiddenY, opacity: 0 });
  }, [controls, hiddenY]);

  React.useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (inView) {
      // Entering viewport: rise from the bottom (y: hiddenY -> 0)
      hasBeenVisible.current = true;
      controls.start({
        y: 0,
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
      // Leaving viewport: drop back down (y: 0 -> hiddenY) in reverse order
      const reverseIndex = totalCards - 1 - index;
      controls.start({
        y: hiddenY,
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
  }, [inView, controls, index, totalCards, hiddenY]);

  return (
    <div ref={ref} className={`rv-card-wrapper relative overflow-hidden ${wrapperClassName}`}>
      <motion.div
        className={className}
        data-parallax={dataParallax}
        data-anim={dataAnim}
        style={{ width: '100%', height: '100%', ...(style || {}) }}
        initial={{ y: hiddenY, opacity: 0 }}
        animate={controls}
        whileHover={{ scale: 1.03 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Products() {
  const [ref, shown] = useRevealOnScroll();
  return (
    <section
      id="products"
      className="rv-section reveal"
      style={{ background: 'linear-gradient(0deg, var(--rv-elev-1), var(--rv-surface))' }}
    >
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
            <BaselineWrapper
              key={c.name}
              index={i}
              totalCards={categories.length}
              wrapperClassName=""
              className="rv-card reveal"
              dataParallax={0.08 + (i % 3) * 0.02}
              dataAnim={['up', 'left', 'right', 'tilt'][i % 4]}
              style={{ display: 'grid', gap: 10 }}
            >
              <div
                className="rv-thumb"
                style={{ backgroundImage: `url(${images[i % images.length]})` }}
              />
              <div style={{ fontWeight: 800, fontSize: 18 }}>{c.name}</div>
              <div style={{ color: 'var(--rv-text-muted)' }}>{c.desc}</div>
            </BaselineWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
