"use client";

import { motion } from "framer-motion";
import { fadeUp, revealOnScroll } from "@/lib/animations";
import { cn } from "@/lib/cn";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      {...revealOnScroll}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow",
            dark && "border-white/15 bg-white/10 text-navy-100"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "section-title mt-4",
          dark && "text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-navy-100/80" : "text-navy-600/90"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
