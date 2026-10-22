import { partnerLogos } from '../content/images';

function PartnerLogo({ logo }) {
  return (
    <span className="partner-logo-item">
      <span className={`partner-logo-frame ${logo.className}`}>
        <img className="partner-logo" src={logo.src} alt="" />
      </span>
      <span className="partner-logo-name">{logo.name}</span>
    </span>
  );
}

export default function Marquee({ className = '' }) {
  const row = [...partnerLogos, ...partnerLogos];
  return (
    <div className={`marquee ${className}`.trim()}>
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <div className="marquee__row" key={copy} aria-hidden={copy === 1}>
            {row.map((logo, index) => (
              <PartnerLogo key={`${logo.name}-${index}`} logo={logo} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
