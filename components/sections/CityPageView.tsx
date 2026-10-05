"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FaqAccordion from "@/components/sections/FaqAccordion";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import UrgencyCTA from "@/components/sections/UrgencyCTA";
import QuoteForm from "@/components/sections/QuoteForm";
import { cityFaqs, getCity } from "@/lib/cities";
import { services, servicePath } from "@/lib/services";

/** Page « Plombier à {ville} », générée à partir de lib/cities.ts. */
export default function CityPageView({ slug }: { slug: string }) {
  const city = getCity(slug);

  return (
    <>
      <PageHero
        icon={MapPin}
        eyebrow={`Plombier · ${city.eyebrow}`}
        title="Plombier à"
        highlight={city.name}
        intro={`LP Plomberie intervient à ${city.place} pour tous vos travaux de plomberie : dépannage rapide, recherche de fuite, débouchage, chauffe-eau et rénovation de salle de bain. Devis gratuit, travail soigné.`}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-navy-400">
              Services
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Tous vos besoins plomberie à {city.name}
            </h2>
            <p className="mt-4 text-navy-600">
              LP Plomberie prend en charge l&apos;ensemble de vos travaux de
              plomberie {city.servicesSub}.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={servicePath(service.slug)}
                className="flex items-center justify-between rounded-2xl border border-navy-100 bg-cream px-5 py-4 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-300 hover:bg-navy-50"
              >
                {service.title}
                <ArrowRight className="h-4 w-4 text-navy-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <FaqAccordion
        title={`Plombier à ${city.name} — vos questions`}
        items={cityFaqs(city)}
      />
      <UrgencyCTA />
      <QuoteForm />
    </>
  );
}
