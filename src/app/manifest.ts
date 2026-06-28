import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Frank Walsh",
    short_name: "Frank Walsh",
    description: "EE who ships hardware and software — and wins hackathons.",
    start_url: "/",
    display: "standalone",
    background_color: "#060a07",
    theme_color: "#060a07",
    icons: [{ src: "/icon", sizes: "32x32", type: "image/png" }],
  };
}
