"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/services";
import { fadeUp, stagger, revealOnScroll } from "@/lib/animations";

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Services de plomberie"
          title="Des interventions rapides et efficaces pour tous vos besoins en plomberie, dépannage et rénovation."
          subtitle="Que ce soit pour une urgence ou un projet, LP Plomberie prend en charge l'ensemble de vos besoins à Cagnes-sur-Mer et dans tout le 06."
        />

        <motion.div
          variants={stagger}
          {...revealOnScroll}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.slug}
                variants={fadeUp}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 card-hover"
              >
                {/* halo au survol */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-navy-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="relative mt-5 font-display text-xl font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm font-medium text-navy-500">
                  {service.short}
                </p>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-navy-600/90">
                  {service.description}
                </p>

                <Link
                  href="/devis"
                  className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors group-hover:text-navy-600"
                >
                  Demander un devis
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
