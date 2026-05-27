"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, MapPin, ArrowRight, Phone } from "lucide-react";
import { projets } from "@/lib/projets";
import type { Projet } from "@/lib/projets";
import Button from "@/components/ui/Button";
import UrgencyCTA from "@/components/sections/UrgencyCTA";
import QuoteForm from "@/components/sections/QuoteForm";
import { siteConfig, telHref } from "@/lib/site";
import { fadeUp, stagger } from "@/lib/animations";

const categories = ["Tous", "Salle de bain", "Chauffe-eau", "Dépannage", "Autre"] as const;

export default function RealisationsPage() {
  const [filtre, setFiltre] = useState<string>("Tous");
  const [selected, setSelected] = useState<Projet | null>(null);

  const filtered =
    filtre === "Tous" ? projets : projets.filter((p) => p.categorie === filtre);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 pt-28 pb-20 text-white sm:pt-32 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-grid-navy [background-size:32px_32px] opacity-[0.4]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-navy-500/30 blur-[120px]" />

        <div className="container-x relative">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-100 backdrop-blur">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                Réalisations · Cagnes-sur-Mer & 06
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Nos{" "}
              <span className="bg-gradient-to-r from-navy-100 to-white bg-clip-text text-transparent">
                réalisations
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/85 sm:text-lg"
            >
              Rénovations de salle de bain, remplacements de chauffe-eau, dépannages et installations : découvrez les chantiers réalisés par LP Plomberie dans les Alpes-Maritimes.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href={telHref} variant="white" size="lg" className="group">
                <Phone className="h-5 w-5" />
                Appeler maintenant
                <span className="font-bold">{siteConfig.phone.display}</span>
              </Button>
              <Button
                href="/devis"
                variant="ghost"
                size="lg"
                className="border border-white/20 text-white hover:bg-white/10"
              >
                Devis gratuit
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>

      {/* Galerie */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">

          {/* Filtres */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltre(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  filtre === cat
                    ? "bg-navy-900 text-white shadow-md"
                    : "bg-cream text-navy-700 hover:bg-navy-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grille */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filtered.map((projet, i) => (
                <motion.div
                  key={projet.image}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-navy-50"
                  onClick={() => setSelected(projet)}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={projet.image}
                      alt={`${projet.prestation} à ${projet.ville} — LP Plomberie`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-semibold text-white">{projet.prestation}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-navy-200">
                      <MapPin className="h-3 w-3" />
                      {projet.ville}
                    </p>
                  </div>
                  {/* Badge ville toujours visible */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900 shadow backdrop-blur group-hover:opacity-0 transition-opacity duration-300">
                    <MapPin className="h-3 w-3 text-emerald-500" />
                    {projet.ville}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-navy-400">Aucun projet dans cette catégorie pour l'instant.</p>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow backdrop-blur transition hover:bg-white"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selected.image}
                  alt={`${selected.prestation} à ${selected.ville} — LP Plomberie`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="font-semibold text-navy-900">{selected.prestation}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-sm text-navy-500">
                    <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                    {selected.ville}
                  </p>
                </div>
                <Button href="/devis" variant="primary" size="sm">
                  Devis gratuit
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <UrgencyCTA />
      <QuoteForm />
    </>
  );
}
