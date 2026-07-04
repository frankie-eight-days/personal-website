export const profile = {
  name: "Frank Walsh",
  handle: "frankie-eight-days",
  // shown as a rotating / stacked set of roles in the hero
  roles: ["Electrical Engineer", "Systems EE @ Apple", "aspiring founder"],
  tagline: "EE who ships hardware and software — from production boards to hackathon weekends.",
  // one or two sentences for the hero / about blurb
  blurb:
    "Systems EE at Apple, ex-Tesla (Low Voltage Controllers). I design production electronics, " +
    "ship side-project software, and spend my weekends at hackathons, makeathons, and hardware meetups. " +
    "Currently finishing an M.Eng in Industrial Engineering at Oregon State.",
  location: "Bay Area, California",

  email: "walshf@oregonstate.edu",
  phone: "1-650-283-3464",
  resume: "/frank_walsh_resume.pdf",
  // Drop a headshot in public/images/hero/ then set this to e.g. "/images/hero/headshot.jpg"
  headshot: "/images/hero/IMG_6722.JPG",
  // TODO Frank: confirm these handles/URLs are right
  socials: [
    { label: "GitHub", href: "https://github.com/frankie-eight-days" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/francis-walsh" },
    { label: "Email", href: "mailto:walshf@oregonstate.edu" },
  ],

  educationBlurb:
    "EE fundamentals at Memorial — now sharpening the systems & industrial-engineering side at Oregon State.",
  education: [
    {
      school: "Oregon State University",
      short: "Oregon State University",
      abbr: "OSU",
      degree: "M.Eng, Industrial Engineering",
      detail: "4.0 / 4.0 GPA",
      period: "2024 – Mar 2027 (expected)",
      note: "Still in flight — graduating March 2027. Leveling up systems & industrial engineering: optimization, manufacturing, and operations.",
      // drop a logo in public/images/education/oregon-state/ then set this
      logo: "",
      imageDir: "/images/education/oregon-state/",
    },
    {
      school: "Memorial University of Newfoundland",
      short: "Memorial University",
      abbr: "MUN",
      degree: "B.Eng, Electrical Engineering",
      detail: "3.64 / 4.0 GPA",
      period: "2016 – 2022",
      note: "A co-op degree — 7 internships across North America, from electric utilities to wireless power, networking, and automotive. Where the EE foundation got built: power electronics, embedded, RF, and a lot of hands-on PCB work.",
      logo: "",
      imageDir: "/images/education/mun/",
    },
  ],
} as const;
