/**
 * Configuration centrale du site.
 * Toutes les informations de l'entreprise sont définies ici une seule fois
 * puis réutilisées partout (SEO, schema.org, CTA, footer, etc.).
 *
 * ZONE GÉOGRAPHIQUE
 * Tout ce qui dépend de la localisation (ville, département, communes, carte,
 * pages villes) vit dans les presets ci-dessous. Le preset actif est choisi
 * par la variable d'environnement NEXT_PUBLIC_LOCATION ("cagnes" par défaut,
 * "bonneval" pour la bascule). Voir docs/DEMENAGEMENT-BONNEVAL.md.
 */

export type LocationKey = "cagnes" | "bonneval";

type ServiceCity = { label: string; href: string | null };

type Place = {
  city: string;
  region: string;
  postalCode: string;
  /** Zone affichée dans le footer et les mentions légales */
  area: string;
  /** Complément de phrase après « à {city} et », ex. « dans tout le 06 » */
  zone: string;
  /** Même idée, pour les titres : « Plombier à {city} & dans le 06 » */
  titleZone: string;
  /** Code court : 06, 28 */
  zoneShort: string;
  /** Libellé de la statistique de couverture */
  coverageLabel: string;
  /** Sous-titre de la section « Zone d'intervention » */
  serviceAreaSubtitle: string;
  /** Liste courte de communes, utilisée dans les FAQ */
  communes: string;
  /** Liste longue, utilisée sur la page devis et llms.txt */
  communesLong: string;
  /** Ligne de communes du bas de page */
  footerLine: string;
  serviceCities: ServiceCity[];
  geo: { latitude: number; longitude: number; radiusKm: number };
  map: { query: string; zoom: number };
  /** Les pages /plombier-{ville} existent-elles dans cette zone ? */
  cityPages: boolean;
};

const presets: Record<LocationKey, Place> = {
  cagnes: {
    city: "Cagnes-sur-Mer",
    region: "Alpes-Maritimes",
    postalCode: "06800",
    area: "Cagnes-sur-Mer et l'ensemble des Alpes-Maritimes (06)",
    zone: "dans tout le 06",
    titleZone: "dans le 06",
    zoneShort: "06",
    coverageLabel: "tout le département couvert",
    serviceAreaSubtitle:
      "Basé à Cagnes-sur-Mer, j'interviens rapidement dans toutes les communes du 06.",
    communes:
      "Antibes, Nice, Saint-Laurent-du-Var, Vence, Cannes, Mougins, Biot, La Colle-sur-Loup et alentours",
    communesLong:
      "Nice, Antibes, Juan-les-Pins, Villeneuve-Loubet, Saint-Laurent-du-Var, Vence, La Colle-sur-Loup, Biot, Sophia Antipolis, Cannes et alentours",
    footerLine:
      "Plombier à Cagnes-sur-Mer · Nice · Antibes · Saint-Laurent-du-Var · Villeneuve-Loubet · Vence · La Colle-sur-Loup · Biot · Valbonne · Cannes · Alpes-Maritimes (06)",
    serviceCities: [
      { label: "Antibes", href: "/plombier-antibes" },
      { label: "Biot", href: "/plombier-biot" },
      { label: "Cagnes-sur-Mer", href: "/" },
      { label: "Cannes", href: "/plombier-cannes" },
      { label: "La Colle-sur-Loup", href: null },
      { label: "Le Rouret", href: null },
      { label: "Mougins", href: "/plombier-mougins" },
      { label: "Nice", href: "/plombier-nice" },
      { label: "Opio", href: "/plombier-opio" },
      { label: "Saint-Laurent-du-Var", href: null },
      { label: "Vence", href: "/plombier-vence" },
      { label: "Et alentours", href: null },
    ],
    geo: { latitude: 43.6644, longitude: 7.1487, radiusKm: 40 },
    map: { query: "Cagnes-sur-Mer,France", zoom: 11 },
    cityPages: true,
  },

  // À VÉRIFIER avant la bascule (voir docs/DEMENAGEMENT-BONNEVAL.md) :
  // code postal, coordonnées, rayon d'intervention et liste des communes.
  bonneval: {
    city: "Bonneval",
    region: "Eure-et-Loir",
    postalCode: "28800",
    area: "Bonneval, Châteaudun, Chartres et l'Eure-et-Loir (28)",
    zone: "en Eure-et-Loir (28)",
    titleZone: "en Eure-et-Loir",
    zoneShort: "28",
    coverageLabel: "zone couverte autour de Bonneval",
    serviceAreaSubtitle:
      "Basé à Bonneval, j'interviens rapidement autour de Bonneval, de Châteaudun et de Chartres.",
    communes: "Châteaudun, Chartres et alentours",
    communesLong: "Bonneval, Châteaudun, Chartres et alentours",
    footerLine:
      "Plombier à Bonneval · Châteaudun · Chartres · Eure-et-Loir (28)",
    serviceCities: [
      { label: "Bonneval", href: "/" },
      { label: "Châteaudun", href: null },
      { label: "Chartres", href: null },
      { label: "Et alentours", href: null },
    ],
    geo: { latitude: 48.18, longitude: 1.39, radiusKm: 45 },
    map: { query: "Bonneval,Eure-et-Loir,France", zoom: 10 },
    cityPages: false,
  },
};

