export const routeMeta = {
  home: {
    path: "/",
    page: "home",
    title: "MAPS",
    label: "MAPS",
    description: "MAPS provides accurate calibration, repair, and rental solutions for measuring and testing instruments across the Middle East."
  },
  about: {
    path: "/about",
    page: "about",
    title: "About – MAPS",
    label: "About",
    description: "Learn about MAPS, our vision, mission, core values, and commitment to accurate calibration services."
  },
  clients: {
    path: "/clients",
    page: "clients",
    title: "Our Clients – MAPS",
    label: "Our Clients",
    description: "Meet the organizations that trust MAPS for accurate calibration and instrument repair services."
  },
  portfolio: {
    path: "/portfolio",
    page: "portfolio",
    title: "Portfolio – MAPS",
    label: "Portfolio",
    description: "View calibration equipment and laboratory work from MAPS."
  },
  services: {
    path: "/services",
    page: "services",
    title: "Services – MAPS",
    label: "Services",
    description: "Explore MAPS calibration services for electrical, temperature, pressure, dimension, force, mass, torque, volume, airflow, acoustic, flow, optical, and analytical and gas instruments."
  },
  certificate: {
    path: "/certificate",
    page: "certificate",
    title: "Certificate – MAPS",
    label: "Our Certification",
    description: "View MAPS ISO/IEC 17025 certification, accreditation information, and verify a calibration certificate."
  },
  contact: {
    path: "/contact",
    page: "contact",
    title: "Contact – MAPS",
    label: "Contact",
    description: "Contact MAPS in Riyadh for calibration, repair, technical support, and rental equipment services."
  },
  "not-found": {
    path: "*",
    page: "not-found",
    title: "Page Not Found – MAPS",
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
  "Common Calibration Lab",
  "Air Flow & Velocity Calibration Lab"
];

export const industries = [
  { label: "Information Technology", title: "Information Technology", icon: "information-technology" },
  { label: "Healthcare Industry", title: "Healthcare Industry", icon: "healthcare" },
  { label: "Automobile industry", title: "Automobile Industry", icon: "automobile" },
  { label: "Manudacturing Industry", title: "Manufacturing Industry", icon: "manufacturing" },
  { label: "Aviation industry", title: "Aviation Industry", icon: "aviation" },
  { label: "Gas & Oil Industry", title: "Gas & Oil Industry", icon: "gas-oil" }
];

export const aboutText = "Techno Prime company limited (Techno Labs) was established in year 2021 having operations in KSA, & UAE covering the Middle East Region. Our Techno Labs is accredited for ISO/IEC 17025:2005 by EJ-JAS and SAC approval is in process. We provide calibration & repair services for measuring & testing instruments. We cover various industrial segments such as Engineering Industries, Aero Space, Pharma/Food Industries, Oil & Gas, Automotive industry, Electrical Industries, Cement Industries, Defense /Government Sector Industries, Testing Laboratories etc.";
