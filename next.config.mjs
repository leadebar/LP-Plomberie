// Zone active : "cagnes" (Alpes-Maritimes, défaut) ou "bonneval". Même variable que lib/site.ts.
const isBonneval = process.env.NEXT_PUBLIC_LOCATION === "bonneval";

// Anciennes URLs de services (avec le nom de la ville) vers les URLs neutres.
const legacyServiceRedirects = [
  ["depannage-plomberie-cagnes-sur-mer", "depannage-plomberie"],
  ["recherche-fuite-cagnes-sur-mer", "recherche-de-fuite"],
  ["debouchage-canalisation-cagnes-sur-mer", "debouchage-canalisation"],
  ["wc-chasse-deau-cagnes-sur-mer", "wc-chasse-deau"],
  ["chauffe-eau-cagnes-sur-mer", "chauffe-eau"],
  ["renovation-salle-de-bain-cagnes-sur-mer", "renovation-salle-de-bain"],
].map(([from, to]) => ({
  source: `/${from}`,
  destination: `/${to}`,
  permanent: true,
}));

// Pages villes du 06 : redirigées vers l'accueil une fois la zone changée.
const cityPageRedirects = isBonneval
  ? ["antibes", "biot", "cannes", "mougins", "nice", "opio", "vence"].map(
      (c) => ({ source: `/plombier-${c}`, destination: "/", permanent: true })
    )
  : [];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [...legacyServiceRedirects, ...cityPageRedirects];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/:path*.(jpg|jpeg|png|webp|avif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
