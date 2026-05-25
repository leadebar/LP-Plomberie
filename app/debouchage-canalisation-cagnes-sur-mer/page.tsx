"use client";

import { motion } from "framer-motion";
import { Phone, Star, ShieldCheck, Clock, ArrowRight, Droplets, Plus } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { siteConfig, telHref } from "@/lib/site";
import { fadeUp, stagger } from "@/lib/animations";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import UrgencyCTA from "@/components/sections/UrgencyCTA";
import QuoteForm from "@/components/sections/QuoteForm";

const trustItems = [
  { icon: Star, label: "+500 interventions" },
  { icon: Clock, label: "Disponible 6j/7" },
  { icon: ShieldCheck, label: "Devis gratuit" },
];

const faqs = [
  {
    question: "Comment savoir si ma canalisation est bouchée ?",
    answer:
      "Les signes les plus courants sont : eau qui s'écoule lentement dans l'évier, la douche ou la baignoire, remontées d'odeurs nauséabondes, gargouillis dans les tuyaux, ou encore refoulement dans les WC. Si vous observez un de ces symptômes, appelez-moi pour un diagnostic rapide.",
  },
  {
    question: "Quelle méthode utilisez-vous pour déboucher les canalisations ?",
    answer:
      "J'utilise du matériel professionnel adapté à chaque situation : furet mécanique pour les bouchons localisés, hydrocureur à haute pression pour les canalisations plus importantes. La méthode est choisie après diagnostic pour garantir un résultat durable.",
  },
  {
    question: "Le débouchage est-il garanti dans la durée ?",
    answer:
      "Oui, chaque intervention est réalisée avec du matériel professionnel pour un résultat durable. Je peux aussi vous conseiller sur les bonnes pratiques pour éviter que le bouchon ne revienne.",
  },
  {
    question: "Intervenez-vous pour les canalisations extérieures et les évacuations collectives ?",
    answer:
      "Oui, j'interviens sur tout type de canalisation : évier, douche, baignoire, WC, mais aussi les évacuations extérieures et les colonnes collectives. Décrivez-moi votre problème par téléphone et j'évaluerai la meilleure approche.",
  },
  {
    question: "Combien coûte un débouchage de canalisation à Cagnes-sur-Mer ?",
    answer:
      "Le tarif dépend du type de bouchon et de la méthode nécessaire. Le devis est toujours gratuit et établi avant toute intervention. Appelez le 07 69 05 08 32 pour une estimation rapide.",
  },
];

export default function DebouchageCanalisationPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pt-28 pb-20 text-white sm:pt-32 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-grid-navy [background-size:32px_32px] opacity-[0.4]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-navy-500/30 blur-[120px]" />

        <div className="contain
