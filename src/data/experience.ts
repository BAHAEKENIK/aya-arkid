import type { DateRange } from "../utils/formatDate";

export interface ExperienceItem {
  id: string;
  index: string;
  role: string;
  company: string;
  location: string;
  contractType: string;
  period: DateRange;
  tools: string[];
  responsibilities: string[];
  imageKey?: "hutchinson";
}

export const experience: ExperienceItem[] = [
  {
    id: "exp-hutchinson-cdi",
    index: "01",
    role: "Technicienne IT",
    company: "Hutchinson",
    location: "Tanger",
    contractType: "CDI",
    period: { start: "2024-10", end: null, present: true },
    tools: [
      "Windows Server",
      "Active Directory",
      "Cisco",
      "Aruba",
      "Ruckus",
      "Wi-Fi",
      "Support N1/N2",
    ],
    responsibilities: [
      "Assurer le support technique aux utilisateurs (N1/N2).",
      "Administrer et maintenir le parc informatique — postes, imprimantes et périphériques.",
      "Installer, configurer et dépanner les équipements informatiques.",
      "Configurer et administrer les équipements réseau (Cisco, Aruba, Ruckus).",
      "Gérer les points d'accès Wi-Fi Aerohive et Grandstream.",
      "Assurer le suivi et la résolution des incidents techniques.",
    ],
    imageKey: "hutchinson",
  },
  {
    id: "exp-hutchinson-stage",
    index: "02",
    role: "Technicienne IT — Stage",
    company: "Hutchinson",
    location: "Tanger",
    contractType: "Stage",
    period: { start: "2024-02", end: "2024-06" },
    tools: ["Windows 10/11", "Support N1/N2", "WDS"],
    responsibilities: [
      "Assister les utilisateurs sur site et à distance.",
      "Participer à la maintenance préventive et corrective des équipements.",
      "Installer et configurer les postes de travail.",
      "Participer aux activités quotidiennes du service informatique.",
    ],
  },
  {
    id: "exp-ofppt-wds",
    index: "03",
    role: "Administratrice WDS — Stage de fin d'études",
    company: "OFPPT",
    location: "Tétouan",
    contractType: "Stage",
    period: { start: "2023-05", end: "2023-06" },
    tools: ["WDS", "Windows Server", "TCP/IP"],
    responsibilities: [
      "Déployer et configurer Windows Deployment Services (WDS).",
      "Mettre en place un serveur de déploiement d'images Windows.",
      "Automatiser l'installation des systèmes d'exploitation sur le réseau local.",
    ],
  },
];