import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { contact, footerLinks } from '../content/site';
import { usePageMotion } from '../motion/usePageMotion';
import { subscribe } from '../services/subscribers';
import Logo from './Logo';
import Media from './Media';

function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: 'sending', message: '' });
    const result = await subscribe(email);
    setStatus({ state: result.ok ? 'done' : 'error', message: result.message });
    if (result.ok) setEmail('');
  };

  return (
    <form className="subscribe" onSubmit={onSubmit}>
      <div className="subscribe__row">
        <input
          className="subscribe__input"
          type="email"
          required
          placeholder="Email"
          aria-label="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className="btn btn--sky" type="submit" disabled={status.state === 'sending'}>
          <span>{status.state === 'sending' ? 'Sending…' : 'Subscribe'}</span>
        </button>
      </div>
      <p className={`subscribe__note subscribe__note--${status.state}`} role="status">
        {status.message}
      </p>
    </form>
  );
}

export default function Footer() {
  const root = useRef(null);
  usePageMotion(root);

  return (
    <footer className="footer" ref={root} data-theme="dark">
      <div className="footer__photo">
        <div className="footer__photo-inner" data-parallax="50">
          <Media slot="footer.team" reveal={false} className="media--flat" />
        </div>
      </div>

      <div className="container footer__body">
        <div className="footer__card" data-anim="fade">
          <div className="footer__brand">
            <Link to="/" aria-label="Carter Biggs — home">
              <Logo className="logo--lg" />
            </Link>
            <ul className="footer__links">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact">
            <h3 className="footer__label">Get in touch</h3>
            <p>{contact.address}</p>
            <p>
              {contact.phones.map((phone, index) => (
                <span key={phone.href}>
                  {index > 0 && ', '}
                  <a href={phone.href}>{phone.label}</a>
                </span>
              ))}
            </p>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>

          <div className="footer__news">
            <h3 className="footer__title">Stay informed</h3>
            <p>Receive the latest Carter Biggs insights, project stories, and updates.</p>
            <SubscribeForm />
          </div>
        </div>

        <p className="footer__legal">Copyright © 2026 Carterbiggs Limited. All rights reserved</p>
      </div>
    </footer>
  );
}
