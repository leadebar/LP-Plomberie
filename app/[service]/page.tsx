import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageView from "@/components/sections/ServicePageView";
import { getServicePage, servicePages } from "@/lib/service-pages";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { siteConfig, withSite } from "@/lib/site";

// Seules les pages de services déclarées existent à la racine : le reste renvoie une 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((p) => ({ service: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { service: string };
}): Metadata {
  const page = getServicePage(params.service);
  if (!page) return {};
  const title = withSite(page.metaTitle);
  const description = withSite(page.metaDescription);
  const path = `/${page.slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}${path}`,
    },
  };
}

export default function ServicePage({
  params,
}: {
  params: { service: string };
}) {
  const page = getServicePage(params.service);
  if (!page) notFound();

  const schemas = [
    serviceSchema(page),
    breadcrumbSchema([
      { name: "Accueil", url: siteConfig.url },
      { name: page.title, url: `${siteConfig.url}/${page.slug}` },
    ]),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServicePageView slug={page.slug} />
    </>
  );
}
