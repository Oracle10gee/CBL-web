const PATHS = {
  arrow: <path d="M7 17 17 7M9 7h8v8" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  pulse: <path d="M3 12h4l2-5 4 10 2-5h6" />,
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  board: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 8v8M12 8v5M16 8v10" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4 6v6c0 4.5 3.4 7.7 8 9 4.6-1.3 8-4.500 8-9V6l-8-3Z" />
      <path d="M12 9v6M9 12h6" />
    </>
  ),
  solidShield: <path d="M12 2.5 3.5 5.8v6.3c0 5.1 3.6 8.2 8.5 9.7 4.9-1.5 8.5-4.6 8.5-9.7V5.8L12 2.5Z" fill="currentColor" stroke="none" />,
  solidHeart: <path d="M20.8 8.6c0 5-8.8 11-8.8 11s-8.8-6-8.8-11A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.5Z" fill="currentColor" stroke="none" />,
  solidBook: <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H11v18H5.5A2.5 2.5 0 0 0 3 23V5.5ZM21 5.5A2.5 2.5 0 0 0 18.5 3H13v18h5.5A2.5 2.5 0 0 1 21 23V5.5Z" fill="currentColor" stroke="none" />,
  solidBulb: <path d="M12 2.5a7 7 0 0 0-4.1 12.7c.6.5 1 1.2 1.1 2h6c.1-.8.5-1.5 1.1-2A7 7 0 0 0 12 2.5ZM9 19h6a3 3 0 0 1-6 0Z" fill="currentColor" stroke="none" />,
  solidUsers: <path d="M9.5 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM2 19a6 6 0 0 1 12 0v1H2v-1ZM17 7a3.5 3.5 0 1 0-1.2 6.8 7 7 0 0 1 5.7 6.2H23v-1a5 5 0 0 0-4.1-4.9 3.5 3.5 0 0 0-1.9-7.1Z" fill="currentColor" stroke="none" />,
  solidPulse: (
    <>
      <path d="M20.8 8.6c0 5-8.8 11-8.8 11s-8.8-6-8.8-11A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.5Z" fill="currentColor" stroke="none" />
      <path d="M5.5 12h3l1.4-2.3 2.3 4.5 1.7-2.7h4.6" fill="none" stroke="white" strokeWidth="1.6" />
    </>
  ),
  solidMonitor: <path d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6v2h4v2H6v-2h4v-2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" fill="currentColor" stroke="none" />,
  solidGear: <path d="m10.2 2 3.6 0 .6 2.1c.5.2 1 .5 1.4.8l2.1-.6 1.8 3.1-1.5 1.6c.1.6.1 1.2 0 1.8l1.5 1.6-1.8 3.1-2.1-.6c-.4.3-.9.6-1.4.8l-.6 2.1h-3.6l-.6-2.1c-.5-.2-1-.5-1.4-.8l-2.1.6-1.8-3.1 1.5-1.6a7 7 0 0 1 0-1.8L4.3 7.4l1.8-3.1 2.1.6c.4-.3.9-.6 1.4-.8L10.2 2Zm1.8 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="currentColor" stroke="none" />,
  solidArchive: <path d="M3 3h18v5H3V3Zm1 7h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9Zm5 3v2h6v-2H9Z" fill="currentColor" stroke="none" />,
  check: (
    <>
      <path d="M12 3 4 6v6c0 4.5 3.4 7.7 8 9 4.6-1.3 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  layers: <path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5" />,
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  book: (
    <>
      <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H11v17H5.5A2.5 2.5 0 0 0 3 22.5zM21 5.5A2.5 2.5 0 0 0 18.5 3H13v17h5.5a2.5 2.5 0 0 1 2.5 2.5z" />
      <path d="M11 5H6M13 5h5" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18M5 21v-9l7-4 7 4v9M9 21v-6h6v6M12 3v5M10 5h4" />
    </>
  ),
  heartPulse: <path d="M20.8 8.8c0 5-8.8 11-8.8 11s-8.8-6-8.8-11A4.8 4.8 0 0 1 12 6.3a4.8 4.8 0 0 1 8.8 2.5ZM4 12h4l2-3 3.5 6 2-3H20" />,
  folder: <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H10l2 2h6.5A2.5 2.5 0 0 1 21 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5zM3 9h18" />,
  eye: (
    <>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  bulb: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.900c.6.5 1 1.300 1 2.100h5c0-.8.4-1.600 1-2.100A6 6 0 0 0 12 3Z" />,
  users: (
    <>
      <path d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
      <circle cx="9.5" cy="7" r="3.5" />
      <path d="M21 19v-1a4 4 0 0 0-3-3.900M15.500 3.600a3.500 3.500 0 0 1 0 6.800" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.200 7-11.500A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m8.500 13.500-1.500 7 5-3 5 3-1.500-7" />
    </>
  ),
  tree: <path d="M12 3v5M5 21v-5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5M12 8v13" />,
  cart: (
    <>
      <path d="M3 4h2l2.400 11h10.200L20 7H6.200" />
      <circle cx="9" cy="19" r="1.5" />
      <circle cx="17" cy="19" r="1.5" />
    </>
  ),
  network: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M6 7.800 11 16.200M18 7.800 13 16.200M7 6h10" />
    </>
  ),
  brain: (
    <>
      <path d="M12 18V5M15 13a4 4 0 0 1-3-4 4 4 0 0 1-3 4M17.5 6.5a3 3 0 0 0-5.5-2 3 3 0 0 0-5.5 2A4 4 0 0 0 7 14a4 4 0 0 0 5 4 4 4 0 0 0 5-4 4 4 0 0 0 0.5-7.5Z" />
      <path d="M8 9.5a2 2 0 0 1 2 2M16 9.5a2 2 0 0 0-2 2" />
    </>
  ),
  design: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="1.5" />
      <path d="M8 21h8M12 18v3M7 8h10M7 12h6" />
    </>
  ),
  rocket: (
    <>
      <path d="M14 10 9 15M15 4c2-1.5 4-2 6-2 0 2-.5 4-2 6l-5 5-5-1-1-5 5-5ZM8 13l-4 1-2 5 5-2 1-4ZM11 16l-1 4 5-2 1-4" />
      <circle cx="16.5" cy="7.5" r="1" />
    </>
  ),
};

export default function Icon({ name, size = 24, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
