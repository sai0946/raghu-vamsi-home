import React, { useState } from 'react';

export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className="rv-footer">
      <div className="rv-container rv-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 24 }}>
        <div className="col reveal show">
        <div className="rv-nav-logo">
          <img src="https://raghuvamsi.com/wp-content/uploads/2023/07/RV-logo-rasterPNG-1024x205.png" alt="Raghu Vamsi Logo" style={{ height: 40, width: 'auto', display: 'block' }} />
        </div>
          <p style={{ color: 'var(--rv-text-muted)', marginTop: 8 }}>Creating value with precision.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
            <a className="rv-link" href="#">Facebook</a>
            <a className="rv-link" href="#">Twitter</a>
            <a className="rv-link" href="#">YouTube</a>
          </div>
        </div>
        <div className="col reveal show rv-footer-collapsible" data-title="Quick Links">
          <div className="rv-eyebrow" style={{ marginBottom: 8 }}>Quick Links</div>
          <div style={{ display: 'grid', gap: 8 }}>
            <a className="rv-link" href="#home">Home</a>
            <a className="rv-link" href="#about">About Us</a>
            <a className="rv-link" href="#manufacturing">Manufacturing & Infrastructure</a>
            <a className="rv-link" href="#products">Products</a>
            <a className="rv-link" href="#contact">Contact Us</a>
          </div>
        </div>
        <div className="col reveal show rv-footer-collapsible" data-title="Company">
          <div className="rv-eyebrow" style={{ marginBottom: 8 }}>Company</div>
          <div style={{ display: 'grid', gap: 8 }}>
            <a className="rv-link" href="#">Careers</a>
            <a className="rv-link" href="#">News</a>
          </div>
        </div>
        <div className="col reveal show rv-footer-collapsible" data-title="Reach Us">
          <div className="rv-eyebrow" style={{ marginBottom: 8 }}>Reach Us</div>
          <div style={{ color: 'var(--rv-text-muted)' }}>
            <div>Email: info@raghuvamsi.com</div>
          </div>
        </div>
      </div>
      <div className="rv-container rv-footer-mobile">
        <button className="rv-footer-menu" onClick={() => setOpen(v => !v)} aria-expanded={open}>Menu</button>
        <div className={`rv-footer-accordion ${open ? 'open' : ''}`}>
          {[...document.querySelectorAll ? [] : []]}
        </div>
      </div>
      <div className="rv-container" style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ fontWeight: 700 }}>© {new Date().getFullYear()} Raghu Vamsi</div>
        <div style={{ color: 'var(--rv-text-muted)' }}>All rights reserved.</div>
      </div>
    </footer>
  );
}


