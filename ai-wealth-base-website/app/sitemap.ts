import type { MetadataRoute } from "next";

const siteUrl = "https://aiwealthbase.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/reviews",
    "/free-checklist",
    "/blog",
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/free-checklist" ? 0.9 : 0.7,
  }));
}
