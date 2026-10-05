import type { Metadata } from "next";
import ProPageView from "@/components/sections/ProPageView";
import { siteConfig, withSite } from "@/lib/site";

const title = withSite("Plombier professionnel à {city} : commerces, syndics, entreprises");
const description = withSite(
  "LP Plomberie intervient pour les professionnels {zone} : commerces, bureaux, restaurants, syndics et gestionnaires. Dépannage rapide, recherche de fuite, débouchage, chauffe-eau. Devis gratuit."
);

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/professionnels" },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/professionnels`,
  },
};

export default function ProfessionnelsPage() {
  return <ProPageView />;
}
