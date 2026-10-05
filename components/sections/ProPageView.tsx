"use client";

import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FaqAccordion from "@/components/sections/FaqAccordion";
import Process from "@/components/sections/Process";
import UrgencyCTA from "@/components/sections/UrgencyCTA";
import QuoteForm from "@/components/sections/QuoteForm";
import { services, servicePath } from "@/lib/services";
import { siteConfig, withSite } from "@/lib/site";

const audiences = [
  "Commerces et restaurants",
  "Bureaux et entreprises",
  "Syndics et gestionnaires d'immeubles",
  "Agences immobilières",
];

const benefits = [
  {
    title: "Intervention rapide",
    text: "Un arrêt d'eau ou une fuite pénalise votre activité : j'interviens au plus vite selon ma disponibilité.",
  },
  {
    title: "Devis détaillé avant intervention",
    text: "Main-d'œuvre, fournitures et délais sont détaillés poste par poste, sans mauvaise surprise.",
  },
  {
    title: "Un interlocuteur unique",
    text: "Vous parlez à la personne qui intervient, du premier appel à la fin des travaux.",
  },
  {
    title: "Rapport d'intervention",
    text: "Pour une recherche de fuite, je fournis un rapport d'intervention détaillé, utile pour votre assureur.",
  },
];

const faqs = [
  {
    question: "Intervenez-vous pour les professionnels et les copropriétés ?",
    answer:
      "Oui, j'interviens pour les particuliers comme pour les professionnels et les copropriétés {zone}. Décrivez votre besoin par téléphone ou via le formulaire de devis.",
  },
  {
    question: "Le devis est-il gratuit pour un professionnel ?",
    answer:
      "Oui, le devis est toujours gratuit et sans engagement. Il est détaillé et remis avant toute intervention.",
  },
  {
    question: "Quels types d'interventions réalisez-vous ?",
    answer:
      "Dépannage plomberie, recherche de fuite, débouchage de canalisations et d'évacuations, WC et chasse d'eau, chauffe-eau et rénovation de salle de bain.",
  },
  {
    question: "Quels sont vos horaires ?",
    answer:
      "J'interviens du lundi au samedi de 8h à 19h. Pour une urgence, appelez le {phone} ou envoyez un message WhatsApp pour vérifier ma disponibilité.",
  },
];

/** Page dédiée aux professionnels (commerces, entreprises, syndics). */
export default function ProPageView() {
  return (
    <>
      <PageHero
        icon={Building2}
        eyebrow={`Professionnels · ${siteConfig.cityZone}`}
        title="Plombier pour professionnels à"
        highlight={siteConfig.city}
        intro={withSite(
          "LP Plomberie accompagne aussi les professionnels {zone} : dépannage rapide, recherche de fuite, débouchage, chauffe-eau et sanitaires, avec un devis clair avant toute intervention."
        )}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-navy-400">
              Pour qui ?
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Une plomberie fiable pour votre activité
            </h2>
          </div>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {audiences.map((a) => (
              <li
                key={a}
                className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-cream px-5 py-4 text-sm font-semibold text-navy-900"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                {a}
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-navy-100 p-6">
                <p className="font-semibold text-navy-950">{b.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Nos interventions
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={servicePath(service.slug)}
                className="flex items-center justify-between rounded-2xl border border-navy-100 bg-white px-5 py-4 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-300 hover:bg-navy-50"
              >
                {service.title}
                <ArrowRight className="h-4 w-4 text-navy-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <FaqAccordion
        title="Plomberie pour professionnels — vos questions"
        items={faqs.map((f) => ({
          question: withSite(f.question),
          answer: withSite(f.answer),
        }))}
      />
      <UrgencyCTA />
      <QuoteForm />
    </>
  );
}
