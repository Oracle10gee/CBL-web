import { images } from '../content/images';
import { LogoMark } from './Logo';

function Placeholder({ label, tone = 'slab' }) {
  return (
    <div className={`placeholder placeholder--${tone}`} role="img" aria-label={`Image placeholder: ${label}`}>
      <LogoMark className="placeholder__mark" />
      <span className="placeholder__label">{label}</span>
    </div>
  );
}

// A framed image slot. `slot` is a key in content/images.js; `src` overrides it
// for images that come from data (e.g. CMS cover images).
export default function Media({ slot, src, alt, className = '', reveal = true, delay, children }) {
  const image = images[slot] || {};
  const source = src || image.src;

  return (
    <div className={`media ${className}`.trim()} data-anim={reveal ? 'media' : undefined} data-delay={delay}>
      {reveal && <div className="media__cover" aria-hidden="true" />}
      <div className="media__item">
        {source ? (
          <img className="media__img" src={source} alt={alt ?? image.alt ?? ''} loading="lazy" />
        ) : (
          <Placeholder label={image.label || slot} tone={image.tone} />
        )}
        {children}
      </div>
    </div>
  );
}
