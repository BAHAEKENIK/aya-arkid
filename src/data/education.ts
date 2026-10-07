export interface EducationItem {
  id: string;
  index: string;
  period: string;
  degree: string;
  school: string;
  location: string;
  level: 1 | 2 | 3;
  current?: boolean;
  note: string;
}

export const education: EducationItem[] = [
  {
    id: "edu-ensi",
    index: "03",
    period: "2025 — Présent",
    degree: "Licence en Génie Informatique",
    school: "ENSI",
    location: "Tanger",
    level: 3,
    current: true,
    note: "Poursuite d'études supérieures en génie informatique.",
  },
  {
    id: "edu-ofppt",
    index: "02",
    period: "2021 — 2023",
    degree: "Diplôme de Technicien Spécialisé en Infrastructure Digitale",
    school: "OFPPT",
    location: "Tétouan",
    level: 2,
    note: "Formation spécialisée en systèmes, réseaux et infrastructure.",
  },
  {
    id: "edu-bac",
    index: "01",
    period: "2021",
    degree: "Baccalauréat Professionnel en Maintenance Informatique et Réseaux",
    school: "Lycée Imam Al Ghazali",
    location: "",
    level: 1,
    note: "Premier socle technique — maintenance et réseaux informatiques.",
  },
];