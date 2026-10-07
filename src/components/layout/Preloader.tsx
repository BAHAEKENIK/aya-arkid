import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { SITE } from "../../utils/constants";

const EASE = [0.65, 0, 0.35, 1] as const;
const HOLD_MS = 1300;

export function Preloader() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState<boolean>(!reduced);

  useEffect(() => {
    if (reduced) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => setVisible(false), HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  const letters = SITE.name.split("");

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="preloader"
          className="preloader"
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 1 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.05 }}
          aria-hidden="true"
        >
          <div className="preloader-inner">
            <div className="preloader-head">
              <span className="preloader-eyebrow">Portfolio — 2026</span>
              <span className="preloader-meta">SYS · NET · INFRA</span>
            </div>

            <h1 className="preloader-title">
              {letters.map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  className="preloader-letter"
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: EASE,
                    delay: 0.15 + index * 0.035,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>

            <motion.span
              className="preloader-rule"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.5 }}
            />

            <motion.p
              className="preloader-role"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.75 }}
            >
              {SITE.role}
            </motion.p>

            <div className="preloader-foot">
              <span className="preloader-foot-label">Chargement</span>
              <span className="preloader-track">
                <motion.span
                  className="preloader-progress"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
                />
              </span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}