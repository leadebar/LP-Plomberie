import type { Metadata } from "next";

// La page est un composant client : les métadonnées passent par ce layout serveur.
export const metadata: Metadata = {
  title: "Réalisations plomberie et rénovation de salle de bain",
  description:
    "Découvrez les chantiers réalisés par LP Plomberie : rénovations de salle de bain, remplacements de chauffe-eau, dépannages et installations, avec photos avant/après.",
  alternates: { canonical: "/realisation" },
};

export default function RealisationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
