"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content";
import { fadeUp, stagger, revealOnScroll } from "@/lib/animations";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 text-white lg:py-20">
      <div className="absolute inset-0 bg-grid-navy [background-size:30px_30px] opacity-[0.35]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-navy-500/25 blur-[110px]" />

      <div className="container-x relative">
        <motion.div
          variants={stagger}
          {...revealOnScroll}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center"
            >
              <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-navy-200/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
