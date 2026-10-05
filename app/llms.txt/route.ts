import { siteConfig } from "@/lib/site";
import { servicePages } from "@/lib/service-pages";
import { services } from "@/lib/services";
import { posts } from "@/lib/blog";

export const dynamic = "force-static";

/** llms.txt généré depuis la config : plus de contenu géographique en dur. */
export function GET() {
  const base = siteConfig.url;
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> Artisan plombier à ${siteConfig.city}, intervenant ${siteConfig.zone}. Dépannage rapide, recherche de fuite, débouchage, chauffe-eau et rénovation de salle de bain. Devis gratuit, intervention soignée.`,
    "",
    "## Informations générales",
    "",
    `- **Entreprise** : ${siteConfig.legalName}`,
    `- **Ville** : ${siteConfig.city} (${siteConfig.postalCode})`,
    `- **Zone d'intervention** : ${siteConfig.area} : ${siteConfig.communesLong}`,
    `- **Téléphone** : ${siteConfig.phone.display}`,
    `- **Email** : ${siteConfig.email}`,
    `- **Horaires** : ${siteConfig.hours.label}`,
    `- **Clientèle** : particuliers et professionnels`,
    `- **Site web** : ${base}`,
    `- **Instagram** : ${siteConfig.socials.instagram}`,
    "",
    "## Services",
    "",
    ...servicePages.map((p) => {
      const s = services.find((x) => x.slug === p.slug);
      return `- **${p.title}** : ${s?.short ?? ""} : ${base}/${p.slug}`;
    }),
    "",
    "## Pages principales",
    "",
    `- Accueil : ${base}`,
    `- Devis gratuit : ${base}/devis`,
    `- Professionnels : ${base}/professionnels`,
    `- Réalisations : ${base}/realisation`,
    `- Blog conseils plomberie : ${base}/blog`,
    "",
    "## Articles de blog",
    "",
    ...posts.map((p) => `- ${p.title} : ${base}/blog/${p.slug}`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
