export interface FaqItem {
  question: string;
  answer: string;
}

export const faqByPage: Record<string, FaqItem[]> = {
  "formations-overview": [
    {
      question: "Quelle formation choisir si je débute avec l'IA ?",
      answer:
        "Le Niveau 1 — Acculturation est conçu pour les débutants. Aucun prérequis technique n'est nécessaire, une bonne maîtrise de l'outil informatique suffit. Vous apprendrez les bases de l'IA générative, maîtriserez ChatGPT et découvrirez des cas d'usages concrets pour votre métier.",
    },
    {
      question: "Quelle est la différence entre les formations inter et intra ?",
      answer:
        "La formation inter regroupe des participants de différents cabinets (400 € HT/personne). La formation intra est dédiée à votre cabinet ou structure (2 500 € HT/jour), avec un contenu adapté à vos besoins spécifiques.",
    },
    {
      question: "Les formations sont-elles éligibles au financement ?",
      answer:
        "Les formations peuvent être prises en charge au titre de la formation professionnelle continue (FPC) si vous êtes un cabinet d'expertise comptable. Contactez-nous pour plus de détails sur les modalités.",
    },
    {
      question: "Combien de participants par session ?",
      answer:
        "Les sessions inter sont limitées à 16 participants maximum pour garantir un suivi personnalisé. Les sessions intra sont adaptées à la taille de votre équipe.",
    },
    {
      question: "Les formations sont-elles disponibles en distanciel ?",
      answer:
        "Les formations Niveau 1 et Niveau 2 sont principalement proposées en présentiel à Lyon. Les sessions intra peuvent être organisées dans vos locaux partout en France. Des formats distanciels sont envisageables sur demande.",
    },
    {
      question: "Quel support est proposé après la formation ?",
      answer:
        "Vous bénéficiez d'un accès à notre communauté d'entraide, de mises à jour régulières sur les évolutions des outils IA, et de 3 sessions de questions-réponses en groupe sur les 6 mois suivant la formation.",
    },
  ],
  "niveau-1": [
    {
      question: "Faut-il des connaissances techniques pour suivre la formation ?",
      answer:
        "Non, la formation Niveau 1 est accessible sans connaissances préalables en IA. Une bonne maîtrise de l'outil informatique est recommandée. Vous apprendrez tout depuis les bases.",
    },
    {
      question: "Que vais-je savoir faire à la fin de la journée ?",
      answer:
        "Vous saurez utiliser ChatGPT de manière professionnelle, rédiger des prompts efficaces avec la méthode RCT+, et appliquer l'IA à des cas concrets de votre métier : communication client, extraction de données, analyse stratégique, résumé de PDF, formules Excel.",
    },
    {
      question: "La formation est-elle adaptée aux avocats ?",
      answer:
        "Oui, la formation couvre des cas d'usages pertinents pour les métiers du droit. Des exemples spécifiques aux avocats sont présentés lors des cas pratiques. Plus de 100 avocats ont déjà suivi nos formations.",
    },
    {
      question: "Quels outils dois-je apporter ?",
      answer:
        "Un ordinateur portable avec une connexion internet suffit. Un compte ChatGPT (gratuit ou Plus) sera nécessaire pour les exercices pratiques. Les instructions de création de compte sont fournies avant la formation.",
    },
    {
      question: "La formation aborde-t-elle les risques de l'IA ?",
      answer:
        "Oui, un module entier est consacré aux limites, à la confidentialité et aux bonnes pratiques. Vous apprendrez à identifier les hallucinations, à protéger vos données clients et à respecter la réglementation (IA Act, RGPD).",
    },
  ],
  "atelier-dashboard-fec": [
    {
      question: "Faut-il savoir coder pour participer ?",
      answer:
        "Non. L'atelier est conçu pour des experts-comptables, pas des développeurs. Tout est montré étape par étape en partage d'écran. Vous n'avez besoin d'aucune compétence technique particulière.",
    },
    {
      question: "Ai-je besoin d'un abonnement Claude Pro ?",
      answer:
        "Pour l'offre à 199 \u20AC (Live + Replay), oui : un abonnement Claude Pro (20 $/mois) est nécessaire pour reproduire le dashboard. Pour l'offre à 449 \u20AC (Outil clé en main), non : le dashboard HTML fonctionne sans aucun abonnement, dans un simple navigateur.",
    },
    {
      question: "Mes données clients sont-elles en sécurité ?",
      answer:
        "Le dashboard HTML fonctionne 100 % en local sur votre poste. Aucune donnée ne quitte votre ordinateur, aucun serveur externe n'est sollicité. C'est le format le plus sécurisé possible.",
    },
    {
      question: "Mon logiciel comptable fait déjà des tableaux de bord, pourquoi cet atelier ?",
      answer:
        "Aucun logiciel métier ne produit un dashboard interactif personnalisé en 5 minutes à partir d'un FEC brut. Ce dashboard est complémentaire : il vous donne une visualisation immédiate pour vos rendez-vous bilan, sans configuration préalable.",
    },
    {
      question: "2 heures, c'est suffisant ?",
      answer:
        "Oui. Le replay intégral et le support écrit complet sont inclus dans les deux offres. Avec l'offre à 449 \u20AC, vous recevez en plus l'outil fini, prêt à l'emploi : pas besoin de tout retenir.",
    },
    {
      question: "199 \u20AC ou 449 \u20AC pour un atelier en ligne, c'est cher non ?",
      answer:
        "Ce n'est pas un webinaire : c'est un atelier avec un livrable concret que vous utiliserez dès le lendemain avec vos clients. Une formation classique coûte 10 fois plus. L'offre à 449 \u20AC vous fait économiser 4 à 8 heures de configuration, amorties dès le premier client analysé.",
    },
    {
      question: "Je ne suis pas disponible le 12 mars, puis-je quand même en profiter ?",
      answer:
        "Oui. Le replay complet est envoyé sous 48h à tous les participants. Vous pourrez suivre l'atelier à votre rythme avec tous les supports écrits.",
    },
    {
      question: "L'atelier est-il éligible à la formation professionnelle ?",
      answer:
        "Oui, une convention de formation peut être établie pour une prise en charge OPCO. Contactez-nous pour les modalités.",
    },
  ],
  "niveau-2": [
    {
      question: "Quels sont les prérequis pour le Niveau 2 ?",
      answer:
        "Vous devez avoir suivi la formation Niveau 1 ou justifier d'une pratique régulière de ChatGPT. Le Niveau 2 s'adresse à ceux qui souhaitent aller plus loin dans l'utilisation de l'IA.",
    },
    {
      question: "Quels outils IA sont couverts en dehors de ChatGPT ?",
      answer:
        "Le Niveau 2 couvre 5 outils IA incontournables en plus de ChatGPT, dont Claude (Anthropic), Perplexity pour la recherche, et d'autres outils spécialisés. Vous apprendrez à choisir le bon outil selon votre besoin.",
    },
    {
      question: "Qu'est-ce qu'un GPT personnalisé ?",
      answer:
        "Un GPT personnalisé est un assistant IA que vous configurez avec vos propres instructions, documents de référence et paramètres. Par exemple : un GPT de veille légale, un GPT d'analyse financière, ou un GPT de communication client. Vous apprendrez à en créer lors de la formation.",
    },
    {
      question: "Les techniques de prompt engineering avancé sont-elles difficiles ?",
      answer:
        "Les 5 techniques enseignées (Chain of Thought, Chain of Verification, Self-Refine, etc.) sont expliquées de manière progressive avec des exemples métiers concrets. Pas besoin de compétences techniques : ce sont des méthodes de rédaction structurée.",
    },
    {
      question: "Puis-je suivre le Niveau 2 sans avoir fait le Niveau 1 ?",
      answer:
        "C'est possible si vous utilisez déjà ChatGPT régulièrement dans votre pratique professionnelle. Contactez-nous pour évaluer votre niveau et confirmer que le Niveau 2 est adapté à votre profil.",
    },
  ],
};
