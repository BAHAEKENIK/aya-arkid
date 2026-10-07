import { useEffect } from "react";

/**
 * Locks body scroll while `locked` is true.
 * Preserves current scroll position and compensates for scrollbar width
 * to avoid layout shift when the mobile menu opens.
 */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (!locked) return;

    const body = document.body;
    const scrollBarComp = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;

    body.style.overflow = "hidden";
    if (scrollBarComp > 0) {
      body.style.paddingRight = `${scrollBarComp}px`;
    }

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [locked]);
}