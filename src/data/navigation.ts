export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "Formations",
    href: "/formations",
    children: [
      { label: "Niveau 1 - Acculturation", href: "/formations/niveau-1-initiation-ia" },
      { label: "Niveau 2 - Perfectionnement", href: "/formations/niveau-2-perfectionnement" },
      { label: "Niveau 3 - Transformation", href: "/formations/niveau-3-transformation-cabinet" },
      { label: "Conférences", href: "/formations/conferences" },
      { label: "Atelier Dashboard FEC", href: "/formations/atelier-dashboard-fec" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  formations: [
    { label: "Niveau 1 - Acculturation", href: "/formations/niveau-1-initiation-ia" },
    { label: "Niveau 2 - Perfectionnement", href: "/formations/niveau-2-perfectionnement" },
    { label: "Niveau 3 - Transformation", href: "/formations/niveau-3-transformation-cabinet" },
    { label: "Conférences", href: "/formations/conferences" },
    { label: "Atelier Dashboard FEC", href: "/formations/atelier-dashboard-fec" },
  ],
  company: [
    { label: "Blog", href: "/blog" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
    { label: "CGV", href: "/cgv" },
  ],
};
