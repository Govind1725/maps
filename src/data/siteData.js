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
    title: "Our Portfolio – MAPS",
    label: "Portfolio",
    description: "Browse MAPS calibration, testing, equipment supply, rental, installation and training projects by category."
  },
  services: {
    path: "/services",
    page: "services",
    title: "Services – MAPS",
    label: "Services",
    description: "Explore MAPS calibration services for electrical, temperature, pressure, dimension, force, mass, torque, volume, airflow, acoustic, flow, optical, and analytical and gas instruments."
  },
  "service-consulting": {
    path: "/services/consulting",
    page: "service-consulting",
    title: "Consulting Services – MAPS",
    label: "Consulting Services",
    description: "Explore MAPS consulting services for measurement strategy, compliance readiness, instrument lifecycle management and audit support."
  },
  "service-training": {
    path: "/services/training",
    page: "service-training",
    title: "Training & Teaching Services – MAPS",
    label: "Training & Teaching Services",
    description: "Explore MAPS technical training and teaching services covering calibration fundamentals, measurement uncertainty and ISO/IEC 17025 awareness."
  },
  "service-equipment-rental": {
    path: "/services/equipment-rental",
    page: "service-equipment-rental",
    title: "Industrial Equipment Rental – MAPS",
    label: "Industrial Equipment Rental",
    description: "Rent calibrated electrical, pressure, temperature and dimensional instruments from MAPS for projects and temporary facilities."
  },
  "service-equipment-sales": {
    path: "/services/equipment-sales",
    page: "service-equipment-sales",
    title: "Industrial Equipment Sales – MAPS",
    label: "Industrial Equipment Sales",
    description: "Source precision measurement instruments and industrial tools with technical selection, documentation and after-sales support from MAPS."
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
    description: "Contact MAPS in Kanchipuram for calibration, repair, technical support, and rental equipment services."
  },
  insights: {
    path: "/insights",
    page: "insights",
    title: "Insights – MAPS",
    label: "Insights",
    description: "Practical calibration insights on ISO/IEC 17025, planning and instrument readiness from MAPS."
  },
  careers: {
    path: "/careers",
    page: "careers",
    title: "Careers – MAPS",
    label: "Careers",
    description: "Explore career opportunities and the benefits of working with the MAPS calibration team."
  },
  products: {
    path: "/products",
    page: "products",
    title: "Equipment & Rental – MAPS",
    label: "Equipment & Rental",
    description: "Explore MAPS instrument rental and supply options for electrical, pressure, temperature and dimensional equipment."
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

export const aboutText = [
  "Established in 2019, MAPS Instruments & Industrial Services is a professional calibration and industrial instrumentation service provider based in Padappai, Kanchipuram, Tamil Nadu.",
  "Operating in accordance with ISO/IEC 17025:2017, we are committed to delivering reliable calibration solutions that support measurement accuracy, quality, and operational efficiency across various industries.",
  "We specialize in the calibration of measuring and testing instruments, along with the supply of a wide range of master instruments and precision measuring equipment. Our services also include instrument repair, servicing, maintenance, and rental solutions, providing customers with comprehensive support for their instrumentation requirements.",
  "With a strong focus on quality, precision, and customer satisfaction, we aim to help industries maintain measurement reliability and achieve consistent performance through dependable technical solutions."
];

export const aboutMotto = "Metrology Excellence in Measurement & Calibration.";
