import { useEffect, useRef } from 'react';

export default function useSplitText() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.dataset.split === '1') return;
    const text = el.textContent || '';
    const words = text.split(' ');
    el.textContent = '';
    words.forEach((w, i) => {
      const span = document.createElement('span');
      span.textContent = w + (i < words.length - 1 ? ' ' : '');
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(12px)';
      span.style.transition = `opacity 700ms cubic-bezier(.22,.61,.36,1) ${i * 40}ms, transform 700ms cubic-bezier(.22,.61,.36,1) ${i * 40}ms`;
      el.appendChild(span);
    });
    el.dataset.split = '1';

    const onReveal = () => {
      const spans = el.querySelectorAll('span');
      spans.forEach((s) => {
        s.style.opacity = '1';
        s.style.transform = 'none';
      });
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { onReveal(); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}


