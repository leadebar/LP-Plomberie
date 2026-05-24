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
      "Diagnostic précis sur place et devis gratuit, clair et détaillé avant toute intervention.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Intervention soignée",
    description:
      "On réalise les travaux proprement, avec du matériel de qualité et le souci des finitions.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Vérification & suivi",
    description:
      "On contrôle l'installation avec vous et on reste disponible si besoin. Votre satisfaction d'abord.",
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
    name: "Sophie M.",
    city: "Cagnes-sur-Mer",
    rating: 5,
    service: "Recherche de fuite",
    text: "Fuite localisée en une demi-heure sans rien casser. Très professionnel, ponctuel et de bon conseil. Je recommande à 100 %.",
  },
  {
    name: "Karim B.",
    city: "Nice",
    rating: 5,
    service: "Dépannage urgent",
    text: "Intervention le jour même pour une fuite sous l'évier. Travail propre, prix honnête et explications claires. Parfait.",
  },
  {
    name: "Christine D.",
    city: "Saint-Laurent-du-Var",
    rating: 5,
    service: "Rénovation salle de bain",
    text: "Rénovation complète de notre salle de bain. Le rendu est superbe, les délais respectés et le chantier laissé impeccable.",
  },
  {
    name: "Julien R.",
    city: "Villeneuve-Loubet",
    rating: 5,
    service: "Chauffe-eau",
    text: "Remplacement de notre chauffe-eau rapidement après une panne. Conseils utiles sur le modèle, installation nickel.",
  },
  {
    name: "Nadia L.",
    city: "Antibes",
    rating: 5,
    service: "Débouchage",
    text: "Canalisation débouchée efficacement. Réactif, sympathique et soigneux. Ça fait du bien d'avoir enfin un plombier de confiance.",
  },
  {
    name: "Pascal G.",
    city: "Cagnes-sur-Mer",
    rating: 5,
    service: "Installation sanitaire",
    text: "Pose d'un nouveau lavabo et d'un WC suspendu. Travail méticuleux, finitions au top. Rien à redire.",
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
    caption: "Cagnes-sur-Mer — rénovation complète",
    before:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=70",
    after:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Remplacement chauffe-eau",
    caption: "Nice — installation neuve",
    before:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=70",
    after:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Douche à l'italienne",
    caption: "Villeneuve-Loubet — aménagement",
    before:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=70",
    after:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=70",
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQ (optimisée SEO local)                                                 */
/* -------------------------------------------------------------------------- */

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "Intervenez-vous en urgence à Cagnes-sur-Mer ?",
    answer:
      "Oui. LP Plomberie se déplace rapidement à Cagnes-sur-Mer et dans tout le 06 pour les dépannages urgents : fuite, dégât des eaux, WC bouché ou panne de chauffe-eau. Appelez le 07 69 05 08 32 pour une intervention au plus vite.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui, tous nos devis sont gratuits et sans engagement. Vous recevez un détail clair des prestations et des tarifs avant toute intervention, sans mauvaise surprise.",
  },
  {
    question: "Quelles sont vos zones d'intervention dans le 06 ?",
    answer:
      "Basés à Cagnes-sur-Mer, nous intervenons dans l'ensemble des Alpes-Maritimes : Nice, Antibes, Saint-Laurent-du-Var, Villeneuve-Loubet, Vence, La Gaude, le Cros-de-Cagnes et les communes voisines.",
  },
  {
    question: "Comment se déroule une recherche de fuite ?",
    answer:
      "Nous utilisons des méthodes de détection non destructives pour localiser précisément l'origine de la fuite avant toute réparation. Cela évite de casser inutilement et limite le coût des travaux.",
  },
  {
    question: "Pouvez-vous installer ou remplacer un chauffe-eau ?",
    answer:
      "Oui, nous fournissons, installons et remplaçons tous types de chauffe-eau (électrique, thermodynamique). Nous vous conseillons le modèle le plus adapté à votre logement et à votre consommation.",
  },
  {
    question: "Réalisez-vous des rénovations complètes de salle de bain ?",
    answer:
      "Absolument. Nous prenons en charge la rénovation de salle de bain de A à Z : dépose, plomberie, pose des sanitaires et finitions, y compris les aménagements PMR pour les personnes à mobilité réduite.",
  },
  {
    question: "Quels sont vos horaires ?",
    answer:
      "Nous sommes disponibles du lundi au samedi, de 8h à 19h. Pour toute demande, contactez-nous par téléphone, WhatsApp ou via le formulaire de devis en ligne.",
  },
];
