import { industries } from "../../data/siteData";

const industryIcons = {
  engineering: (
    <>
      <path d="M4 7h9M19 7h1M4 12h3M13 12h7M4 17h7M17 17h3" />
      <circle cx="15" cy="7" r="2" />
      <circle cx="9" cy="12" r="2" />
      <circle cx="13" cy="17" r="2" />
    </>
  ),
  aerospace: <path d="m3 11 18-8-7 18-3-7-8-3Z" />,
  pharma: (
    <>
      <path d="M9 3h6M10 3v6.5L5.2 18a2 2 0 0 0 1.7 3h10.2a2 2 0 0 0 1.7-3L14 9.5V3" />
      <path d="M7.6 15h8.8" />
    </>
  ),
  "oil-gas": <path d="M12 3s6 6.4 6 10.4a6 6 0 0 1-12 0C6 9.4 12 3 12 3Z" />,
  automotive: (
    <>
      <path d="M3 16v3M21 16v3M3 16h18v-4.2l-2-5.3H5l-2 5.3V16Z" />
      <circle cx="7.2" cy="16" r="1.9" />
      <circle cx="16.8" cy="16" r="1.9" />
    </>
  ),
  electrical: <path d="M13.2 3 5.6 13.6h5.1L9.9 21l7.7-10.6h-5.1L13.2 3Z" />,
  cement: <path d="M3 21V10.5l5 3v-3l5 3v-3l5 3V21H3ZM3 21h18M8 21v-4h3v4" />,
  defense: <path d="M12 3l7 2.8v6c0 4.6-2.9 7.6-7 9.2-4.1-1.6-7-4.6-7-9.2v-6L12 3Z" />,
  laboratory: (
    <>
      <path d="M4 21h16M9.5 21v-4.6h5V21" />
      <path d="M11 16.4v-4.2a5 5 0 1 1 5-4.6" />
      <path d="M13.5 3.4 17 11h-7l3.5-7.6Z" />
    </>
  )
};

export default function IndustryGrid() {
  return (
    <ul className="industry-cards">
      {industries.map((industry) => (
        <li className="industry-card reveal" key={industry.icon}>
          <span className="industry-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">{industryIcons[industry.icon]}</svg>
          </span>
          <span className="industry-card-label">{industry.label}</span>
        </li>
      ))}
    </ul>
  );
}
