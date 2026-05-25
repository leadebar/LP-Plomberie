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
    {
    slug: "prix-renovation-salle-de-bain-06",
    title: "Prix d'une rénovation salle de bain dans le 06 en 2026",
    description:
      "Combien coûte une rénovation de salle de bain dans les Alpes-Maritimes ? Budget, postes de dépense et conseils pour bien planifier votre projet.",
    date: "2026-05-20",
    readingTime: "6 min",
    category: "Rénovation",
    cover:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=70",
    content: [
      "La rénovation d'une salle de bain est l'un des projets les plus fréquents dans les logements des Alpes-Maritimes. Mais combien ça coûte vraiment ? Voici une grille de lecture honnête, basée sur notre expérience terrain à Cagnes-sur-Mer et dans tout le 06.",
      "## Les fourchettes de prix selon le type de projet",
      "Une rénovation légère (remplacement de la robinetterie, nouveau meuble vasque, peinture) se situe généralement entre 1 500 € et 3 500 €. Une rénovation complète avec dépose totale, nouvelle douche à l'italienne, sanitaires et faïence oscille entre 5 000 € et 12 000 € selon la surface et les équipements choisis.",
      "## Les postes qui font varier le budget",
      "Le poste plomberie représente en général 30 à 40 % du budget total. Les équipements sanitaires (douche, baignoire, lavabo, WC) comptent pour 20 à 30 %. Le carrelage et les finitions représentent le reste. Dans le 06, les coûts de main-d'œuvre sont légèrement supérieurs à la moyenne nationale, mais la qualité des artisans locaux est au rendez-vous.",
      "## Douche à l'italienne : un investissement rentable",
      "La douche à l'italienne est très demandée dans les Alpes-Maritimes. Son coût de pose se situe entre 800 € et 2 500 € selon la configuration. Elle valorise le bien et simplifie l'entretien au quotidien. C'est souvent le meilleur rapport qualité/valeur ajoutée d'une rénovation.",
      "## Comment obtenir un devis fiable ?",
      "Le meilleur moyen d'avoir un prix précis est de faire appel à un artisan qui visite le chantier. Chez LP Plomberie, nous réalisons des devis gratuits et détaillés à Cagnes-sur-Mer et dans tout le 06, avec un planning clair avant de démarrer les travaux.",
    ],
  },
  {
    slug: "debouchage-canalisation-conseils",
    title: "Canalisation bouchée : causes, solutions et conseils de plombier",
    description:
      "Pourquoi les canalisations se bouchent-elles et comment y remédier ? Conseils d'un plombier professionnel à Cagnes-sur-Mer.",
    date: "2026-05-10",
    readingTime: "5 min",
    category: "Conseils",
    cover:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1600&q=70",
    content: [
      "Un évier qui se vide lentement, des gargouillis dans les tuyaux, une odeur nauséabonde : autant de signes qu'une canalisation est en train de se boucher. Voici les causes les plus fréquentes et les solutions adaptées.",
      "## Les causes les plus fréquentes",
      "Dans les salles de bain, l'accumulation de cheveux, de savon et de calcaire est la principale cause de bouchon. Dans la cuisine, ce sont les graisses et les résidus alimentaires. Dans les WC, les lingettes — même celles étiquetées 'flushable' — sont responsables de la majorité des bouchons graves.",
      "## Ce que vous pouvez faire vous-même",
      "Pour un bouchon léger, un déboucheur chimique ou une ventouse peuvent suffire. Évitez cependant les produits trop agressifs qui abîment les canalisations sur le long terme. Pour les bouchons récurrents ou profonds, l'intervention d'un professionnel est nécessaire.",
      "## Les méthodes professionnelles",
      "Le furet mécanique permet de casser et d'extraire les bouchons localisés. L'hydrocureur à haute pression est utilisé pour les canalisations plus importantes ou les bouchons tenaces. Ces équipements garantissent un résultat durable sans endommager vos tuyaux.",
      "## Comment éviter les bouchons ?",
      "Posez des filtres sur vos évacuations, ne versez jamais de graisse dans l'évier, et faites appel à un plombier pour un entretien préventif tous les deux à trois ans. LP Plomberie intervient à Cagnes-sur-Mer et dans tout le 06 pour tous vos débouchages, avec devis gratuit avant intervention.",
    ],
  },
  {
    slug: "choisir-chauffe-eau-alpes-maritimes",
    title: "Quel chauffe-eau choisir dans les Alpes-Maritimes en 2026 ?",
    description:
      "Électrique, thermodynamique ou instantané : quel chauffe-eau est le plus adapté à votre logement dans le 06 ? Le guide complet d'un plombier local.",
    date: "2026-04-28",
    readingTime: "5 min",
    category: "Conseils",
    cover:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=70",
    content: [
      "Choisir un chauffe-eau n'est pas anodin : c'est un équipement que vous garderez 10 à 15 ans. Dans les Alpes-Maritimes, quelques particularités locales influencent ce choix. Voici notre guide.",
      "## Le chauffe-eau électrique classique",
      "C'est la solution la plus répandue et la moins chère à l'achat (entre 200 € et 600 €). Simple à installer, il convient bien aux petits logements et aux résidences secondaires. Son point faible : la consommation électrique, surtout dans un département où les logements sont souvent bien occupés toute l'année.",
      "## Le chauffe-eau thermodynamique : le meilleur choix en 2026",
      "Il consomme 2 à 3 fois moins d'électricité qu'un cumulus classique en captant les calories de l'air ambiant. Dans le 06, le climat doux le rend particulièrement efficace toute l'année. Son coût est plus élevé (800 € à 2 000 €) mais des aides comme MaPrimeRénov' et les CEE peuvent financer une grande partie de l'installation.",
      "## Le chauffe-eau instantané",
      "Idéal pour les petits espaces ou les usages ponctuels, il chauffe l'eau à la demande sans stocker. Pratique pour une salle de bain secondaire ou un studio, mais moins adapté à une famille.",
      "## L'impact du calcaire dans le 06",
      "L'eau des Alpes-Maritimes est moyennement à fortement calcaire selon les secteurs. Cela accélère l'entartrage des résistances et réduit la durée de vie des appareils. Un adoucisseur ou des détartrages réguliers prolongent significativement la vie de votre chauffe-eau.",
      "## Notre recommandation",
      "Pour une résidence principale dans le 06, nous recommandons le chauffe-eau thermodynamique. LP Plomberie installe et entretient tous types de chauffe-eau à Cagnes-sur-Mer et dans tout le 06. Contactez-nous pour un conseil personnalisé et un devis gratuit.",
    ],
  },
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
