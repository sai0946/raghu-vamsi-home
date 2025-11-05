import { useEffect } from 'react';

export default function useParallax(selector = '[data-parallax]') {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector));
    if (elements.length === 0) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const viewportH = window.innerHeight;
        const scrollY = window.scrollY || window.pageYOffset;
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const speed = parseFloat(el.getAttribute('data-parallax')) || 0.2;
          const offsetTop = rect.top + scrollY;
          const progress = (scrollY + viewportH - offsetTop) / (viewportH + rect.height);
          const clamped = Math.max(0, Math.min(1, progress));
          const translateY = (1 - clamped) * speed * 100; // px based on speed
          el.style.transform = `translate3d(0, ${translateY}px, 0)`;
        });
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [selector]);
}


