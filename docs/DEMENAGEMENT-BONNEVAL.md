# Déménagement à Bonneval : checklist de bascule

Le site est prévu pour changer de zone sans toucher aux URLs de services ni
réécrire les pages. Tout ce qui dépend de la localisation vit dans `lib/site.ts`
(presets `cagnes` et `bonneval`).

## Avant la bascule (décembre)

1. **Vérifier le preset `bonneval`** dans `lib/site.ts` : code postal (28800),
   coordonnées GPS et rayon d'intervention, liste des communes, texte du pied de page.
   Les valeurs actuelles sont des valeurs de départ à confirmer.
2. **Tester sans rien casser** : dans Vercel, ajouter `NEXT_PUBLIC_LOCATION=bonneval`
   uniquement sur l'environnement *Preview*, pousser la branche et relire le
   déploiement de prévisualisation (accueil, services, devis, professionnels).
3. **Blog** : relire les articles qui parlent du 06 (`lib/blog.ts`), notamment
   `prix-renovation-salle-de-bain-06` et `choisir-chauffe-eau-alpes-maritimes`.
   Les adapter à la nouvelle zone ou les retirer au moment de la bascule.
4. **Réalisations et avis** : ils restent affichés (ce sont de vrais chantiers dans le 06).
   Ajouter les premiers chantiers locaux dès qu'ils existent.

## Le jour J (fin janvier)

1. Dans Vercel, passer `NEXT_PUBLIC_LOCATION` à `bonneval` sur *Production* et redéployer.
   Effets automatiques :
   - titres, H1, meta, FAQ, pied de page, carte, JSON-LD, `llms.txt` en Bonneval ;
   - les 7 pages villes (`/plombier-nice`, etc.) redirigent en permanence vers l'accueil ;
   - le sitemap ne liste plus les pages villes.
2. **Fiche Google Business Profile** : modifier l'adresse et la zone d'intervention de
   la fiche existante (ne pas en créer une nouvelle, pour garder les avis).
   Google peut demander une re-vérification.
3. **Adresse identique partout** : fiche Google, site, Instagram (bio et lieu),
   Facebook, Pages Jaunes et annuaires, signature mail, devis et factures.
4. **Entreprise** : déclarer le changement d'adresse (guichet unique INSEE) puis mettre
   à jour `app/mentions-legales/page.tsx` avec la vraie adresse et le SIRET.
5. Soumettre à nouveau `sitemap.xml` dans Google Search Console.

## Après (février et suite)

- Supprimer les dossiers `app/plombier-*` et `lib/cities.ts` quand les redirections
  ont été prises en compte par Google (quelques mois).
- Écrire des pages locales Bonneval, Châteaudun et Chartres si la demande le justifie
  (une page par ville, avec du contenu réellement différent).
