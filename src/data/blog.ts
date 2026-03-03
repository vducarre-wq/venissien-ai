export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string; // ISO date string
  readingTime: string;
  author: {
    name: string;
    role: string;
  };
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "article-1",
    title: "Article à venir",
    excerpt:
      "Le contenu de cet article sera bientôt disponible. Revenez prochainement pour découvrir nos analyses et points de vue sur l'IA appliquée aux métiers du chiffre et du droit.",
    content: "",
    category: "Vision",
    publishedAt: "2026-03-03",
    readingTime: "5 min",
    author: {
      name: "Vénissien Ducarre",
      role: "Expert-Comptable & Formateur IA",
    },
  },
  {
    slug: "article-2",
    title: "Article à venir",
    excerpt:
      "Le contenu de cet article sera bientôt disponible. Revenez prochainement pour découvrir nos analyses et points de vue sur l'IA appliquée aux métiers du chiffre et du droit.",
    content: "",
    category: "Pratique",
    publishedAt: "2026-03-03",
    readingTime: "5 min",
    author: {
      name: "Vénissien Ducarre",
      role: "Expert-Comptable & Formateur IA",
    },
  },
  {
    slug: "article-3",
    title: "Article à venir",
    excerpt:
      "Le contenu de cet article sera bientôt disponible. Revenez prochainement pour découvrir nos analyses et points de vue sur l'IA appliquée aux métiers du chiffre et du droit.",
    content: "",
    category: "Décryptage",
    publishedAt: "2026-03-03",
    readingTime: "5 min",
    author: {
      name: "Vénissien Ducarre",
      role: "Expert-Comptable & Formateur IA",
    },
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
