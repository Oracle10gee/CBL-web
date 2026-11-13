import { useRef } from 'react';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Media from '../components/Media';
import { Eyebrow } from '../components/sections';
import { usePageMotion } from '../motion/usePageMotion';

const challenges = [
  { icon: 'chart', text: 'Oxygen demand surged sharply during pandemic waves' },
  { icon: 'solidMedicalBag', text: 'Supply had to reach 10+ kiosks and hospitals across the state' },
  { icon: 'solidGear', text: 'The state-built oxygen plant required ongoing management and upkeep' },
  { icon: 'solidBuilding', text: 'The plant eventually needed a smooth handover back to the government' },
];

const deliveryItems = [
  {
    title: 'Facility supply',
    text: 'Supplied oxygen cylinders to the Infectious Disease Centre and 10 kiosks.',
    slot: 'case-study.oxygen.facility',
  },
  {
    title: 'Plant management',
    text: 'Operated and maintained the Lagos State-built oxygen plant.',
    slot: 'case-study.oxygen.plant',
  },
  {
    title: 'Surge response',
    text: 'Scaled supply sharply during the pandemic’s second wave.',
    slot: 'case-study.oxygen.surge',
  },
  {
    title: 'Government handover',
    text: 'Handed the plant back to the Ministry of Health on schedule.',
    slot: 'case-study.oxygen.handover',
  },
];

const impactMetrics = [
  { icon: 'solidDatabase', label: <>30,000+<br />cylinders</> },
  { icon: 'solidBuilding', label: <>Plant<br />management</> },
  { icon: 'solidCheckCircle', label: <>Smooth<br />handover</> },
];

const milestones = [
  { date: 'Dec 2020', detail: 'Supply began at IDH Yaba & kiosks' },
  { date: 'Jul 2021', detail: '14,000+ cylinders for 2nd wave', above: true },
  { date: 'Dec 2021', detail: '20,917 total supplies reached' },
  { date: 'Feb 2024', detail: '30,000 supply milestone reached', above: true },
  { date: 'Mar 2024', detail: 'Plant handed back to government' },
];

// The Figma reference visibly provides these facility totals; keep labels
// data-led so the chart does not introduce unverified facility names.
const facilityCounts = [565, 334, 55, 20, 10, 10, 10];
const facilityBarHeights = [100, 76, 51, 21, 11, 11, 11];
const facilityNames = ['GBAGADA GH', 'ALIMOSHO GH', 'LASAMBUSS', 'IFAKO IJAIYE GH', 'AMUWO ODOFIN', 'APAPA GH', 'ETI-OSA GH'];

