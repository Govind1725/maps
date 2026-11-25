// Add-only content inspired by the client reference site.
// Text is written specifically for MAPS and does not replace any existing copy.

export const insightArticles = [
  {
    id: "iso-17025-guide",
    category: "Standards",
    readTime: "5 min read",
    title: "Why ISO/IEC 17025 matters",
    excerpt:
      "What accreditation means for traceable, repeatable and internationally recognized calibration results.",
    image: "pages/lab-wide.webp",
    paragraphs: [
      "ISO/IEC 17025:2017 sets the requirements for competent, impartial and consistent laboratory results. It covers the way a laboratory is managed as well as the technical conditions that influence measurement accuracy.",
      "For customers, accreditation means calibration certificates are supported by documented methods, suitable equipment, competent staff and an unbroken traceability chain.",
      "When reviewing a calibration partner, check the scope of accreditation, the instruments covered and the clarity of the certificate records. Those details make audits and internal quality reviews much easier."
    ]
  },
  {
    id: "calibration-planning",
    category: "Planning",
    readTime: "6 min read",
    title: "Building a practical calibration schedule",
    excerpt:
      "A simple way to plan intervals around instrument risk, usage and compliance requirements.",
    image: "pages/calibration-devices.jpg",
    paragraphs: [
      "A good calibration schedule starts with a complete asset register. Record each instrument, its location, its required accuracy and the process it supports.",
      "Critical instruments used for release decisions or safety checks usually need shorter intervals than general-purpose tools. Usage, environment and past stability should all influence the plan.",
      "Review the schedule at least once a year. Removing retired instruments and adding new equipment keeps the programme realistic and audit-ready."
    ]
  },
  {
    id: "instrument-readiness",
    category: "Operations",
    readTime: "4 min read",
    title: "Keeping instruments audit-ready",
    excerpt:
      "Small record-keeping habits that make certificate checks faster and smoother.",
    image: "home/why-partner.jpg",
    paragraphs: [
      "Audit readiness is mostly about consistency. Keep calibration certificates, repair reports and equipment identifiers together so a reviewer can follow the history of an instrument quickly.",
      "Before an audit, confirm that labels match certificate records and that any out-of-service equipment is clearly identified.",
      "If an instrument is repaired, recalibration should be considered before it returns to critical measurement work. A short note in the asset record helps everyone understand what happened."
    ]
  }
];

export const equipmentCategories = [
  {
    icon: "zap",
    title: "Electrical test equipment",
    description: "Calibrated instruments for electrical measurement and safety checks.",
    items: ["Digital multimeters", "Power analyzers", "Oscilloscopes", "Insulation testers"]
  },
  {
    icon: "target",
    title: "Pressure calibration equipment",
    description: "Reference standards and comparators for laboratory or field pressure work.",
    items: ["Dead-weight testers", "Pressure comparators", "Digital calibrators", "Hand pumps"]
  },
  {
    icon: "layers",
    title: "Temperature equipment",
    description: "Stable temperature sources and references for sensors and loggers.",
    items: ["Dry block calibrators", "Liquid baths", "Reference thermometers", "Temperature loggers"]
  },
  {
    icon: "package",
    title: "Dimensional instruments",
    description: "Precision measuring tools for dimensional and mechanical inspection.",
    items: ["Vernier calipers", "Micrometers", "Height gauges", "Gauge block sets"]
  }
];

export const aboutSupportPillars = [
  {
    icon: "shield",
    title: "Impartial results",
    text: "Independent and unbiased calibration results, supported by transparent processes and documentation."
  },
  {
    icon: "users",
    title: "Qualified team",
    text: "Trained professionals with practical knowledge across electrical, mechanical, pressure and dimensional disciplines."
  },
  {
    icon: "building",
    title: "Modern facilities",
    text: "Dedicated calibration environments with reference standards suited to controlled laboratory work."
  },
  {
    icon: "layers",
    title: "Regional reach",
    text: "In-lab and onsite support for clients across the region, backed by responsive technical coordination."
  }
];

export const careerBenefits = [
  { icon: "award", title: "Meaningful work", text: "Help teams make confident, traceable measurement decisions." },
  { icon: "users", title: "Experienced team", text: "Work alongside engineers and technicians who value precision." },
  { icon: "layers", title: "Learning & development", text: "Build skills through technical training and hands-on projects." },
  { icon: "shield", title: "Quality culture", text: "Take pride in documented, impartial and standards-based work." },
  { icon: "clock", title: "Work-life balance", text: "Plan your week with predictable schedules and time to recharge." },
  { icon: "checkCircle", title: "Career growth", text: "Grow into senior technical and leadership responsibilities." }
];

export const careerRoles = [
  {
    title: "Calibration Technician",
    area: "Laboratory Operations",
    text: "Calibrate electrical, pressure, dimensional or temperature instruments using documented procedures."
  },
  {
    title: "Service Engineer",
    area: "Field & Repair Services",
    text: "Support onsite servicing, repairs and maintenance visits with clear customer communication."
  },
  {
    title: "Quality Executive",
    area: "Quality & Compliance",
    text: "Maintain accreditation records, calibration certificates and internal quality documentation."
  },
  {
    title: "Customer Support Specialist",
    area: "Client Coordination",
    text: "Coordinate requests, quotations and equipment status updates for industrial clients."
  }
];
