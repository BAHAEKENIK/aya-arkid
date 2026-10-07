import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { SITE } from "../utils/constants";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { fadeUp, fadeRight, stagger, sectionViewport } from "../design/animations";
import { useReducedMotion } from "../hooks/useReducedMotion";
import ayaPortrait from "../assets/images/aya-arkid.webp";

export function About() {
  const reduced = useReducedMotion();

  const container = reduced ? undefined : stagger(0.08, 0.05);
  const item = reduced ? undefined : fadeUp;
  const portraitAnim = reduced ? undefined : fadeRight;

  return (
    <Section id="about" aria-labelledby="about-title">
      <SectionHeader
        eyebrow="01 — À propos"
        title={
          <span id="about-title">
            Infrastructure, systèmes et support au service des utilisateurs
          </span>
        }
        description="Un profil technique orienté terrain, habitué aux environnements industriels exigeants."
      />

      <motion.div
        className="about-grid"
        variants={container}
        initial={reduced ? false : "hidden"}
        whileInView="visible"
        viewport={sectionViewport}
      >
        <motion.div className="about-intro" variants={item}>
          <OptimizedImage
            src={ayaPortrait}
            alt={`Portrait de ${SITE.name}, ${SITE.role}`}
            width={800}
            height={1000}
            wrapperClassName="about-portrait"
            loading="lazy"
            aspectRatio="4 / 5"
            objectPosition="center top"
          />
        </motion.div>

        <motion.div className="about-body" variants={portraitAnim}>
          <p className="lead">{profile.about.lead}</p>

          {profile.about.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}

          <dl className="about-facts">
            {profile.about.facts.map((fact) => (
              <div key={fact.label} className="about-fact">
                <dt className="about-fact-label">{fact.label}</dt>
                <dd className="about-fact-value">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </motion.div>
    </Section>
  );
}