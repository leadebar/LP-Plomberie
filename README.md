# LP Plomberie — Site vitrine premium

Site web professionnel et optimisé pour la conversion locale de **LP Plomberie**, artisan plombier à **Cagnes-sur-Mer** et dans tout le **06**.

Construit avec **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** et **Framer Motion**. Optimisé SEO local, performances Lighthouse et déploiement Vercel.

---

## ✨ Fonctionnalités

- Hero premium avec CTA d'appel immédiat
- Navbar sticky moderne (menu mobile inclus)
- Cartes de services animées
- Section « Pourquoi nous » + badges de confiance
- Statistiques (+500 interventions, 6j/7…)
- **Galerie avant/après interactive** (curseur comparatif)
- Process d'intervention en 4 étapes
- Témoignages clients
- Zone d'intervention + carte Google Maps
- **FAQ SEO** avec données structurées
- Formulaire de devis (pré-remplit un email — voir « Brancher le formulaire »)
- Bouton **WhatsApp flottant** + **barre d'appel mobile** collante
- CTA d'urgence plomberie
- **Blog SEO local** (3 articles fournis, prêts à publier)
- SEO technique complet : `sitemap.xml`, `robots.txt`, manifest PWA, Open Graph dynamique
- **Schema.org** : LocalBusiness/Plumber, FAQPage, BlogPosting, BreadcrumbList
- Loader élégant, animations au scroll, micro-interactions
- Responsive mobile-first, accessibilité (`prefers-reduced-motion`)

---

## 🗂️ Architecture du projet

```
lp-plomberie/
├── app/
│   ├── layout.tsx              # Layout racine, metadata SEO, schema.org, fonts
│   ├── page.tsx                # Page d'accueil (assemble les sections)
│   ├── globals.css             # Styles globaux + utilitaires Tailwind
│   ├── opengraph-image.tsx     # Image Open Graph générée dynamiquement
│   ├── icon.svg                # Favicon (monogramme LP)
│   ├── manifest.ts             # Manifest PWA
│   ├── sitemap.ts              # Sitemap dynamique
│   ├── robots.ts               # robots.txt
│   ├── not-found.tsx           # Page 404
│   ├── devis/page.tsx          # Page dédiée au devis
│   ├── blog/page.tsx           # Liste des articles
│   ├── blog/[slug]/page.tsx    # Article (généré statiquement)
│   └── mentions-legales/page.tsx
├── components/
│   ├── layout/                 # Navbar, Footer, FloatingActions
│   ├── ui/                     # Button, Logo, Loader, SectionHeading
│   └── sections/               # Hero, Services, Stats, FAQ, QuoteForm, …
├── lib/
│   ├── site.ts                 # ⚙️ Config centrale (coordonnées, liens…)
│   ├── services.ts             # Liste des services
│   ├── content.ts              # Stats, raisons, process, avis, avant/après, FAQ
│   ├── blog.ts                 # Articles de blog
│   ├── schema.ts               # Données structurées schema.org
│   ├── animations.ts           # Variants Framer Motion réutilisables
│   └── cn.ts                   # Helper de classes
├── public/logos/               # Logos SVG (navy, white, badge)
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## 🚀 Installation & lancement en local

Prérequis : **Node.js ≥ 18.17**.

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
# → http://localhost:3000

# 3. Build de production
npm run build && npm start
```

> Vous pouvez aussi utiliser `pnpm` ou `yarn` à la place de `npm`.

---

## ⚙️ Personnalisation rapide

Presque tout se règle depuis **`lib/site.ts`** : téléphone, email, horaires, zone, WhatsApp, liens de navigation.

| Élément | Fichier |
|---|---|
| Coordonnées, horaires, WhatsApp | `lib/site.ts` |
| Services proposés | `lib/services.ts` |
| Avis, stats, avant/après, FAQ | `lib/content.ts` |
| Articles de blog | `lib/blog.ts` |
| Couleurs / thème | `tailwind.config.ts` |

### Variables d'environnement

Copiez `.env.example` en `.env.local` et renseignez l'URL finale :

```
NEXT_PUBLIC_SITE_URL=https://www.votre-domaine.fr
```

Cette URL alimente le SEO (canonical, sitemap, robots, Open Graph).

### Remplacer les photos et avis

Les photos avant/après et les témoignages sont des **exemples** (signalés sur le site). Remplacez-les dans `lib/content.ts` par vos vraies réalisations et vos avis Google.

### Brancher le formulaire de devis

Par défaut, le formulaire ouvre la messagerie du visiteur avec un email pré-rempli (aucun backend requis). Pour un envoi automatique, branchez un service dans `components/sections/QuoteForm.tsx` (fonction `handleSubmit`), par exemple :

- **Formspree** / **Web3Forms** (sans serveur)
- une **Route Handler** Next.js (`app/api/devis/route.ts`) + **Resend**

---

## 🐙 Mettre le projet sur GitHub

```bash
git init
git add .
git commit -m "Initial commit — site LP Plomberie"
git branch -M main

# Créez d'abord un dépôt vide sur github.com, puis :
git remote add origin https://github.com/VOTRE-COMPTE/lp-plomberie.git
git push -u origin main
```

> Astuce : avec le [GitHub CLI](https://cli.github.com/), `gh repo create lp-plomberie --public --source=. --push` fait tout en une commande.

---

## ▲ Déploiement sur Vercel

1. Créez un compte sur [vercel.com](https://vercel.com) (gratuit).
2. **New Project** → importez votre dépôt GitHub `lp-plomberie`.
3. Vercel détecte Next.js automatiquement — aucune configuration nécessaire.
4. Dans **Settings → Environment Variables**, ajoutez :
   - `NEXT_PUBLIC_SITE_URL` = `https://votre-domaine.fr`
5. **Deploy**. Le site est en ligne en ~1 minute.
6. **Settings → Domains** : ajoutez votre nom de domaine et suivez les instructions DNS.

Chaque `git push` sur `main` redéploie automatiquement le site.

---

## 🔍 SEO & performances

- Métadonnées complètes + Open Graph + Twitter Cards
- Données structurées schema.org (LocalBusiness, FAQ, articles)
- `sitemap.xml` et `robots.txt` générés automatiquement
- Polices Google optimisées via `next/font` (zéro layout shift)
- Images distantes en AVIF/WebP, `loading="lazy"` sur la carte
- En-têtes de sécurité configurés dans `next.config.mjs`

### Après mise en ligne

- Déclarez le site dans la **Google Search Console** et soumettez `/sitemap.xml`.
- Créez/optimisez votre fiche **Google Business Profile** (essentiel pour le SEO local).
- Récupérez de vrais **avis Google** et remplacez les témoignages d'exemple.

---

## 📞 Coordonnées (configurées dans le site)

- **LP Plomberie** — Artisan indépendant
- Téléphone : **07 69 05 08 32**
- Email : **pheulpin.plomberie@gmail.com**
- Zone : Cagnes-sur-Mer et l'ensemble du 06
- Horaires : du lundi au samedi, 8h – 19h

---

Réalisé avec soin pour mettre en valeur le savoir-faire de LP Plomberie. 🔧
