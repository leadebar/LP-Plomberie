"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { telHref } from "@/lib/site";
import { fadeUp, stagger, revealOnScroll } from "@/lib/animations";

const cities = [
  "Antibes",
  "Biot",
  "Cagnes-sur-Mer",
  "Cannes",
  "La Colle-sur-Loup",
  "Mougins",
  "Nice",
  "Opio",
  "Saint-Laurent-du-Var",
  "Vence",
  "Et alentours",
];

export default function ServiceArea() {
  return (
    <section id="zone" className="bg-cream py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Zone d'intervention"
              title="Un plombier proche de chez vous dans les Alpes-Maritimes"
              subtitle="Basé à Cagnes-sur-Mer, j'interviens rapidement dans toutes les communes du 06."
            />

            <motion.ul
              variants={stagger}
              {...revealOnScroll}
              className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3"
            >
              {cities.map((city) => (
                <motion.li
                  key={city}
                  variants={fadeUp}
                  className="flex items-center gap-2 text-sm font-medium text-navy-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                  {city}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} {...revealOnScroll} className="mt-9">
              <Button href={telHref} variant="primary" size="lg">
                <Phone className="h-5 w-5" />
                Vérifier ma zone par téléphone
              </Button>
            </motion.div>
          </div>

          {/* Carte */}
          <motion.div
            variants={fadeUp}
            {...revealOnScroll}
            className="relative overflow-hidden rounded-3xl border border-navy-100 bg-white p-2 shadow-card"
          >
            <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white shadow-soft">
              <MapPin className="h-4 w-4" />
              Cagnes-sur-Mer · 06
            </div>
            <iframe
              title="Zone d'intervention LP Plomberie - Cagnes-sur-Mer et le 06"
              src="https://www.google.com/maps?q=Cagnes-sur-Mer,France&z=11&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[1.4rem]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
