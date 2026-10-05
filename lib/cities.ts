import type { Metadata } from "next";
import { siteConfig, withSite } from "@/lib/site";

/**
 * Pages villes (/plombier-nice, /plombier-cannes, ...).
 * Elles n'ont de sens que pour la zone Alpes-Maritimes : quand le preset
 * « bonneval » est actif (NEXT_PUBLIC_LOCATION=bonneval), next.config.mjs les
 * redirige en 301 vers l'accueil et le sitemap les retire.
 */

export type City = {
  slug: string;
  name: string;
  /** Lieu tel qu'écrit dans le texte et la meta description */
  place: string;
  /** Fin du badge : « Plombier · {eyebrow} » */
  eyebrow: string;
  /** Complément de phrase pour la section services : « à Nice et dans ses quartiers » */
  servicesSub: string;
  /** Réponse à la première question de la FAQ */
  faqPlace: string;
};

export const cities: City[] = [
  {
    slug: "antibes",
    name: "Antibes",
    place: "Antibes et Juan-les-Pins",
    eyebrow: "Antibes & Juan-les-Pins",
    servicesSub: "à Antibes et Juan-les-Pins",
    faqPlace: "à Antibes et Juan-les-Pins",
  },
  {
    slug: "biot",
    name: "Biot",
    place: "Biot et Sophia Antipolis",
    eyebrow: "Biot & Sophia Antipolis",
    servicesSub: "à Biot et Sophia Antipolis",
    faqPlace: "à Biot et Sophia Antipolis",
  },
  {
    slug: "cannes",
    name: "Cannes",
    place: "Cannes et Le Cannet",
    eyebrow: "Cannes & Le Cannet",
    servicesSub: "à Cannes et Le Cannet",
    faqPlace: "à Cannes et Le Cannet",
  },
  {
    slug: "mougins",
    name: "Mougins",
    place: "Mougins",
    eyebrow: "Mougins & environs",
    servicesSub: "à Mougins et ses environs",
    faqPlace: "à Mougins",
  },
  {
    slug: "nice",
    name: "Nice",
    place: "Nice",
    eyebrow: "Nice & Alpes-Maritimes",
    servicesSub: "à Nice et dans ses quartiers",
    faqPlace: "à Nice et dans ses quartiers",
  },
  {
    slug: "opio",
    name: "Opio",
    place: "Opio",
    eyebrow: "Opio & environs",
    servicesSub: "à Opio et ses environs",
    faqPlace: "à Opio",
  },
  {
    slug: "vence",
    name: "Vence",
    place: "Vence et Saint-Paul-de-Vence",
    eyebrow: "Vence & Saint-Paul-de-Vence",
    servicesSub: "à Vence et ses environs",
    faqPlace: "à Vence et Saint-Paul-de-Vence",
  },
];

export const cityPath = (slug: string) => `/plombier-${slug}`;

export function getCity(slug: string): City {
  const city = cities.find((c) => c.slug === slug);
  if (!city) throw new Error(`Ville inconnue : ${slug}`);
  return city;
}

export function cityFaqs(city: City) {
  return [
    {
      question: `Intervenez-vous à ${city.name} pour les urgences plomberie ?`,
      answer: withSite(
        `Oui, j'interviens ${city.faqPlace} pour tous vos dépannages plomberie. Appelez le {phone} pour une intervention rapide.`
      ),
    },
    {
      question: `Quel est le délai d'intervention à ${city.name} ?`,
      answer: withSite(
        `Basé à {city}, j'interviens rapidement à ${city.name}. Pour les urgences, j'essaie de me déplacer dans la journée selon ma disponibilité.`
      ),
    },
    {
      question: `Réalisez-vous des rénovations de salle de bain à ${city.name} ?`,
      answer: `Oui, je réalise des rénovations complètes de salle de bain à ${city.name} : douche à l'italienne, baignoire, lavabo, robinetterie. Devis gratuit sur place.`,
    },
    {
      question: `Le devis est-il gratuit pour une intervention à ${city.name} ?`,
      answer: `Oui, le devis est toujours gratuit et sans engagement, que ce soit pour un dépannage ou un projet de rénovation à ${city.name}.`,
    },
  ];
}

export function cityMetadata(slug: string): Metadata {
  const city = getCity(slug);
  const title = `Plombier ${city.name} — Dépannage & Travaux Plomberie`;
  const description = `Plombier à ${city.place}. Dépannage rapide, recherche de fuite, débouchage, chauffe-eau et rénovation salle de bain. Devis gratuit, intervention 6j/7.`;
  return {
    title,
    description,
    alternates: { canonical: cityPath(slug) },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}${cityPath(slug)}`,
    },
  };
}
