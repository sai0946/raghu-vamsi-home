import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onReady = () => setTimeout(() => setHidden(true), 500);
    if (document.readyState === 'complete') onReady();
    else window.addEventListener('load', onReady);
    return () => window.removeEventListener('load', onReady);
  }, []);

  return (
    <div className={`rv-loader ${hidden ? 'rv-loader--hide' : ''}`} aria-hidden={!hidden}>
      <div className="rv-loader-inner">
        <div className="rv-nav-logo">
          <img src="https://raghuvamsi.com/wp-content/uploads/2023/07/RV-logo-rasterPNG-1024x205.png" alt="Raghu Vamsi Logo" style={{ height: 40, width: 'auto', display: 'block' }} />
        </div>
        <div className="rv-loader-dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}


