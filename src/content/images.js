// Image manifest — the single place to swap placeholders for real photography.
//
// To replace a slot: drop the file in src/assets/images/, import it below and
// set `src` (plus a descriptive `alt`). Slots without `src` render a branded
// placeholder showing `label`. `tone` only styles the placeholder.

import oxygenDelivery from '../assets/images/oxygen-delivery.jpg';
import homeHeroFactory from '../assets/images/home-hero-factory.png';
import specimenCollection from '../assets/images/specimen-collection.png';
import covidCarePacks from '../assets/images/covid-care-packs.png';
import oxygenSupply from '../assets/images/oxygen-supply.png';
import peopleReached from '../assets/images/people-reached.png';
import whyCarterBiggs from '../assets/images/why-carter-biggs.png';
import footerTeam from '../assets/images/footer-team.png';
import partnerRjolad from '../assets/images/partner-r-jolad.jpg';
import partnerReddington from '../assets/images/partner-reddington.png';
import partnerMotherChild from '../assets/images/partner-mother-child.png';
import partnerTotalMedical from '../assets/images/partner-total-medical.png';
import partnerArriveAlive from '../assets/images/partner-arrive-alive.png';

export const partnerLogos = [
  { name: 'Total Medical Services', src: partnerTotalMedical, className: 'partner-logo--total' },
  { name: 'Arrive Alive', src: partnerArriveAlive, className: 'partner-logo--arrive' },
  { name: 'Mother & Child Hospitals', src: partnerMotherChild, className: 'partner-logo--mother-child' },
  { name: 'R-Jolad Hospital', src: partnerRjolad, className: 'partner-logo--rjolad' },
  { name: 'Reddington Hospital', src: partnerReddington, className: 'partner-logo--reddington' },
];

export const images = {
  // Home
  'home.hero': {
    src: homeHeroFactory,
    alt: 'Automated production line with a curved blue conveyor in a bright factory',
  },
  'home.who': { label: 'Who we are', tone: 'slab' },
  'home.stat.specimen': { src: specimenCollection, alt: 'A gloved hand collects a specimen in a laboratory' },
  'home.stat.carepacks': { src: covidCarePacks, alt: 'Boxes of COVID-19 care packages' },
  'home.stat.oxygen': { src: oxygenSupply, alt: 'Medical oxygen supply equipment in a facility' },
  'home.stat.people': { src: peopleReached, alt: 'A group of smiling children' },
  'home.why': { src: whyCarterBiggs, alt: 'A professional reviewing information on a laptop' },
  'home.solution.logistics': { src: oxygenDelivery, alt: 'Oxygen cylinders being delivered to a hospital by truck' },
  'home.solution.education': { label: 'Education — EduTrace', tone: 'slab' },
  'home.solution.infrastructure': { label: 'Healthcare infrastructure — Medipool', tone: 'slab' },
  'solutions.hero': { label: 'Solutions', tone: 'slab' },
  'solutions.cta': { label: 'Next project', tone: 'slab' },

  // About
  'about.hero': { label: 'About — production line', tone: 'ink' },
  'about.mission': { label: 'Our mission', tone: 'slab' },
  'about.vision': { label: 'Our vision', tone: 'slab' },
  'about.objectives': { label: 'Objectives', tone: 'ink' },
  'about.work.understand': { src: specimenCollection, alt: 'A gloved hand collects a specimen in a laboratory' },
  'about.work.design': { src: covidCarePacks, alt: 'Boxes of COVID-19 care packages' },
  'about.work.execute': { src: oxygenSupply, alt: 'Medical oxygen supply equipment in a facility' },
  'about.work.deliver': { src: peopleReached, alt: 'A group of smiling children' },

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
  'people.opportunities': { label: 'Opportunities', tone: 'slab' },
  'people.leader.1': { label: 'Leadership portrait', tone: 'navy' },
  'people.leader.2': { label: 'Leadership portrait', tone: 'navy' },
  'people.leader.3': { label: 'Leadership portrait', tone: 'navy' },
  'people.leader.4': { label: 'Leadership portrait', tone: 'navy' },

  // Shared
  'collab.ubec': { label: 'UBEC', tone: 'slab' },
  'collab.fme': { label: 'Federal Ministry of Education', tone: 'slab' },
  'collab.medipool': { label: 'Medipool Nigeria Limited', tone: 'slab' },
  'cta.partner': { label: 'Partner with us', tone: 'slab' },
  'footer.team': { src: footerTeam, alt: 'Colleagues leaning together and smiling' },

  // Insights (used until an article has its own cover image)
  'insights.hero': { label: 'Insights', tone: 'slab' },
  'insight.default': { label: 'Insight', tone: 'slab' },
};
