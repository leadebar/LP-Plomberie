"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, CheckCircle2, Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/services";
import { siteConfig, telHref, whatsappHref } from "@/lib/site";
import { fadeUp, revealOnScroll } from "@/lib/animations";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    // Sans backend, on prépare un email pré-rempli (mailto).
    // Pour un envoi automatisé, branchez ici un service (Formspree, Resend, API route…).
    const subject = encodeURIComponent(`Demande de devis — ${service || "Plomberie"}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nTéléphone : ${phone}\nService : ${service}\n\nMessage :\n${message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="devis" className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-grid-navy [background-size:30px_30px] opacity-[0.3]" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-navy-500/25 blur-[110px]" />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Colonne infos */}
          <div>
            <SectionHeading
              align="left"
              dark
              eyebrow="Devis gratuit"
              title="Demandez votre devis"
              subtitle="Décrivez votre besoin, on vous rappelle rapidement avec une estimation claire et sans engagement."
            />

            <div className="mt-8 space-y-4">
              <a
                href={telHref}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-navy-900">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-300">Appel direct</p>
                  <p className="text-base font-semibold">{siteConfig.phone.display}</p>
                </div>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-300">WhatsApp</p>
                  <p className="text-base font-semibold">Réponse rapide</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-300">Horaires</p>
                  <p className="text-base font-semibold">{siteConfig.hours.label}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <motion.div variants={fadeUp} {...revealOnScroll}>
            {sent ? (
              <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white p-10 text-center text-navy-900">
                <CheckCircle2 className="h-14 w-14 text-emerald-500" />
                <h3 className="mt-4 font-display text-2xl font-semibold">
                  Merci pour votre demande !
                </h3>
                <p className="mt-2 max-w-sm text-sm text-navy-600">
                  Votre messagerie s'est ouverte avec votre demande pré-remplie.
                  Sinon, appelez-nous directement au {siteConfig.phone.display}.
                </p>
                <a
                  href={telHref}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4" /> Appeler maintenant
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-white/10 bg-white p-6 text-navy-900 shadow-glow sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nom complet" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Votre nom"
                      className="input"
                    />
                  </Field>
                  <Field label="Téléphone" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="06 00 00 00 00"
                      className="input"
                    />
                  </Field>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="vous@email.com"
                      className="input"
                    />
                  </Field>
                  <Field label="Service souhaité" htmlFor="service">
                    <select id="service" name="service" className="input" defaultValue="">
                      <option value="" disabled>
                        Choisir…
                      </option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Autre / urgence">Autre / urgence</option>
                    </select>
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="Décrivez votre besoin" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Ex : fuite sous l'évier de la cuisine depuis ce matin…"
                      className="input resize-none"
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 py-4 text-base font-semibold text-white transition-all hover:bg-navy-800 active:scale-[0.99]"
                >
                  <Send className="h-5 w-5" />
                  Envoyer ma demande de devis
                </button>
                <p className="mt-3 text-center text-xs text-navy-400">
                  Réponse rapide · Sans engagement · Vos données restent confidentielles
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Styles d'input partagés */}
      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid #d6dbec;
          background: #f7f8fb;
          padding: 0.75rem 0.95rem;
          font-size: 0.95rem;
          color: #0b0f1f;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        :global(.input:focus) {
          outline: none;
          border-color: #2f3d80;
          box-shadow: 0 0 0 3px rgba(47, 61, 128, 0.12);
          background: #fff;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-500">
        {label}
      </span>
      {children}
    </label>
  );
}
