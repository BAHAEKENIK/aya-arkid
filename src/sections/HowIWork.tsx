import { motion } from "framer-motion";
import {
  Search,
  ScanLine,
  Wrench,
  Activity,
  type LucideIcon,
} from "lucide-react";
import { processSteps, type ProcessStep } from "../data/process";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import {
  stagger,
  sectionViewport,
  easeOut,
} from "../design/animations";
import { useReducedMotion } from "../hooks/useReducedMotion";

const ICONS: Record<ProcessStep["iconKey"], LucideIcon> = {
  search: Search,
  scan: ScanLine,
  wrench: Wrench,
  activity: Activity,
};

export function HowIWork() {
  const reduced = useReducedMotion();
  const container = reduced ? undefined : stagger(0.14, 0.05);

  return (
    <Section
      id="how-i-work"
      variant="dark"
      aria-labelledby="how-title"
    >
      <SectionHeader
        eyebrow="05 — Méthode"
        title={<span id="how-title">Comment je travaille</span>}
        description="Une approche structurée du support et des incidents — de la détection à la prévention."
      />

      <motion.ol
        className="flow"
        variants={container}
        initial={reduced ? false : "hidden"}
        whileInView="visible"
        viewport={sectionViewport}
      >
        {processSteps.map((step) => (
          <FlowStep key={step.id} step={step} reduced={reduced} />
        ))}
      </motion.ol>
    </Section>
  );
}

interface FlowStepProps {
  step: ProcessStep;
  reduced: boolean;
}

function FlowStep({ step, reduced }: FlowStepProps) {
  const Icon = ICONS[step.iconKey];

  const stepVariants = reduced
    ? undefined
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: easeOut },
        },
      };

  return (
    <motion.li className="flow-step" variants={stepVariants}>
      <span className="flow-node" aria-hidden="true">
        <span className="flow-node-ring" />
        <motion.span
          className="flow-node-icon"
          initial={reduced ? false : { opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: easeOut, delay: 0.15 }}
        >
          <Icon size={18} strokeWidth={1.6} />
        </motion.span>
      </span>

      <span className="flow-index" aria-hidden="true">
        {step.index}
      </span>
      <h3 className="flow-title">{step.title}</h3>
      <p className="flow-desc">{step.description}</p>
    </motion.li>
  );
}