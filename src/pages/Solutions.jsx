import { useRef } from 'react';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Media from '../components/Media';
import { Eyebrow } from '../components/sections';
import { usePageMotion } from '../motion/usePageMotion';

const capabilities = {
  medical: [
    { icon: 'cart', title: 'Procurement & Sourcing', text: 'Supporting the efficient sourcing and movement of medical products and supplies.' },
    { icon: 'building', title: 'Warehousing & Inventory', text: 'Structured storage and inventory management designed to maintain product availability and visibility.' },
    { icon: 'pin', title: 'Distribution & Last-Mile Delivery', text: 'Coordinating the movement of healthcare products to facilities and points of need.' },
    { icon: 'network', title: 'Supply Chain Coordination', text: 'Connecting suppliers, logistics partners and healthcare stakeholders across the supply chain.' },
    { icon: 'eye', title: 'Monitoring & Visibility', text: 'Using data and technology to improve visibility across the movement and management of healthcare resources.' },
  ],
  technology: [
    { icon: 'monitor', title: 'Digital Platforms', text: 'Designing and implementing platforms that connect people, processes and information.' },
    { icon: 'database', title: 'Asset Tracking & Management', text: 'Creating systems that provide visibility across the location, status, utilisation and lifecycle of physical assets.' },
    { icon: 'pulse', title: 'Data & Analytics', text: 'Turning operational data into dashboards and insights that support better decision-making.' },
    { icon: 'board', title: 'Digital Process Transformation', text: 'Replacing fragmented manual processes with structured digital workflows.' },
    { icon: 'network', title: 'System Integration', text: 'Connecting platforms and third-party systems to create more seamless digital ecosystems.' },
    { icon: 'users', title: 'Training & Adoption', text: 'Equipping users and administrators with the knowledge required to effectively use and manage deployed solutions.' },
  ],
  project: [
    { icon: 'book', title: 'Project Planning', text: 'Defining objectives, deliverables, timelines, resources and implementation requirements.' },
    { icon: 'network', title: 'Programme Coordination', text: 'Coordinating multiple teams, partners and workstreams towards a shared outcome.' },
    { icon: 'monitor', title: 'Implementation Management', text: 'Supporting the transition from planning to execution and ensuring activities remain aligned with project objectives.' },
    { icon: 'solidHeart', title: 'Stakeholder Management', text: 'Creating clear channels of communication and coordination across project stakeholders.' },
    { icon: 'eye', title: 'Monitoring & Reporting', text: 'Tracking progress, identifying risks and providing the information required for informed decision-making.' },
    { icon: 'solidShield', title: 'Quality & Delivery Assurance', text: 'Maintaining focus on agreed standards, deliverables and outcomes throughout implementation.' },
  ],
};

const work = [
  {
    slot: 'solutions.project.besda',
    title: 'BESDA AF-TESS Track & Trace & Digital Asset Management System',
    text: 'A system designed to monitor and manage 60,000+ educational tablets across Oyo, Adamawa and Katsina States.',
  },
  {
    slot: 'solutions.project.edutrace',
    title: 'EduTrace',
    text: 'A national education asset tracking and monitoring platform developed for the Federal Ministry of Education.',
  },
  {
    slot: 'solutions.project.medipool',
    title: 'Medipool e-Purchase Platform',
    text: 'A national digital purchasing and supply-chain platform designed to improve the acquisition and management of essential medicines and healthcare commodities.',
  },
];

const proof = [
  { slot: 'solutions.proof.tablets', value: '60,000+', label: 'Educational tablets tracked and managed' },
  { slot: 'solutions.proof.specimens', value: '154,169', label: 'Specimens collected' },
  { slot: 'solutions.proof.oxygen', value: '45,150', label: 'Oxygen supplied' },
  { slot: 'solutions.proof.carepacks', value: '15,600', label: 'COVID-19 care packs delivered' },
];

