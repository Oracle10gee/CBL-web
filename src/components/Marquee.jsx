import { partnerLogos } from '../content/site';

// Text chips stand in for partner logos until the official artwork is supplied.
function LogoChip({ name }) {
  return (
    <span className="logo-chip">
      <span className="logo-chip__glyph" aria-hidden="true">
        {name.charAt(0)}
      </span>
      {name}
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
            {row.map((name, index) => (
              <LogoChip key={`${name}-${index}`} name={name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
