import { byDateDesc, type Role } from "./types";

// Current role — gets top billing.
export const current: Role = {
  company: "Apple",
  tab: "Apple",
  title: "Systems Integration EE — Apple Watch",
  period: "2026 – present",
  date: "2026-04",
  location: "California",
  bullets: [
    "EE on the Systems Integration team for Apple Watch.",
    "Designing flexible printed circuit boards (flex PCBs).",
    "Partnering closely with the in-region team to build functional test plans.",
  ],
  tags: ["Apple Watch", "Flex PCB", "Functional Test", "Systems Integration"],
  imageDir: "/images/experience/apple/",
  cover: "/images/experience/apple/IMG_6424.jpeg",
};

// Headline prior work — gets real estate.
export const headline: Role = {
  company: "Tesla",
  tab: "Tesla",
  title: "Electronics Design Engineer",
  period: "Aug 2021 – 2025",
  date: "2021-08",
  location: "Palo Alto, California",
  bullets: [
    "Led design and validation of production electronics for Tesla's Low Voltage Controllers — power, motor-drive, analog, and high-speed digital — across millions of vehicles annually.",
    "Drove the Model 3/Y low-voltage redesign, unlocking $35M in annual revenue via harness and BOM optimization.",
    "Designed Tesla's first 48V USB-C charging hub for Cybertruck and Model 3/Y.",
    "Designed and validated a 650 W multi-phase buck converter with coupled inductor.",
    "Resolved line-down crises under deadline (EMI non-compliance, IC supply).",
    "Built Python design-automation tools for fuse sizing and circuit protection, now used team-wide.",
  ],
  tags: ["Power", "Analog", "Altium", "Python", "EMC"],
  imageDir: "/images/experience/tesla/",
  cover: "/images/experience/tesla/IMG_1540.jpg",
  fit: "cover",
  mediaAspect: "3 / 4",
};

// Everything else collapses into one low-emphasis "internships" bucket (newest → oldest).
export const internships: Role[] = [
  {
    company: "Curtiss-Wright Defense Solutions",
    title: "Hardware Engineering Intern",
    period: "Jan 2021 – Apr 2021",
    date: "2021-01",
    location: "Ottawa, ON",
    bullets: [
      "Bring-up and verification of a new x86 Ethernet switch — thermal, traffic, flash, and compliance testing.",
    ],
    imageDir: "/images/experience/internships/",
  },
  {
    company: "Tesla",
    title: "Low Voltage Distribution Intern",
    period: "Oct 2019 – Aug 2020",
    date: "2019-10",
    location: "Palo Alto, CA",
    bullets: [
      "Designed Semi-Truck LV distribution system from the ground up (400+ connector endpoints); 6 harnesses now in production.",
    ],
    imageDir: "/images/experience/internships/",
  },
  {
    company: "Solace Power",
    title: "Electrical Engineering Intern",
    period: "Aug 2018 – Dec 2018",
    date: "2018-08",
    location: "Mount Pearl, NL",
    bullets: [
      "Capacitive-coupled wireless power link; tuned 40+ RF filters for EMC compliance with VNAs and impedance analyzers.",
    ],
    imageDir: "/images/experience/internships/",
  },
  {
    company: "Paradigm Hyperloop",
    title: "Electrical Systems Lead",
    period: "May 2018 – Jan 2020",
    date: "2018-05",
    location: "St. John's, NL",
    bullets: [
      "Led a 5-student subsystem team building electrical systems for a +470 km/h autonomous pod; 3rd in N.A., 8th worldwide (2019).",
    ],
    imageDir: "/images/experience/internships/",
  },
].sort(byDateDesc);
