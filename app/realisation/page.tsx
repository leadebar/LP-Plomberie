import type { Metadata } from "next";
import RealisationView from "@/components/sections/RealisationView";
import { getAvailableProjets } from "@/lib/projets.server";

const hasProjects = getAvailableProjets().length > 0;

export const metadata: Metadata = {
  title: "Réalisations plomberie et rénovation de salle de bain",
  description:
    "Découvrez les chantiers réalisés par LP Plomberie : rénovations de salle de bain, remplacements de chauffe-eau, dépannages et installations.",
  alternates: { canonical: "/realisation" },
  // Tant qu'aucune photo n'est en ligne, la page ne doit pas être indexée.
  robots: hasProjects ? undefined : { index: false, follow: true },
};

export default function RealisationPage() {
  return <RealisationView projets={getAvailableProjets()} />;
}
