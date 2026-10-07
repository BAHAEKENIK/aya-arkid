import { motion } from "framer-motion";
import { skillGroups, type Skill, type SkillGroup } from "../data/skills";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { SkillIcon } from "../components/ui/SkillIcon";
import {
  skillCard,
  skillRow,
  skillIcon,
  skillDot,
  stagger,
  sectionViewport,
} from "../design/animations";
import { useReducedMotion } from "../hooks/useReducedMotion";

const LEVEL_SCORE: Record<Skill["level"], number> = {
  Opérationnel: 1,
  Avancé: 2,
  Solide: 3,
};

const CATEGORY_TAG: Record<string, string> = {
  systems: "0 1",
  networks: "0 2",
  support: "0 3",
};

export function Skills() {
  const reduced = useReducedMotion();

  const gridVariants = reduced
    ? undefined
    : stagger(0.16, 0.08);

  const rowStagger = reduced
    ? undefined
    : stagger(0.055, 0.12);

  return (
    <Section id="skills" aria-labelledby="skills-title">
      <SectionHeader
        eyebrow="03 — Compétences"
        title={<span id="skills-title">Profil technique</span>}
        description="Systèmes, réseaux et support utilisateur — les domaines que j'exploite au quotidien en environnement industriel."
      />

      <motion.div
        className="sk-grid"
        variants={gridVariants}
        initial={reduced ? false : "hidden"}
        whileInView="visible"
        viewport={sectionViewport}
      >
        {skillGroups.map((group) => (
          <SkillGroupCard
            key={group.id}
            group={group}
            reduced={reduced}
            rowStagger={rowStagger}
          />
        ))}
      </motion.div>
    </Section>
  );
}

interface SkillGroupCardProps {
  group: SkillGroup;
  reduced: boolean;
  rowStagger: ReturnType<typeof stagger> | undefined;
}

function SkillGroupCard({ group, reduced, rowStagger }: SkillGroupCardProps) {
  const tag = CATEGORY_TAG[group.id] ?? group.ref;

  return (
    <motion.article
      className="sk-group"
      variants={reduced ? undefined : skillCard}
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      aria-labelledby={`sk-${group.id}`}
    >
      <header className="sk-group-head">
        <motion.span
          className="sk-group-tag"
          aria-hidden="true"
          initial={reduced ? false : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {tag}
        </motion.span>
        <div className="sk-group-heading">
          <h3 id={`sk-${group.id}`} className="sk-group-title">
            {group.label}
          </h3>
          <p className="sk-group-desc">{group.description}</p>
        </div>
      </header>

      <motion.ul
        className="sk-list"
        variants={rowStagger}
        initial={reduced ? false : "hidden"}
        whileInView="visible"
        viewport={sectionViewport}
      >
        {group.skills.map((skill) => (
          <SkillRow key={skill.name} skill={skill} reduced={reduced} />
        ))}
      </motion.ul>
    </motion.article>
  );
}

interface SkillRowProps {
  skill: Skill;
  reduced: boolean;
}

function SkillRow({ skill, reduced }: SkillRowProps) {
  const score = LEVEL_SCORE[skill.level];

  return (
    <motion.li
      className="sk-row"
      variants={reduced ? undefined : skillRow}
      whileHover={reduced ? undefined : { x: 3 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.span
        className="sk-row-tile"
        aria-hidden="true"
        variants={reduced ? undefined : skillIcon}
      >
        <SkillIcon name={skill.name} size={18} />
      </motion.span>

      <span className="sk-row-info">
        <span className="sk-row-name">{skill.name}</span>
        <span className="sk-row-level">{skill.level}</span>
      </span>

      <span className="sk-row-dots" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className={`sk-dot${i < score ? " is-on" : ""}`}
            variants={reduced ? undefined : skillDot}
            custom={i}
          />
        ))}
      </span>
    </motion.li>
  );
}