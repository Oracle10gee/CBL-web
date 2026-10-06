import { useRef } from 'react';
import Media from '../components/Media';
import { Collaborations, Eyebrow, FeatureGrid, PartnerCta, Principles } from '../components/sections';
import { expertise } from '../content/site';
import { usePageMotion } from '../motion/usePageMotion';

// Placeholder profiles, exactly as in the design, until the leadership team's details are supplied.
const leaders = [1, 2, 3, 4].map((id) => ({
  slot: `people.leader.${id}`,
  position: 'Position',
  name: 'Name Name',
  bio: 'sentence profile highlighting professional expertise, experience and contribution to Carter Biggs.',
}));

// The design repeats the expertise list under "What we value"; swap in the real values here.
const values = expertise;

export default function People() {
  const root = useRef(null);
  usePageMotion(root);

  return (
    <div className="people" ref={root}>
      <section className="hero hero--split" data-theme="dark">
        <div className="container hero__grid">
          <div className="hero__content">
            <h1 className="h1 h1--sm" data-split="words">
              People behind the systems.
            </h1>
            <p className="lead" data-split="lines" data-delay="0.3">
              Complex systems don’t work on their own.
            </p>
            <p className="lead" data-split="lines" data-delay="0.4">
              Behind every solution we design, every product we move and every project we deliver are people who bring
              expertise, discipline, curiosity and commitment to the work.
            </p>
            <p className="lead" data-split="lines" data-delay="0.5">
              At Carter Biggs, we believe the strength of our work comes from the people behind it. Our teams bring
              together diverse professional backgrounds across logistics, technology, healthcare, project management
              and operations — working together to turn complex challenges into solutions that work.
            </p>
          </div>
          <Media slot="people.hero" className="hero__media" delay={0.4} />
        </div>
      </section>

      <section className="section" data-theme="light">
        <div className="container">
          <div className="section__head">
            <Eyebrow>Expertise with purpose</Eyebrow>
            <h2 className="h2" data-split="words">
              Different expertise. One shared commitment.
            </h2>
            <p className="lead lead--muted" data-split="lines">
              The challenges we work on require more than technical knowledge. They require people who can understand
              the bigger picture, work across disciplines and stay focused on the outcome.
            </p>
            <p className="lead lead--muted" data-anim="fade">
              Our teams bring expertise across:
            </p>
          </div>
          <FeatureGrid items={expertise} />
        </div>
      </section>

      <section className="section" data-theme="dark">
        <div className="container">
          <div className="section__head">
            <Eyebrow>Our Leadership</Eyebrow>
            <h2 className="h2" data-split="words">
              Experience that guides execution.
            </h2>
            <p className="lead lead--dim" data-split="lines">
              Our leadership team brings together experience across business, logistics, technology, healthcare,
              project delivery and operations.
            </p>
            <p className="lead lead--dim" data-split="lines">
              They provide the direction, accountability and strategic perspective required to help Carter Biggs grow
              while remaining focused on the quality and impact of our work.
            </p>
          </div>
          <ul className="leaders">
            {leaders.map((leader, index) => (
              <li className="leader" key={leader.slot}>
                <Media slot={leader.slot} className="leader__media" delay={index * 0.35} />
                <div data-anim="fade">
                  <p className="leader__position">{leader.position}</p>
                  <h3 className="leader__name">{leader.name}</h3>
                  <p className="leader__bio">{leader.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" data-theme="light">
        <div className="container">
          <div className="section__head">
            <Eyebrow>What we value</Eyebrow>
            <h2 className="h2" data-split="words">
              The way we work matters as much as what we deliver.
            </h2>
            <p className="lead lead--muted" data-split="lines">
              Our values shape how we make decisions, work with partners and serve our clients.
            </p>
          </div>
          <FeatureGrid items={values} />
        </div>
      </section>

      <Collaborations />
      <Principles />
      <PartnerCta />
    </div>
  );
}
