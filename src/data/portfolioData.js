// Portfolio data is intentionally structured so new projects can be added by
// appending a single object — no component or layout changes are required.
//
// MAPS has not supplied approved client names, project locations or completed
// project photographs. Entries below are clearly marked placeholders and use
// existing MAPS facility / equipment imagery as representative photographs.
// They must not be presented as named client case studies until approved.

export const portfolioCategories = [
  { id: "calibration", label: "Calibration Projects", icon: "target" },
  { id: "testing", label: "Industrial Testing & Inspection", icon: "shield" },
  { id: "sales", label: "Equipment Sales & Supply", icon: "shoppingBag" },
  { id: "rental", label: "Equipment Rental", icon: "package" },
  { id: "installation", label: "Installation & Commissioning", icon: "layers" },
  { id: "training", label: "Training & Technical Services", icon: "graduationCap" }
];

const placeholderScope = [
  "Detailed scope will be published after client approval.",
  "This section is reserved for the instruments, methods and acceptance criteria involved."
];

const galleryNote = "Representative MAPS facility photograph. Final project image pending approval.";

export const portfolioProjects = [
  {
    id: "calibration-project",
    number: "01",
    title: "Calibration Project",
    category: "calibration",
    description:
      "Placeholder entry for a future calibration case study. Approved project details and photographs will be added here.",
    image: "pages/lab-wide.webp",
    client: "Available on request",
    industry: "To be confirmed",
    location: "To be confirmed",
    status: "Placeholder — details pending approval",
    scope: placeholderScope,
    services: ["Calibration Services"],
    equipment: ["Project equipment list to be confirmed"],
    gallery: [
      { image: "pages/lab-wide.webp", caption: galleryNote },
      { image: "pages/calibration-devices.jpg", caption: galleryNote }
    ]
  },
  {
    id: "testing-inspection-project",
    number: "02",
    title: "Industrial Testing & Inspection Project",
    category: "testing",
    description:
      "Placeholder entry for a future testing and inspection case study. Approved project details and photographs will be added here.",
    image: "pages/techno-lab.jpg",
    client: "Available on request",
    industry: "To be confirmed",
    location: "To be confirmed",
    status: "Placeholder — details pending approval",
    scope: placeholderScope,
    services: ["Industrial Testing & Inspection"],
    equipment: ["Project equipment list to be confirmed"],
    gallery: [
      { image: "pages/techno-lab.jpg", caption: galleryNote },
      { image: "home/why-partner.jpg", caption: galleryNote }
    ]
  },
  {
    id: "equipment-supply-project",
    number: "03",
    title: "Equipment Sales & Supply Project",
    category: "sales",
    description:
      "Placeholder entry for a future equipment supply case study. Approved project details and photographs will be added here.",
    image: "pages/calibration-devices.jpg",
    client: "Available on request",
    industry: "To be confirmed",
    location: "To be confirmed",
    status: "Placeholder — details pending approval",
    scope: placeholderScope,
    services: ["Equipment Sales & Supply"],
    equipment: ["Project equipment list to be confirmed"],
    gallery: [
      { image: "pages/calibration-devices.jpg", caption: galleryNote },
      { image: "pages/portfolio.jpeg", caption: galleryNote }
    ]
  },
  {
    id: "equipment-rental-project",
    number: "04",
    title: "Equipment Rental Project",
    category: "rental",
    description:
      "Placeholder entry for a future rental case study. Approved project details and photographs will be added here.",
    image: "pages/portfolio.jpeg",
    client: "Available on request",
    industry: "To be confirmed",
    location: "To be confirmed",
    status: "Placeholder — details pending approval",
    scope: placeholderScope,
    services: ["Equipment Rental"],
    equipment: ["Project equipment list to be confirmed"],
    gallery: [
      { image: "pages/portfolio.jpeg", caption: galleryNote },
      { image: "home/about-2.jpg", caption: galleryNote }
    ]
  },
  {
    id: "installation-project",
    number: "05",
    title: "Installation & Commissioning Project",
    category: "installation",
    description:
      "Placeholder entry for a future installation case study. Approved project details and photographs will be added here.",
    image: "home/about-1.jpg",
    client: "Available on request",
    industry: "To be confirmed",
    location: "To be confirmed",
    status: "Placeholder — details pending approval",
    scope: placeholderScope,
    services: ["Installation & Commissioning"],
    equipment: ["Project equipment list to be confirmed"],
    gallery: [
      { image: "home/about-1.jpg", caption: galleryNote },
      { image: "pages/techno-lab.jpg", caption: galleryNote }
    ]
  },
  {
    id: "training-project",
    number: "06",
    title: "Training & Technical Services Project",
    category: "training",
    description:
      "Placeholder entry for a future training case study. Approved project details and photographs will be added here.",
    image: "home/why-partner.jpg",
    client: "Available on request",
    industry: "To be confirmed",
    location: "To be confirmed",
    status: "Placeholder — details pending approval",
    scope: placeholderScope,
    services: ["Training & Technical Services"],
    equipment: ["Project equipment list to be confirmed"],
    gallery: [
      { image: "home/why-partner.jpg", caption: galleryNote },
      { image: "pages/lab-wide.webp", caption: galleryNote }
    ]
  }
];

export function getCategoryLabel(categoryId) {
  return portfolioCategories.find((category) => category.id === categoryId)?.label || categoryId;
}

export function getProject(projectId) {
  return portfolioProjects.find((project) => project.id === projectId);
}
