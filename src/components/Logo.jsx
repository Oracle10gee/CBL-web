import primaryLogo from '../assets/images/carter-biggs-logo.png';
import whiteLogo from '../assets/images/carter-biggs-logo-white.png';

export function LogoMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 1 24 8 20 12 16 9 12 12 8 8ZM31 16 24 24 20 20 23 16 20 12 24 8ZM16 31 8 24 12 20 16 23 20 20 24 24ZM1 16 8 8 12 12 9 16 12 20 8 24Z" fill="#5aa9c6" />
      <path d="M16 10 22 16 16 22 10 16Z" fill="#ff7075" />
    </svg>
  );
}

export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <img className="logo__image" src={primaryLogo} alt="Carter Biggs" />
      <img className="logo__image logo__image--white" src={whiteLogo} alt="" aria-hidden="true" />
    </span>
  );
}
