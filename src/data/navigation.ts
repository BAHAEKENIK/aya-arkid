import { SECTION_IDS } from "../utils/constants";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { id: SECTION_IDS.home, label: "Accueil", href: `#${SECTION_IDS.home}` },
  { id: SECTION_IDS.about, label: "À propos", href: `#${SECTION_IDS.about}` },
  {
    id: SECTION_IDS.experience,
    label: "Expérience",
    href: `#${SECTION_IDS.experience}`,
  },
  { id: SECTION_IDS.skills, label: "Compétences", href: `#${SECTION_IDS.skills}` },
  {
    id: SECTION_IDS.certifications,
    label: "Certifications",
    href: `#${SECTION_IDS.certifications}`,
  },
  {
    id: SECTION_IDS.education,
    label: "Formation",
    href: `#${SECTION_IDS.education}`,
  },
];

export const navSectionIds: string[] = navItems.map((item) => item.id);