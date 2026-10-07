import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view based on element IDs.
 * Uses IntersectionObserver with rootMargin to bias toward the section
 * crossing the upper third of the viewport.
 */
export function useScrollSpy(
  sectionIds: string[],
  options?: { rootMargin?: string; threshold?: number[] }
): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined" || sectionIds.length === 0) return;

    const rootMargin = options?.rootMargin ?? "-35% 0px -55% 0px";
    const threshold = options?.threshold ?? [0, 0.25, 0.5, 0.75, 1];

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }
        }

        if (visible.size === 0) return;

        let bestId = "";
        let bestRatio = -1;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (bestId) setActiveId(bestId);
      },
      { rootMargin, threshold }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, options?.rootMargin, options?.threshold]);

  return activeId;
}