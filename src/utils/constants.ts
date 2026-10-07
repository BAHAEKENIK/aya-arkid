export const SITE = {
  name: "Aya Arkid",
  role: "Technicienne Systèmes & Réseaux",
  location: "Tanger, Maroc",
  phone: "06 11 98 12 45",
  phoneHref: "tel:+212611981245",
  email: "ayaarkid@gmail.com",
  emailHref: "mailto:ayaarkid@gmail.com",
  title: "Aya Arkid — Technicienne Systèmes & Réseaux",
  description:
    "Technicienne systèmes et réseaux spécialisée en support IT, administration Windows, infrastructure réseau et environnement industriel.",
} as const;

export const SECTION_IDS = {
  home: "home",
  about: "about",
  experience: "experience",
  skills: "skills",
  certifications: "certifications",
  howIWork: "how-i-work",
  education: "education",
} as const;

export const NAV_SECTION_IDS = [
  SECTION_IDS.home,
  SECTION_IDS.about,
  SECTION_IDS.experience,
  SECTION_IDS.skills,
  SECTION_IDS.certifications,
  SECTION_IDS.education,
] as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/aya-arkid-884804241/",
} as const;