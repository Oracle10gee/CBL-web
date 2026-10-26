import { useRef } from 'react';
import Icon from '../components/Icon';
import Media from '../components/Media';
import Showcase from '../components/Showcase';
import { Eyebrow } from '../components/sections';
import { usePageMotion } from '../motion/usePageMotion';

const statements = [
  {
    slot: 'about.mission',
    title: 'Our Mission',
    text: 'To add value to our client’s operations through the delivery of prompt, effective and qualitative services and in conformity with the highest ethical and professional standards.',
  },
  {
    slot: 'about.vision',
    title: 'Our Vision',
    text: 'To be a knowledge-based solution driven logistics firm of choice in Nigeria and globally delivering world class professional service, backed by cutting edge technology processes.',
  },
];

const outcomesLeft = ['Greater Efficiency', 'Faster Response', 'Reduced Costs'];
const outcomesRight = [
  'Improved Visibility',
  'Smarter Decision-Making',
  'Stronger Partnerships',
  'Greater Accountability',
  'Scalable Solutions',
  'Better Service Delivery',
  'Measurable Impact',
];

const steps = [
  { icon: 'brain', title: 'Understand', text: 'We identify the challenge, context and desired outcome.' },
  { icon: 'design', title: 'Design', text: 'We develop the right solution, system or approach.' },
  { icon: 'network', title: 'Execute', text: 'We coordinate the people, technology and resources required.' },
  { icon: 'rocket', title: 'Deliver', text: 'We measure outcomes and ensure the solution works in practice.' },
];

export default function About() {
  const root = useRef(null);
  usePageMotion(root);

  return (
    <div className="about" ref={root}>
      <section className="hero hero--plain" data-theme="light">
        <div className="container hero__content hero__content--center">
          <h1 className="h1" data-split="words">
            Delivering excellence at every level
          </h1>
        </div>
        <div className="hero__banner" data-anim="scale">
          <Media slot="about.hero" reveal={false} className="media--flat" />
        </div>
      </section>

      <section className="section section--flush-bottom" data-theme="light">
        <Showcase items={statements} />
      </section>

      <section className="banner" data-theme="dark">
        <div className="banner__bg" data-parallax="60">
          <Media slot="about.objectives" reveal={false} className="media--flat" />
        </div>
        <div className="banner__shade" />
        <div className="container banner__content">
          <Eyebrow className="eyebrow--on-color">Objectives</Eyebrow>
          <p className="banner__text" data-split="lines">
            Carter Biggs is a solutions and infrastructure company providing Medical Logistics, Technology Solutions,
            and Project Management services. We work with organisations across healthcare, education, and other sectors
            to design, implement, and manage solutions that make complex systems more efficient, connected, and
            responsive.
          </p>
        </div>
      </section>

      <section className="section" data-theme="light">
        <div className="container outcomes">
          <div>
            <p className="copy" data-split="lines">
              Our work sits at the intersection of people, processes, technology, and resources. By bringing these
              elements together, we help organisations translate complex requirements into practical solutions that
              deliver meaningful and measurable outcomes.
            </p>
            <p className="copy" data-anim="fade">
              Through our integrated capabilities and structured approach to execution, we aim to deliver:
            </p>
            <ul className="bullets" data-anim="stagger">
              {outcomesLeft.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <ul className="bullets" data-anim="stagger">
            {outcomesRight.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" data-theme="sky">
        <div className="container work-process">
          <div className="section__head">
            <Eyebrow className="eyebrow--on-color">How we work</Eyebrow>
            <h2 className="h2" data-split="words">
              We work across disciplines, not in silos.
            </h2>
          </div>

          <ol className="work-process__steps">
            {steps.map((step) => (
              <li className="work-process__step" key={step.title}>
                <Icon name={step.icon} size={28} className="work-process__icon" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="prose prose--on-color">
            <p data-split="lines">The problems our clients bring to us rarely fit neatly into one department.</p>
            <p data-split="lines">
              A healthcare logistics challenge may involve technology. A technology implementation may require project
              management. A large-scale programme may require logistics, stakeholder coordination and operational
              support.
            </p>
            <p data-split="lines">That’s why collaboration is central to how we work.</p>
            <p data-split="lines">
              We bring the right people together around the challenge, share knowledge across disciplines and keep
              everyone focused on the outcome.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
