export interface Certification {
  id: string;
  index: string;
  title: string;
  issuer: string;
  category: string;
  summary: string;
  iconKey: "cloud" | "shield";
}

export const certifications: Certification[] = [
  {
    id: "cert-aws-cloud-foundations",
    index: "01",
    title: "AWS Academy Graduate",
    issuer: "AWS Academy",
    category: "Cloud Foundations",
    summary:
      "Fondamentaux du cloud computing — concepts, services AWS, sécurité et modèles de déploiement.",
    iconKey: "cloud",
  },
  {
    id: "cert-rssi",
    index: "02",
    title: "Certification RSSI",
    issuer: "Sécurité des Systèmes d'Information",
    category: "Responsable de la Sécurité des Systèmes d'Information",
    summary:
      "Gouvernance de la sécurité SI — politiques, gestion des risques et protection des infrastructures.",
    iconKey: "shield",
  },
];