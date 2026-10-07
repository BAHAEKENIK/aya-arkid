import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education, type EducationItem } from "../data/education";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import {
  stagger,
  sectionViewport,
  easeOut,
} from "../design/animations";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function Education() {
  const reduced = useReducedMotion();
  const container = reduced ? undefined : stagger(0.14, 0.05);

  return (
    <Section id="education" aria-labelledby="education-title">
      <SectionHeader
        eyebrow="06 — Formation"
        title={<span id="education-title">Formation académique</span>}
        description="Du socle technique au cursus supérieur — un parcours construit autour des systèmes, des réseaux et de l'infrastructure."
      />

      <motion.ol
        className="edu-list"
        variants={container}
        initial={reduced ? false : "hidden"}
        whileInView="visible"
        viewport={sectionViewport}
      >
        {education.map((item) => (
          <EducationRow key={item.id} item={item} reduced={reduced} />
        ))}
      </motion.ol>
    </Section>
  );
}

interface EducationRowProps {
  item: EducationItem;
  reduced: boolean;
}

function EducationRow({ item, reduced }: EducationRowProps) {
  const rowVariants = reduced
    ? undefined
    : {
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easeOut },
        },
      };

  return (
    <motion.li
      className={`edu-item${item.current ? " is-current" : ""}`}
      variants={rowVariants}
    >
      <div className="edu-year">
        <span className="edu-year-period">{item.period}</span>
        <span className="edu-year-index" aria-hidden="true">
          {item.index}
        </span>
      </div>

      <div className="edu-rail" aria-hidden="true">
        <span className="edu-node">
          {item.current ? (
            <GraduationCap size={12} strokeWidth={1.8} />
          ) : null}
        </span>
        <span className="edu-rail-line" />
      </div>

      <div className="edu-content">
        <h3 className="edu-degree">{item.degree}</h3>
        <p className="edu-school">
          <strong>{item.school}</strong>
          {item.location ? (
            <>
              <span className="edu-school-sep" aria-hidden="true">
                /
              </span>
              <span>{item.location}</span>
            </>
          ) : null}
        </p>
        <p className="edu-note">{item.note}</p>

        <ul className="edu-level" aria-label={`Niveau ${item.level} sur 3`}>
          {[1, 2, 3].map((n) => (
            <li
              key={n}
              className={`edu-level-bar${n <= item.level ? " is-on" : ""}`}
              aria-hidden="true"
            />
          ))}
        </ul>
      </div>
    </motion.li>
  );
}