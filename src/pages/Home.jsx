import { useRef } from 'react';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Marquee from '../components/Marquee';
import Media from '../components/Media';
import { Eyebrow } from '../components/sections';
import Showcase from '../components/Showcase';
import { usePageMotion } from '../motion/usePageMotion';

const headlineStats = [
  { slot: 'home.stat.specimen', value: 154169, label: 'Specimen collected' },
  { slot: 'home.stat.carepacks', value: 15600, label: 'Covid-19 Care packs Delivered' },
  { slot: 'home.stat.oxygen', value: 45150, label: 'Oxygen supplied' },
  { slot: 'home.stat.people', value: 100000, suffix: '+', label: 'People Reached' },
];

const reachStats = [
  { icon: 'pin', value: 3, suffix: ' States', label: 'connected through BESDA AF TESS' },
  { icon: 'database', value: 60000, suffix: '+', label: 'Digital assets monitored through Track & Trace' },
  { icon: 'book', value: 1, prefix: '#', label: 'National Education Asset Tracking Platform' },
  { icon: 'building', value: 7, suffix: '+', label: 'Levels of education governance connected through EduTrace' },
  { icon: 'heartPulse', value: 1, label: 'National e-Purchase Platform for Healthcare Commodities' },
  { icon: 'folder', value: 1, label: 'Digital ecosystem connecting healthcare supply chain stakeholders' },
];

const quality = [
  'Quality Management System (QMS)',
  'Corrective and Preventive Action (CAPA)',
  'Quality Satisfaction Index (QSI)',
  'Over 3 technology solutions deployed',
  'Half a dozen team of project experts on our team',
];

const solutions = [
  {
    slot: 'home.solution.logistics',
    title: 'Healthcare Logistics',
    lead: 'Lagos first correspondent for the covid-19 pandemic',
    text: 'Medical supply chains, healthcare infrastructure.',
    cta: { label: 'Explore Logistics Solutions', to: '/solutions#medical-logistics' },
  },
  {
    slot: 'home.solution.education',
    title: 'Education',
    text: 'EduTrace (Federal Ministry of Education): Digital solutions and technology-enabled programmes.',
    cta: { label: 'Explore Technology solutions', to: '/solutions#technology-solutions' },
  },
  {
    slot: 'home.solution.infrastructure',
    title: 'Healthcare Infrastructure',
    lead: 'Medipool — Nigeria’s first medical Group Purchasing Organization',
    text: 'Medical supply chains, healthcare infrastructure.',
    cta: { label: 'Explore Healthcare Solutions', to: '/case-studies' },
  },
];

const format = new Intl.NumberFormat('en-US');
const statText = ({ value, prefix = '', suffix = '' }) => `${prefix}${format.format(value)}${suffix}`;

function Count({ stat, className }) {
  return (
    <span className={className} data-count={stat.value} data-prefix={stat.prefix} data-suffix={stat.suffix}>
      {statText(stat)}
    </span>
  );
}

export default function Home() {
  const root = useRef(null);
  usePageMotion(root);

  return (
    <div className="home page--condensed" ref={root}>
      <section className="hero hero--full" data-theme="dark">
        <div className="hero__bg" data-anim="hero-bg">
          <Media slot="home.hero" reveal={false} className="media--flat" />
        </div>
        <div className="hero__shade" />
        <div className="container hero__content hero__content--center">
          <h1 className="h1" data-split="words">
            Making complex systems work
          </h1>
          <p className="lead" data-split="lines" data-delay="0.35">
            From medical logistics to technology and project management, Carter Biggs helps organisations turn complex
            requirements into solutions that work.
          </p>
          <div className="hero__actions" data-anim="fade" data-delay="0.7">
            <Button href="#solutions" variant="light">
              Explore our capabilities
            </Button>
            <Button to="/contact" variant="ghost">
              Get in touch
            </Button>
          </div>
        </div>
      </section>

      <section className="section" data-theme="light">
        <div className="container split">
          <Media slot="home.who" className="split__media media--tall" />
          <div className="split__body">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="h2" data-split="words">
              Complex systems rarely have simple challenges.
            </h2>
            <p className="copy" data-split="lines">
              Carter Biggs brings the expertise, technology and execution needed to connect the moving parts. Carter
              Biggs Logistics Company is a trail blazer in an industry where there is a fine line between success and
              failure.
            </p>
            <p className="copy" data-anim="fade">
              The Company realized that the medical supply chain has its own unique structure, with different
              requirements, standards, and demands. In addition, our professionals are trained to tailor their work
              approaches to the unique needs of our clients, enabling us to offer tailor-made solutions and services
              that suit their logistical requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section" data-theme="sky">
        <div className="container">
          <div className="section__head">
            <Eyebrow className="eyebrow--on-color">Insights</Eyebrow>
            <h2 className="h2" data-split="words">
              <span className="insights__line">Providing services &amp; giving</span>
              <span className="insights__line">to the NNEWI</span>
            </h2>
          </div>

          <ul className="tiles tiles--4">
            {headlineStats.map((stat, index) => (
              <li key={stat.label}>
                <Media slot={stat.slot} className="tile" delay={index * 0.35}>
                  <div className="tile__body">
                    <Count stat={stat} className="tile__value" />
                    <span className="tile__label">{stat.label}</span>
                  </div>
                </Media>
              </li>
            ))}
          </ul>

          <ul className="reach" data-anim="stagger">
            {reachStats.map((stat) => (
              <li className="reach__item" key={stat.label}>
                <Icon name={stat.icon} className="reach__icon" />
                <Count stat={stat} className="reach__value" />
                <span className="reach__label">{stat.label}</span>
                <span className="reach__rule" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" data-theme="light">
        <div className="container">
          <Media slot="home.why" className="media--wide" />
          <div className="why">
            <div>
              <Eyebrow>Why Carter Biggs</Eyebrow>
              <h2 className="h2" data-split="words">
                Complex challenges need more than a single solution
              </h2>
              <p className="copy" data-split="lines">
                They need a partner who can see the whole system and make the moving parts work together. We combine
                technical capability with on-the-ground execution, so we’re not just designing solutions, we’re
                helping organisations implement them, manage them, and make them work.
              </p>
              <p className="copy" data-anim="fade">
                As part of our history as logistics management professionals, quality assurance is embedded in our
                culture and service offerings. Our approach to quality emphasizes standardization, documentation, and
                constant monitoring to ensure compliance and enable continuous improvement. It’s a comprehensive method
                that incorporates the critical elements of the following
              </p>
            </div>
            <ul className="bullets" data-anim="stagger">
              {quality.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--flush-bottom" id="solutions" data-theme="light">
        <div className="container section__head section__head--center">
          <span className="rule" data-anim="line" />
          <h2 className="h2" data-split="words">
            Solutions built around real-world needs
          </h2>
        </div>
        <Showcase items={solutions} />
      </section>

      <section className="section section--tight" data-theme="light">
        <div className="container partners">
          <div className="partners__intro">
            <h2 className="h3" data-split="words">
              Our Partners
            </h2>
            <p className="copy" data-split="lines">
              Official Logistics Provider to the Lagos State COVID-19 Private Lab Consortium.
            </p>
          </div>
          <Marquee className="partners__marquee" />
        </div>
      </section>
    </div>
  );
}
