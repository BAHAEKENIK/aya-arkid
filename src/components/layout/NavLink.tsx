import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { scrollToId } from "../../utils/scroll";

interface NavLinkProps {
  id: string;
  label: string;
  href: string;
  active: boolean;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
}

export function NavLink({
  id,
  label,
  href,
  active,
  onNavigate,
  variant = "desktop",
}: NavLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToId(id);
    onNavigate?.();
  };

  if (variant === "mobile") {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={cn("mobile-nav-link", active && "is-active")}
        aria-current={active ? "true" : undefined}
      >
        <span className="mobile-nav-link-index" aria-hidden="true">
          {String(id.charCodeAt(0) % 100).padStart(2, "0")}
        </span>
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn("nav-link", active && "is-active")}
      aria-current={active ? "true" : undefined}
    >
      <span className="nav-link-label">{label}</span>
      <motion.span
        className="nav-link-underline"
        aria-hidden="true"
        initial={false}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </a>
  );
}