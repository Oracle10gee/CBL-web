// Sections that appear on more than one page.
import { collaborations, principles } from '../content/site';
import Button from './Button';
import Icon from './Icon';
import Media from './Media';
import Showcase from './Showcase';

export function Eyebrow({ children, className = '' }) {
  return (
    <p className={`eyebrow ${className}`.trim()} data-anim="fade">
      {children}
    </p>
  );
}

export function FeatureGrid({ items }) {
  return (
    <ul className="features" data-anim="stagger">
      {items.map((item) => (
        <li className="feature" key={item.title}>
          <Icon name={item.icon} className="feature__icon" />
          <h3 className="feature__title">{item.title}</h3>
          <p className="feature__text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function Collaborations() {
  return (
    <section className="section section--flush-bottom" data-theme="light">
      <div className="container section__head section__head--center">
        <Eyebrow>Partnerships in practice</Eyebrow>
        <h2 className="h2" data-split="words">
          Collaboration that delivers.
        </h2>
        <p className="lead lead--muted" data-split="lines">
          Our partnerships are most valuable when they translate into something tangible. From digital platforms that
          improve visibility of national assets to logistics programmes that move essential healthcare resources, we
          bring our partners together around clearly defined outcomes.
        </p>
        <p className="lead lead--muted" data-anim="fade">
          Here are some notable collaborations
        </p>
      </div>
      <Showcase items={collaborations} />
    </section>
  );
}

export function Principles() {
  return (
    <section className="section" data-theme="light">
      <div className="container">
        <div className="section__head">
          <Eyebrow>Our partnership principles</Eyebrow>
          <h2 className="h2" data-split="words">
            Strong partnerships are built on more than shared objectives.
          </h2>
        </div>
        <FeatureGrid items={principles} />
      </div>
    </section>
  );
}

export function PartnerCta() {
  return (
    <section className="section section--tight" data-theme="light">
      <div className="container cta">
        <Media slot="cta.partner" className="cta__media" />
        <div className="cta__body">
          <h2 className="h2" data-split="words">
            Let’s build what comes next
          </h2>
          <p className="lead lead--muted" data-split="lines">
            Have a capability, resource or shared objective that could create greater impact through partnership?
          </p>
          <div data-anim="fade">
            <Button to="/contact" variant="coral">
              Partner with us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
