import type { Variants, Transition } from "framer-motion";
import { motion } from "./tokens";

/**
 * Animation variants — Aya Arkid Portfolio
 * Subtle, professional, content-driven.
 * All variants respect prefers-reduced-motion via the useReducedMotion hook at consumption site.
 */

export const easeOut: Transition["ease"] = motion.easeOut;
export const easeInOut: Transition["ease"] = motion.easeInOut;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: motion.base, ease: easeOut },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motion.slow, ease: easeOut },
  },
};

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motion.base, ease: easeOut },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motion.base, ease: easeOut },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: motion.slow, ease: easeOut },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: motion.slow, ease: easeOut },
  },
};

export const reveal: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: motion.reveal, ease: easeOut },
  },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: motion.reveal, ease: easeOut },
  },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const hoverLift = {
  whileHover: { y: -3 },
  whileTap: { y: 0 },
  transition: { duration: motion.fast, ease: easeOut },
} as const;

export const underlineSweep = {
  rest: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    transition: { duration: motion.base, ease: easeOut },
  },
} as const;

export const sectionViewport = {
  once: true,
  margin: "-80px 0px -80px 0px",
} as const;
/* ---------- Skill-specific motion ---------- */

export const skillCard: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const skillRow: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

export const skillIcon: Variants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -6 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

export const skillDot: Variants = {
  hidden: { scale: 0.4, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.28,
      delay: 0.15 + i * 0.09,
      ease: easeOut,
    },
  }),
};