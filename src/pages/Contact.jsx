import { useRef } from 'react';
import Button from '../components/Button';
import { Eyebrow } from '../components/sections';
import { contact } from '../content/site';
import { usePageMotion } from '../motion/usePageMotion';

export default function Contact() {
  const root = useRef(null);
  usePageMotion(root);

  return (
    <div className="contact" ref={root}>
      <section className="hero hero--compact" data-theme="dark">
        <div className="container hero__content">
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="h1 h1--sm" data-split="words">
            Let’s make complex systems work.
          </h1>
        </div>
      </section>

      <section className="section" data-theme="light">
        <div className="container">
          <ul className="contact__grid" data-anim="stagger">
            <li>
              <h2 className="contact__label">Visit</h2>
              <p className="contact__value">{contact.address}</p>
            </li>
            <li>
              <h2 className="contact__label">Call</h2>
              {contact.phones.map((phone) => (
                <p className="contact__value" key={phone.href}>
                  <a href={phone.href}>{phone.label}</a>
                </p>
              ))}
            </li>
            <li>
              <h2 className="contact__label">Email</h2>
              <p className="contact__value">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            </li>
          </ul>
          <div data-anim="fade">
            <Button href={`mailto:${contact.email}`} variant="coral" arrow>
              Email us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
