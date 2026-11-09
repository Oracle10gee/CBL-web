import { socialLinks } from '../content/site';
import Icon from './Icon';

export default function SocialLinks({ className = '', networks }) {
  const visibleLinks = networks
    ? socialLinks.filter((social) => networks.includes(social.label))
    : socialLinks;

  return (
    <ul className={`social-links ${className}`.trim()}>
      {visibleLinks.map((social) => (
        <li key={social.label}>
          <a
            className="social-links__link"
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            title={social.label}
          >
            <Icon name={social.label.toLowerCase()} size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
