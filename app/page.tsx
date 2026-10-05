import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Stats from "@/components/sections/Stats";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import ServiceArea from "@/components/sections/ServiceArea";
import FAQ from "@/components/sections/FAQ";
import QuoteForm from "@/components/sections/QuoteForm";
import UrgencyCTA from "@/components/sections/UrgencyCTA";

// Le canonical est défini ici et non dans le layout : il serait sinon hérité par toutes les pages.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Stats />
      <BeforeAfter />
      <Process />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <UrgencyCTA />
      <QuoteForm />
    </>
  );
}
