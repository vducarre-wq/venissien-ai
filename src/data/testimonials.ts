export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  company: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "squelard",
    quote:
      "Vénissien possède de réels cas concrets dans l'expertise comptable. Rassurant tout en restant réaliste, il nous a montré une méthode adaptée à la pratique de l'IA dans nos métiers.",
    authorName: "Johan Squelard",
    authorTitle: "Expert-Comptable",
    company: "Cabinet AMECO",
    featured: true,
  },
  {
    id: "lehunho",
    quote:
      "Formation très adaptée en matière d'acculturation des collaborateurs qui ont un intérêt et des connaissances très disparates.",
    authorName: "Thomas Le Huu Nho",
    authorTitle: "Associé",
    company: "Cabinet ACE",
    featured: true,
  },
  {
    id: "blum",
    quote:
      "La formation est pertinente dans notre métier. Elle nous permet d'optimiser notre temps et de nous rendre plus productifs et plus sereins.",
    authorName: "Thomas Blum",
    authorTitle: "Chef de missions",
    company: "",
    featured: true,
  },
  {
    id: "anonymous-ec",
    quote:
      "Excellente formation pour découvrir le potentiel de l'IA au service de notre métier ! On repart avec des idées applicables dès le lendemain. À recommander sans hésitation.",
    authorName: "Participant",
    authorTitle: "",
    company: "Cabinet comptable",
    featured: true,
  },
  {
    id: "cammarata",
    quote:
      "Formation très adaptée aux métiers du droit et à la portée de tous. Vénissien est très pédagogue même sur les thèmes techniques.",
    authorName: "Ophélie Cammarata",
    authorTitle: "Avocat",
    company: "Saint-Exupéry",
    featured: true,
  },
  {
    id: "pyramide",
    quote:
      "Entre bonnes pratiques, alertes sécurité et astuces concrètes, les formations sont très bien pensées.",
    authorName: "Responsable Communication",
    authorTitle: "",
    company: "Pyramide Conseils",
    featured: true,
  },
];
