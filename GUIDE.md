# frankwalsh.dev — build guide

Personal site. Terminal / neon-green / electronics theme. Next.js 16 (App
Router) + Tailwind v4. Everything is data-driven so you rarely touch JSX.

## Run it

```bash
npm run dev      # local dev at http://localhost:3000
npm run build    # production build (run before deploying)
npm start        # serve the production build
```

## Where things live

```
src/
  app/                 one folder per route (page.tsx)
    page.tsx           landing: hero + "most proud of" + nav grid
    software/  hardware/  experience/  resources/  blog/
  components/          reusable UI (cards, terminal chrome, boot animation…)
  data/                ← YOU MOSTLY EDIT HERE
    profile.ts         name, blurb, socials, headshot
    achievements.ts    the "most proud of" wall
    software.ts        software projects
    hardware.ts        hardware projects
    experience.ts      current (Apple) + headline (Tesla) + internships bucket
    resources.ts       textbook library + tools/EDAs
    nav.ts             the five sections
public/
  images/              drop photos here — see public/images/README.md
  frank_walsh_resume.pdf
```

## Add a project (example: a new hardware build)

1. `src/data/hardware.ts` → add an entry:
   ```ts
   {
     slug: "my-board",
     title: "My Board",
     tagline: "One-line hook.",
     description: "A sentence or two.",
     tags: ["KiCAD", "STM32"],
     year: "2026",
     status: "shipped",
     links: [{ label: "github", href: "https://github.com/..." }],
     imageDir: "/images/hardware/my-board/",
   }
   ```
2. `mkdir public/images/hardware/my-board` and drop photos in.
3. Add `cover: "/images/hardware/my-board/front.jpg"` to the entry.

That's it — the card renders itself.

## Theme knobs

All colors live in `src/app/globals.css` under `@theme` (`--color-green`,
`--color-amber`, `--color-bg`, …). Change one variable, the whole site follows.
The boot animation is `src/components/BootSequence.tsx` (plays once per tab).

## TODOs seeded in the data (search `TODO Frank`)

- Confirm GitHub / LinkedIn URLs in `profile.ts`
- Add a headshot + set `profile.headshot`
- Donezo App Store link
- A couple of (non-NDA) bullets for the Apple role
- Trim/replace the textbook list in `resources.ts` to match your real shelf

## Deploy

```bash
npx vercel        # preview
npx vercel --prod # production
```
