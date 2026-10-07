# Design System

## Philosophie

Le design communique : infrastructure, fiabilité, professionnalisme,
précision technique, expertise humaine. Il refuse volontairement les
codes des portfolios de développeurs génériques.

**Interdit** : dégradés violet/bleu, néon, glassmorphism, cartes noires
partout, effets holographiques, cursor-following, particules.

**Recherché** : éditorial, minimal, structurel, industriel, humain.

## Palette

Source unique de vérité : `src/design/tokens.ts` (`colors`).
Exposée au CSS via `:root` dans `src/index.css`.

| Token | Hex | Usage |
|---|---|---|
| `bg` | `#F7F6F2` | Fond principal |
| `text` | `#202124` | Texte fort, titres |
| `textSoft` | `#5F6368` | Texte secondaire, descriptions |
| `border` | `#D9D7D0` | Filets, séparateurs |
| `white` | `#FFFFFF` | Surfaces surélevées (cartes) |
| `accent` | `#C65D2E` | Accent unique — orange terre cuite |
| `dark` | `#202124` | Sections sombres |
| `skeleton` | `#E8E6DF` | Squelettes de chargement |

**Répartition visuelle cible**

- 70 % off-white (fond)
- 20 % charbon (texte + sections sombres)
- 8 % blanc/gris (surfaces, filets)
- 2 % orange (accents uniquement)

L'orange est réservé à : eyebrows, index, marqueurs, hover, focus ring,
underline nav actif. Jamais un fond entier.

## Typographie

Deux familles Google Fonts :

- **IBM Plex Sans** — 400, 500, 600, 700 — titres, corps
- **IBM Plex Mono** — 400, 500 — métadonnées, index, références

Aucune autre police n'est chargée. Inter est retiré du projet.

**Échelle fluide** (`design/tokens.ts` → `typeScale`)

| Token | Taille |
|---|---|
| `display` | `clamp(2.25rem, 5vw + 1rem, 4rem)` |
| `h1` | `clamp(1.875rem, 3vw + 1rem, 3rem)` |
| `h2` | `clamp(1.5rem, 2vw + 0.75rem, 2.25rem)` |
| `h3` | `clamp(1.125rem, 1vw + 0.75rem, 1.5rem)` |
| `body` | `1rem` |
| `small` | `0.875rem` |
| `micro` | `0.75rem` |

**Règle** : toute donnée technique (dates, index, refs) est en mono
uppercase avec letter-spacing 0.14em à 0.22em.

## Espacements

Multiples de `0.25rem`. Tokens `space` de `1` à `10` :

```
space.1  0.25rem     space.5  1.5rem      space.8   4rem
space.2  0.5rem      space.6  2rem        space.9   6rem
space.3  0.75rem     space.7  3rem        space.10  8rem
space.4  1rem
```

Les sections utilisent `clamp(4rem, 8vw, 7rem)` en padding vertical
pour respirer à toutes les tailles d'écran.

## Rayons

`sm 2px` · `md 4px` · `lg 8px` · `pill 999px`.

Les cartes utilisent `lg`, les tuiles d'icône `sm`, les chips `sm`.
Jamais de rayon > 8px sur un conteneur large.

## Ombres

Très discrètes, uniquement au survol.

```css
box-shadow: 0 10px 24px -18px rgba(32, 33, 36, 0.18);
```

Aucune ombre colorée. Aucun glow.

## Points de rupture

| Nom | Largeur |
|---|---|
| Mobile | 375px |
| Tablet | 768px |
| Laptop | 1024px |
| Desktop | 1440px |

Mobile-first. Les media queries montent à partir de 640 / 768 / 1024 / 1440.

## Composants primitifs

| Classe | Rôle |
|---|---|
| `.container` | Largeur max + gutter responsive |
| `.section` | Padding vertical rythmé |
| `.section--dark` | Inversion complète de la palette |
| `.section-header` | Eyebrow + titre + description |
| `.btn--primary` | Orange plein, action principale |
| `.btn--secondary` | Contour, action secondaire |
| `.card` | Surface blanche + filet |
| `.tag` | Chip mono outline |
| `.skeleton` | Fond `#E8E6DF` + shimmer |
| `.skip-link` | Lien d'évitement accessible |

## Focus ring

Toujours 2px `#C65D2E` avec offset 3px. Sur fond sombre, un halo
clair (`box-shadow: 0 0 0 4px rgba(247,246,242,0.15)`) est ajouté
pour rester visible.