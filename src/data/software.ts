import { byPinnedDate, type Project } from "./types";

const items: Project[] = [
  {
    slug: "tnsupportletter",
    title: "TNsupportletter.com",
    tab: "TN Letters",
    tagline: "AI tool that generates TN-visa support letters under USMCA.",
    description:
      "End-to-end SaaS that drafts a compliant TN support letter from an applicant's details — Stripe payments, MongoDB, and OpenAI. It generated real revenue, but I wound it down once customer-acquisition cost climbed higher than the unit economics could support.",
    tags: ["Next.js", "Stripe", "MongoDB", "OpenAI"],
    date: "2025-08",
    pinned: true,
    status: "real revenue · sunset",
    links: [{ label: "live site", href: "https://tnsupportletter.com" }],
    imageDir: "/images/software/tnsupportletter/",
    cover: "/images/software/tnsupportletter/editor.png",
    images: ["/images/software/tnsupportletter/editor.png"],
    fit: "contain",
    mediaAspect: "2 / 1",
  },
  {
    slug: "slopquest",
    title: "SlopQuest",
    tab: "SlopQuest",
    tagline: "A low-poly 3D action-adventure game.",
    description:
      "An in-progress low-poly action RPG — third-person combat, enemies, health/XP, hotbar, and a minimap. Built for fun and to learn real-time 3D.",
    tags: ["Game", "3D", "Low-poly"],
    date: "2026-06",
    status: "in progress",
    links: [{ label: "play it", href: "https://slopquest.io" }],
    imageDir: "/images/software/slopQuest/",
    cover: "/images/software/slopQuest/slopquest.png",
    images: ["/images/software/slopQuest/slopquest.png"],
  },
  {
    slug: "commutegraph",
    title: "CommuteGraph.com",
    tab: "CommuteGraph",
    tagline: "Analyze & graph how a commute changes through the day.",
    description:
      "Pulls travel-time data and visualizes how a commute shifts across the day and week, so you can find the least-painful time to drive.",
    tags: ["Web app", "Data viz", "Maps API"],
    date: "2025-10",
    status: "shipped",
    links: [{ label: "live site", href: "https://commutegraph.com" }],
    imageDir: "/images/software/commutegraph/",
    cover: "/images/software/commutegraph/commutegraph.png",
    images: ["/images/software/commutegraph/commutegraph.png"],
    fit: "contain",
    mediaAspect: "5 / 4",
  },
  {
    slug: "donezo",
    title: "Donezo",
    tab: "Donezo",
    tagline: "iOS AI goal-planner & coach with gamified tracking.",
    description:
      "An AI goal planner that turns ambitions into actionable, tracked, gamified steps. Full App Store launch.",
    tags: ["iOS", "Swift", "AI", "App Store"],
    date: "2025-09",
    status: "shipped",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/donezo-ai-goal-planner-coach/id6752918207",
      },
    ],
    imageDir: "/images/software/donezo/",
    cover: "/images/software/donezo/1.png",
    images: [
      "/images/software/donezo/1.png",
      "/images/software/donezo/2.png",
      "/images/software/donezo/3.png",
      "/images/software/donezo/4.png",
      "/images/software/donezo/5.png",
    ],
    fit: "contain",
    mediaAspect: "1 / 1",
  },
];

export const software = items.sort(byPinnedDate);
