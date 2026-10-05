"use client";

import PageHero from "@/components/sections/PageHero";
import FaqAccordion from "@/components/sections/FaqAccordion";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Process from "@/components/sections/Process";
import UrgencyCTA from "@/components/sections/UrgencyCTA";
import QuoteForm from "@/components/sections/QuoteForm";
import { getServicePage } from "@/lib/service-pages";
import { siteConfig, withSite } from "@/lib/site";

/**
 * Page de service générique : tout le contenu vient de lib/service-pages.ts
 * et la ville de lib/site.ts.
 */
export default function ServicePageView({ slug }: { slug: string }) {
  const page = getServicePage(slug);
  if (!page) return null;

  return (
    <>
      <PageHero
        icon={page.icon}
        eyebrow={`${page.title} · ${siteConfig.cityZone}`}
        title={`${page.title} à`}
        highlight={siteConfig.city}
        intro={withSite(page.intro)}
      />
      <WhyChooseUs />
      {page.beforeAfter && <BeforeAfter />}
      <Process />
      <FaqAccordion
        title={`${page.title} — vos questions`}
        items={page.faqs.map((f) => ({
          question: withSite(f.question),
          answer: withSite(f.answer),
        }))}
      />
      <UrgencyCTA />
      <QuoteForm />
    </>
  );
}
