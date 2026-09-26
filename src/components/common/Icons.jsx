export function ArrowIcon({ direction = "right" }) {
  const path = direction === "left" ? "m15 5-7 7 7 7" : "m9 5 7 7-7 7";
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={path} fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 6">
      <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ShieldCheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 3 5 5.6v5.6c0 4.3 2.8 7.2 7 8.8 4.2-1.6 7-4.5 7-8.8V5.6L12 3Z" />
      <path d="m9 11.6 2.2 2.2 4-4.4" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.4V12l3 2" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.4" />
      <path d="M3.6 12h16.8M12 3.6c2.1 2.3 3.2 5.2 3.2 8.4s-1.1 6.1-3.2 8.4c-2.1-2.3-3.2-5.2-3.2-8.4S9.9 5.9 12 3.6Z" />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3.6" y="5.2" width="16.8" height="15.2" rx="1.6" />
      <path d="M3.6 10h16.8M8.4 3.4v3.4M15.6 3.4v3.4" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3.4" y="5.6" width="17.2" height="12.8" rx="1.4" />
      <path d="m3.9 6.6 8.1 5.9 8.1-5.9" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7.2 3.5h2.9l1.5 3.9-2 1.5a12.4 12.4 0 0 0 5.5 5.5l1.5-2 3.9 1.5v2.9a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 5.2 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function SendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.8 3.4 3.6 10.2l6.6 2.6 2.6 6.6 8-15.6Z" />
      <path d="M20.8 3.4 10.2 12.8" />
    </svg>
  );
}
