import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, Phone } from "lucide-react";
import { posts, getPost } from "@/lib/blog";
import { siteConfig, telHref } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      images: [{ url: post.cover }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.cover,
    datePublished: post.date,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  const breadcrumb = breadcrumbSchema([
    { name: "Accueil", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ]);

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* En-tête */}
      <header className="bg-navy-950 pb-12 pt-32 text-white lg:pt-40">
        <div className="container-x max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Tous les articles
          </Link>
          <span className="mt-6 inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-navy-100">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-5 text-sm text-navy-300">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readingTime}
            </span>
          </div>
        </div>
      </header>

      {/* Image de couverture */}
      <div className="container-x max-w-3xl">
        <div
          className="-mt-8 aspect-[16/9] w-full rounded-2xl border border-navy-100 bg-cover bg-center shadow-card"
          style={{ backgroundImage: `url('${post.cover}')` }}
        />
      </div>

      {/* Contenu */}
      <div className="container-x max-w-3xl py-12 lg:py-16">
        <div className="prose-content space-y-5">
          {post.content.map((block, i) =>
            block.startsWith("## ") ? (
              <h2
                key={i}
                className="pt-4 font-display text-2xl font-semibold text-navy-900"
              >
                {block.replace("## ", "")}
              </h2>
            ) : (
              <p key={i} className="text-base leading-relaxed text-navy-700">
                {block}
              </p>
            )
          )}
        </div>

        {/* CTA fin d'article */}
        <div className="mt-12 rounded-3xl border border-navy-100 bg-cream p-8 text-center">
          <h3 className="font-display text-2xl font-semibold text-navy-900">
            Besoin d'un plombier à Cagnes-sur-Mer ou dans le 06 ?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-navy-600">
            {siteConfig.name} intervient rapidement. Appelez-nous ou demandez un
            devis gratuit dès maintenant.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={telHref} variant="primary" size="lg">
              <Phone className="h-5 w-5" /> {siteConfig.phone.display}
            </Button>
            <Button href="/devis" variant="secondary" size="lg">
              Devis gratuit
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
