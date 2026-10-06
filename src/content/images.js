// Image manifest — the single place to swap placeholders for real photography.
//
// To replace a slot: drop the file in src/assets/images/, import it below and
// set `src` (plus a descriptive `alt`). Slots without `src` render a branded
// placeholder showing `label`. `tone` only styles the placeholder.

import oxygenCylinders from '../assets/images/oxygen-cylinders.jpg';
import oxygenDelivery from '../assets/images/oxygen-delivery.jpg';

export const images = {
  // Home
  'home.hero': { label: 'Hero — production line', tone: 'ink' },
  'home.who': { label: 'Who we are', tone: 'slab' },
  'home.stat.specimen': { label: 'Specimen collection', tone: 'navy' },
  'home.stat.carepacks': { label: 'COVID-19 care packs', tone: 'ink' },
  'home.stat.oxygen': { src: oxygenCylinders, alt: 'Rows of medical oxygen cylinders' },
  'home.stat.people': { label: 'People reached', tone: 'navy' },
  'home.why': { label: 'Why Carter Biggs', tone: 'ink' },
  'home.solution.logistics': { src: oxygenDelivery, alt: 'Oxygen cylinders being delivered to a hospital by truck' },
  'home.solution.education': { label: 'Education — EduTrace', tone: 'slab' },
  'home.solution.infrastructure': { label: 'Healthcare infrastructure — Medipool', tone: 'slab' },

  // About
  'about.hero': { label: 'About — production line', tone: 'ink' },
  'about.mission': { label: 'Our mission', tone: 'slab' },
  'about.vision': { label: 'Our vision', tone: 'slab' },
  'about.objectives': { label: 'Objectives', tone: 'ink' },
  'about.work.understand': { label: 'Understand', tone: 'navy' },
  'about.work.design': { label: 'Design', tone: 'ink' },
  'about.work.execute': { label: 'Execute', tone: 'navy' },
  'about.work.deliver': { label: 'Deliver', tone: 'ink' },

  // Partnerships
  'partners.hero': { label: 'Partnerships', tone: 'slab' },
  'partners.who.government': { label: 'Government', tone: 'navy' },
  'partners.who.healthcare': { label: 'Healthcare organisations', tone: 'ink' },
  'partners.who.development': { label: 'Development partners', tone: 'ink' },
  'partners.who.technology': { label: 'Technology partners', tone: 'navy' },
  'partners.who.suppliers': { label: 'Manufacturers & suppliers', tone: 'navy' },
  'partners.who.institutions': { label: 'Institutions', tone: 'ink' },

  // Our people
  'people.hero': { label: 'Our people', tone: 'slab' },
  'people.leader.1': { label: 'Leadership portrait', tone: 'navy' },
  'people.leader.2': { label: 'Leadership portrait', tone: 'navy' },
  'people.leader.3': { label: 'Leadership portrait', tone: 'navy' },
  'people.leader.4': { label: 'Leadership portrait', tone: 'navy' },

  // Shared
  'collab.ubec': { label: 'UBEC', tone: 'slab' },
  'collab.fme': { label: 'Federal Ministry of Education', tone: 'slab' },
  'collab.medipool': { label: 'Medipool Nigeria Limited', tone: 'slab' },
  'cta.partner': { label: 'Partner with us', tone: 'slab' },
  'footer.team': { label: 'Team', tone: 'navy' },

  // Insights (used until an article has its own cover image)
  'insight.default': { label: 'Insight', tone: 'navy' },
};
