"use client";

import { motion } from "framer-motion";
import { Phone, Star, ShieldCheck, Clock, ArrowRight, MapPin, Plus } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { siteConfig, telHref } from "@/lib/site";
import { fadeUp, stagger } from "@/lib/animations";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import UrgencyCTA from "@/components/sections/UrgencyCTA";
import QuoteForm from "@/components/sections/QuoteForm";

const trustItems = [
  { icon: Star, label: "+500 interventions" },
  { icon: Clock, label: "Disponible 6j/7" },
  { icon: ShieldCheck, label: "Devis gratuit" },
];

const services = [
  { title: "Dépannage plomberie", href: "/depannage-plomberie-cagnes-sur-mer" },
  { title: "Recherche de fuite", href: "/recherche-fuite-cagnes-sur-mer" },
  { title: "Débouchage canalisation", href: "/debouchage-canalisation-cagnes-sur-mer" },
  { title: "WC & chasse d'eau", href: "/wc-chasse-deau-cagnes-sur-mer" },
  { title: "Chauffe-eau", href: "/chauffe-eau-cagnes-sur-mer" },
  { title: "Rénovation salle de bain", href: "/renovation-salle-de-bain-cagnes-sur-mer" },
];

const faqs = [
  {
    question: "Intervenez-vous à Mougins pour les urgences plomberie ?",
    answer: "Oui, j'interviens à Mougins pour tous vos dépannages plomberie. Appelez le 07 69 05 08 32 pour une intervention rapide.",
  },
  {
    question: "Quel est le délai d'intervention à Mougins ?",
    answer: "Basé à Cagnes-sur-Mer, j'interviens rapidement à Mougins. Pour les urgences, j'essaie de me déplacer dans la journée selon ma disponibilité.",
  },
  {
    question: "Réalisez-vous des rénovations de salle de bain à Mougins ?",
    answer: "Oui, je réalise des rénovations complètes de salle de bain à Mougins : douche à l'italienne, baignoire, lavabo, robinetterie. Devis gratuit sur place.",
  },
  {
    question: "Le devis est-il gratuit pour une intervention à Mougins ?",
    answer: "Oui, le devis est toujours gratuit et sans engagement, que ce soit pour un dépannage ou un projet de rénovation à Mougins.",
  },
];

export default function PlombierMouginsPage() {
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
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                Plombier · Mougins & environs
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Plombier à{" "}
              <span className="bg-gradient-to-r from-navy-100 to-white bg-clip-text text-transparent">Mougins</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/85 sm:text-lg">
              LP Plomberie intervient à Mougins pour tous vos travaux de plomberie : dépannage rapide, recherche de fuite, débouchage, chauffe-eau et rénovation de salle de bain. Devis gratuit, travail soigné.
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

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-navy-400">Services</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Tous vos besoins plomberie à Mougins
            </h2>
            <p className="mt-4 text-navy-600">
              LP Plomberie prend en charge l'ensemble de vos travaux de plomberie à Mougins et ses environs.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
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

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-navy-400">Questions fréquentes</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">Plombier à Mougins — vos questions</h2>
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
