// Sections that appear in the top nav and the landing-page image grid.
export type Section = {
  slug: string;
  label: string;
  prompt: string; // terminal-style path shown on cards
  blurb: string;
  cover?: string; // /images/_nav/<slug>.jpg
};

export const sections: Section[] = [
  {
    slug: "software",
    label: "software",
    prompt: "~/software",
    blurb: "apps & tools I've shipped",
  },
  {
    slug: "hardware",
    label: "hardware",
    prompt: "~/hardware",
    blurb: "PCBs, power electronics, embedded",
  },
  {
    slug: "experience",
    label: "experience",
    prompt: "~/experience",
    blurb: "Apple · Tesla · the road here",
  },
  // resources hidden for now — Frank will add it back later
  {
    slug: "blog",
    label: "blog",
    prompt: "~/blog",
    blurb: "notes, teardowns & opinions",
  },
];
