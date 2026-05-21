import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  ShowerHead,
  Bath,
  Wrench,
  Search,
  Flame,
  Waves,
  Toilet,
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
    short: "Détection précise, sans tout casser",
    description:
      "Localisation de fuite par méthode non destructive. On identifie l'origine exacte avant toute réparation pour limiter les dégâts et les coûts.",
    icon: Search,
    featured: true,
  },
  {
    slug: "debouchage-canalisation",
    title: "Débouchage de canalisation",
    short: "Évacuations qui coulent à nouveau",
    description:
      "Débouchage des canalisations, éviers et siphons. Matériel professionnel pour un résultat durable, sans abîmer vos installations.",
    icon: Waves,
    featured: true,
  },
  {
    slug: "debouchage-wc",
    title: "Débouchage WC",
    short: "WC bouché ? On rétablit tout vite",
    description:
      "Intervention propre et rapide pour déboucher vos toilettes, avec vérification de l'évacuation pour éviter la récidive.",
    icon: Toilet,
  },
  {
    slug: "chauffe-eau",
    title: "Installation de chauffe-eau",
    short: "Eau chaude fiable et économe",
    description:
      "Fourniture, installation et remplacement de chauffe-eau (électrique, thermodynamique). Conseil sur le modèle le plus adapté à votre foyer.",
    icon: Flame,
    featured: true,
  },
  {
    slug: "renovation-salle-de-bain",
    title: "Rénovation complète de salle de bain",
    short: "Une salle de bain neuve, clé en main",
    description:
      "De la dépose à la pose : nous repensons et rénovons votre salle de bain de A à Z, avec un travail soigné et des finitions premium.",
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
