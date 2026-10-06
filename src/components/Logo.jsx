// Placeholder brand mark and wordmark, drawn to stand in for the official logo files.

const DOTS = [
  [16, 5.5],
  [25.1, 10.75],
  [25.1, 21.25],
  [16, 26.5],
  [6.9, 21.25],
  [6.9, 10.75],
];

export function LogoMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      {DOTS.map(([cx, cy], index) => (
        <circle key={index} cx={cx} cy={cy} r="3.3" fill={index % 2 ? 'var(--sky)' : 'var(--logo-accent, var(--navy))'} />
      ))}
      <circle cx="16" cy="16" r="3.3" fill="var(--sky)" />
    </svg>
  );
}

export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <LogoMark className="logo__mark" />
      <span className="logo__word">
        Carter
        <br />
        Biggs
      </span>
    </span>
  );
}
