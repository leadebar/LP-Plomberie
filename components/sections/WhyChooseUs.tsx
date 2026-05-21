"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { reasons } from "@/lib/content";
import { telHref } from "@/lib/site";
import { fadeUp, stagger, revealOnScroll } from "@/lib/animations";

export default function WhyChooseUs() {
  return (
    <section id="pourquoi" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Colonne intro + CTA */}
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Pourquoi LP Plomberie"
              title="Un artisan local sur qui vous pouvez vraiment compter"
              subtitle="La fiabilité d'un professionnel sérieux, la proximité d'un artisan indépendant. Voici ce qui fait la différence."
            />
            <motion.div variants={fadeUp} {...revealOnScroll} className="mt-8">
              <Button href={telHref} variant="primary" size="lg">
                <Phone className="h-5 w-5" />
                Parler à un plombier
              </Button>
            </motion.div>
          </div>

          {/* Grille des raisons */}
          <motion.div
            variants={stagger}
            {...revealOnScroll}
            className="grid gap-4 sm:grid-cols-2"
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-navy-100 bg-white p-6 card-hover"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-navy-900">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600/90">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
