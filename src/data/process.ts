export interface ProcessStep {
  id: string;
  index: string;
  title: string;
  description: string;
  iconKey: "search" | "scan" | "wrench" | "activity";
}

export const processSteps: ProcessStep[] = [
  {
    id: "step-diagnose",
    index: "01",
    title: "Diagnostiquer",
    description:
      "Comprendre le problème utilisateur, le contexte d'infrastructure et les symptômes réels.",
    iconKey: "search",
  },
  {
    id: "step-analyse",
    index: "02",
    title: "Analyser",
    description:
      "Identifier la cause racine avec une méthode de dépannage structurée et rigoureuse.",
    iconKey: "scan",
  },
  {
    id: "step-resolve",
    index: "03",
    title: "Résoudre",
    description:
      "Mettre en place une solution technique fiable, pratique et adaptée au terrain.",
    iconKey: "wrench",
  },
  {
    id: "step-maintain",
    index: "04",
    title: "Maintenir",
    description:
      "Documenter, surveiller et prévenir la récurrence des incidents dans la durée.",
    iconKey: "activity",
  },
];