/**
 * Articles de blog SEO local (contenu rédactionnel inclus, prêt à publier).
 * Pour ajouter un article, dupliquez un objet dans le tableau `posts`.
 */

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingTime: string;
  category: string;
  cover: string;
  /** Contenu en paragraphes. Les sous-titres commencent par "## ". */
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "que-faire-en-cas-de-fuite-deau",
    title: "Que faire en cas de fuite d'eau ? Le guide à Cagnes-sur-Mer",
    description:
      "Fuite d'eau à la maison ? Les bons réflexes pour limiter les dégâts avant l'arrivée du plombier, et quand appeler un professionnel à Cagnes-sur-Mer et dans le 06.",
    date: "2026-03-12",
    readingTime: "5 min",
    category: "Conseils",
    cover:
      "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1600&q=70",
    content: [
      "Une fuite d'eau, même discrète, peut rapidement causer des dégâts importants : humidité, moisissures, gonflement du sol et facture d'eau qui s'envole. Voici les bons réflexes à adopter dès les premiers signes, et le moment où il faut appeler un plombier à Cagnes-sur-Mer.",
      "## Couper l'arrivée d'eau immédiatement",
      "Le premier geste est de fermer le robinet d'arrêt général, souvent situé près du compteur. Couper l'eau stoppe l'aggravation des dégâts et vous laisse le temps d'évaluer la situation au calme.",
      "## Identifier l'origine de la fuite",
      "Vérifiez les zones humides : sous l'évier, derrière les WC, autour du chauffe-eau ou au niveau des raccords visibles. Si l'eau apparaît dans un mur ou au plafond sans source apparente, il s'agit probablement d'une fuite encastrée qui nécessite une recherche de fuite professionnelle.",
      "## Limiter les dégâts en attendant le plombier",
      "Épongez l'eau stagnante, déplacez les objets sensibles et aérez la pièce. Prenez des photos : elles seront utiles pour votre assurance en cas de dégât des eaux.",
      "## Quand appeler un professionnel ?",
      "Dès que la fuite est encastrée, abondante, ou que vous ne parvenez pas à la localiser, contactez un plombier. Chez LP Plomberie, nous intervenons rapidement à Cagnes-sur-Mer et dans tout le 06 avec des méthodes de détection non destructives pour localiser la fuite sans tout casser. Un devis gratuit vous est remis avant toute réparation.",
    ],
  },
  {
    slug: "entretien-chauffe-eau-conseils",
    title: "Entretenir son chauffe-eau : nos conseils pour le faire durer",
    description:
      "Comment entretenir votre chauffe-eau pour prolonger sa durée de vie et éviter les pannes. Conseils d'un artisan plombier dans les Alpes-Maritimes.",
    date: "2026-02-04",
    readingTime: "4 min",
    category: "Entretien",
    cover:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1600&q=70",
    content: [
      "Un chauffe-eau bien entretenu, c'est de l'eau chaude fiable, une facture maîtrisée et un appareil qui dure plus longtemps. Voici nos recommandations d'artisan pour en prendre soin.",
      "## Vidanger et détartrer régulièrement",
      "Dans les Alpes-Maritimes, l'eau est souvent calcaire. Le tartre s'accumule au fond de la cuve et réduit le rendement de la résistance. Une vidange et un détartrage tous les deux ans environ permettent de préserver les performances de l'appareil.",
      "## Surveiller le groupe de sécurité",
      "Le groupe de sécurité doit s'écouler légèrement pendant la chauffe : c'est normal. Manœuvrez-le une fois par mois pour éviter l'entartrage. S'il coule en continu ou plus du tout, faites-le contrôler.",
      "## Régler la bonne température",
      "Une température autour de 55-60 °C limite l'entartrage tout en évitant le développement bactérien. Au-delà, vous consommez plus et accélérez l'usure.",
      "## Faire appel à un plombier",
      "Pour la vidange, le détartrage ou le remplacement d'une résistance ou d'un chauffe-eau complet, LP Plomberie intervient à Cagnes-sur-Mer et dans le 06. Nous vous conseillons aussi le modèle le plus adapté lorsqu'un remplacement s'impose.",
    ],
  },
  {
    slug: "renovation-salle-de-bain-etapes",
    title: "Rénover sa salle de bain : les étapes clés du projet",
    description:
      "Les grandes étapes d'une rénovation de salle de bain réussie, du diagnostic aux finitions. Le point de vue d'un plombier dans le 06.",
    date: "2026-01-18",
    readingTime: "6 min",
    category: "Rénovation",
    cover:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=70",
    content: [
      "Rénover une salle de bain est un projet qui valorise votre logement et améliore votre confort au quotidien. Pour qu'il se déroule sereinement, voici les étapes essentielles que nous suivons sur chaque chantier.",
      "## 1. Le diagnostic et le projet",
      "Tout commence par une visite : état des réseaux, contraintes techniques, vos envies et votre budget. Nous établissons ensuite un devis détaillé et gratuit, ainsi qu'un planning réaliste.",
      "## 2. La dépose",
      "On retire l'ancien équipement (sanitaires, faïence, sol) proprement, en protégeant le reste du logement. Cette étape révèle parfois l'état réel des réseaux à reprendre.",
      "## 3. La plomberie et les réseaux",
      "C'est le cœur du métier : alimentation, évacuations, déplacement éventuel des points d'eau. Un réseau bien pensé garantit confort et durabilité pour les années à venir.",
      "## 4. La pose et les finitions",
      "Pose des sanitaires (douche, lavabo, WC), raccordements, vérifications d'étanchéité et finitions soignées. Nous laissons le chantier propre et contrôlons l'ensemble avec vous.",
      "## Besoin d'un accompagnement ?",
      "LP Plomberie rénove des salles de bain clé en main à Cagnes-sur-Mer et dans tout le 06, y compris les aménagements PMR. Contactez-nous pour un devis gratuit et un accompagnement personnalisé.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
