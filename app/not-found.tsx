import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { siteConfig, telHref } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-navy-950 px-6 text-center text-white">
      <div>
        <p className="font-display text-7xl font-semibold text-navy-100">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold">
          Cette page est introuvable
        </h1>
        <p className="mx-auto mt-3 max-w-md text-navy-200/80">
          La page que vous cherchez n'existe pas ou a été déplacée. Revenez à
          l'accueil ou contactez {siteConfig.name} directement.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900"
          >
            <Home className="h-4 w-4" /> Retour à l'accueil
          </Link>
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> {siteConfig.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
