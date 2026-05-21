import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog plomberie — conseils d'un plombier dans le 06",
  description:
    "Conseils, astuces et guides plomberie par LP Plomberie : fuite d'eau, entretien chauffe-eau, rénovation de salle de bain à Cagnes-sur-Mer et dans les Alpes-Maritimes.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy-950 pb-12 pt-32 text-white lg:pt-40">
        <div className="container-x">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-300">
            Le blog
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Conseils & astuces plomberie
          </h1>
          <p className="mt-4 max-w-2xl text-navy-100/85">
            Les bons réflexes et les explications d'un artisan local pour
            entretenir votre installation et éviter les mauvaises surprises.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white card-hover"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div
                    className="aspect-[16/10] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${post.cover}')` }}
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                    {post.category}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-semibold text-navy-900">
                    <Link href={`/blog/${post.slug}`} className="hover:text-navy-600">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600/90">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-navy-400">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 group-hover:text-navy-600"
                  >
                    Lire l'article
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
