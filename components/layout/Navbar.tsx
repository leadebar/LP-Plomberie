"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { navLinks, siteConfig, telHref } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Empêche le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };art
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-navy-100 bg-white/85 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="LP Plomberie - accueil"
        >
          <Logo variant="navy" withWordmark={false} className="h-10 w-auto" />
          <img
          src="/logos/logo-bleu-long.svg"
          alt="LP Plomberie"
          className="h-12 w-auto"
        />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telHref}
            className="flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-navy-600"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone.display}
          </a>
          <Button href="/devis" variant="primary" size="md">
            Devis gratuit
          </Button>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-100 bg-white text-navy-900 lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-navy-100 bg-white lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-navy-800 transition-colors hover:bg-navy-50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-3">
                <Button href={telHref} variant="secondary" size="lg">
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone.display}
                </Button>
                <Button
                  href="/devis"
                  variant="primary"
                  size="lg"
                  onClick={() => setOpen(false)}
                >
                  Demander un devis gratuit
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
