import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "../data/profile";
import { SITE } from "../utils/constants";
import { fadeUp, fadeRight, imageReveal, stagger } from "../design/animations";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { scrollToId } from "../utils/scroll";
import ayaPortrait from "../assets/images/aya-arkid.webp";

export function Hero() {
  const reduced = useReducedMotion();

  const container = reduced ? undefined : stagger(0.09, 0.05);
  const item = reduced ? undefined : fadeUp;

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            variants={container}
            initial={reduced ? false : "hidden"}
            animate="visible"
          >
            <motion.span variants={item} className="hero-role">
              {profile.role}
            </motion.span>

            <motion.h1 variants={item} className="hero-name">
              {profile.name}
            </motion.h1>

            <motion.p variants={item} className="hero-tagline">
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="hero-cta">
  <a
    href="#experience"
    className="btn btn--primary"
    onClick={(e) => {
      e.preventDefault();
      scrollToId("experience");
    }}
  >
    Découvrir mon expérience
    <ArrowRight size={16} aria-hidden="true" />
  </a>
</motion.div>

            <motion.dl variants={item} className="hero-meta">
              {profile.meta.map((entry) => (
                <div key={entry.label} className="hero-meta-item">
                  <dt className="hero-meta-label">{entry.label}</dt>
                  <dd className="hero-meta-value">{entry.value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            className="hero-portrait"
            variants={reduced ? undefined : fadeRight}
            initial={reduced ? false : "hidden"}
            animate="visible"
          >
            <motion.figure
              className="hero-portrait-frame"
              variants={reduced ? undefined : imageReveal}
              initial={reduced ? false : "hidden"}
              animate="visible"
            >
              <img
                src={ayaPortrait}
                alt={`Portrait de ${SITE.name}, ${SITE.role}`}
                className="hero-portrait-img"
                width={800}
                height={1000}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </motion.figure>
            <span className="hero-portrait-caption" aria-hidden="true">
              {SITE.location}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}