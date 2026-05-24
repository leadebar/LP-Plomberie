import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  ShowerHead,
  Bath,
  Wrench,
  Search,
  Flame,
  Waves,
  Network,
  Accessibility,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const services: Service[] = [
{
    slug: "depannage-plomberie",
    title: "Dépannage plomberie",
    short: "Intervention rapide, 7j/7",
    description:
      "Fuite, casse, dégât des eaux : intervention rapide à Cagnes-sur-Mer et dans tout le 06 pour diagnostiquer et réparer en une seule venue.",
    icon: Wrench,
    featured: true,
  },
  {
    slug: "recherche-de-fuite",
    title: "Recherche de fuite",
    short: "Détection précise, sans démolition",
    description:
      "Localisation de fuites cachées sur canalisation, mur, sol ou réseau sanitaire grâce à des équipements non destructifs — sans casser inutilement.",
    icon: Search,
    featured: true,
  },
  {
    slug: "debouchage-canalisation",
    title: "Débouchage de canalisation",
    short: "Canalisations bouchées ?",
    description:
      "Débouchage d'évier, douche, baignoire, WC et évacuations avec matériel professionnel (furet, hydrocureur) pour un résultat durable.",
    icon: Waves,
    featured: true,
  },
  {
    slug: "debouchage-wc",
    title: "WC & chasse d'eau",
    short: "Réparation et débouchage",
    description:
      "Réparation de chasse d'eau, fuite au niveau du WC, mécanisme défectueux et toilettes bouchées — remis en état rapidement et proprement.",
    icon: Bath,
  },
  {
    slug: "chauffe-eau",
    title: "Chauffe-eau",
    short: "Installation & dépannage",
    description:
      "Remplacement, dépannage et installation de chauffe-eau électriques et thermodynamiques — avec des conseils sur le choix du modèle adapté à votre logement.",
    icon: Flame,
    featured: true,
  },
  {
    slug: "renovation-salle-de-bain",
    title: "Rénovation de salle de bain",
    short: "Pilotage clé en main",
    description:
      "Douche à l'italienne, baignoire, lavabo, robinetterie : plomberie et équipements pris en charge, finitions coordonnées avec des artisans partenaires sélectionnés.",
    icon: Bath,
    featured: true,
  },
  ];

export const featuredServices = services.filter((s) => s.featured);
