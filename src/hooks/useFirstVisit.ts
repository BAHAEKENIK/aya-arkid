import { useEffect, useState } from "react";

const KEY = "aya-portfolio-visited";

/**
 * Returns true only on the very first page load of a browsing session.
 * Uses sessionStorage so the preloader does not replay on every navigation,
 * but does show again when the tab is closed and reopened.
 */
export function useFirstVisit(): boolean {
  const [isFirst, setIsFirst] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      return !window.sessionStorage.getItem(KEY);
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!isFirst) return;
    try {
      window.sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore — preloader just plays once more next reload */
    }
  }, [isFirst]);

  return isFirst;
}