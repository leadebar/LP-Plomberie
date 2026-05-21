"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";
import { fadeUp, stagger, revealOnScroll } from "@/lib/animations";

export default function Process() {
  return (
    <section className="relative bg-cream py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Comment ça se passe"
          title="Une intervention simple, claire et sans surprise"
          subtitle="Du premier appel au suivi après travaux, on vous accompagne à chaque étape."
        />

        <motion.div
          variants={stagger}
          {...revealOnScroll}
          className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* ligne de liaison desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent lg:block" />

          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="relative rounded-2xl border border-navy-100 bg-white p-6 card-hover"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-semibold text-navy-100">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600/90">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
