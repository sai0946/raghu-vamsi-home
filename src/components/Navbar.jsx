import React, { useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#manufacturing', label: 'Manufacturing & Infrastructure' },
  { href: '#products', label: 'Products' },
  { href: '#contact', label: 'Contact Us' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="rv-nav">
      <div className="rv-nav-inner">
        <div className="rv-nav-logo">
          <img src="https://raghuvamsi.com/wp-content/uploads/2023/07/RV-logo-rasterPNG-1024x205.png" alt="Raghu Vamsi Logo" style={{ height: 40, width: 'auto', display: 'block' }} />
        </div>
        <div className="rv-nav-links">
          {links.map(l => (
            <a key={l.href} className="rv-link" href={l.href}>{l.label}</a>
          ))}
        </div>
        <button className="rv-nav-menu" aria-label="Menu" onClick={() => setOpen(v => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`rv-nav-drawer ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        <div className="rv-nav-drawer-panel" onClick={(e) => e.stopPropagation()}>
          {links.map(l => (
            <a key={l.href} className="rv-link" href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}


