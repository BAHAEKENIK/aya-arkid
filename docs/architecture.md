# Architecture

## Vue d'ensemble

Portfolio statique React + Vite + TypeScript. Aucun backend, aucune base
de données, aucun appel réseau. Le build produit un ensemble de fichiers
statiques servis par Vercel.

## Découpage en couches

```
src/
├── assets/         Ressources binaires (images)
├── components/     Briques UI réutilisables
│   ├── layout/     Coquille du site (Navbar, Footer, Preloader)
│   └── ui/         Primitives (Section, Image, Skeleton, Icons)
├── data/           Source de vérité des contenus
├── design/         Tokens + variantes d'animation
├── hooks/          Comportements réutilisables
├── sections/       Sections de la page
├── styles/         CSS global + par domaine
└── utils/          Fonctions pures (cn, scroll, dates)
```

## Règles de dépendance

- `data/` ne dépend de rien à l'intérieur de `src/` (sauf types).
- `design/` ne dépend de rien (sauf `framer-motion` pour les types).
- `hooks/` dépend uniquement de React.
- `utils/` est pur, sans React.
- `components/` peut importer `design/`, `hooks/`, `utils/`.
- `sections/` peut importer `components/`, `data/`, `design/`, `hooks/`, `utils/`.
- Aucune couche basse n'importe depuis `sections/` ou `components/`.

## Flux de rendu

```
main.tsx
  → App.tsx
      → Preloader (si première visite)
      → Navbar
      → main
          → Hero (chargé immédiatement)
          → Suspense
              → About (lazy)
              → Experience (lazy)
              → Skills (lazy)
              → Certifications (lazy)
              → HowIWork (lazy)
              → Education (lazy)
      → Footer
```

## Code splitting

Chaque section sous la ligne de flottaison est chargée avec `React.lazy`.
Chaque `Suspense` a un `SectionFallback` pour éviter le flash blanc.

`vite.config.ts` découpe aussi manuellement :
- `vendor-react` — React + React DOM
- `vendor-motion` — framer-motion
- `vendor-icons` — lucide-react

Chaque chunk est mis en cache par le navigateur. Un changement dans une
section n'invalide pas les chunks vendor.

## Système de styles

Trois fichiers CSS, importés dans l'ordre dans `main.tsx` :

1. `index.css` — reset, variables CSS racine, focus, sélection
2. `styles/globals.css` — primitives : container, section, btn, tag, card
3. `styles/navbar.css` — navigation + menu mobile
4. `styles/sections.css` — styles par section (hero, about, xp, sk, cert, flow, edu, footer, preloader)

Pas de Tailwind, pas de CSS-in-JS. Les tokens vivent dans
`design/tokens.ts` et sont exposés au CSS via des custom properties
déclarées dans `index.css`.

## Conventions de nommage

| Type | Convention | Exemple |
|---|---|---|
| Composant | PascalCase | `OptimizedImage.tsx` |
| Hook | camelCase préfixé `use` | `useScrollSpy.ts` |
| Util | camelCase | `formatDate.ts` |
| Données | camelCase, pluriel ou singulier selon la nature | `experience.ts` |
| Classe CSS | kebab-case, préfixe par domaine | `xp-role`, `sk-row` |
| Token TS | camelCase | `motion.reveal` |

## Ce que ce projet n'est PAS

- Ce n'est pas une app avec router. Aucune route, navigation par ancres.
- Ce n'est pas une app avec API. Pas de `fetch`, pas d'axios.
- Ce n'est pas une app avec formulaire. Le contact est un lien mailto/tel.
- Ce n'est pas une app avec authentification.