import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { services } from "@/lib/services";
import { siteConfig, telHref, whatsappHref } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100">
      <div className="absolute inset-0 bg-grid-navy [background-size:28px_28px] opacity-[0.5]" />
      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Marque */}
          <div>
            <Logo variant="white" withWordmark={false} className="h-12 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-200/80">
              Plombier à Cagnes-sur-Mer, au service des particuliers et
              professionnels dans tout le 06. Dépannage rapide, travail soigné,
              devis gratuit.
            </p>
            <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-navy-100">
              {siteConfig.status}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/#services"
                    className="text-navy-200/80 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <Link href="/#pourquoi" className="text-navy-200/80 transition-colors hover:text-white">Pourquoi nous</Link>
              </li>
              <li>
                <Link href="/#realisations" className="text-navy-200/80 transition-colors hover:text-white">Réalisations</Link>
              </li>
              <li>
                <Link href="/#avis" className="text-navy-200/80 transition-colors hover:text-white">Avis clients</Link>
              </li>
              <li>
                <Link href="/#faq" className="text-navy-200/80 transition-colors hover:text-white">FAQ</Link>
              </li>
              <li>
                <Link href="/blog" className="text-navy-200/80 transition-colors hover:text-white">Blog</Link>
              </li>
              <li>
                <Link href="/devis" className="text-navy-200/80 transition-colors hover:text-white">Devis gratuit</Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-navy-200/80 transition-colors hover:text-white">Mentions légales</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <a href={telHref} className="flex items-start gap-3 text-navy-100 transition-colors hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-navy-300" />
                  <span className="font-semibold">{siteConfig.phone.display}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 text-navy-200/80 transition-colors hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-navy-300" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-navy-200/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy-300" />
                <span>{siteConfig.area}</span>
              </li>
              <li className="flex items-start gap-3 text-navy-200/80">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-navy-300" />
                <span>{siteConfig.hours.label}</span>
              </li>
            </ul>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-navy-300 sm:flex-row">
          <p>© {year} {siteConfig.name}. Tous droits réservés.</p>
          <p>
            Plombier à Cagnes-sur-Mer · Nice · Antibes · Saint-Laurent-du-Var ·
            Villeneuve-Loubet · Alpes-Maritimes (06)
          </p>
        </div>
      </div>
    </footer>
  );
}
