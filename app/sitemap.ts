import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = [
  { path: "/", priority: 1 },
  { path: "/menu", priority: 0.95 },
  { path: "/gallery", priority: 0.75 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.9 },
  { path: "/catering", priority: 0.72 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route.priority
  }));
}
