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
            Devis gratuit &amp; sans engagement
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

      {/* Section SEO */}
      <section className="bg-white py-16">
        <div className="container-x max-w-4xl">

          <div className="mb-14">
            <h2 className="font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
              Comment fonctionne notre devis gratuit ?
            </h2>
            <p className="mt-4 text-navy-700 leading-relaxed">
              Remplissez le formulaire ci-dessus en décrivant votre projet ou votre problème : type de travaux, localisation, urgence éventuelle. {siteConfig.name} vous recontacte rapidement — souvent dans la journée — pour affiner votre besoin et vous transmettre une estimation claire et détaillée. Pour les interventions urgentes (fuite active, panne de chauffe-eau), appelez-nous directement.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
              Ce que comprend votre devis
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Gratuit et sans engagement",
                  desc: "Aucune facturation pour l'établissement du devis, aucune obligation d'accepter.",
                },
                {
                  title: "Déplacement inclus",
                  desc: "La visite sur place pour évaluer les travaux est offerte dans notre zone d'intervention.",
                },
                {
                  title: "Détail poste par poste",
                  desc: "Main-d'œuvre, fournitures et délais : chaque ligne est expliquée clairement.",
                },
                {
                  title: "Conseils personnalisés",
                  desc: "On vous oriente vers la solution la plus adaptée à votre logement et votre budget.",
                },
              ].map(({ title, desc }) => (
                <li key={title} className="rounded-xl border border-navy-100 p-5">
                  <p className="font-semibold text-navy-950">{title}</p>
                  <p className="mt-1 text-sm text-navy-600">{desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-14">
            <h2 className="font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
              Nos prestations à Cagnes-sur-Mer et dans le 06
            </h2>
            <p className="mt-4 text-navy-700 leading-relaxed">
              LP Plomberie intervient pour tous vos travaux de plomberie : dépannage d&apos;urgence, recherche de fuite par méthode non destructive, débouchage de canalisation, installation et remplacement de chauffe-eau (électrique, thermodynamique, solaire)et rénovation complète de salle de bain. Nous travaillons aussi bien pour des particuliers que pour des copropriétés et des professionnels.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
              Zones d&apos;intervention
            </h2>
            <p className="mt-4 text-navy-700 leading-relaxed">
              Basés à Cagnes-sur-Mer, nous intervenons dans tout le département des Alpes-Maritimes (06) : Nice, Antibes, Juan-les-Pins, Villeneuve-Loubet, Saint-Laurent-du-Var, Vence, La Colle-sur-Loup, Biot, Sophia Antipolis, Cannes et alentours. Vous n&apos;êtes pas sûr d&apos;être dans notre zone ? Contactez-nous, nous ferons le point ensemble.
            </p>
          </div>

        </div>
      </section>

      <UrgencyCTA />
    </>
  );
}
