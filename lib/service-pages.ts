import type { LucideIcon } from "lucide-react";
import { Bath, Droplets, Flame, Search, Wrench } from "lucide-react";

/**
 * Contenu des pages de services (/depannage-plomberie, /chauffe-eau, ...).
 * Les textes utilisent des jetons ({city}, {zone}, {communes}, {phone}) remplacés
 * par withSite() : aucune ville en dur, tout vient de lib/site.ts.
 */

export type ServicePage = {
  slug: string;
  icon: LucideIcon;
  /** Nom court du service, utilisé dans le H1 et les listes */
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  faqs: { question: string; answer: string }[];
  /** Affiche la galerie avant/après (rénovation) */
  beforeAfter?: boolean;
};

export const servicePages: ServicePage[] = [
  {
    slug: "depannage-plomberie",
    icon: Wrench,
    title: "Dépannage plomberie",
    metaTitle: "Dépannage Plomberie {city} — Intervention Rapide",
    metaDescription: "Plombier dépannage à {city}. Fuite d'eau, casse, dégât des eaux : intervention rapide 6j/7 {zone}. Devis gratuit, tarif transparent. Appelez le {phone}.",
    intro: "Fuite d'eau, canalisation cassée, dégât des eaux : LP Plomberie intervient rapidement à {city} et {zone}. Diagnostic précis, réparation durable, devis gratuit.",
    faqs: [
      {
        "question": "Dans quel délai intervenez-vous pour un dépannage plomberie à {city} ?",
        "answer": "J'interviens le plus rapidement possible selon ma disponibilité et votre localisation. Pour les urgences à {city} et dans les communes proches, j'essaie de me déplacer dans la journée. Appelez le {phone} pour évaluer ensemble l'urgence."
      },
      {
        "question": "Le devis de dépannage est-il gratuit ?",
        "answer": "Oui, le devis est toujours gratuit et sans engagement. Avant toute intervention, je vous remets un devis clair et détaillé pour que vous sachiez exactement ce que vous payez."
      },
      {
        "question": "Quels types de dépannages plomberie prenez-vous en charge ?",
        "answer": "Je prends en charge tous les dépannages courants : fuites d'eau, canalisations cassées, robinets défectueux, dégâts des eaux, problèmes de pression, fuites sous évier, et bien plus."
      },
      {
        "question": "Intervenez-vous le week-end pour un dépannage ?",
        "answer": "J'interviens du lundi au samedi de 8h à 19h. Pour toute urgence, n'hésitez pas à m'appeler ou m'envoyer un message WhatsApp pour vérifier ma disponibilité."
      },
      {
        "question": "Quelles communes couvrez-vous pour le dépannage plomberie ?",
        "answer": "J'interviens à {city} et {zone} : {communes}."
      }
    ],
  },
  {
    slug: "recherche-de-fuite",
    icon: Search,
    title: "Recherche de fuite",
    metaTitle: "Recherche de Fuite {city} — Détection Sans Démolition",
    metaDescription: "Détection et localisation de fuites cachées à {city}. Équipements non destructifs, rapport pour assurance. Intervention {zone}. Devis gratuit.",
    intro: "Détection précise de fuites cachées sur canalisation, mur, sol ou réseau sanitaire. LP Plomberie utilise des équipements non destructifs pour localiser sans casser inutilement — à {city} et {zone}.",
    faqs: [
      {
        "question": "Comment détectez-vous une fuite sans casser les murs ?",
        "answer": "J'utilise des équipements de détection non destructifs : caméra thermique, corrélateur acoustique et gaz traceur selon la configuration. Ces outils permettent de localiser précisément la fuite sans démolition inutile."
      },
      {
        "question": "Quels signes indiquent une fuite cachée chez moi ?",
        "answer": "Les signes les plus courants sont : une facture d'eau anormalement élevée, une humidité persistante sur un mur ou un plafond, des taches de moisissures sans raison apparente, ou un compteur d'eau qui tourne même lorsque tout est fermé."
      },
      {
        "question": "La recherche de fuite est-elle prise en charge par mon assurance ?",
        "answer": "Dans la plupart des cas, oui. Les recherches de fuite sont souvent couvertes dans les contrats multirisques habitation sous la garantie dégât des eaux. Je vous fournis un rapport d'intervention détaillé pour votre assureur."
      },
      {
        "question": "Combien de temps prend une recherche de fuite ?",
        "answer": "En général, une intervention dure entre 1h et 3h selon la complexité. Je vous donne une estimation précise au moment du diagnostic."
      },
      {
        "question": "Intervenez-vous pour les fuites sur les réseaux enterrés ?",
        "answer": "Oui, j'interviens également pour les fuites sur réseaux enterrés. La détection acoustique permet de localiser précisément sans avoir à excaver toute la canalisation."
      }
    ],
  },
  {
    slug: "debouchage-canalisation",
    icon: Droplets,
    title: "Débouchage canalisation",
    metaTitle: "Débouchage Canalisation {city} — Plombier Pro",
    metaDescription: "Débouchage évier, douche, WC et canalisations à {city}. Intervention rapide avec furet et hydrocureur professionnel {zone}. Devis gratuit.",
    intro: "Évier, douche, baignoire, WC ou évacuation bouchée : LP Plomberie intervient avec du matériel professionnel (furet, hydrocureur) pour un débouchage rapide et durable à {city} et {zone}.",
    faqs: [
      {
        "question": "Comment savoir si ma canalisation est bouchée ?",
        "answer": "Les signes les plus courants sont : eau qui s'écoule lentement dans l'évier, la douche ou la baignoire, remontées d'odeurs nauséabondes, gargouillis dans les tuyaux, ou encore refoulement dans les WC. Si vous observez un de ces symptômes, appelez-moi pour un diagnostic rapide."
      },
      {
        "question": "Quelle méthode utilisez-vous pour déboucher les canalisations ?",
        "answer": "J'utilise du matériel professionnel adapté à chaque situation : furet mécanique pour les bouchons localisés, hydrocureur à haute pression pour les canalisations plus importantes. La méthode est choisie après diagnostic pour garantir un résultat durable."
      },
      {
        "question": "Le débouchage est-il garanti dans la durée ?",
        "answer": "Oui, chaque intervention est réalisée avec du matériel professionnel pour un résultat durable. Je peux aussi vous conseiller sur les bonnes pratiques pour éviter que le bouchon ne revienne."
      },
      {
        "question": "Intervenez-vous pour les canalisations extérieures et les évacuations collectives ?",
        "answer": "Oui, j'interviens sur tout type de canalisation : évier, douche, baignoire, WC, mais aussi les évacuations extérieures et les colonnes collectives. Décrivez-moi votre problème par téléphone et j'évaluerai la meilleure approche."
      },
      {
        "question": "Combien coûte un débouchage de canalisation à {city} ?",
        "answer": "Le tarif dépend du type de bouchon et de la méthode nécessaire. Le devis est toujours gratuit et établi avant toute intervention. Appelez le {phone} pour une estimation rapide."
      }
    ],
  },
  {
    slug: "wc-chasse-deau",
    icon: Bath,
    title: "WC & chasse d'eau",
    metaTitle: "WC & Chasse d'eau {city} — Réparation Rapide",
    metaDescription: "Réparation chasse d'eau, WC bouché, mécanisme défectueux à {city}. Intervention rapide {zone}. Devis gratuit.",
    intro: "Réparation de chasse d'eau, fuite au niveau du WC, mécanisme défectueux et toilettes bouchées : LP Plomberie intervient rapidement à {city} et {zone} pour remettre vos WC en état.",
    faqs: [
      {
        "question": "Ma chasse d'eau fuit en permanence, que faire ?",
        "answer": "Une chasse d'eau qui coule en permanence est souvent due à un flotteur usé, un joint de clapet défaillant ou un mécanisme de chasse défectueux. J'interviens rapidement pour diagnostiquer et remplacer la pièce défaillante."
      },
      {
        "question": "Mes WC sont bouchés, pouvez-vous intervenir rapidement ?",
        "answer": "Oui, j'interviens rapidement pour les WC bouchés à {city} et {zone}. J'utilise un furet professionnel pour déboucher efficacement sans endommager votre installation."
      },
      {
        "question": "Combien coûte la réparation d'une chasse d'eau ?",
        "answer": "Le tarif dépend de la pièce à remplacer et du mécanisme. Le devis est toujours gratuit avant intervention. Dans la plupart des cas, la réparation est rapide et économique."
      },
      {
        "question": "Pouvez-vous remplacer un WC complet ?",
        "answer": "Oui, je réalise le remplacement complet de WC : dépose de l'ancien, pose du nouveau, raccordements et vérification de l'étanchéité. Je peux vous conseiller sur le modèle adapté à votre installation."
      },
      {
        "question": "La fuite au pied du WC est-elle grave ?",
        "answer": "Une fuite au pied du WC peut indiquer un joint de cuvette défaillant ou un problème d'étanchéité. Il faut intervenir rapidement pour éviter des dégâts des eaux. Appelez le {phone} pour une intervention rapide."
      }
    ],
  },
  {
    slug: "chauffe-eau",
    icon: Flame,
    title: "Chauffe-eau",
    metaTitle: "Chauffe-eau {city} — Installation & Dépannage",
    metaDescription: "Installation, remplacement et dépannage de chauffe-eau à {city}. Électrique, thermodynamique. Intervention rapide {zone}. Devis gratuit.",
    intro: "Installation, remplacement et dépannage de chauffe-eau électriques et thermodynamiques à {city}. LP Plomberie vous conseille sur le choix du modèle adapté et intervient rapidement {zone}.",
    faqs: [
      {
        "question": "Mon chauffe-eau ne chauffe plus, que faire ?",
        "answer": "Plusieurs causes sont possibles : résistance grillée, thermostat défaillant, groupe de sécurité encrassé ou fuite interne. Appelez-moi pour décrire les symptômes et j'évaluerai s'il faut réparer ou remplacer l'appareil."
      },
      {
        "question": "Vaut-il mieux réparer ou remplacer un chauffe-eau ?",
        "answer": "Si votre chauffe-eau a plus de 10 ans ou si la panne est majeure, le remplacement est souvent plus économique. Je vous conseille honnêtement selon l'état de votre appareil et votre budget."
      },
      {
        "question": "Quels types de chauffe-eau installez-vous ?",
        "answer": "J'installe tous les types de chauffe-eau électriques : cumulus classiques, chauffe-eau thermodynamiques et chauffe-eau instantanés. Je vous conseille le modèle le plus adapté à votre logement."
      },
      {
        "question": "Le chauffe-eau thermodynamique est-il vraiment économique ?",
        "answer": "Oui, il consomme 2 à 3 fois moins d'électricité qu'un cumulus classique. Des aides (MaPrimeRénov', CEE) peuvent financer une partie de l'installation."
      },
      {
        "question": "Combien de temps dure l'installation d'un nouveau chauffe-eau ?",
        "answer": "Le remplacement prend généralement entre 2h et 4h. L'installation d'un thermodynamique peut prendre une demi-journée. Je récupère et évacue l'ancien appareil."
      }
    ],
  },
  {
    slug: "renovation-salle-de-bain",
    icon: Bath,
    title: "Rénovation salle de bain",
    metaTitle: "Rénovation Salle de Bain {city} — Clé en Main",
    metaDescription: "Rénovation complète de salle de bain à {city}. Douche à l'italienne, baignoire, lavabo, robinetterie. Chantier clé en main, devis gratuit, délais respectés.",
    intro: "Douche à l'italienne, baignoire, lavabo, robinetterie : LP Plomberie pilote votre rénovation clé en main à {city}. Plomberie et équipements pris en charge, finitions coordonnées avec des artisans partenaires sélectionnés.",
    beforeAfter: true,
    faqs: [
      {
        "question": "Que comprend une rénovation complète de salle de bain avec LP Plomberie ?",
        "answer": "Je prends en charge toute la partie plomberie et équipements sanitaires : dépose de l'existant, nouvelles alimentations et évacuations, pose de la douche à l'italienne ou baignoire, lavabo, robinetterie et WC. Pour les finitions, je coordonne des artisans partenaires sélectionnés."
      },
      {
        "question": "Combien coûte une rénovation de salle de bain à {city} ?",
        "answer": "Le budget dépend de la surface, des équipements choisis et de l'état de l'existant. Je vous remets un devis détaillé après une visite sur place. Comptez en général entre 3 000 € et 12 000 € pour une rénovation complète."
      },
      {
        "question": "Combien de temps dure une rénovation de salle de bain ?",
        "answer": "Une rénovation complète prend généralement entre 5 et 10 jours ouvrés selon la complexité. Je vous communique un planning précis avant le démarrage et m'engage à respecter les délais."
      },
      {
        "question": "Puis-je choisir mes équipements moi-même ?",
        "answer": "Absolument. Vous pouvez fournir vos propres équipements ou me laisser les sélectionner. Dans les deux cas, je vous conseille sur la compatibilité et la qualité des matériaux."
      },
      {
        "question": "Réalisez-vous des douches à l'italienne ?",
        "answer": "Oui, c'est l'une de nos spécialités. J'assure la création du receveur, la pose du système d'évacuation, l'étanchéité et la robinetterie. Un rendu moderne, élégant et parfaitement étanche."
      }
    ],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((p) => p.slug === slug);
}
