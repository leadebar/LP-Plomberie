import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site LP Plomberie.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <section className="bg-white pb-20 pt-32 lg:pt-40">
      <div className="container-x max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
          Mentions légales
        </h1>
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-navy-700">
          <div>
            <h2 className="text-lg font-semibold text-navy-900">Éditeur du site</h2>
            <p className="mt-2">
              {siteConfig.legalName}
              <br />
              Statut : {siteConfig.status}
              <br />
              Zone d'activité : {siteConfig.area}
              <br />
              Téléphone : {siteConfig.phone.display}
              <br />
              Email : {siteConfig.email}
            </p>
            <p className="mt-2 text-navy-500">
              [À compléter : SIRET, numéro de TVA, adresse de l'entreprise, nom du
              responsable de publication.]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-900">Hébergement</h2>
            <p className="mt-2">
              Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
              CA 91789, États-Unis — vercel.com.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-900">
              Propriété intellectuelle
            </h2>
            <p className="mt-2">
              L'ensemble des contenus présents sur ce site (textes, visuels, logo)
              est protégé. Toute reproduction sans autorisation est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-900">
              Données personnelles
            </h2>
            <p className="mt-2">
              Les informations transmises via le formulaire de contact sont
              utilisées uniquement pour répondre à votre demande de devis et ne
              sont jamais cédées à des tiers. Conformément au RGPD, vous disposez
              d'un droit d'accès, de rectification et de suppression de vos
              données en nous contactant à l'adresse {siteConfig.email}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
