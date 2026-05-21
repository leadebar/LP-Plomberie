import type { Metadata } from "next";
import QuoteForm from "@/components/sections/QuoteForm";
import UrgencyCTA from "@/components/sections/UrgencyCTA";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Devis gratuit plombier à Cagnes-sur-Mer & 06",
  description:
    "Demandez votre devis gratuit à LP Plomberie : dépannage, recherche de fuite, débouchage, chauffe-eau, rénovation de salle de bain à Cagnes-sur-Mer et dans tout le 06.",
  alternates: { canonical: "/devis" },
};

export default function DevisPage() {
  return (
    <>
      {/* Bandeau d'en-tête */}
      <section className="bg-navy-950 pb-6 pt-32 text-white lg:pt-40">
        <div className="container-x">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-300">
            Devis gratuit & sans engagement
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Obtenez votre devis plomberie en quelques minutes
          </h1>
          <p className="mt-4 max-w-2xl text-navy-100/85">
            Décrivez votre besoin à {siteConfig.name}, artisan plombier à
            Cagnes-sur-Mer. On vous répond rapidement avec une estimation claire,
            partout dans le 06.
          </p>
        </div>
      </section>

      <QuoteForm />
      <UrgencyCTA />
    </>
  );
}
