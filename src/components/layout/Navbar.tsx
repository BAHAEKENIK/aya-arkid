import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, navSectionIds } from "../../data/navigation";
import { SITE } from "../../utils/constants";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { scrollToId } from "../../utils/scroll";
import { cn } from "../../utils/cn";
import { NavLink } from "./NavLink";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(navSectionIds);
  const reduced = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useLockBodyScroll(menuOpen);
  useFocusTrap(menuRef, menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId("home");
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <>
      <header className={cn("navbar", scrolled && "is-scrolled")}>
        <div className="container navbar-inner">
          <a
            href="#home"
            onClick={handleBrandClick}
            className="navbar-brand"
            aria-label={`${SITE.name} — retour en haut`}
          >
            <span className="navbar-brand-mark" aria-hidden="true" />
            <span className="navbar-brand-text">
              <strong>{SITE.name}</strong>
              <em>{SITE.role}</em>
            </span>
          </a>

          <nav className="navbar-nav" aria-label="Navigation principale">
            <ul className="navbar-nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    id={item.id}
                    label={item.label}
                    href={item.href}
                    active={activeId === item.id}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="navbar-toggle"
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            className="mobile-menu"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
          >
            <nav aria-label="Navigation mobile">
              <ul className="mobile-menu-list">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={reduced ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: reduced ? 0 : index * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <NavLink
                      id={item.id}
                      label={item.label}
                      href={item.href}
                      active={activeId === item.id}
                      onNavigate={closeMenu}
                      variant="mobile"
                    />
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}