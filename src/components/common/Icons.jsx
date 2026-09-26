export function ChevronIcon({ className = "" }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 10 6">
      <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = "" }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24">
      <path d="m15 5-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "" }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24">
      <path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function PinIcon({ className = "" }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
      />
    </svg>
  );
}

export function MailIcon({ className = "" }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M3 5h18v14H3V5Zm2 2v.4l7 4.2 7-4.2V7H5Zm14 2.7-6.4 3.8a1 1 0 0 1-1.2 0L5 9.7V17h14V9.7Z"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "" }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z"
      />
    </svg>
  );
}

export function SendIcon({ className = "" }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24">
      <path d="m3 11 18-8-7 18-3-7-8-3Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "" }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.2l-.8 1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.6l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 2 .8 2.8.9 3.8.8.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.6-.2Z"
      />
    </svg>
  );
}
