"use client";

import { motion } from "framer-motion";
import { Phone, Star, ShieldCheck, Clock, ArrowRight, Bath, Plus } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { siteConfig, telHref } from "@/lib/site";
import { fadeUp, stagger } from "@/lib/animations";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import UrgencyCTA from "@/components/sections/UrgencyCTA";
import QuoteForm from "@/components/sections/QuoteForm";
import BeforeAfter from "@/components/sections/BeforeAfter";

const trustItems = [
  { icon: Star, label: "+500 interventions" },
  { icon: Clock, label: "Disponible 6j/7" },
  { icon: ShieldCheck, label: "Devis gratuit" },
];

const faqs = [
  {
    question: "Que comprend une rénovation complète de salle de bain avec LP Plomberie ?",
    answer: "Je prends en charge toute la partie plomberie et équipements sanitaires : dépose de l'existant, nouvelles alimentations et évacuations, pose de la douche à l'italienne ou baignoire, lavabo, robinetterie et WC. Pour les finitions, je coordonne des artisans partenaires sélectionnés.",
  },
  {
    question: "Combien coûte une rénovation de salle de bain à Cagnes-sur-Mer ?",
    answer: "Le budget dépend de la surface, des équipements choisis et de l'état de l'existant. Je vous remets un devis détaillé après une visite sur place. Comptez en général entre 3 000 € et 12 000 € pour une rénovation complète.",
  },
  {
    question: "Combien de temps dure une rénovation de salle de bain ?",
    answer: "Une rénovation complète prend généralement entre 5 et 10 jours ouvrés selon la complexité. Je vous communique un planning précis avant le démarrage et m'engage à respecter les délais.",
  },
  {
    question: "Puis-je choisir mes équipements moi-même ?",
    answer: "Absolument. Vous pouvez fournir vos propres équipements ou me laisser les sélectionner. Dans les deux cas, je vous conseille sur la compatibilité et la qualité des matériaux.",
  },
  {
    question: "Réalisez-vous des douches à l'italienne ?",
    answer: "Oui, c'est l'une de nos spécialités. J'assure la création du receveur, la pose du système d'évacuation, l'étanchéité et la robinetterie. Un rendu moderne, élégant et parfaitement étanche.",
  },
];

export default function RenovationSalleDeBainPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pt-28 pb-20 text-white sm:pt-32 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-grid-navy [background-size:32px_32px] opacity-[0.4]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-navy-500/30 blur-[120px]" />
        <div className="container-x relative">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-100 backdrop-blur">
                <Bath className="h-3.5 w-3.5 text-emerald-400" />
                Rénovation salle de bain · Cagnes-sur-Mer & 06
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Rénovation salle de bain à{" "}
              <span className="bg-gradient-to-r from-navy-100 to-white bg-clip-text text-transparent">Cagnes-sur-Mer</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/85 sm:text-lg">
              Douche à l'italienne, baignoire, lavabo, robinetterie : LP Plomberie pilote votre rénovation clé en main à Cagnes-sur-Mer. Plomberie et équipements pris en charge, finitions coordonnées avec des artisans partenaires sélectionnés.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={telHref} variant="white" size="lg" className="group">
                <Phone className="h-5 w-5" />
                Appeler maintenant
                <span className="font-bold">{siteConfig.phone.display}</span>
              </Button>
              <Button href="/devis" variant="ghost" size="lg" className="border border-white/20 text-white hover:bg-white/10">
                Devis gratuit
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.ul variants={fadeUp} className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {trustItems.map((item) => (
                <li key={item.label} className="flex items-center gap-2 text-sm font-medium text-navy-100/90">
                  <item.icon className="h-4 w-4 text-emerald-300" />
                  {item.label}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>
      <WhyChooseUs />
      <BeforeAfter />
      <Process />
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-navy-400">Questions fréquentes</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">Rénovation salle de bain — vos questions</h2>
          </div>
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.question} className="overflow-hidden rounded-2xl border border-navy-100 bg-cream">
                  <button type="button" onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left" aria-expanded={isOpen}>
                    <span className="text-base font-semibold text-navy-900">{faq.question}</span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                        <p className="px-5 pb-5 text-sm leading-relaxed text-navy-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <UrgencyCTA />
      <QuoteForm />
    </>
  );
}
