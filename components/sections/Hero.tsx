"use client";

import { motion } from "framer-motion";
import { Phone, Star, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig, telHref } from "@/lib/site";
import { fadeUp, stagger } from "@/lib/animations";

const trustItems = [
  { icon: Star, label: "+500 interventions" },
  { icon: Clock, label: "Disponible 6j/7" },
  { icon: ShieldCheck, label: "Devis gratuit" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-28 pb-20 text-white sm:pt-32 lg:pt-40 lg:pb-28">
      {/* Décors de fond */}
      <div className="absolute inset-0 bg-grid-navy [background-size:32px_32px] opacity-[0.4]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-navy-500/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-navy-400/20 blur-[100px]" />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Colonne texte */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-100 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Artisan plombier · Cagnes-sur-Mer & 06
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Votre plombier de confiance,{" "}
              <span className="bg-gradient-to-r from-navy-100 to-white bg-clip-text text-transparent">
                rapide et soigné
              </span>{" "}
              dans le 06.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/85 sm:text-lg"
            >
              Dépannage urgent, recherche de fuite, débouchage, chauffe-eau et
              rénovation de salle de bain. Un artisan local qui intervient vite,
              travaille proprement et vous accompagne en toute transparence.
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

            <motion.ul
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
            >
              {trustItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 text-sm font-medium text-navy-100/90"
                >
                  <item.icon className="h-4 w-4 text-emerald-300" />
                  {item.label}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Colonne carte visuelle */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1.5 shadow-glow backdrop-blur">
              <div
                className="aspect-[4/5] w-full rounded-[1.4rem] bg-cover bg-center sm:aspect-[4/4.4]"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=75')",
                }}
              />
              {/* Carte flottante "intervention" */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-950/85 p-4 backdrop-blur-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-white">
                    Intervention rapide
                  </p>
                  <p className="text-xs text-navy-200/80">
                    {siteConfig.hours.label}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Badge note flottant */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -left-4 top-8 hidden rounded-2xl bg-white p-4 text-navy-900 shadow-card sm:block"
            >
      </div>

      {/* Vague de transition vers la section suivante */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
