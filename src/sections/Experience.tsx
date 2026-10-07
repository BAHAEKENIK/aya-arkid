import { motion } from "framer-motion";
import { experience, type ExperienceItem } from "../data/experience";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { TechIcon } from "../components/ui/TechIcon";
import { formatPeriod } from "../utils/formatDate";
import { fadeUp, stagger, sectionViewport } from "../design/animations";
import { useReducedMotion } from "../hooks/useReducedMotion";
import hutchinsonEnv from "../assets/images/hutchinson.webp";

export function Experience() {
  const reduced = useReducedMotion();
  const container = reduced ? undefined : stagger(0.12, 0.05);

  return (
    <Section id="experience" aria-labelledby="experience-title">
      <SectionHeader
        eyebrow="02 — Parcours"
        title={<span id="experience-title">Expérience professionnelle</span>}
        description="Un parcours terrain en environnement industriel — support utilisateurs, administration systèmes et gestion du réseau."
      />

      <figure className="xp-banner">
        <OptimizedImage
          src={hutchinsonEnv}
          alt="Environnement industriel Hutchinson à Tanger"
          width={1600}
          height={700}
          wrapperClassName="xp-banner-img"
          loading="lazy"
          aspectRatio="21 / 9"
          objectPosition="center 45%"
        />
        <figcaption>
          <span>Hutchinson · Tanger</span>
          <span>Environnement industriel</span>
        </figcaption>
      </figure>

      <motion.ol
        className="xp-list"
        variants={container}
        initial={reduced ? false : "hidden"}
        whileInView="visible"
        viewport={sectionViewport}
      >
        {experience.map((item) => (
          <ExperienceEntry key={item.id} item={item} reduced={reduced} />
        ))}
      </motion.ol>
    </Section>
  );
}

interface ExperienceEntryProps {
  item: ExperienceItem;
  reduced: boolean;
}

function ExperienceEntry({ item, reduced }: ExperienceEntryProps) {
  const itemAnim = reduced ? undefined : fadeUp;

  return (
    <motion.li className="xp-item" variants={itemAnim}>
      <header className="xp-head">
        <span className="xp-period">{formatPeriod(item.period)}</span>
        <span className="xp-ref">
          N° {item.index} — {item.contractType}
        </span>
      </header>

      <h3 className="xp-role">{item.role}</h3>

      <p className="xp-company">
        <strong>{item.company}</strong>
        <span className="xp-sep" aria-hidden="true">
          /
        </span>
        <span>{item.location}</span>
      </p>

      <ul className="xp-tools" aria-label="Technologies et outils">
        {item.tools.map((tool) => (
          <li key={tool} className="xp-tool">
            <TechIcon name={tool} size={14} />
            <span>{tool}</span>
          </li>
        ))}
      </ul>

      <ul className="xp-duties">
        {item.responsibilities.map((duty) => (
          <li key={duty}>{duty}</li>
        ))}
      </ul>
    </motion.li>
  );
}