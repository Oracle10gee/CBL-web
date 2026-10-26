// Image manifest — the single place to swap placeholders for real photography.
//
// To replace a slot: drop the file in src/assets/images/, import it below and
// set `src` (plus a descriptive `alt`). Slots without `src` render a branded
// placeholder showing `label`. `tone` only styles the placeholder.

import homeSolutionLogistics from '../assets/images/home-solution-logistics.png';
import homeSolutionEducation from '../assets/images/home-solution-education.png';
import homeSolutionInfrastructure from '../assets/images/home-solution-infrastructure.png';
import homeHeroFactory from '../assets/images/home-hero-factory.png';
import specimenCollection from '../assets/images/specimen-collection.png';
import covidCarePacks from '../assets/images/covid-care-packs.png';
import homeInsightSpecimen from '../assets/images/home-insight-specimen.png';
import homeInsightCarepacks from '../assets/images/home-insight-carepacks.png';
import oxygenSupply from '../assets/images/oxygen-supply.png';
import peopleReached from '../assets/images/people-reached.png';
import homeWhyCarterBiggs from '../assets/images/home-why-carter-biggs.png';
import whoWeAreProfessional from '../assets/images/who-we-are-professional.png';
import footerHealthcareTeam from '../assets/images/footer-healthcare-team.png';
import aboutHeroPartnership from '../assets/images/about-hero-partnership.png';
import aboutMission from '../assets/images/about-mission.png';
import aboutVision from '../assets/images/about-vision.png';
import aboutObjectives from '../assets/images/about-objectives.png';
import partnerRjolad from '../assets/images/partner-r-jolad.jpg';
import partnerReddington from '../assets/images/partner-reddington.png';
import partnerMotherChild from '../assets/images/partner-mother-child.png';
import partnerTotalMedical from '../assets/images/partner-total-medical.png';
import partnerArriveAlive from '../assets/images/partner-arrive-alive.png';
import partnershipUnderstand from '../assets/images/partnership-understand.png';
import partnershipDesign from '../assets/images/partnership-design.png';
import partnershipExecute from '../assets/images/partnership-execute.png';
import partnershipDeliver from '../assets/images/partnership-deliver.png';
import partnershipsHero from '../assets/images/partnerships-hero.png';
import partnershipGovernment from '../assets/images/partnership-government.png';
import partnershipHealthcare from '../assets/images/partnership-healthcare.png';
import partnershipDevelopment from '../assets/images/partnership-development.png';
import partnershipTechnology from '../assets/images/partnership-technology.png';
import partnershipSuppliers from '../assets/images/partnership-suppliers.png';
import partnershipInstitutions from '../assets/images/partnership-institutions.png';
import collaborationUbec from '../assets/images/collaboration-ubec.png';
import collaborationFme from '../assets/images/collaboration-fme.png';
import collaborationMedipool from '../assets/images/collaboration-medipool.png';
import partnershipCta from '../assets/images/partnership-cta.png';
import peopleHeroTeam from '../assets/images/people-hero-team.png';
import peopleOpportunities from '../assets/images/people-opportunities.png';
import insightsHero from '../assets/images/insights-hero.png';
import solutionsHeroTeam from '../assets/images/solutions-hero-team.png';
import solutionsProjectBesda from '../assets/images/solutions-project-besda.png';
import solutionsProjectEdutrace from '../assets/images/solutions-project-edutrace.png';
import solutionsProjectMedipool from '../assets/images/solutions-project-medipool.png';
import projectManagementBesda from '../assets/images/project-management-besda.png';
import solutionsProofTablets from '../assets/images/solutions-proof-tablets.png';
import solutionsProofSpecimens from '../assets/images/solutions-proof-specimens.png';
import solutionsProofOxygen from '../assets/images/solutions-proof-oxygen.png';
import solutionsProofCarepacks from '../assets/images/solutions-proof-carepacks.png';
import solutionsCtaTeam from '../assets/images/solutions-cta-team.png';

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
  'home.who': {
    src: whoWeAreProfessional,
    alt: 'Carter Biggs professional working at a laptop in an office',
  },
  'home.stat.specimen': {
    src: homeInsightSpecimen,
    alt: 'A gloved hand collects a specimen in a laboratory',
  },
  'home.stat.carepacks': {
    src: homeInsightCarepacks,
    alt: 'COVID-19 care supplies including masks, sanitizer and recovery guidance',
  },
  'home.stat.oxygen': { src: oxygenSupply, alt: 'Medical oxygen supply equipment in a facility' },
  'home.stat.people': { src: peopleReached, alt: 'A group of smiling children' },
  'home.why': {
    src: homeWhyCarterBiggs,
    alt: 'Two colleagues discussing work together over a laptop',
  },
  'home.solution.logistics': {
    src: homeSolutionLogistics,
    alt: 'Healthcare logistics professional in a warehouse',
  },
  'home.solution.education': {
    src: homeSolutionEducation,
    alt: 'Teacher leading a lesson in a classroom',
  },
  'home.solution.infrastructure': {
    src: homeSolutionInfrastructure,
    alt: 'Healthcare worker holding a medical supply package',
  },
  'solutions.hero': {
    src: solutionsHeroTeam,
    alt: 'Three colleagues smiling together in a modern office',
  },
  'solutions.project.besda': {
    src: solutionsProjectBesda,
    alt: 'Student in a green shirt using an orange tablet for learning',
  },
  'project-management.besda': {
    src: projectManagementBesda,
    alt: 'Child using a tablet while relaxing on a sofa',
  },
  'solutions.project.edutrace': {
    src: solutionsProjectEdutrace,
    alt: 'Stacks of books representing education resources',
  },
  'solutions.project.medipool': {
    src: solutionsProjectMedipool,
    alt: 'Shelves stocked with essential medicines and healthcare supplies',
  },
  'solutions.proof.tablets': {
    src: solutionsProofTablets,
    alt: 'Girl using a yellow tablet',
  },
  'solutions.proof.specimens': {
    src: solutionsProofSpecimens,
    alt: 'Gloved hand collecting a specimen in a sample cup',
  },
  'solutions.proof.oxygen': {
    src: solutionsProofOxygen,
    alt: 'Medical oxygen generation and storage equipment',
  },
  'solutions.proof.carepacks': {
    src: solutionsProofCarepacks,
    alt: 'COVID-19 care pack with a mask, sanitizer and recovery guidance',
  },
  'solutions.cta': {
    src: solutionsCtaTeam,
    alt: 'Team of colleagues smiling together and looking down at the camera',
  },

  // About
  'about.hero': {
    src: aboutHeroPartnership,
    alt: 'Colleagues greeting each other with a handshake outside an office',
  },
  'about.mission': {
    src: aboutMission,
    alt: 'Colleagues shaking hands in a business partnership',
  },
  'about.vision': {
    src: aboutVision,
    alt: 'A professional working at a laptop',
  },
  'about.objectives': {
    src: aboutObjectives,
    alt: 'A professional reviewing plans and charts on a whiteboard',
  },
  'about.work.understand': { src: specimenCollection, alt: 'A gloved hand collects a specimen in a laboratory' },
  'about.work.design': { src: covidCarePacks, alt: 'Boxes of COVID-19 care packages' },
  'about.work.execute': { src: oxygenSupply, alt: 'Medical oxygen supply equipment in a facility' },
  'about.work.deliver': { src: peopleReached, alt: 'A group of smiling children' },

  // Partnerships
  'partners.hero': {
    src: partnershipsHero,
    alt: 'Business professional greeting a colleague with a handshake',
  },
  'partners.work.understand': {
    src: partnershipUnderstand,
    alt: 'Professional reviewing information on a tablet during a meeting',
  },
  'partners.work.design': {
    src: partnershipDesign,
    alt: 'Project professional planning work from technical drawings',
  },
  'partners.work.execute': {
    src: partnershipExecute,
    alt: 'Technology professional working at a computer',
  },
  'partners.work.deliver': {
    src: partnershipDeliver,
    alt: 'Colleagues reviewing data and documents together',
  },
  'partners.who.government': {
    src: partnershipGovernment,
    alt: 'Government building with a green dome and Nigerian flags',
  },
  'partners.who.healthcare': {
    src: partnershipHealthcare,
    alt: 'Healthcare professional standing with a team of clinicians',
  },
  'partners.who.development': {
    src: partnershipDevelopment,
    alt: 'Technology professional working at a computer in an office',
  },
  'partners.who.technology': {
    src: partnershipTechnology,
    alt: 'Technology colleagues discussing software at a computer',
  },
  'partners.who.suppliers': {
    src: partnershipSuppliers,
    alt: 'Smiling delivery professional holding a package',
  },
  'partners.who.institutions': {
    src: partnershipInstitutions,
    alt: 'Colleagues working together at laptops',
  },

  // Our people
  'people.hero': {
    src: peopleHeroTeam,
    alt: 'Three colleagues smiling together at a meeting table',
  },
  'people.opportunities': {
    src: peopleOpportunities,
    alt: 'Colleagues reviewing documents together at work',
  },
  'people.leader.1': { label: 'Leadership portrait', tone: 'navy' },
  'people.leader.2': { label: 'Leadership portrait', tone: 'navy' },
  'people.leader.3': { label: 'Leadership portrait', tone: 'navy' },
  'people.leader.4': { label: 'Leadership portrait', tone: 'navy' },

  // Shared
  'collab.ubec': {
    src: collaborationUbec,
    alt: 'Schoolchildren working in a classroom',
  },
  'collab.fme': {
    src: collaborationFme,
    alt: 'Student reading in a library',
  },
  'collab.medipool': {
    src: collaborationMedipool,
    alt: 'A team of healthcare professionals outside a medical facility',
  },
  'cta.partner': {
    src: partnershipCta,
    alt: 'Two professionals shaking hands to begin a partnership',
  },
  'footer.team': {
    src: footerHealthcareTeam,
    alt: 'A team of healthcare professionals standing together',
  },

  // Insights (used until an article has its own cover image)
  'insights.hero': {
    src: insightsHero,
    alt: 'Colleagues reviewing information together while walking through a modern office',
  },
  'insight.default': { label: 'Insight', tone: 'slab' },
};
