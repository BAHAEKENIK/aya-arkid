export interface Skill {
  name: string;
  level: "Opérationnel" | "Avancé" | "Solide";
}

export interface SkillGroup {
  id: string;
  label: string;
  ref: string;
  description: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "systems",
    label: "Systèmes",
    ref: "SYS",
    description: "Administration de serveurs et postes de travail.",
    skills: [
      { name: "Active Directory", level: "Solide" },
      { name: "Windows Server", level: "Solide" },
      { name: "Windows 10/11", level: "Avancé" },
      { name: "DNS", level: "Opérationnel" },
      { name: "DHCP", level: "Opérationnel" },
      { name: "Linux", level: "Opérationnel" },
    ],
  },
  {
    id: "networks",
    label: "Réseaux",
    ref: "NET",
    description: "Équipements, protocoles et infrastructure sans-fil.",
    skills: [
      { name: "Cisco", level: "Opérationnel" },
      { name: "Aruba", level: "Opérationnel" },
      { name: "Ruckus", level: "Opérationnel" },
      { name: "VLAN", level: "Opérationnel" },
      { name: "TCP/IP", level: "Solide" },
    ],
  },
  {
    id: "support",
    label: "Support & Administration",
    ref: "SUP",
    description: "Assistance aux utilisateurs et gestion du parc.",
    skills: [
      { name: "Support N1/N2", level: "Avancé" },
      { name: "WDS", level: "Solide" },
      { name: "Zebra", level: "Opérationnel" },
      { name: "Toshiba", level: "Opérationnel" },
    ],
  },
];