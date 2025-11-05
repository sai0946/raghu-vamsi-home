import { useEffect } from 'react';

export default function useGlobalReveal() {
  useEffect(() => {
    const observeAll = () => {
      const elements = Array.from(document.querySelectorAll('.reveal:not(.show)'));
      elements.forEach((el) => io.observe(el));
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else if (entry.intersectionRatio < 0.01) {
          // remove show when fully out of view to allow re-animate
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: [0, 0.05, 0.2, 1], rootMargin: '0px 0px -5% 0px' });

    // initial bind
    observeAll();

    // watch DOM for new .reveal elements
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    // re-check on resize/scroll just in case
    const rescan = () => observeAll();
    window.addEventListener('resize', rescan);
    window.addEventListener('scroll', rescan, { passive: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener('resize', rescan);
      window.removeEventListener('scroll', rescan);
    };
  }, []);
}


