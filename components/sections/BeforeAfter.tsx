"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { beforeAfter } from "@/lib/content";
import { fadeUp, stagger, revealOnScroll } from "@/lib/animations";

/** Curseur comparatif avant/après (glisser pour révéler). */
function Comparator({
  before,
  after,
  title,
  caption,
}: {
  before: string;
  after: string;
  title: string;
  caption: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, x)));
  }, []);

  return (
    <motion.figure
      variants={fadeUp}
      className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft"
    >
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none touch-none"
        onMouseDown={() => (dragging.current = true)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onMouseMove={(e) => dragging.current && update(e.clientX)}
        onTouchStart={(e) => update(e.touches[0].clientX)}
        onTouchMove={(e) => update(e.touches[0].clientX)}
      >
        {/* Après (fond) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${after}')` }}
        />
        <span className="absolute right-3 top-3 rounded-full bg-navy-900/85 px-3 py-1 text-xs font-semibold text-white">
          Après
        </span>

        {/* Avant (recouvre selon le curseur) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${before}')`,
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
          }}
        />
        <span
          className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900"
          style={{ opacity: pos > 12 ? 1 : 0 }}
        >
          Avant
        </span>

        {/* Poignée */}
        <div
          className="absolute inset-y-0 z-10 flex w-0.5 items-center justify-center bg-white"
          style={{ left: `${pos}%` }}
        >
          <div className="flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-navy-100 bg-white text-navy-900 shadow-card">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L4 12l5 6M15 6l5 6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
        <span className="font-display text-base font-semibold text-navy-900">
          {title}
        </span>
        <span className="text-xs font-medium text-navy-500">{caption}</span>
      </figcaption>
    </motion.figure>
  );
}

export default function BeforeAfter() {
  return (
    <section id="realisations" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nos réalisations"
          title="Avant / après : le résultat parle de lui-même"
          subtitle="Glissez le curseur pour découvrir la transformation. Des chantiers soignés, des finitions premium, partout dans le 06."
        />
        <motion.div
          variants={stagger}
          {...revealOnScroll}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {beforeAfter.map((item) => (
            <Comparator key={item.title} {...item} />
          ))}
        </motion.div>
        <p className="mt-8 text-center text-xs text-navy-400">
          Photos d'illustration — à remplacer par vos propres réalisations.
        </p>
      </div>
    </section>
  );
}
