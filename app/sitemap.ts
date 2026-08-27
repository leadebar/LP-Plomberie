import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/devis`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/realisation`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = [
    "depannage-plomberie-cagnes-sur-mer",
    "recherche-fuite-cagnes-sur-mer",
    "debouchage-canalisation-cagnes-sur-mer",
    "wc-chasse-deau-cagnes-sur-mer",
    "chauffe-eau-cagnes-sur-mer",
    "renovation-salle-de-bain-cagnes-sur-mer",
  ].map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityRoutes: MetadataRoute.Sitemap = [
    "plombier-antibes",
    "plombier-biot",
    "plombier-cannes",
    "plombier-mougins",
    "plombier-nice",
    "plombier-opio",
    "plombier-vence",
  ].map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...blogRoutes];
}
