import { byPinnedDate, type Project } from "./types";

const _hardware: Project[] = [
  {
    slug: "front-controller-my2024",
    title: "Tesla Front Controller",
    tab: "Tesla Front Controller",
    tagline: "VCFRONT Gen 3 — the brains of the Model Y front end.",
    description:
      "Front-controller redesign for the Model Y 2024 refresh (VCFRONT Gen 3). Moved from discrete analog eFuses to integrated digital VNF1048F smart-fuse ICs; replaced state-machine trapezoidal BLDC drivers for the pumps and radiator fans with microcontroller-based pre-drivers; plus numerous cost and GSM improvements.",
    tags: ["VCFRONT", "Smart eFuse", "BLDC", "STM32", "DFM"],
    date: "2023-12",
    pinned: true,
    status: "in production",
    imageDir: "/images/hardware/frontControllerMY2024Refresh/",
    cover: "/images/hardware/frontControllerMY2024Refresh/IMG_9431.jpeg",
    images: ["/images/hardware/frontControllerMY2024Refresh/IMG_9431.jpeg"],
  },
  {
    slug: "buck-converter-650w",
    title: "Tesla Buck Converter",
    tab: "Tesla Buck Converter",
    tagline: "60 W continuous, 650 W transient — coupled-inductor, volume-constrained.",
    description:
      "Sources ~60 W continuously while handling transients up to 650 W for tens of milliseconds. Coupled-inductor magnetics shrink the overall volume — it sits in a mechanically constrained corner of the car. As an offline converter, it also required a special power-up sequence.",
    tags: ["DC/DC", "Coupled inductor", "Offline", "Magnetics"],
    date: "2025-06",
    pinned: true,
    status: "validated",
    imageDir: "/images/hardware/buck-converter-650w/",
    cover: "/images/hardware/buck-converter-650w/IMG_3265.jpeg",
    images: [
      "/images/hardware/buck-converter-650w/IMG_3265.jpeg",
      "/images/hardware/buck-converter-650w/IMG_3266.jpeg",
    ],
  },
  {
    slug: "usb-c-hub-48v",
    title: "Tesla USB-C PD",
    tab: "Tesla USB-C PD",
    tagline: "Tesla's first-ever 48V USB-C hub for Cybertruck and Model 3/Y.",
    description:
      "Designed Tesla's first 48V USB-C charging hub, leveraging vertical integration to cut center-console cost by $9.17 per vehicle.",
    tags: ["Power", "USB-C PD", "48V", "Altium"],
    date: "2023-01",
    pinned: true,
    status: "in production",
    imageDir: "/images/hardware/usb-c-hub-48v/",
    cover: "/images/hardware/usb-c-hub-48v/IMG_7761.jpeg",
    images: ["/images/hardware/usb-c-hub-48v/IMG_7761.jpeg"],
  },
  {
    slug: "igvc-2022",
    title: "IGVC Tri-Motor Robot Board",
    tab: "IGVC Robot",
    tagline: "Power + control board for a tri-motor ground robot.",
    description:
      "Custom board for the 2022 Intelligent Ground Vehicle Competition: housed power-converter modules and a microcontroller driving three electric-skateboard ESCs (tri-motor BLDC), plus basic PoE injection for an off-the-shelf 915 MHz remote-control radio.",
    tags: ["BLDC", "ESC", "PoE", "Power"],
    date: "2022-06",
    status: "competition",
    links: [
      {
        label: "github",
        href: "https://github.com/ParadigmEngineering/igvc-2022-hardware",
      },
    ],
    fit: "contain", // mixed landscape boards + portrait vehicle shot — show each whole
    imageDir: "/images/hardware/igvc-2022/",
    cover: "/images/hardware/igvc-2022/IMG_6693.jpeg",
    images: [
      "/images/hardware/igvc-2022/IMG_6693.jpeg",
      "/images/hardware/igvc-2022/igvc-vehicle.jpg",
      "/images/hardware/igvc-2022/IMG_6704.jpeg",
    ],
  },
  {
    slug: "auv-capstone",
    title: 'AUV Battery Board ("Chum Bucket")',
    tab: "AUV Board",
    tagline: "Battery board + firmware for an autonomous underwater vehicle.",
    description:
      "My piece of the SRAUV senior-capstone robot: I designed the 18650 battery board and wrote its firmware. The wider team project earned the top IEEE capstone award.",
    tags: ["Battery", "BMS", "Firmware", "PCB", "Capstone"],
    date: "2022-04",
    year: "2022",
    status: "award-winning",
    links: [
      { label: "demo video", href: "https://www.youtube.com/watch?v=jjQGgB2sI6c" },
      {
        label: "github",
        href: "https://github.com/MitchellStride/SRAUV-Senior-Design/tree/master/Frank/chum-bucket",
      },
    ],
    imageDir: "/images/hardware/auv-capstone/",
    cover: "/images/hardware/auv-capstone/IMG_4121.JPG",
    images: [
      "/images/hardware/auv-capstone/IMG_4121.JPG",
      "/images/hardware/auv-capstone/IMG_4124.JPG",
      "/images/hardware/auv-capstone/IMG_4122.JPG",
    ],
  },
  {
    slug: "phoenix-down",
    title: "Phoenix Down — Analog Beverage Warmer",
    tab: "Phoenix Down",
    tagline: "100% analog, thermistor-controlled hot plate.",
    description:
      "Controls-course design: a beverage-warmer hot plate regulated entirely with analog electronics — a thermistor closes the loop, no microcontroller. Designed by 'Walsh² Inc.' at Memorial University.",
    tags: ["Analog", "Control loop", "Thermistor", "PCB"],
    date: "2022-02",
    year: "2022",
    status: "course project",
    links: [
      { label: "github", href: "https://github.com/frankie-eight-days/phoenix-down" },
    ],
    imageDir: "/images/hardware/controls_course_design/",
    cover: "/images/hardware/controls_course_design/IMG_6097.jpeg",
    images: [
      "/images/hardware/controls_course_design/IMG_6097.jpeg",
      "/images/hardware/controls_course_design/IMG_6169.jpeg",
    ],
  },
  {
    slug: "ism-radio",
    title: "915 MHz ISM Radio",
    tab: "ISM Radio",
    tagline: "TI CC transceiver + STM32 sub-GHz radio.",
    description:
      "A 915 MHz ISM-band radio around a TI CC-series transceiver and an STM32. Honest status: never got the PLL to lock — I suspect an RF layout / stability issue. A good scar to learn from.",
    tags: ["RF", "915 MHz", "STM32", "PCB"],
    date: "2021-03",
    year: "2021",
    status: "didn't lock (yet)",
    links: [{ label: "github", href: "https://github.com/frankie-eight-days/mochiRadio" }],
    imageDir: "/images/hardware/ism-radio/",
    cover: "/images/hardware/ism-radio/IMG_4204.JPG",
    images: [
      "/images/hardware/ism-radio/IMG_4204.JPG",
      "/images/hardware/ism-radio/IMG_4216.JPG",
    ],
  },
  {
    slug: "hyperloop-powertrain",
    title: "410 kW Hyperloop Powertrain",
    tab: "Hyperloop",
    tagline: "800V pack + PMSM for a +470 km/h pod.",
    description:
      "As electrical lead for Paradigm Hyperloop, designed, built and tested a 410 kW electric powertrain — 800V lithium pack, PMSM motor, and control circuitry — plus 5 custom PCBs and 30+ sensors.",
    tags: ["800V", "Powertrain", "Battery", "PCB"],
    date: "2019-07",
    year: "2019",
    status: "competition",
    links: [
      { label: "demo video", href: "https://www.youtube.com/watch?v=fnBQQIZkNYg" },
    ],
    imageDir: "/images/hardware/hyperloop-powertrain/",
    cover: "/images/hardware/hyperloop-powertrain/IMG_0283.jpeg",
    images: [
      "/images/hardware/hyperloop-powertrain/IMG_0283.jpeg",
      "/images/hardware/hyperloop-powertrain/IMG_0286.jpeg",
      "/images/hardware/hyperloop-powertrain/MVIMG_20190717_223508.jpg",
    ],
  },
];

export const hardware = _hardware.sort(byPinnedDate);
