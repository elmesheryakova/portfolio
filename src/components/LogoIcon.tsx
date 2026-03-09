interface LogoIconProps {
  className?: string;
}

export default function LogoIcon({ className = 'h-8 w-8' }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="9" fill="#4F46E5"/>
      {/* Rising path */}
      <polyline
        points="8,30 18,22 28,13"
        fill="none" stroke="white" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round" opacity="0.45"
      />
      {/* Milestone 1 — start */}
      <circle cx="8" cy="30" r="3" fill="white" opacity="0.5"/>
      {/* Milestone 2 — in progress */}
      <circle cx="18" cy="22" r="3.5" fill="white" opacity="0.75"/>
      {/* Milestone 3 — delivered */}
      <circle cx="28" cy="13" r="5" fill="white"/>
      <polyline
        points="25,13 27.5,15.5 31,11"
        fill="none" stroke="#4F46E5" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}