export default function CaseStudies() {
  const root = useRef(null);
  usePageMotion(root);

  return (
    <div className="case-studies" ref={root}>
      <section className="hero hero--split case-studies__hero" data-theme="dark">
        <div className="container hero__grid">
          <div className="hero__content">
            <Eyebrow>Case study</Eyebrow>
            <h1 className="h1 h1--sm" data-split="words">Oxygen</h1>
            <h2 className="case-studies__hero-title">
              Carter Biggs collaboration on Oxygen
              <br className="case-studies__hero-title-break" />
              Supply &amp; Plant Management
            </h2>
            <p className="case-studies__hero-copy" data-split="lines">
              Supplying medical oxygen and managing a state-owned plant
              <br className="case-studies__hero-copy-break" /> across a multi-year pandemic response.
            </p>
          </div>
          <Media
            slot="solutions.proof.oxygen"
            className="hero__media case-studies__hero-media"
            delay={0.25}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="case-studies__timeline" data-theme="light" aria-label="Programme timeline">
        <div className="container case-studies__timeline-inner">
          <div className="case-studies__client">
            <Eyebrow>The client</Eyebrow>
            <h2>Lagos State Primary Health Care Board</h2>
            <p>
              Carter Biggs supplied medical oxygen to the Infectious Disease Centre, Yaba, and 10 oxygen kiosks across
              Lagos State.
            </p>
          </div>
          <div className="case-studies__timeline-track" aria-hidden="true">
            {Array.from({ length: 5 }, (_, index) => <span key={index} />)}
          </div>
          <div className="case-studies__timeline-dates">
            <div><strong>Dec 2020</strong><span>Project start period</span></div>
            <div><strong>Mar 2024</strong><span>Project end period</span></div>
          </div>
        </div>
      </section>

      <section className="section case-studies__challenge" data-theme="sky">
        <div className="container">
          <div className="case-studies__challenge-intro">
            <Eyebrow className="eyebrow--on-color">The challenge</Eyebrow>
            <h2 className="h2" data-split="words">Meeting surging oxygen demand</h2>
            <p className="case-studies__challenge-copy">
              Pandemic waves drove sudden surges in oxygen demand across many facilities, while the state plant had to
              keep running.
            </p>
          </div>
          <ul className="case-studies__challenge-grid">
            {challenges.map((challenge) => (
              <li key={challenge.text}>
                <Icon name={challenge.icon} className="case-studies__challenge-icon" />
                <p>{challenge.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="case-studies__delivery" data-theme="light">
        <div className="container case-studies__delivery-inner">
          <div className="case-studies__delivery-head">
            <Eyebrow>What Carter Biggs provided</Eyebrow>
            <h2>Oxygen supply and plant management</h2>
          </div>
          <div className="case-studies__delivery-grid">
            {deliveryItems.map((item) => (
              <article className="case-studies__delivery-card" key={item.title}>
                <Media slot={item.slot} className="case-studies__delivery-image" />
                <div className="case-studies__delivery-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section case-studies__milestones" data-theme="dark">
        <div className="container">
          <div className="section__head case-studies__milestones-head">
            <Eyebrow>Key milestones</Eyebrow>
            <p>How the project unfolded</p>
          </div>
          <ol className="case-studies__milestone-track">
            {milestones.map((milestone) => (
              <li className={milestone.above ? 'case-studies__milestone case-studies__milestone--above' : 'case-studies__milestone'} key={milestone.date}>
                <div className="case-studies__milestone-copy">
                  <strong>{milestone.date}</strong>
                  <span>{milestone.detail}</span>
                </div>
                <span className="case-studies__milestone-dot" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section case-studies__impact" data-theme="light">
        <div className="container case-studies__achievements-inner">
          <div className="case-studies__achievements-head">
            <Eyebrow>Key achievements</Eyebrow>
            <h2>Sustained oxygen supply, at scale</h2>
          </div>
          <div className="case-studies__achievement-stats">
            <div className="case-studies__achievement-stat">
              <Icon name="database" aria-hidden="true" />
              <strong>30,000+</strong>
              <span>Cylinders supplied<br />(to Feb 2024)</span>
            </div>
            <div className="case-studies__achievement-stat">
              <Icon name="check" aria-hidden="true" />
              <strong>14,000+</strong>
              <span>Cylinders supplied at<br />pandemic peak</span>
            </div>
          </div>
          <div className="case-studies__impact-label">
            <Icon name="chart" aria-hidden="true" />
            <h3>Achievements &amp; impact</h3>
            <p>Infectious Disease Hospital, Yaba was the largest recipient of oxygen supplies throughout the project.</p>
          </div>
        </div>
      </section>

      <section className="case-studies__facilities" data-theme="sky" aria-labelledby="facility-chart-title">
        <div className="container case-studies__facilities-inner">
          <div className="case-studies__facilities-head">
            <Eyebrow className="eyebrow--on-color">Facilities supplied</Eyebrow>
            <h2 id="facility-chart-title">Cylinders supplied, by facility</h2>
          </div>
          <div className="case-studies__facility-chart" role="list" aria-label="Cylinder counts shown in the design reference">
            {facilityCounts.map((count, index) => (
              <div className="case-studies__facility-column" role="listitem" key={`${count}-${index}`} aria-label={`${count} cylinders`}>
                <strong>{count}</strong>
                <span className="case-studies__facility-bar" style={{ '--bar-height': `${facilityBarHeights[index]}%` }} />
                <span className="case-studies__facility-name">{facilityNames[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-studies__overall-impact" data-theme="light">
        <div className="container case-studies__overall-impact-inner">
          <div className="case-studies__overall-impact-head">
            <Eyebrow>Overall impact</Eyebrow>
            <h2>Uninterrupted oxygen supply,<br />through every pandemic wave.</h2>
          </div>
          <ul className="case-studies__impact-metrics">
            {impactMetrics.map((metric) => (
              <li key={metric.icon}>
                <Icon name={metric.icon} />
                <span>{metric.label}</span>
              </li>
            ))}
          </ul>
          <div className="case-studies__overall-impact-rule" />
          <p className="case-studies__overall-impact-copy">
            30,000+ oxygen cylinders were delivered across Lagos State over three years, with the state plant returned
            fully operational to government in 2024.
          </p>
        </div>
      </section>

      <section className="section section--tight case-studies__cta" data-theme="sky">
        <div className="container case-studies__cta-inner">
          <Media
            slot="case-study.oxygen.cta"
            className="case-studies__cta-image"
          />
          <div className="case-studies__cta-copy">
            <h2>Partner with Carter Biggs</h2>
            <p className="case-studies__cta-lead">
              The Oxygen Supply Project shows how Carter Biggs sustains life-critical supply through sustained public
              health emergencies.
            </p>
            <p>
              Carter Biggs Investment Limited: healthcare logistics, supply chain, and strategic investment expertise
              for organisations across West Africa.
            </p>
            <Button to="/contact" variant="navy">Let&apos;s discuss your next project</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
