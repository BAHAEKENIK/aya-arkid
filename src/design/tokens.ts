/**
 * Design tokens — Aya Arkid Portfolio
 * Single source of truth for colors, typography, spacing, breakpoints.
 * Consumed by CSS variables (index.css) and by TS components when needed.
 */

export const colors = {
  bg: "#F7F6F2",
  text: "#202124",
  textSoft: "#5F6368",
  border: "#D9D7D0",
  white: "#FFFFFF",
  accent: "#C65D2E",
  dark: "#202124",
  skeleton: "#E8E6DF",
} as const;

export const fonts = {
  primary: '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
} as const;

export const typeScale = {
  display: "clamp(2.25rem, 5vw + 1rem, 4rem)",
  h1: "clamp(1.875rem, 3vw + 1rem, 3rem)",
  h2: "clamp(1.5rem, 2vw + 0.75rem, 2.25rem)",
  h3: "clamp(1.125rem, 1vw + 0.75rem, 1.5rem)",
  body: "1rem",
  small: "0.875rem",
  micro: "0.75rem",
} as const;

export const space = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.5rem",
  6: "2rem",
  7: "3rem",
  8: "4rem",
  9: "6rem",
  10: "8rem",
} as const;

export const radius = {
  sm: "2px",
  md: "4px",
  lg: "8px",
  pill: "999px",
} as const;

export const breakpoints = {
  mobile: 375,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
} as const;

export const layout = {
  maxWidth: "1200px",
  narrow: "760px",
  wide: "1320px",
  gutter: "1.25rem",
  gutterLg: "2.5rem",
} as const;

export const motion = {
  fast: 0.18,
  base: 0.3,
  slow: 0.6,
  reveal: 0.7,
  easeOut: [0.16, 1, 0.3, 1] as const,
  easeInOut: [0.65, 0, 0.35, 1] as const,
} as const;

export type Color = keyof typeof colors;
export type Space = keyof typeof space;
export type Radius = keyof typeof radius;
export type TypeToken = keyof typeof typeScale;