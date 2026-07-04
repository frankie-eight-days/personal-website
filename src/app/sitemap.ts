import type { MetadataRoute } from "next";

const BASE = "https://frankwalsh.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/software",
    "/hardware",
    "/experience",
    "/blog",
    "/blog/one-hour-hackathon",
  ].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
