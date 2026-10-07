export interface HeroMeta {
  label: string;
  value: string;
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  meta: HeroMeta[];
  about: {
    lead: string;
    body: string[];
    facts: HeroMeta[];
  };
}

export const profile: ProfileData = {
  name: "Aya Arkid",
  role: "Technicienne Systèmes & Réseaux",
  tagline:
    "Je combine support IT, administration systèmes et réseaux pour assurer des infrastructures fiables et accompagner les utilisateurs dans un environnement industriel.",
  meta: [
    { label: "Basée à", value: "Tanger, Maroc" },
    { label: "Environnement", value: "Industriel" },
    { label: "Disponibilité", value: "Support N1 / N2" },
  ],
  about: {
    lead:
      "Technicienne IT spécialisée en systèmes et réseaux, avec une expérience en support utilisateurs, administration Windows et gestion du parc informatique en environnement industriel.",
    body: [
      "Au quotidien, j'assure le support technique auprès des utilisateurs, j'administre les postes de travail et les serveurs Windows, et je veille à la stabilité du réseau et des équipements dans un contexte industriel exigeant.",
      "Maîtrisant les environnements Windows et Linux ainsi que la résolution d'incidents techniques, j'interviens aussi bien sur la maintenance préventive que sur le diagnostic et le dépannage d'équipements réseau et systèmes.",
    ],
    facts: [
      { label: "Systèmes", value: "Windows / Linux" },
      { label: "Réseaux", value: "Cisco · Aruba · Ruckus" },
      { label: "Support", value: "N1 / N2 · sur site & à distance" },
      { label: "Contexte", value: "Environnement industriel" },
    ],
  },
};