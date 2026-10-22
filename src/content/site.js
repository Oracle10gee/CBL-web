// Site-wide content: navigation, contact details and the sections shared by more than one page.

export const nav = [
  {
    label: 'Company',
    children: [
      { label: 'About Us', to: '/about' },
      { label: 'Partnerships', to: '/partnerships' },
      { label: 'Our People', to: '/our-people' },
      { label: 'Open Roles', to: '/open-roles' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'Medical Logistics', to: '/solutions#medical-logistics' },
      { label: 'Technology Solutions', to: '/solutions#technology-solutions' },
      { label: 'Project Management', to: '/solutions#project-management' },
      { label: 'Proven in Practice', to: '/solutions#proven-in-practice' },
    ],
  },
  { label: 'Case studies', to: '/case-studies' },
  { label: 'Insights', to: '/insights' },
];

// Routes that appear in the navigation but have no supplied design yet.
export const pendingPages = [
  { path: '/open-roles', title: 'Open Roles', eyebrow: 'Company' },
  { path: '/case-studies', title: 'Case studies', eyebrow: 'Our work' },
  { path: '/privacy-policy', title: 'Privacy Policy', eyebrow: 'Legal' },
  { path: '/impact-report', title: 'Impact Report', eyebrow: 'Company' },
  { path: '/newsroom', title: 'Newsroom', eyebrow: 'Company' },
];

export const contact = {
  address: 'No 3 Mike Akhigbe Way, Jabi, FCT, Abuja.',
  phones: [
    { label: '+234 (1) 252 0903', href: 'tel:+23412520903' },
    { label: '09160001351', href: 'tel:+2349160001351' },
  ],
  email: 'info@carterbiggs.com.ng',
};

export const footerLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Impact Report', to: '/impact-report' },
  { label: 'Newsroom', to: '/newsroom' },
];

export const expertise = [
  {
    icon: 'solidPulse',
    title: 'Medical Logistics',
    text: 'Understanding the operational demands of moving essential healthcare products safely and efficiently.',
  },
  {
    icon: 'solidMonitor',
    title: 'Technology',
    text: 'Designing and implementing digital systems that solve real operational problems.',
  },
  {
    icon: 'solidBook',
    title: 'Project Management',
    text: 'Bringing structure, coordination and accountability to complex initiatives.',
  },
  {
    icon: 'solidGear',
    title: 'Operations',
    text: 'Turning plans into practical, reliable execution.',
  },
  {
    icon: 'solidArchive',
    title: 'Healthcare & Programme Delivery',
    text: 'Understanding the environments, stakeholders and requirements within which our solutions operate.',
  },
];

export const companyValues = [
  {
    title: 'Precision',
    text: 'We pay attention to the details that make complex systems work.',
  },
  {
    title: 'Clarity',
    text: 'We make complexity easier to understand, communicate and act on.',
  },
  {
    title: 'Accountability',
    text: 'We take ownership of our responsibilities and remain committed to delivering what we promise.',
  },
  {
    title: 'Collaboration',
    text: 'We believe stronger outcomes come from bringing the right people and capabilities together.',
  },
  {
    title: 'Continuous Improvement',
    text: 'We remain curious, learn from experience and look for better ways to solve problems.',
  },
  {
    title: 'Impact',
    text: 'We measure our work by what it makes possible for the people and organisations we serve.',
  },
];

export const collaborations = [
  {
    slot: 'collab.ubec',
    title: 'Universal Basic Education Commission (UBEC)',
    text: 'Technology and digital asset management solutions supporting the tracking and monitoring of educational devices.',
  },
  {
    slot: 'collab.fme',
    title: 'Federal Ministry of Education',
    text: 'Development of EduTrace, a national platform for education asset tracking and monitoring.',
  },
  {
    slot: 'collab.medipool',
    title: 'Medipool Nigeria Limited',
    text: 'Development of a national e-Purchase platform supporting strategic purchasing and healthcare supply chain management.',
  },
];

export const principles = [
  {
    icon: 'solidShield',
    title: 'Trust',
    text: 'We communicate openly, honour our commitments and take responsibility for our role.',
  },
  {
    icon: 'solidHeart',
    title: 'Complementary Capability',
    text: 'We recognise that the strongest solutions often come from combining different areas of expertise.',
  },
  {
    icon: 'solidBook',
    title: 'Transparency',
    text: 'We create clear expectations, responsibilities and channels of communication from the outset.',
  },
  {
    icon: 'solidBulb',
    title: 'Long-Term Thinking',
    text: 'We build relationships with the potential to create sustained value beyond a single project.',
  },
  {
    icon: 'solidUsers',
    title: 'Accountability',
    text: 'We remain focused on delivery and take ownership of the outcomes within our scope.',
  },
];
