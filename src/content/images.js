// Image manifest — the single place to swap placeholders for real photography.
//
// To replace a slot: drop the file in src/assets/images/, import it below and
// set `src` (plus a descriptive `alt`). Slots without `src` render a branded
// placeholder showing `label`. `tone` only styles the placeholder.

import homeSolutionLogistics from '../assets/images/home-solution-logistics.webp';
import homeSolutionEducation from '../assets/images/home-solution-education.webp';
import homeSolutionInfrastructure from '../assets/images/home-solution-infrastructure.webp';
import homeHeroFactory from '../assets/images/home-hero-factory.webp';
import specimenCollection from '../assets/images/specimen-collection.webp';
import covidCarePacks from '../assets/images/covid-care-packs.webp';
import homeInsightSpecimen from '../assets/images/home-insight-specimen.webp';
import homeInsightCarepacks from '../assets/images/home-insight-carepacks.webp';
import oxygenSupply from '../assets/images/oxygen-supply.webp';
import peopleReached from '../assets/images/people-reached.webp';
import homeWhyCarterBiggs from '../assets/images/home-why-carter-biggs.webp';
import whoWeAreProfessional from '../assets/images/who-we-are-professional.webp';
import footerHealthcareTeam from '../assets/images/footer-healthcare-team.webp';
import aboutHeroPartnership from '../assets/images/about-hero-partnership.webp';
import aboutMission from '../assets/images/about-mission.webp';
import aboutVision from '../assets/images/about-vision.webp';
import aboutObjectives from '../assets/images/about-objectives.webp';
import partnerRjolad from '../assets/images/partner-r-jolad.jpg';
import partnerReddington from '../assets/images/partner-reddington.png';
import partnerMotherChild from '../assets/images/partner-mother-child.png';
import partnerTotalMedical from '../assets/images/partner-total-medical.png';
import partnerArriveAlive from '../assets/images/partner-arrive-alive.png';
import partnerMedipool from '../assets/images/partner-medipool.png';
import partnerFederalMinistryHealth from '../assets/images/partner-federal-ministry-health.png';
import partnerFederalMinistryEducation from '../assets/images/partner-federal-ministry-education.png';
import partnerRxHealth from '../assets/images/partner-rx-health.png';
import partnershipUnderstand from '../assets/images/partnership-understand.webp';
import partnershipDesign from '../assets/images/partnership-design.webp';
import partnershipExecute from '../assets/images/partnership-execute.webp';
import partnershipDeliver from '../assets/images/partnership-deliver.webp';
import partnershipsHero from '../assets/images/partnerships-hero.webp';
import partnershipGovernment from '../assets/images/partnership-government-handshake.webp';
import partnershipHealthcare from '../assets/images/partnership-healthcare.webp';
import partnershipDevelopment from '../assets/images/partnership-development.webp';
import partnershipTechnology from '../assets/images/partnership-technology.webp';
import partnershipSuppliers from '../assets/images/partnership-suppliers.webp';
import partnershipInstitutions from '../assets/images/partnership-institutions.webp';
import collaborationUbec from '../assets/images/collaboration-ubec.webp';
import collaborationFme from '../assets/images/collaboration-fme.webp';
import collaborationMedipool from '../assets/images/collaboration-medipool.webp';
import partnershipCta from '../assets/images/partnership-cta.webp';
import peopleHeroTeam from '../assets/images/people-hero-team.webp';
import peopleOpportunities from '../assets/images/people-opportunities.webp';
import insightsHero from '../assets/images/insights-hero.webp';
import solutionsHeroTeam from '../assets/images/solutions-hero-team.webp';
import solutionsProjectBesda from '../assets/images/solutions-project-besda.webp';
import solutionsProjectEdutrace from '../assets/images/solutions-project-edutrace.webp';
import solutionsProjectMedipool from '../assets/images/solutions-project-medipool.webp';
import projectManagementBesda from '../assets/images/project-management-besda.webp';
import solutionsProofTablets from '../assets/images/solutions-proof-tablets.webp';
import solutionsProofSpecimens from '../assets/images/solutions-proof-specimens.webp';
import solutionsProofOxygen from '../assets/images/solutions-proof-oxygen.webp';
import solutionsProofCarepacks from '../assets/images/solutions-proof-carepacks.webp';
import solutionsCtaTeam from '../assets/images/solutions-cta-team.webp';
import caseOxygenFacility from '../assets/images/case-oxygen-facility.webp';
import caseOxygenPlant from '../assets/images/case-oxygen-plant.webp';
import caseOxygenSurge from '../assets/images/case-oxygen-surge.webp';
import caseOxygenHandover from '../assets/images/case-oxygen-handover.webp';
import caseOxygenCta from '../assets/images/case-oxygen-cta.webp';

export const partnerLogos = [
  { name: 'Total Medical Services', src: partnerTotalMedical, className: 'partner-logo--total' },
  { name: 'Arrive Alive', src: partnerArriveAlive, className: 'partner-logo--arrive' },
  { name: 'Mother & Child Hospitals', src: partnerMotherChild, className: 'partner-logo--mother-child' },
  { name: 'R-Jolad Hospital', src: partnerRjolad, className: 'partner-logo--rjolad' },
  { name: 'Reddington Hospital', src: partnerReddington, className: 'partner-logo--reddington' },
  { name: 'Medipool', src: partnerMedipool, className: 'partner-logo--medipool' },
  { name: 'Federal Ministry of Health and Social Welfare', src: partnerFederalMinistryHealth, className: 'partner-logo--ministry-health' },
  { name: 'Federal Ministry of Education', src: partnerFederalMinistryEducation, className: 'partner-logo--ministry-education' },
  { name: 'Rx Health Info Systems', src: partnerRxHealth, className: 'partner-logo--rx-health' },
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
  'case-study.oxygen.facility': {
    src: caseOxygenFacility,
    alt: 'Oxygen cylinder pressure gauge and supply equipment',
  },
  'case-study.oxygen.plant': {
    src: caseOxygenPlant,
    alt: 'Plant manager in safety equipment beside oxygen plant machinery',
  },
  'case-study.oxygen.surge': {
    src: caseOxygenSurge,
    alt: 'Healthcare worker treating a patient during the pandemic',
  },
  'case-study.oxygen.handover': {
    src: caseOxygenHandover,
    alt: 'Healthcare professionals meeting during the oxygen plant handover',
  },
  'case-study.oxygen.cta': {
    src: caseOxygenCta,
    alt: 'Colleagues reviewing a project together on a laptop',
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
    alt: 'Business partners shaking hands',
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
    alt: 'Students studying together in a library with a mentor',
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
