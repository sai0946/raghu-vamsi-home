import React from 'react';

export default function Clients() {
  const categories = [
    {
      title: 'Aerospace',
      items: [
        { name: 'Boeing', logo: 'https://logo.clearbit.com/boeing.com' },
        { name: 'Rolls-Royce', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvH0_zuGwSKVgWleUPlcGxTAuLwX6L8S5hw&s' },
        { name: 'GE Aviation', logo: 'https://logo.clearbit.com/ge.com' },
        { name: 'Collins Aerospace', logo: 'https://logo.clearbit.com/collinsaerospace.com' },
        { name: 'Safran', logo: 'https://logo.clearbit.com/safran-group.com' },
        { name: 'Honeywell', logo: 'https://logo.clearbit.com/honeywell.com' }
      ]
    },
    {
      title: 'Defense',
      items: [
        { name: 'DRDO', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Defence_Research_and_Development_Organisation.svg' },
        { name: 'Bharat Dynamics Limited', logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Bharat_Dynamics_Logo.svg' },
        { name: 'Ministry of Defence', logo: 'https://media.assettype.com/outlookindia/2025-05-09/qspbx0q0/WhatsApp-Image-2025-05-09-at-15.56.12.jpeg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100' },
        { name: 'ISRO', logo: 'https://logo.clearbit.com/isro.gov.in' },
        { name: 'RCI - DRDO', logo: 'https://media.licdn.com/dms/image/v2/D560BAQFvXPr1PS13Ig/company-logo_200_200/company-logo_200_200/0/1686837679033/research_centre_imarat_rci_a_part_of_drdo_logo?e=2147483647&v=beta&t=dR0OLBDs2HZ1X-ijrGXJidHT0mgfFlUKUV01srIVqd4' }
      ]
    },
    {
      title: 'Oil & Gas',
      items: [
        { name: 'Halliburton', logo: 'https://logo.clearbit.com/halliburton.com' },
        { name: 'Schlumberger', logo: 'https://logo.clearbit.com/slb.com' }
      ]
    },
    {
      title: 'Medical',
      items: [
        { name: 'GE Healthcare', logo: 'https://logo.clearbit.com/gehealthcare.com' },
        { name: 'Cytiva', logo: 'https://logo.clearbit.com/cytiva.com' }
      ]
    }
  ];
  return (
    <section className="rv-section">
      <div className="rv-container">
        <div className="rv-eyebrow">Our Clients</div>
        <h2 className="rv-title title-slide reveal">Trusted by leading organizations</h2>
        {categories.map((cat) => (
          <div key={cat.title} style={{ marginTop: 22 }}>
            <div style={{ fontWeight: 800, marginBottom: 12 }}>{cat.title}</div>
            <div className="rv-client-grid stagger">
              {cat.items.map((c, idx) => (
                <div
                  key={c.name}
                  className="rv-logo-card reveal"
                  data-anim={["up","left","right","tilt"][idx % 4]}
                  style={{ transitionDelay: `${60 + idx * 70}ms` }}
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="rv-logo-img"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackLogo; }}
                  />
                  <div className="rv-logo-name">{c.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const fallbackLogo = 'data:image/svg+xml;utf8,%3Csvg xmlns%3D"http%3A//www.w3.org/2000/svg" width%3D"160" height%3D"48" viewBox%3D"0 0 160 48"%3E%3Crect width%3D"160" height%3D"48" rx%3D"8" fill%3D"%232a2a3a"/%3E%3Ctext x%3D"50%25" y%3D"50%25" dominant-baseline%3D"middle" text-anchor%3D"middle" font-family%3D"Inter%2C Arial" font-size%3D"14" fill%3D"%23ccccdd"%3ELogo%3C/text%3E%3C/svg%3E';


