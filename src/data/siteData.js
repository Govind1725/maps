export const routeMeta = {
  home: {
    path: "/",
    page: "home",
    title: "Technolabs",
    label: "Technolabs",
    description: "Technolabs provides accurate calibration, repair, and rental solutions for measuring and testing instruments across the Middle East."
  },
  about: {
    path: "/about",
    page: "about",
    title: "About – Technolabs",
    label: "About",
    description: "Learn about Technolabs, our vision, mission, core values, and commitment to accurate calibration services."
  },
  clients: {
    path: "/clients",
    page: "clients",
    title: "Our Clients – Technolabs",
    label: "Our Clients",
    description: "Meet the organizations that trust Technolabs for accurate calibration and instrument repair services."
  },
  portfolio: {
    path: "/portfolio",
    page: "portfolio",
    title: "Portfolio – Technolabs",
    label: "Portfolio",
    description: "View calibration equipment and laboratory work from Technolabs."
  },
  services: {
    path: "/services",
    page: "services",
    title: "Services – Technolabs",
    label: "Services",
    description: "Explore Technolabs calibration services for electrical, temperature, pressure, dimension, force, mass, torque, volume, airflow, acoustic, flow, optical, and analytical and gas instruments."
  },
  certificate: {
    path: "/certificate",
    page: "certificate",
    title: "Certificate – Technolabs",
    label: "Our Certification",
    description: "View Technolabs ISO/IEC 17025 certification, accreditation information, and verify a calibration certificate."
  },
  contact: {
    path: "/contact",
    page: "contact",
    title: "Contact – Technolabs",
    label: "Contact",
    description: "Contact Technolabs in Riyadh for calibration, repair, technical support, and rental equipment services."
  },
  "not-found": {
    path: "*",
    page: "not-found",
    title: "Page Not Found – Technolabs",
    label: "Not Found",
    description: "The requested page could not be found."
  }
};

export function getRouteKey(pathname) {
  const normalizedPath = pathname === "/" ? pathname : pathname.replace(/\/+$/, "");
  return Object.entries(routeMeta).find(([, meta]) => meta.path === normalizedPath)?.[0] || "not-found";
}

export const rentalServices = [
  "Pressure Lab",
  "Mechanical Lab",
  "Dimension Calibration Lab",
  "Analytical & Gas Calibration Lab",
  "Air Flow & Velocity Calibration Lab"
];

export const industries = [
  { label: "Engineering Industries", icon: "engineering" },
  { label: "Aerospace", icon: "aerospace" },
  { label: "Pharma & Food Industries", icon: "pharma" },
  { label: "Oil & Gas", icon: "oil-gas" },
  { label: "Automotive Industry", icon: "automotive" },
  { label: "Electrical Industries", icon: "electrical" },
  { label: "Cement Industries", icon: "cement" },
  { label: "Defense & Government Sector", icon: "defense" },
  { label: "Testing Laboratories", icon: "laboratory" }
];

export const aboutText = "Techno Prime company limited (Techno Labs) was established in year 2021 having operations in KSA, & UAE covering the Middle East Region. Our Techno Labs is accredited for ISO/IEC 17025:2005 by EJ-JAS and SAC approval is in process. We provide calibration & repair services for measuring & testing instruments. We cover various industrial segments such as Engineering Industries, Aero Space, Pharma/Food Industries, Oil & Gas, Automotive industry, Electrical Industries, Cement Industries, Defense /Government Sector Industries, Testing Laboratories etc.";
