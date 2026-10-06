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
  check: (
    <>
      <path d="M12 3 4 6v6c0 4.5 3.4 7.7 8 9 4.6-1.3 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  layers: <path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5" />,
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
