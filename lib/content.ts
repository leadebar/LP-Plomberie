import type { LucideIcon } from "lucide-react";
import {
  Clock,
  ShieldCheck,
  BadgeEuro,
  MapPin,
  Sparkles,
  HeartHandshake,
  PhoneCall,
  ClipboardCheck,
  Hammer,
  ThumbsUp,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Éléments de confiance (badges + stats)                                    */
/* -------------------------------------------------------------------------- */

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "+500", label: "interventions réalisées" },
  { value: "6j/7", label: "de disponibilité" },
  { value: "100%", label: "devis gratuits" },
  { value: "06", label: "tout le département couvert" },
];

export type Reason = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const reasons: Reason[] = [
  {
    title: "Intervention rapide",
    description:
      "J’interviens rapidement pour vos urgences plomberie dans les Alpes-Maritimes.",
    icon: Clock,
  },
  {
    title: "Devis gratuit & transparent",
    description:
      "Un devis clair et détaillé avant toute intervention. Pas de mauvaise surprise : vous savez exactement ce que vous payez.",
    icon: BadgeEuro,
  },
  {
    title: "Travail soigné",
    description:
      "Des réparations et installations réalisées avec sérieux et des matériaux de qualité.",
    icon: Sparkles,
  },
  {
    title: "Un interlocuteur unique",
    description:
      "Un accompagnement simple et personnalisé du premier contact jusqu’à la fin des travaux.",
    icon: HeartHandshake,
  },
];

/* -------------------------------------------------------------------------- */
/*  Process d'intervention                                                    */
/* -------------------------------------------------------------------------- */

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: Step[] = [
  {
    number: "01",
    title: "Vous appelez",
    description:
      "Décrivez votre problème par téléphone ou WhatsApp. On évalue ensemble l'urgence et la meilleure approche.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Diagnostic & devis",
    description:
      "Un diagnostic précis est réalisé sur place afin de vous remettre un devis clair, détaillé et transparent avant toute intervention.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Intervention soignée",
    description:
      "Les travaux sont réalisés avec soin, dans le respect des délais, avec des matériaux de qualité et des finitions propres et durables.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Vérification & suivi",
    description:
      "Chaque installation est vérifiée avec vous après l’intervention afin de garantir un résultat fiable et votre entière satisfaction.",
    icon: ThumbsUp,
  },
];

/* -------------------------------------------------------------------------- */
/*  Témoignages (PLACEHOLDERS — à remplacer par vos vrais avis clients)       */
/* -------------------------------------------------------------------------- */

export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  text: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Léah B.",
    city: "Le Cannet",
    rating: 5,
    service: "Rénovation salle de bain",
    text: "Salle de bain entièrement rénovée avec beaucoup de soin. Le résultat est moderne, propre et parfaitement réalisé. Délais respectés et chantier impeccable du début à la fin.",
  },
  {
    name: "Léa D.",
    city: "Antibes",
    rating: 5,
    service: "Dépannage urgent",
    text: "Intervention le jour même pour une fuite sous l'évier. Travail propre, prix honnête et explications claires. Parfait.",
  },
  {
    name: "Christel B.",
    city: "Mougins",
    rating: 5,
    service: "Rénovation salle de bain & mezzanine",
    text: "Rénovation complète de ma salle de bain et mezzanine. Le rendu est superbe, les délais respectés et le chantier laissé impeccable.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Galerie avant / après (PLACEHOLDERS — remplacez par vos vraies photos)    */
/* -------------------------------------------------------------------------- */

export type BeforeAfterItem = {
  title: string;
  caption: string;
  before: string;
  after: string;
};

export const beforeAfter: BeforeAfterItem[] = [
  {
    title: "Rénovation salle de bain",
    caption: "Mougins — rénovation complète",
    before: "/avant1.JPG",
    after: "/apres1.jpg",
  },
  {
    title: "Rénovation salle de bain",
    caption: "Le Cannet — rénovation complète",
    before: "/avant2.jpg",
    after: "/apres2.jpg",
  },
  {
    title: "Rénovation salle de bain",
    caption: "Nice — rénovation complète",
    before: "/avant3.PNG",
    after: "/apres3.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQ (optimisée SEO local)                                                 */
/* -------------------------------------------------------------------------- */

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "Intervenez-vous rapidement en cas d’urgence ?",
    answer:
      "Oui, selon votre localisation et la disponibilité du moment, une intervention rapide peut être proposée à Cagnes-sur-Mer et dans les environs. Appelez le 07 69 05 08 32 pour une intervention au plus vite.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui, tous nos devis sont gratuits et sans engagement. Vous recevez un détail clair des prestations et des tarifs avant toute intervention, sans mauvaise surprise.",
  },
  {
    question: "Réalisez-vous les dépannages plomberie ?",
    answer:
      "Oui, dépannage de fuite d’eau, remplacement de robinetterie, débouchage, chauffe-eau, WC, évacuations et petits travaux de plomberie.",
  },
  {
    question: "Intervenez-vous pour les canalisations bouchées ?",
    answer:
      "Oui, débouchage d’évier, douche, baignoire, WC et canalisations.",
  },
  {
    question: "Pouvez-vous installer ou remplacer un chauffe-eau ?",
    answer:
      "Oui, nous fournissons, installons et remplaçons tous types de chauffe-eau (électrique, thermodynamique). Nous vous conseillons le modèle le plus adapté à votre logement et à votre consommation.",
  },
  {
    question: "Réalisez-vous des rénovations complètes de salle de bain ?",
    answer:
      "Absolument. Nous prenons en charge la rénovation de salle de bain de A à Z : dépose, plomberie, pose des sanitaires et finitions.",
  },
  {
    question: "Quels sont vos horaires ?",
    answer:
      "Nous sommes disponibles du lundi au samedi, de 8h à 19h. Pour toute demande, contactez-nous par téléphone, WhatsApp ou via le formulaire de devis en ligne.",
  },
];
