/**
 * Smooth-scroll helpers that respect the sticky header offset
 * and prefers-reduced-motion.
 */

const HEADER_OFFSET = 72;

export function scrollToId(id: string, offset: number = HEADER_OFFSET): void {
  if (typeof document === "undefined") return;

  const target = document.getElementById(id);
  if (!target) return;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const top =
    target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: prefersReduced ? "auto" : "smooth",
  });

  // Keep URL shareable without triggering a second jump
  if (window.history.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
}

export function scrollToTop(): void {
  if (typeof window === "undefined") return;
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
}