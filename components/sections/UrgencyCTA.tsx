"use client";

import { motion } from "framer-motion";
import { Phone, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig, telHref } from "@/lib/site";
import { fadeUp, revealOnScroll } from "@/lib/animations";

export default function UrgencyCTA() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          {...revealOnScroll}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-6 py-12 text-white shadow-card sm:px-12 sm:py-14"
        >
          <div className="absolute inset-0 bg-grid-navy [background-size:26px_26px] opacity-30" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-navy-400/30 blur-[90px]" />

          <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                <Zap className="h-4 w-4 text-amber-300" />
                Urgence plomberie
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Une fuite ? Un dégât des eaux ? On intervient vite.
              </h2>
              <p className="mt-3 text-navy-100/85">
                Ne laissez pas la situation s'aggraver. Appelez LP Plomberie, votre
                artisan à Cagnes-sur-Mer et dans tout le 06.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-3">
              <Button href={telHref} variant="white" size="lg" className="text-lg">
                <Phone className="h-5 w-5" />
                {siteConfig.phone.display}
              </Button>
              <span className="text-xs text-navy-200/80">
                {siteConfig.hours.label}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
