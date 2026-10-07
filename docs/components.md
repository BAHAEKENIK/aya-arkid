# Components

## Layout

### `Navbar.tsx`

- Position fixe en haut, fond translucide + blur.
- Scroll spy via `useScrollSpy(navSectionIds)`.
- Bascule mobile via `useLockBodyScroll` + `useFocusTrap`.
- Fermeture sur `Escape`, restauration du focus sur le toggle.
- Ne consomme pas de prop : lit `navItems` depuis `data/navigation.ts`.

### `NavLink.tsx`

- Deux variantes : `desktop` (underline animé) et `mobile` (index + label).
- Clique intercepté → `scrollToId(id)` → `onNavigate?.()`.

### `Footer.tsx`

- Deux colonnes desktop : marque à gauche, ledger contact à droite.
- Contient email, téléphone, localisation, LinkedIn.
- Bouton « Haut de page » → `scrollToTop()`.

### `Preloader.tsx`

- Écran plein off-white, titre révélé lettre par lettre.
- Durée fixe : 1 300 ms.
- Ne s'affiche qu'à la première visite de l'onglet (`useFirstVisit`).
- Désactivé entièrement si `prefers-reduced-motion`.

## UI

### `Section.tsx`

Enveloppe standard pour chaque section.

```tsx
<Section id="about" variant="default" container="default">
  ...
</Section>
```

- `variant` : `default` · `dark` · `tight`
- `container` : `default` · `narrow` · `wide` · `full`

### `SectionHeader.tsx`

```tsx
<SectionHeader
  eyebrow="01 — À propos"
  title={<span id="about-title">Titre</span>}
  description="Une phrase."
/>
```

`title` accepte un ReactNode pour pouvoir y attacher un `id` et servir
de cible `aria-labelledby`.

### `SectionFallback.tsx`

Squelette affiché par `Suspense` pendant le chargement d'une section lazy.
Props : `variant` (`default` | `dark`), `rows`, `withHeader`.

### `OptimizedImage.tsx`

Wrapper d'image avec état de chargement.

```tsx
<OptimizedImage
  src={ayaPortrait}
  alt="Portrait d'Aya Arkid"
  width={800}
  height={1000}
  aspectRatio="4 / 5"
  objectPosition="center top"
  loading="lazy"
  wrapperClassName="about-portrait"
/>
```

- Affiche un squelette shimmer pendant le chargement.
- Fade-in à 0.45 s une fois chargé.
- Fallback texte mono en cas d'erreur.
- `aspect-ratio` fixe = aucun CLS.

### `Skeleton.tsx`

Primitive squelette, réutilisable hors contexte image.

### `SkillIcon.tsx` et `TechIcon.tsx`

Résolvent un nom de techno vers un composant Lucide. Si le nom est
inconnu, retourne `Server` par défaut. Toute nouvelle techno doit
être ajoutée dans la map `ICONS`.

## Ajouter un composant

1. Le placer dans `components/ui/` (primitif) ou `components/layout/`
   (structure de site).
2. Exporter en named export, pas en default.
3. Typer les props avec `interface`.
4. Style : classe CSS dans `styles/globals.css` (primitif) ou
   `styles/sections.css` (spécifique à une section).
5. Ne pas inventer de nouvelle couleur — utiliser un token.