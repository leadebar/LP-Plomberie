"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";
import { fadeUp, stagger, revealOnScroll } from "@/lib/animations";

export default function Testimonials() {
  return (
    <section id="avis" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Avis clients"
          title="Ils ont fait confiance à LP Plomberie"
          subtitle="Réactivité, travail soigné, conseils honnêtes et finitions propres : découvrez les retours des clients."
        />

        <motion.div
          variants={stagger}
          {...revealOnScroll}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="relative flex flex-col rounded-2xl border border-navy-100 bg-cream p-6 card-hover"
            >
              <Quote className="h-7 w-7 text-navy-200" />
              <div className="mt-3 flex items-center gap-0.5 text-amber-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
                « {t.text} »
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-navy-100 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white">
                  {t.name.charAt(0)}
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-navy-900">{t.name}</p>
                  <p className="text-xs text-navy-500">
                    {t.city} · {t.service}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
