import primaryLogo from '../assets/images/carter-biggs-logo.png';
import whiteLogo from '../assets/images/carter-biggs-logo-white.png';
import brandMark from '../assets/images/cb-logomark.png';

export function LogoMark({ className }) {
  return <img className={className} src={brandMark} alt="" aria-hidden="true" />;
}

export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <img className="logo__image" src={primaryLogo} alt="Carter Biggs" />
      <img className="logo__image logo__image--white" src={whiteLogo} alt="" aria-hidden="true" />
    </span>
  );
}
