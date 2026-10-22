import { useRef, useState } from 'react';
import Button from '../components/Button';
import Marquee from '../components/Marquee';
import Media from '../components/Media';
import { Collaborations, Eyebrow, PartnerCta, Principles } from '../components/sections';
import { usePageMotion } from '../motion/usePageMotion';

// The design supplies copy for the first card only; the other three reuse the
// "How we work" steps from the About page until dedicated copy is written.
const approach = [
  { slot: 'about.work.understand', title: 'Understand the need.', text: 'We align around the challenge and the outcome that matters.' },
  { slot: 'about.work.design', title: 'Design.', text: 'We develop the right solution, system or approach.' },
  { slot: 'about.work.execute', title: 'Execute.', text: 'We coordinate the people, technology and resources required.' },
  { slot: 'about.work.deliver', title: 'Deliver.', text: 'We measure outcomes and ensure the solution works in practice.' },
];

const audiences = [
  {
    slot: 'partners.who.government',
    title: 'Government',
    text: 'We work with government institutions to support programmes that require structured implementation, technology, logistics and operational coordination.',
  },
  {
    slot: 'partners.who.healthcare',
    title: 'Healthcare Organisations',
    text: 'We partner with healthcare institutions and organisations to strengthen the systems, resources and services that support healthcare delivery.',
  },
  {
    slot: 'partners.who.development',
    title: 'Development Partners',
    text: 'We collaborate with development organisations to translate programme objectives into practical, scalable and sustainable solutions.',
  },
  {
    slot: 'partners.who.technology',
    title: 'Technology Partners',
    text: 'We work with technology providers and specialists to develop, integrate and implement digital solutions that address real operational needs.',
  },
  {
    slot: 'partners.who.suppliers',
    title: 'Manufacturers & Suppliers',
    text: 'We connect with manufacturers and suppliers to support the efficient sourcing, movement and delivery of products and resources.',
  },
  {
    slot: 'partners.who.institutions',
    title: 'Institutions',
    text: 'We work with educational institutions, agencies and other organisations to design and implement solutions around their specific needs.',
  },
];

function ApproachCards() {
  const [active, setActive] = useState(0);
  return (
    <div className="expand" data-anim="fade">
      {approach.map((card, index) => (
        <button
          className={`expand__card ${index === active ? 'expand__card--active' : ''}`}
          type="button"
          key={card.title}
          aria-pressed={index === active}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onClick={() => setActive(index)}
        >
          <Media slot={card.slot} reveal={false} className="media--flat" />
          <span className="expand__body">
            <span className="expand__title">{card.title}</span>
            <span className="expand__text">{card.text}</span>
          </span>
        </button>
      ))}
    </div>
  );
}

export default function Partnerships() {
  const root = useRef(null);
  usePageMotion(root);

  return (
    <div className="partnerships" ref={root}>
      <section className="hero hero--split" data-theme="dark">
        <div className="container hero__grid">
          <div className="hero__content">
            <h1 className="h1 h1--sm" data-split="words">
              Complex challenges require strong partnerships.
            </h1>
            <p className="lead" data-split="lines" data-delay="0.3">
              Meaningful challenges rarely belong to one organisation alone. Better healthcare, effective digital
              systems, and complex programmes need the right mix of expertise, resources, technology and people. At
              Carter Biggs, we partner with organisations who share our commitment to solving real problems — combining
              capabilities, aligning priorities, and turning shared goals into outcomes.
            </p>
            <div className="hero__actions" data-anim="fade" data-delay="0.6">
              <Button to="/contact" variant="coral">
                Partner with us
              </Button>
            </div>
          </div>
          <Media slot="partners.hero" className="hero__media" delay={0.4} />
        </div>
      </section>

      <section className="strip" data-theme="light">
        <Marquee className="partnerships__marquee" />
      </section>

      <section className="section partnerships__collaboration" data-theme="light">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Built on collaboration</Eyebrow>
            <h2 className="h2" data-split="words">
              The right expertise. The right resources. One shared objective.
            </h2>
            <p className="lead lead--muted" data-split="lines">
              Our partnerships extend our capabilities and allow us to deliver solutions at the scale and complexity our
              clients require.
            </p>
            <p className="lead lead--muted" data-split="lines">
              We work across sectors and bring together public and private organisations, technical experts, suppliers,
              development organisations and implementation partners to create stronger, more connected solutions.
            </p>
          </div>
          <ApproachCards />
        </div>
      </section>

      <section className="section partnerships__audiences" data-theme="sky">
        <div className="container">
          <div className="section__head">
            <Eyebrow className="eyebrow--on-color">Who we work with</Eyebrow>
            <h2 className="h2" data-split="words">
              Our partnerships span the organisations that shape, support and deliver critical programmes and services.
            </h2>
          </div>
          <ul className="audiences">
            {audiences.map((item, index) => (
              <li className="audience" key={item.title}>
                <Media slot={item.slot} className="audience__media" delay={(index % 2) * 0.35} />
                <h3 className="audience__title" data-anim="fade">
                  {item.title}
                </h3>
                <p className="audience__text" data-anim="fade">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Collaborations />
      <Principles className="partnerships__principles" />
      <PartnerCta />
    </div>
  );
}