function CapabilityGrid({ items }) {
  return (
    <ul className="solutions__capabilities" data-anim="stagger">
      {items.map((item) => (
        <li className="solutions__capability" key={item.title}>
          <Icon name={item.icon} className="solutions__icon" />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

function WorkCards({ items = work }) {
  return (
    <div className="solutions__work-grid">
      {items.map((item) => (
        <article className="solutions__work-card" key={item.title}>
          <Media slot={item.slot} className="solutions__work-media" />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export default function Solutions() {
  const root = useRef(null);
  usePageMotion(root);

  return (
    <div className="solutions" ref={root}>
      <section className="hero hero--split solutions__hero" data-theme="dark">
        <div className="container hero__grid">
          <div className="hero__content">
            <h1 className="h1 h1--sm" data-split="words">Making complex systems work.</h1>
            <p className="lead" data-split="lines">
              Complex challenges rarely have a single moving part. They require the right resources, technology, people,
              and processes to work together.
            </p>
            <p className="lead" data-split="lines">
              Carter Biggs brings these elements together through three core capabilities: Medical Logistics,
              Technology Solutions and Project Management.
            </p>
            <div className="hero__actions" data-anim="fade">
              <Button to="/contact" variant="coral">Work with us</Button>
            </div>
          </div>
          <Media slot="solutions.hero" className="hero__media solutions__hero-media" delay={0.4} />
        </div>
      </section>

      <section className="section solutions__section" id="medical-logistics" data-theme="light">
        <div className="container">
          <div className="solutions__intro">
            <Eyebrow>Keeping what healthcare needs moving.</Eyebrow>
            <h2 className="h2">Medical Logistics</h2>
            <p>
              Healthcare depends on reliable access to the products, equipment, and supplies that keep services running.
              Our medical logistics capability is designed around that need.
            </p>
            <p>
              We manage the movement of essential healthcare products across the supply chain—from sourcing and
              procurement support to warehousing, distribution, and last-mile delivery. Our approach combines
              operational discipline, visibility, and coordination to help ensure that the right products reach the
              right place, at the right time, and in the right condition.
            </p>
            <Button href="#medical-capabilities" variant="coral">Explore Medical Logistics</Button>
          </div>
          <h3 className="solutions__what" id="medical-capabilities">What we do</h3>
          <CapabilityGrid items={capabilities.medical} />
        </div>
      </section>

      <section className="section solutions__section solutions__section--sky" id="technology-solutions" data-theme="sky">
        <div className="container">
          <div className="solutions__intro">
            <Eyebrow className="eyebrow--on-color">Building technology that solves real problems.</Eyebrow>
            <h2 className="h2">Technology Solutions</h2>
            <p>
              Technology should make complex work simpler—not create another layer of complexity. Carter Biggs designs
              and implements digital solutions that help organisations manage information, assets, processes and
              operations more effectively.
            </p>
            <p>
              Our experience spans healthcare, education and other sectors where organisations need technology that is
              practical, scalable and built around real operational needs.
            </p>
            <Button href="#technology-capabilities" variant="navy">Explore Technology Solutions</Button>
          </div>
          <h3 className="solutions__what" id="technology-capabilities">What we do</h3>
          <CapabilityGrid items={capabilities.technology} />
          <h3 className="solutions__built">What we’ve built</h3>
          <WorkCards />
        </div>
      </section>

      <section className="section solutions__section" id="project-management" data-theme="light">
        <div className="container">
          <div className="solutions__intro">
            <Eyebrow>Turning complex plans into results.</Eyebrow>
            <h2 className="h2">Project Management</h2>
            <p>A good plan is only the beginning.</p>
            <p>
              We provide the structure, coordination, and oversight required to move complex initiatives from concept to
              implementation. Our project management approach brings together people, processes, resources and
              timelines—giving stakeholders the visibility they need while keeping delivery focused on the intended
              outcome.
            </p>
            <Button href="#project-capabilities" variant="coral">Explore Project Management</Button>
          </div>
          <h3 className="solutions__what" id="project-capabilities">What we do</h3>
          <CapabilityGrid items={capabilities.project} />
          <h3 className="solutions__built">What we’ve built</h3>
          <WorkCards items={[work[2], { ...work[0], slot: 'project-management.besda' }]} />
        </div>
      </section>

      <section className="section solutions__proof" id="proven-in-practice" data-theme="dark">
        <div className="container">
          <div className="solutions__proof-intro">
            <h2 className="h2">Proven in practice.</h2>
            <p>Our capabilities are backed by experience delivering complex programmes across healthcare, education and other sectors.</p>
          </div>
          <ul className="solutions__proof-grid">
            {proof.map((item) => (
              <li className="solutions__proof-card" key={item.value}>
                <Media slot={item.slot} className="solutions__proof-media" />
                <span className="solutions__proof-value">{item.value}</span>
                <span className="solutions__proof-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section solutions__cta" data-theme="light">
        <div className="container cta">
          <Media slot="solutions.cta" className="solutions__cta-media" />
          <div className="solutions__cta-body">
            <h2 className="h2">Let's make your next project work.</h2>
            <p>
              Have a complex challenge that needs the right combination of expertise, technology and execution? Let's
              talk about what you're trying to achieve.
            </p>
            <Button to="/contact" variant="coral">Work with us</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
