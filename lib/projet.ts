export type Projet = {
  image: string;
  ville: string;
  prestation: string;
  categorie: "Salle de bain" | "Dépannage" | "Chauffe-eau" | "Autre";
};

export const projets: Projet[] = [
  {
    image: "/projets/projet-01.jpg",
    ville: "Cagnes-sur-Mer",
    prestation: "Rénovation salle de bain",
    categorie: "Salle de bain",
  },
  {
    image: "/projets/projet-02.jpg",
    ville: "Nice",
    prestation: "Rénovation salle de bain",
    categorie: "Salle de bain",
  },
  {
    image: "/projets/projet-03.jpg",
    ville: "Mougins",
    prestation: "Rénovation salle de bain",
    categorie: "Salle de bain",
  },
  {
    image: "/projets/projet-04.jpg",
    ville: "Antibes",
    prestation: "Rénovation salle de bain",
    categorie: "Salle de bain",
  },
  {
    image: "/projets/projet-05.jpg",
    ville: "Le Cannet",
    prestation: "Rénovation salle de bain",
    categorie: "Salle de bain",
  },
  {
    image: "/projets/projet-06.jpg",
    ville: "Cagnes-sur-Mer",
    prestation: "Remplacement chauffe-eau",
    categorie: "Chauffe-eau",
  },
  {
    image: "/projets/projet-07.jpg",
    ville: "Saint-Laurent-du-Var",
    prestation: "Dépannage fuite",
    categorie: "Dépannage",
  },
  {
    image: "/projets/projet-08.jpg",
    ville: "Vence",
    prestation: "Rénovation salle de bain",
    categorie: "Salle de bain",
  },
  {
    image: "/projets/projet-09.jpg",
    ville: "Cannes",
    prestation: "Remplacement chauffe-eau",
    categorie: "Chauffe-eau",
  },
];
