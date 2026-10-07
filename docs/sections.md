# Sections

## Ordre d'affichage

1. Preloader (une seule fois par onglet)
2. Navbar (fixe)
3. Hero `#home`
4. About `#about`
5. Experience `#experience`
6. Skills `#skills`
7. Certifications `#certifications`
8. How I Work `#how-i-work`
9. Education `#education`
10. Footer

Le contact vit exclusivement dans le footer (email, téléphone, LinkedIn).
Aucune section « Contact » séparée.

## Hero — `sections/Hero.tsx`

- Deux colonnes desktop, une seule mobile.
- Titre principal `h1` unique de la page.
- Portrait `aya-arkid.webp` chargé en `eager` avec `fetchPriority="high"`.
- Un seul CTA : « Découvrir mon expérience » → ancre `#experience`.
- Méta : Basée à, Environnement, Disponibilité.
- Données : `data/profile.ts`.

## About — `sections/About.tsx`

- Deux colonnes desktop : portrait à gauche, texte à droite.
- Paragraphe `lead` + deux paragraphes de corps + faits (`dl`).
- Données : `data/profile.ts → about`.

## Experience — `sections/Experience.tsx`

- **Bannière unique** en haut : photo d'environnement industriel
  (`hutchinson.webp`) avec légende mono.
- **Ledger list** : un `<li>` par expérience.
- Chaque entrée : période (orange mono) à gauche, référence à droite,
  rôle, entreprise / lieu, chips de technos avec icônes, responsabilités.
- Aucune image par entrée. Une seule image pour toute la section.
- Données : `data/experience.ts`.

## Skills — `sections/Skills.tsx`

- Trois cartes : Systèmes, Réseaux, Support & Administration.
- Chaque carte : tag mono `01 / 02 / 03`, titre, description.
- Chaque ligne : tuile d'icône, nom, niveau, 3 points d'indicateur.
- Hover : ligne teintée orange, tuile bordure orange.
- Données : `data/skills.ts`.

## Certifications — `sections/Certifications.tsx`

- Deux cartes en grille 2 colonnes (1 sur mobile).
- Chaque carte : filet orange en haut, badge icône (Cloud / ShieldCheck),
  index, catégorie orange, titre, émetteur, séparateur, résumé.
- Données : `data/certifications.ts`.

## How I Work — `sections/HowIWork.tsx`

- Section sombre (`#202124`), unique avec le footer.
- Quatre étapes : Diagnostiquer, Analyser, Résoudre, Maintenir.
- Desktop : rail horizontal reliant les 4 nœuds circulaires.
- Mobile : 2×2 puis pile verticale.
- Icônes Lucide : Search, ScanLine, Wrench, Activity.
- Données : `data/process.ts`.

## Education — `sections/Education.tsx`

- **Fiche académique** sur 3 colonnes :
  - Année + référence à gauche
  - Rail vertical avec nœud au milieu
  - Diplôme, école, note, indicateur de niveau à droite
- L'entrée en cours (ENSI) a un nœud orange plein avec chapeau.
- Les autres ont un petit point gris.
- Indicateur : 3 barres horizontales, remplies selon le niveau.
- Données : `data/education.ts`.

## Footer — `components/layout/Footer.tsx`

- Section sombre, filet orange dégradé en haut.
- Deux colonnes desktop : marque à gauche, ledger contact à droite.
- Ledger : Email, Téléphone, Localisation, LinkedIn (icône + label + valeur).
- Clic sur ligne → mailto / tel / LinkedIn.
- Hover : ligne glisse à droite, texte orange.
- Bas : copyright + bouton « Haut de page ».
- Données : `utils/constants.ts` (`SITE`, `SOCIAL`).

## Modifier l'ordre des sections

Dans `src/App.tsx`, réordonner les imports et les composants dans `<main>`.
Mettre à jour `navItems` dans `data/navigation.ts` pour refléter le
nouvel ordre dans la navigation.