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
    short: "Intervention rapide en cas d'urgence",
    description:
      "Fuite, panne, dégât des eaux : un artisan réactif se déplace rapidement à Cagnes-sur-Mer et dans le 06 pour diagnostiquer et réparer dans la foulée.",
    icon: Wrench,
    featured: true,
  },
  {
    slug: "recherche-de-fuite",
    title: "Recherche de fuite",
    short: "Détection précise sans casse",
    description:
      "Recherche de fuite non destructive sur canalisation, mur, sol ou réseau sanitaire.",
    icon: Search,
    featured: true,
  },
  {
    slug: "debouchage-canalisation",
    title: "Débouchage de canalisation",
    short: "Canalisations bouchées ?",
    description:
      "Débouchage d’évier, douche, baignoire, WC et évacuations avec matériel professionnel.",
    icon: Waves,
    featured: true,
  },
  {
    slug: "debouchage-wc",
    title: "WC & chasse d’eau",
    short: "Réparation et débouchage",
    description:
      "Réparation de chasse d’eau, fuite WC, mécanisme défectueux et toilettes bouchées.",
    icon: Bath,
  },
  {
    slug: "chauffe-eau",
    title: "Chauffe-eau",
    short: "Installation & dépannage",
    description:
      "Remplacement, dépannage et installation de chauffe-eau électriques et cumulus.",
    icon: Flame,
    featured: true,
  },
  {
    slug: "renovation-salle-de-bain",
    title: "Installation sanitaire",
    short: "Pose d’équipements sanitaires",
    description:
      "Installation de lavabo, évier, douche, WC, robinetterie et raccordements.",
    icon: Bath,
    featured: true,
  },
  {
    slug: "installation-sanitaire",
    title: "Installation sanitaire",
    short: "Lavabo, douche, WC posés dans les règles",
    description:
      "Pose et raccordement de lavabos, douches, baignoires et WC. Installation conforme, étanche et durable.",
    icon: ShowerHead,
  },
  {
    slug: "reseaux-sanitaires",
    title: "Installation de réseaux sanitaires",
    short: "Réseaux d'alimentation et d'évacuation",
    description:
      "Création et mise en place de réseaux sanitaires complets pour le neuf comme pour la rénovation, en respectant les normes en vigueur.",
    icon: Droplets,
  },
  {
    slug: "transformation-reseaux",
    title: "Pose & transformation de réseaux",
    short: "Modification de votre plomberie existante",
    description:
      "Déplacement, modification ou extension de vos réseaux de plomberie pour accompagner vos projets d'aménagement.",
    icon: Network,
  },
  {
    slug: "salle-de-bain-pmr",
    title: "Aménagement salle de bain PMR",
    short: "Accessibilité et sécurité",
    description:
      "Adaptation de la salle de bain pour les personnes à mobilité réduite : douche de plain-pied, barres d'appui, accessibilité optimale.",
    icon: Accessibility,
  },
];

export const featuredServices = services.filter((s) => s.featured);
