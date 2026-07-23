export function ClawLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* rail */}
      <path d="M3 4h18" />
      {/* cable */}
      <path d="M12 4v5" />
      {/* claw hub */}
      <path d="M9.5 9h5l-1 2h-3z" />
      {/* claw arms */}
      <path d="M10 11c-1.5 2-2 4-1.5 6" />
      <path d="M14 11c1.5 2 2 4 1.5 6" />
      <path d="M12 11.5V18" />
    </svg>
  )
}
