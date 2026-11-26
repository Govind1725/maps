// Content for the four dedicated core service pages.
// This data is additive: the existing calibration service data is untouched.

export const coreServiceDetails = {
  consulting: {
    slug: "consulting",
    title: "Consulting Services",
    icon: "briefcase",
    heroImage: "pages/lab-wide.webp",
    introImage: "home/why-partner.jpg",
    heroSubtitle: "Independent metrology advice for measurement strategy, compliance and instrument lifecycle management.",
    introTitle: "Consulting",
    introHighlight: "Services",
    intro: [
      "Accurate measurement is the foundation of quality, safety and regulatory confidence. MAPS Consulting Services help organisations turn instrument data into dependable decisions with practical, standards-aligned guidance.",
      "Our consultants work alongside laboratory and operations teams to review current practice, identify gaps and build measurement programmes that are realistic to operate and straightforward to audit."
    ],
    overview: [
      "We bring together laboratory experience, metrology knowledge and an understanding of ISO/IEC 17025 requirements. The result is advice that is technically sound and grounded in the realities of your facility, instrument fleet and workload.",
      "Whether you are establishing a new calibration programme, preparing for an accreditation assessment or reviewing a multi-site instrument register, we provide the documentation, training and follow-through needed to make improvements stick."
    ],
    outcomes: [
      "Clearer ownership of measurement assets",
      "Audit-ready calibration records",
      "Reduced rework from out-of-tolerance instruments",
      "A prioritised improvement roadmap"
    ],
    features: [
      {
        icon: "target",
        title: "Measurement strategy",
        text: "Define what to measure, how often and with which reference standards, based on risk and criticality."
      },
      {
        icon: "shield",
        title: "Compliance readiness",
        text: "Align procedures and records with ISO/IEC 17025 expectations and internal quality requirements."
      },
      {
        icon: "layers",
        title: "Lifecycle management",
        text: "Plan acquisition, calibration, repair, retirement and replacement across the full instrument lifecycle."
      },
      {
        icon: "file",
        title: "Documentation that works",
        text: "Practical procedures, forms and registers your team can actually maintain day to day."
      },
      {
        icon: "checkCircle",
        title: "Audit preparation",
        text: "Gap reviews, mock audits and corrective-action support before an external assessment."
      },
      {
        icon: "users",
        title: "Vendor-neutral advice",
        text: "Recommendations based on your measurement needs rather than a particular product or supplier."
      }
    ],
    process: [
      { title: "Discovery", text: "We discuss your objectives, instrument scope, regulatory context and current pain points." },
      { title: "Current-state review", text: "We review asset registers, certificates, procedures, intervals and recent audit findings." },
      { title: "Gap analysis", text: "Findings are prioritised by risk, effort and impact so improvement work stays focused." },
      { title: "Implementation support", text: "We help build schedules, procedures, templates and competence plans with your team." },
      { title: "Review & improvement", text: "Follow-up reviews track progress and refine the programme as operations change." }
    ],
    offeringsTitle: "Where we",
    offeringsHighlight: "can help",
    offerings: [
      {
        icon: "file",
        title: "Calibration programme design",
        items: ["Instrument criticality grading", "Calibration interval setting", "Master instrument selection", "Recall and reminder systems"]
      },
      {
        icon: "shield",
        title: "Accreditation & compliance",
        items: ["ISO/IEC 17025 gap reviews", "Method and procedure alignment", "Traceability and uncertainty review", "Audit readiness support"]
      },
      {
        icon: "layers",
        title: "Asset lifecycle planning",
        items: ["Register clean-up and rationalisation", "Repair-versus-replace guidance", "Retirement planning", "Capital equipment planning"]
      },
      {
        icon: "users",
        title: "Capability building",
        items: ["Team competence mapping", "Procedure writing workshops", "Internal auditor preparation", "Management review support"]
      }
    ],
    why: [
      { icon: "award", title: "Accreditation mindset", text: "Our advice is shaped by documented, traceable and impartial calibration practice." },
      { icon: "building", title: "Cross-industry experience", text: "We understand the demands of engineering, aerospace, pharma, oil & gas, automotive and testing labs." },
      { icon: "file", title: "Practical deliverables", text: "You receive usable schedules, registers, templates and action plans, not just recommendations." },
      { icon: "clock", title: "Responsive support", text: "Regional coordination and clear communication keep improvement projects moving." }
    ],
    enquiryText: "Share your instrument scope, accreditation goals or current challenge. We will outline how our consulting team can help and what the next practical step looks like.",
    whatsappMessage: "Hi MAPS! I would like to enquire about your Consulting Services. Please share more details and available options. Thank you!"
  },

  training: {
    slug: "training",
    title: "Training & Teaching Services",
    icon: "graduationCap",
    heroImage: "pages/calibration-devices.jpg",
    introImage: "pages/lab-wide.webp",
    heroSubtitle: "Structured technical training that builds confident, competent and audit-ready teams.",
    introTitle: "Training &",
    introHighlight: "Teaching Services",
    intro: [
      "Instrument accuracy depends on the people who use, calibrate and interpret it. MAPS Training & Teaching Services turn technical standards into practical skills your engineers and technicians can apply immediately.",
      "From foundation courses to focused workshops, our programmes combine clear explanations, worked examples and hands-on exercises tailored to the instruments and processes you work with every day."
    ],
    overview: [
      "Our training content follows recognised metrology and laboratory practice, including ISO/IEC 17025 requirements, measurement uncertainty and the control of calibration records. Sessions can be delivered at your facility, at our laboratory or remotely, depending on your team and schedule.",
      "Every programme is built around a learning objective rather than a generic syllabus. We assess the starting point of your team, adapt the material to your instrument portfolio and provide useful follow-up support so new skills are retained."
    ],
    outcomes: [
      "More consistent calibration and inspection practice",
      "Stronger internal audit and assessment readiness",
      "Clear competence records for technical staff",
      "Greater confidence in measurement decisions"
    ],
    features: [
      {
        icon: "award",
        title: "Standards-based content",
        text: "Courses structured around ISO/IEC 17025, traceability and documented laboratory practice."
      },
      {
        icon: "users",
        title: "Hands-on learning",
        text: "Practical exercises with real instruments, records and decision-making scenarios."
      },
      {
        icon: "laptop",
        title: "Flexible delivery",
        text: "On-site, laboratory-based or online sessions that fit shifts and project timelines."
      },
      {
        icon: "file",
        title: "Competence records",
        text: "Attendance, assessment and training records that support internal quality systems."
      },
      {
        icon: "target",
        title: "Role-specific pathways",
        text: "Different routes for technicians, engineers, quality staff and laboratory managers."
      },
      {
        icon: "checkCircle",
        title: "Experienced trainers",
        text: "Instruction from professionals who work with calibration instruments every day."
      }
    ],
    process: [
      { title: "Needs assessment", text: "We identify your team roles, instrument types, existing knowledge and compliance obligations." },
      { title: "Learning plan", text: "A tailored agenda, duration and delivery format is agreed around your objectives." },
      { title: "Delivery", text: "Interactive sessions combine theory, demonstrations and supervised practical work." },
      { title: "Assessment", text: "Short exercises and discussions confirm understanding and highlight areas to revisit." },
      { title: "Follow-up", text: "We provide reference material and answer questions as new skills are applied on the job." }
    ],
    offeringsTitle: "Training",
    offeringsHighlight: "programmes",
    offerings: [
      {
        icon: "zap",
        title: "Calibration fundamentals",
        items: ["Measurement principles", "Instrument types and use", "Calibration intervals", "Reading and recording results"]
      },
      {
        icon: "target",
        title: "Measurement uncertainty",
        items: ["Uncertainty budgets", "Decision rules", "Guard bands and tolerances", "Communicating results"]
      },
      {
        icon: "shield",
        title: "ISO/IEC 17025 awareness",
        items: ["Standard structure", "Traceability requirements", "Document control", "Audit expectations"]
      },
      {
        icon: "users",
        title: "Laboratory management",
        items: ["Internal auditing", "Method validation basics", "Staff competence planning", "Management reviews"]
      }
    ],
    why: [
      { icon: "award", title: "Taught by practitioners", text: "Trainers bring real laboratory and field experience into every session." },
      { icon: "layers", title: "Practical by design", text: "Examples are drawn from the instruments and challenges your team actually faces." },
      { icon: "file", title: "Useful takeaways", text: "Participants leave with clear notes, templates and reference material." },
      { icon: "clock", title: "Adaptable scheduling", text: "Programmes can be phased around operations, shutdowns and project deadlines." }
    ],
    enquiryText: "Tell us about your team, instruments and training objectives. We will propose a suitable programme format, duration and delivery location.",
    whatsappMessage: "Hi MAPS! I would like to enquire about your Training & Teaching Services. Please share course options and availability. Thank you!"
  },

  "equipment-rental": {
    slug: "equipment-rental",
    title: "Industrial Equipment Rental",
    icon: "package",
    heroImage: "home/calibration-banner.png",
    introImage: "pages/calibration-devices.jpg",
    heroSubtitle: "Calibrated, ready-to-use instruments for projects, shutdowns and temporary facilities.",
    introTitle: "Industrial Equipment",
    introHighlight: "Rental",
    intro: [
      "Temporary measurement needs should not slow down a project. MAPS Industrial Equipment Rental gives you access to calibrated, dependable instruments without the commitment of a permanent purchase.",
      "Whether you are supporting a plant shutdown, commissioning a new line or setting up a temporary test facility, we help you select the right equipment, arrange delivery and keep it working for the duration of your requirement."
    ],
    overview: [
      "Every rental instrument is checked and supplied with the documentation you need to use it confidently. We take care of calibration status, condition checks and handover so your team can focus on the work at hand.",
      "Rental periods can be short or long term, and can be adjusted when project scopes change. Our team remains available for technical questions, instrument swaps and on-site support throughout the hire period."
    ],
    outcomes: [
      "Immediate access to specialist instruments",
      "Lower capital cost for short-term work",
      "Calibrated equipment with clear records",
      "Flexible extension, swap and return options"
    ],
    features: [
      {
        icon: "checkCircle",
        title: "Ready to use",
        text: "Instruments are condition-checked and supplied with current calibration documentation."
      },
      {
        icon: "clock",
        title: "Flexible durations",
        text: "Daily, weekly or monthly hire periods that can be extended as project needs evolve."
      },
      {
        icon: "package",
        title: "Delivery & collection",
        text: "Coordinated transport and handover to your site, lab or temporary facility."
      },
      {
        icon: "users",
        title: "On-site support",
        text: "Technical guidance on setup, operation and basic troubleshooting during the rental."
      },
      {
        icon: "shield",
        title: "Reliable fleet",
        text: "Well-maintained equipment selected for stability and suitability in industrial environments."
      },
      {
        icon: "file",
        title: "Clear paperwork",
        text: "Rental agreements, instrument lists and calibration records kept easy to review."
      }
    ],
    process: [
      { title: "Requirement call", text: "We capture the measurement range, accuracy, environment and rental period you need." },
      { title: "Instrument selection", text: "Our team proposes suitable equipment and confirms availability and documentation." },
      { title: "Calibration & check", text: "Instruments are verified, labelled and prepared with the relevant certificates." },
      { title: "Delivery & handover", text: "Equipment is delivered, inspected with your team and handed over with operating guidance." },
      { title: "Support & return", text: "We remain available during hire and coordinate collection, extension or replacement." }
    ],
    offeringsTitle: "Equipment",
    offeringsHighlight: "available to rent",
    offerings: [
      {
        icon: "zap",
        title: "Electrical test instruments",
        items: ["Digital multimeters", "Power quality analyzers", "Insulation testers", "Oscilloscopes"]
      },
      {
        icon: "target",
        title: "Pressure & vacuum",
        items: ["Digital pressure gauges", "Dead-weight testers", "Pressure calibrators", "Hand pumps and comparators"]
      },
      {
        icon: "layers",
        title: "Temperature & humidity",
        items: ["Dry block calibrators", "Reference thermometers", "Temperature loggers", "Humidity indicators"]
      },
      {
        icon: "package",
        title: "Dimensional & mechanical",
        items: ["Vernier calipers and micrometers", "Height gauges", "Gauge block sets", "Torque tools"]
      }
    ],
    why: [
      { icon: "award", title: "Calibration-led", text: "Rental equipment is managed with the same discipline as our calibration laboratory." },
      { icon: "clock", title: "Fast coordination", text: "Clear availability and responsive communication help keep schedules on track." },
      { icon: "layers", title: "Broad instrument range", text: "Electrical, pressure, temperature and dimensional tools from a single partner." },
      { icon: "users", title: "Technical support", text: "Our team helps with selection, setup and changes throughout the hire period." }
    ],
    enquiryText: "Send us your instrument list, required accuracy, site location and rental dates. We will confirm availability, documentation and a straightforward rental plan.",
    whatsappMessage: "Hi MAPS! I would like to enquire about Industrial Equipment Rental. Please share availability and rental options. Thank you!"
  },

  "equipment-sales": {
    slug: "equipment-sales",
    title: "Industrial Equipment Sales",
    icon: "shoppingBag",
    heroImage: "pages/techno-lab.jpg",
    introImage: "home/why-partner.jpg",
    heroSubtitle: "Precision measurement instruments and industrial tools sourced, documented and supported by MAPS.",
    introTitle: "Industrial Equipment",
    introHighlight: "Sales",
    intro: [
      "Choosing the right instrument is a technical decision, not just a purchase. MAPS Industrial Equipment Sales help you specify, source and commission measurement tools that suit your application, accuracy needs and operating environment.",
      "We work with trusted manufacturers and support you beyond delivery with documentation, calibration guidance, training and after-sales service."
    ],
    overview: [
      "Our team reviews how the instrument will be used, the range and uncertainty required, and any relevant standards or internal procedures. We then shortlist suitable options and explain the trade-offs in practical terms before you commit.",
      "From a single reference instrument to a complete laboratory package, we coordinate supply, verification and handover so the equipment is ready for service and easy to integrate into your quality system."
    ],
    outcomes: [
      "The right instrument for the actual application",
      "Genuine equipment with clear documentation",
      "Smoother onboarding and calibration planning",
      "Long-term technical and warranty support"
    ],
    features: [
      {
        icon: "shield",
        title: "Genuine OEM supply",
        text: "Equipment sourced through reliable channels with the documentation you expect."
      },
      {
        icon: "target",
        title: "Technical selection",
        text: "Specification reviews that match range, resolution and uncertainty to your process."
      },
      {
        icon: "file",
        title: "Traceable records",
        text: "Clear instrument details and calibration guidance from the moment of handover."
      },
      {
        icon: "award",
        title: "Warranty support",
        text: "After-sales coordination, warranty guidance and practical technical assistance."
      },
      {
        icon: "layers",
        title: "Complete packages",
        text: "Reference standards, accessories and training can be supplied together."
      },
      {
        icon: "clock",
        title: "Regional delivery",
        text: "Coordinated shipping and delivery to your facility across the region."
      }
    ],
    process: [
      { title: "Specification review", text: "We discuss the application, required range, accuracy, environment and budget." },
      { title: "Sourcing & quotation", text: "Suitable options are shortlisted with clear specifications, lead times and pricing." },
      { title: "Verification", text: "Equipment details and documentation are checked before dispatch." },
      { title: "Delivery & onboarding", text: "We support handover, basic operation and integration into your calibration schedule." },
      { title: "After-sales support", text: "Warranty questions, calibration planning and future upgrades stay with one partner." }
    ],
    offeringsTitle: "Equipment",
    offeringsHighlight: "we can supply",
    offerings: [
      {
        icon: "target",
        title: "Reference & master instruments",
        items: ["Electrical reference standards", "Pressure and temperature references", "Dimensional masters", "Calibration comparators"]
      },
      {
        icon: "zap",
        title: "Electrical & test equipment",
        items: ["Multimeters and calibrators", "Power analyzers", "Insulation testers", "Oscilloscopes and sources"]
      },
      {
        icon: "layers",
        title: "Pressure & temperature",
        items: ["Digital pressure gauges", "Dry block calibrators", "Reference thermometers", "Data loggers and indicators"]
      },
      {
        icon: "package",
        title: "Dimensional & mechanical tools",
        items: ["Calipers and micrometers", "Height and gauge block sets", "Torque tools", "Mechanical test equipment"]
      }
    ],
    why: [
      { icon: "award", title: "Metrology expertise", text: "We understand accuracy, traceability and how instruments perform in real use." },
      { icon: "shield", title: "Trusted sourcing", text: "Genuine equipment with clear documentation and dependable supplier support." },
      { icon: "file", title: "Ready for audit", text: "Handover records and calibration guidance fit neatly into your quality system." },
      { icon: "users", title: "One long-term partner", text: "Supply, calibration, repair and rental support are available from the same team." }
    ],
    enquiryText: "Tell us what you need to measure, the accuracy you require and any standards you must meet. We will recommend suitable equipment and share a full quotation.",
    whatsappMessage: "Hi MAPS! I would like to enquire about Industrial Equipment Sales. Please share options and pricing. Thank you!"
  }
};

export const coreServiceOrder = [
  {
    slug: "consulting",
    title: "Consulting Services",
    icon: "briefcase",
    path: "/services/consulting"
  },
  {
    slug: "training",
    title: "Training & Teaching Services",
    icon: "graduationCap",
    path: "/services/training"
  },
  {
    slug: "equipment-rental",
    title: "Industrial Equipment Rental",
    icon: "package",
    path: "/services/equipment-rental"
  },
  {
    slug: "equipment-sales",
    title: "Industrial Equipment Sales",
    icon: "shoppingBag",
    path: "/services/equipment-sales"
  }
];
