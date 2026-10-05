import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { posts } from "@/lib/blog";
import { servicePages } from "@/lib/service-pages";
import { cities, cityPath } from "@/lib/cities";
import { getAvailableProjets } from "@/lib/projets.server";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  // Pas de lastModified fixé à « maintenant » : Google l'ignore s'il change à chaque build.
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/devis`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/professionnels`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.7 },
    ...(getAvailableProjets().length > 0
      ? [{ url: `${base}/realisation`, changeFrequency: "monthly" as const, priority: 0.6 }]
      : []),
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((p) => ({
    url: `${base}/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Les pages villes n'existent que pour la zone Alpes-Maritimes.
  const cityRoutes: MetadataRoute.Sitemap = siteConfig.cityPages
    ? cities.map((c) => ({
        url: `${base}${cityPath(c.slug)}`,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
    : [];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...blogRoutes];
}
