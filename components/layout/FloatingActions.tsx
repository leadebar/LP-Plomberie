"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, telHref, whatsappHref } from "@/lib/site";

/**
 * Boutons flottants : WhatsApp + appel direct.
 * Sur mobile, une barre d'appel s'affiche en bas après un léger scroll
 * pour maximiser la conversion.
 */
export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp flottant (toutes tailles) */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter LP Plomberie sur WhatsApp"
        className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform hover:scale-110 md:bottom-8 md:right-8"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="relative h-7 w-7" />
      </a>

      {/* Barre d'appel mobile collante */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white/95 px-4 py-3 backdrop-blur-md md:hidden"
            style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
          >
            <a
              href={telHref}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-navy-800 py-3.5 text-base font-semibold text-white shadow-soft active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" />
              Appeler — {siteConfig.phone.display}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
