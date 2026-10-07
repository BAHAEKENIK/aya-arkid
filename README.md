# Aya Arkid — Portfolio

**Technicienne Systèmes & Réseaux**

Portfolio professionnel pour Aya Arkid, technicienne IT spécialisée en
support utilisateurs, administration Windows, infrastructure réseau et
environnement industriel.

---

## Table des matières

- [Aya Arkid — Portfolio](#aya-arkid--portfolio)
  - [Table des matières](#table-des-matières)
  - [Aperçu](#aperçu)
  - [Stack technique](#stack-technique)
  - [Démarrage rapide](#démarrage-rapide)
  - [Scripts disponibles](#scripts-disponibles)
  - [Architecture du projet](#architecture-du-projet)
  - [Design system](#design-system)
  - [Sections du portfolio](#sections-du-portfolio)
  - [Données éditables](#données-éditables)
  - [Images](#images)
  - [Animations](#animations)
  - [Performance](#performance)
  - [Accessibilité](#accessibilité)
  - [SEO](#seo)
  - [Déploiement sur Vercel](#déploiement-sur-vercel)
  - [Conventions](#conventions)
  - [Licence](#licence)

---

## Aperçu

Ce projet est un portfolio professionnel one-page en français. Il présente
le parcours, les compétences et les certifications d'Aya Arkid dans un
environnement industriel (Hutchinson, Tanger).

Le site est **statique**, sans backend, sans base de données, sans
authentification. Il se déploie en quelques secondes sur Vercel.

**Principes de design**

- Éditorial, pas SaaS.
- Palette restreinte : off-white, charbon, orange accent.
- Typographie technique : IBM Plex Sans + IBM Plex Mono.
- Animations sobres : fade, reveal, stagger. Jamais de bounce.
- Accessibilité : navigation clavier, focus visibles, reduced motion.

---

## Stack technique

Versions **épinglées exactes** — aucune plage `^` ou `~`.

| Paquet | Version | Rôle |
|---|---|---|
| `react` | `19.1.1` | Bibliothèque UI |
| `react-dom` | `19.1.1` | Rendu DOM |
| `vite` | `7.1.7` | Bundler + dev server |
| `typescript` | `5.9.3` | Typage statique |
| `@vitejs/plugin-react` | `5.0.4` | Plugin React pour Vite |
| `framer-motion` | `12.23.24` | Animations |
| `lucide-react` | `0.546.0` | Icônes |
| `eslint` | `9.37.0` | Linting |
| `@types/node` | `24.7.2` | Types Node |

**Environnement requis**

- Node.js `20.19.6`
- npm `10.8.2`
- Windows 10 / 11 (testé), macOS, Linux

---

## Démarrage rapide

```cmd
git clone https://github.com/<votre-compte>/aya-arkid-portfolio.git
cd aya-arkid-portfolio
npm install
npm run dev
```

Le serveur démarre sur `http://localhost:5173`.

---

## Scripts disponibles

| Commande | Effet |
|---|---|
| `npm run dev` | Démarre Vite en mode développement avec HMR |
| `npm run build` | Type-check (`tsc -b`) puis build production dans `dist/` |
| `npm run preview` | Sert le build production sur `http://localhost:4173` |
| `npm run lint` | Lance ESLint sur tout le projet |

---

## Architecture du projet

```
aya-arkid-portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── aya-arkid.webp
│   │       └── hutchinson.webp
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── NavLink.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Preloader.tsx
│   │   └── ui/
│   │       ├── Section.tsx
│   │       ├── SectionHeader.tsx
│   │       ├── SectionFallback.tsx
│   │       ├── OptimizedImage.tsx
│   │       ├── Skeleton.tsx
│   │       ├── SkillIcon.tsx
│   │       └── TechIcon.tsx
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   ├── certifications.ts
│   │   ├── process.ts
│   │   ├── education.ts
│   │   └── index.ts
│   ├── design/
│   │   ├── tokens.ts
│   │   ├── animations.ts
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useReducedMotion.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useScrollSpy.ts
│   │   ├── useLockBodyScroll.ts
│   │   ├── useFocusTrap.ts
│   │   └── useFirstVisit.ts
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── HowIWork.tsx
│   │   └── Education.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── navbar.css
│   │   └── sections.css
│   ├── utils/
│   │   ├── cn.ts
│   │   ├── constants.ts
│   │   ├── formatDate.ts
│   │   └── scroll.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── docs/
├── vercel.json
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
└── LICENSE
```

**Règles d'architecture**

- Aucun composant ne dépasse ~150 lignes.
- Aucune donnée en dur dans le JSX — tout vient de `src/data/`.
- Les tokens (couleurs, espacements, motion) vivent dans `src/design/tokens.ts`.
- Les hooks réutilisables vivent dans `src/hooks/`.
- Les sections consomment les données, jamais l'inverse.

---

## Design system

**Palette**

| Rôle | Hex |
|---|---|
| Fond principal | `#F7F6F2` |
| Texte principal | `#202124` |
| Texte secondaire | `#5F6368` |
| Bordure | `#D9D7D0` |
| Blanc | `#FFFFFF` |
| Accent | `#C65D2E` |
| Fond sombre | `#202124` |
| Squelette | `#E8E6DF` |

Équilibre visuel : 70 % off-white, 20 % charbon, 8 % blanc/gris, 2 % orange.

**Typographie**

- Titres et corps : `IBM Plex Sans` (400, 500, 600, 700)
- Données techniques, index, références : `IBM Plex Mono` (400, 500)

**Échelle**

- `display` : `clamp(2.25rem, 5vw + 1rem, 4rem)`
- `h1` : `clamp(1.875rem, 3vw + 1rem, 3rem)`
- `h2` : `clamp(1.5rem, 2vw + 0.75rem, 2.25rem)`
- `h3` : `clamp(1.125rem, 1vw + 0.75rem, 1.5rem)`

**Espacements**

Multiples de 0.25rem. Tokens dans `src/design/tokens.ts`.

**Rayons**

`2px`, `4px`, `8px`, `999px`.

**Points de rupture**

`375px` · `768px` · `1024px` · `1440px`.

---

## Sections du portfolio

| # | Section | Composant | Ancre |
|---|---|---|---|
| 01 | Hero | `Hero.tsx` | `#home` |
| 02 | À propos | `About.tsx` | `#about` |
| 03 | Expérience | `Experience.tsx` | `#experience` |
| 04 | Compétences | `Skills.tsx` | `#skills` |
| 05 | Certifications | `Certifications.tsx` | `#certifications` |
| 06 | Méthode | `HowIWork.tsx` | `#how-i-work` |
| 07 | Formation | `Education.tsx` | `#education` |

Le contact vit uniquement dans le **footer** (email, téléphone, LinkedIn).

---

## Données éditables

Toute modification de contenu se fait dans `src/data/`. Aucun JSX à toucher.

**Ajouter une expérience** → `src/data/experience.ts`

```ts
{
  id: "exp-unique-id",
  index: "04",
  role: "Intitulé du poste",
  company: "Nom entreprise",
  location: "Ville",
  contractType: "CDI",
  period: { start: "2026-01", end: null, present: true },
  tools: ["Windows Server", "Cisco"],
  responsibilities: [
    "Première responsabilité.",
    "Deuxième responsabilité.",
  ],
  imageKey: "hutchinson",
}
```

**Ajouter une compétence** → `src/data/skills.ts`

```ts
{ name: "NouvelleTechno", level: "Opérationnel" }
```

Niveaux acceptés : `"Opérationnel"` · `"Avancé"` · `"Solide"`.

**Ajouter une certification** → `src/data/certifications.ts`

```ts
{
  id: "cert-unique",
  index: "03",
  title: "Titre de la certification",
  issuer: "Organisme",
  category: "Catégorie courte",
  summary: "Une phrase de description.",
  iconKey: "cloud",
}
```

**Ajouter une formation** → `src/data/education.ts`

```ts
{
  id: "edu-unique",
  index: "04",
  period: "2027 — 2028",
  degree: "Intitulé du diplôme",
  school: "Établissement",
  location: "Ville",
  level: 3,
  note: "Une phrase.",
}
```

**Modifier le profil** → `src/data/profile.ts` et `src/utils/constants.ts`.

**Nouvelle icône de compétence** → `src/components/ui/SkillIcon.tsx`
et `src/components/ui/TechIcon.tsx`. Ajoutez l'import Lucide et une entrée dans `ICONS`.

---

## Images

Stockées dans `src/assets/images/`. Format **WebP** recommandé.

| Fichier | Usage | Cible |
|---|---|---|
| `aya-arkid.webp` | Hero + À propos | 800×1000, < 300 KB |
| `hutchinson.webp` | Bannière Expérience | 1600×700, < 150 KB |

Remplacer une image : garder le même nom de fichier, redémarrer `npm run dev`.

Les images sont chargées via `OptimizedImage` : squelette shimmer, fade-in,
fallback en cas d'erreur, `aspect-ratio` fixe pour éviter tout CLS.

---

## Animations

Toutes les variantes vivent dans `src/design/animations.ts`.

| Variante | Usage |
|---|---|
| `fadeIn` | Apparition simple |
| `fadeUp` | Apparition vers le haut |
| `fadeLeft` / `fadeRight` | Apparition latérale |
| `reveal` | Clip-path de haut en bas |
| `imageReveal` | Zoom léger + fade |
| `stagger(delay, children)` | Cascade parent |
| `skillCard` / `skillRow` | Sections compétences |
| `skillIcon` / `skillDot` | Micro-animations internes |

Toutes les animations respectent `prefers-reduced-motion` via
`useReducedMotion()`. En mode réduit : aucun mouvement, contenu visible immédiatement.

Le **Preloader** ne s'affiche qu'à la première visite de l'onglet
(sessionStorage) et disparaît après 1.3 s.

---

## Performance

- **Lazy loading** de toutes les sections sous la ligne de flottaison
  via `React.lazy` + `Suspense`, avec un `SectionFallback` squelette
  pour éviter le flash blanc.
- **Code splitting** manuel dans `vite.config.ts` :
  `vendor-react`, `vendor-motion`, `vendor-icons`.
- **Images** : `OptimizedImage` avec `loading="lazy"`, `decoding="async"`,
  `aspect-ratio` fixe, et `fetchPriority="high"` uniquement sur le portrait Hero.
- **Polices** : préchargement + `onload` swap, pas de blocage du rendu.
- **Cible Lighthouse mobile** : Performance ≥ 90, Accessibility ≥ 95,
  Best Practices ≥ 95, SEO 100.

---

## Accessibilité

- HTML sémantique (`main`, `nav`, `header`, `footer`, `section`, `article`).
- Hiérarchie de titres stricte : un seul `h1` (Hero), `h2` par section.
- Skip-link « Aller au contenu » en haut de page.
- Tous les éléments interactifs accessibles au clavier.
- Anneau de focus orange visible partout (avec halo clair sur fond sombre).
- Piège à focus dans le menu mobile, restauration du focus à la fermeture.
- Menu mobile annoncé comme `dialog` + `aria-modal`.
- `prefers-reduced-motion` respecté sur toute animation.
- Contraste des textes conforme WCAG AA.

---

## SEO

- `<title>` optimisé : *Aya Arkid — Technicienne Systèmes & Réseaux*.
- Meta description en français.
- Balises Open Graph + Twitter Card.
- Données structurées `schema.org/Person` en JSON-LD.
- `public/robots.txt` autorisant l'indexation + pointeur sitemap.
- `public/sitemap.xml` avec l'URL canonique.
- URL canonique déclarée dans `index.html`.

**Après déploiement sur Vercel**, remplacer partout
`https://aya-arkid.vercel.app/` par votre domaine réel dans :
`index.html`, `public/robots.txt`, `public/sitemap.xml`.

---

## Déploiement sur Vercel

Le dépôt est prêt pour Vercel (voir `vercel.json`).

**Étape 1 — Push sur GitHub**

```cmd
git init
git add .
git commit -m "Initial commit — Aya Arkid portfolio"
git branch -M main
git remote add origin https://github.com/<compte>/aya-arkid-portfolio.git
git push -u origin main
```

**Étape 2 — Importer le projet sur Vercel**

1. vercel.com → **New Project** → **Import Git Repository**.
2. Choisir le dépôt GitHub.
3. Framework Preset : **Vite** (auto-détecté).
4. Build Command : `npm run build`.
5. Output Directory : `dist`.
6. Node.js Version : **20.x**.
7. Cliquer **Deploy**.

**Étape 3 — Domaine (optionnel)**

Ajouter un domaine personnalisé dans **Project Settings → Domains**.

**Étape 4 — Mise à jour SEO**

Une fois l'URL finale connue, remplacer `aya-arkid.vercel.app` par
votre domaine réel dans les 3 fichiers mentionnés plus haut, puis :

```cmd
git add .
git commit -m "chore: real domain in SEO meta"
git push
```

Vercel rebuild automatiquement.

---

## Conventions

- **TypeScript strict** : `any` interdit sauf justification.
- **Pas de données dans le JSX** : tout passe par `src/data/`.
- **Pas de className hasardeuse** : chaque classe CSS a un rôle.
- **Pas d'animations superflues** : motion au service du contenu.
- **Pas de package inutile** : avant d'ajouter une dépendance, vérifier
  qu'aucune solution interne ne suffit.
- **Commits** : `feat:`, `fix:`, `chore:`, `docs:`, `style:`.

---

## Licence

MIT — voir [LICENSE](./LICENSE).

---

**Auteur** : Aya Arkid — [LinkedIn](https://www.linkedin.com/in/aya-arkid-884804241/) — ayaarkid@gmail.com