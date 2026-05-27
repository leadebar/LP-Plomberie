/**
 * Configuration centrale du site.
 * Toutes les informations de l'entreprise sont définies ici une seule fois
 * puis réutilisées partout (SEO, schema.org, CTA, footer, etc.).
 */

export const siteConfig = {
  name: "LP Plomberie",
  legalName: "LP Plomberie — Artisan plombier",
  tagline: "Plombier de confiance à Cagnes-sur-Mer & dans tout le 06",
  description:
    "LP Plomberie, artisan plombier à Cagnes-sur-Mer. Dépannage rapide, recherche de fuite, débouchage, chauffe-eau et rénovation de salle de bain dans tout le 06. Devis gratuit, intervention soignée.",
 url: "https://www.lpplomberie.com",
  locale: "fr_FR",

  // Coordonnées
  phone: {
    display: "07 69 05 08 32",
    tel: "+33769050832",
    whatsapp: "33769050832",
  },
  email: "pheulpin.plomberie@gmail.com",

  // Zone & horaires
  area: "Cagnes-sur-Mer et l'ensemble des Alpes-Maritimes (06)",
  city: "Cagnes-sur-Mer",
  region: "Alpes-Maritimes",
  postalCode: "06800",
  country: "FR",
  geo: {
    latitude: 43.6644,
    longitude: 7.1487,
    radiusKm: 40,
  },
  hours: {
    label: "Du lundi au samedi, 8h – 19h",
    opens: "08:00",
    closes: "19:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  status: "Artisan indépendant",

  // Réseaux / liens
  whatsappMessage:
    "Bonjour LP Plomberie, je souhaite un renseignement / un devis pour une intervention.",
} as const;

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Pourquoi nous", href: "/#pourquoi" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis", href: "/#avis" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
] as const;

/** Lien WhatsApp prêt à l'emploi */
export const whatsappHref = `https://wa.me/${siteConfig.phone.whatsapp}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;

/** Lien d'appel téléphonique prêt à l'emploi */
export const telHref = `tel:${siteConfig.phone.tel}`;
