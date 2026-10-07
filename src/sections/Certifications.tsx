import { motion } from "framer-motion";
import { Cloud, ShieldCheck, type LucideIcon } from "lucide-react";
import { certifications, type Certification } from "../data/certifications";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import {
  skillCard,
  stagger,
  sectionViewport,
} from "../design/animations";
import { useReducedMotion } from "../hooks/useReducedMotion";

const ICONS: Record<Certification["iconKey"], LucideIcon> = {
  cloud: Cloud,
  shield: ShieldCheck,
};

export function Certifications() {
  const reduced = useReducedMotion();
  const container = reduced ? undefined : stagger(0.14, 0.05);

  return (
    <Section id="certifications" aria-labelledby="certifications-title">
      <SectionHeader
        eyebrow="04 — Certifications"
        title={<span id="certifications-title">Certifications professionnelles</span>}
        description="Des validations techniques obtenues en complément du parcours terrain."
      />

      <motion.ul
        className="cert-grid"
        variants={container}
        initial={reduced ? false : "hidden"}
        whileInView="visible"
        viewport={sectionViewport}
      >
        {certifications.map((cert) => (
          <CertCard key={cert.id} cert={cert} reduced={reduced} />
        ))}
      </motion.ul>
    </Section>
  );
}

interface CertCardProps {
  cert: Certification;
  reduced: boolean;
}

function CertCard({ cert, reduced }: CertCardProps) {
  const Icon = ICONS[cert.iconKey];

  return (
    <motion.li
      className="cert-card"
      variants={reduced ? undefined : skillCard}
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="cert-head">
        <motion.span
          className="cert-badge"
          aria-hidden="true"
          initial={reduced ? false : { opacity: 0, scale: 0.85, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Icon size={22} strokeWidth={1.5} />
        </motion.span>

        <span className="cert-index" aria-hidden="true">
          {cert.index}
        </span>
      </div>

      <div className="cert-body">
        <span className="cert-category">{cert.category}</span>
        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-issuer">{cert.issuer}</p>
        <p className="cert-summary">{cert.summary}</p>
      </div>
    </motion.li>
  );
}