const requested = process.env.NEXT_PUBLIC_LOCATION;
export const locationKey: LocationKey =
  requested === "bonneval" ? "bonneval" : "cagnes";

const place = presets[locationKey];

export const siteConfig = {
  name: "LP Plomberie",
  legalName: "LP Plomberie — Artisan plombier",
  tagline: `Plombier de confiance à ${place.city} & ${place.zone}`,
  description: `LP Plomberie, artisan plombier à ${place.city}. Dépannage rapide, recherche de fuite, débouchage, chauffe-eau et rénovation de salle de bain ${place.zone}. Devis gratuit, intervention soignée.`,
  url: "https://www.lpplomberie.com",
  locale: "fr_FR",

  // Coordonnées
  phone: {
    display: "07 69 05 08 32",
    tel: "+33769050832",
    whatsapp: "33769050832",
  },
  email: "pheulpin.plomberie@gmail.com",

  // Zone (issue du preset actif)
  ...place,
  country: "FR",
  /** Ex. « Cagnes-sur-Mer & 06 » */
  cityZone: `${place.city} & ${place.zoneShort}`,
  /** Ex. « Plombier à Cagnes-sur-Mer & dans le 06 » */
  headline: `Plombier à ${place.city} & ${place.titleZone}`,

  hours: {
    label: "Du lundi au samedi, 8h – 19h",
    opens: "08:00",
    closes: "19:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  status: "Artisan indépendant",

  // Réseaux / liens
  socials: {
    instagram: "https://www.instagram.com/lp_plomberie/",
  },
  whatsappMessage:
    "Bonjour LP Plomberie, je souhaite un renseignement / un devis pour une intervention.",
};

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Pourquoi nous", href: "/#pourquoi" },
  { label: "Réalisations", href: "/#realisations" },
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

/**
 * Remplace les jetons de zone dans un texte :
 * {city} {zone} {zoneShort} {region} {communes} {phone}
 * Permet d'écrire les contenus (FAQ, intros, meta) une seule fois,
 * sans nom de ville en dur.
 */
export function withSite(text: string): string {
  return text
    .replace(/\{city\}/g, siteConfig.city)
    .replace(/\{zone\}/g, siteConfig.zone)
    .replace(/\{zoneShort\}/g, siteConfig.zoneShort)
    .replace(/\{region\}/g, siteConfig.region)
    .replace(/\{communes\}/g, siteConfig.communes)
    .replace(/\{phone\}/g, siteConfig.phone.display);
}
