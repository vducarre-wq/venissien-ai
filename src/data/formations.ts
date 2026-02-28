export interface FormationModule {
  number: number;
  title: string;
  duration: string;
  topics: string[];
}

export interface Formation {
  slug: string;
  level: number;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  duration: string;
  audience: string[];
  prerequisites: string | null;
  objectives: string[];
  modules: FormationModule[];
  results: string[];
  pricing: {
    inter: { amount: number; unit: string } | null;
    intra: { amount: number; unit: string };
  };
  pedagogy: string[];
  isComingSoon: boolean;
  badgeLabel: string;
  seo: {
    title: string;
    description: string;
  };
}

export const formations: Formation[] = [
  {
    slug: "niveau-1-initiation-ia",
    level: 1,
    title: "Formation IA Niveau 1 — Acculturation et initiation à ChatGPT",
    shortTitle: "Niveau 1 — Acculturation",
    subtitle: "Maîtrisez ChatGPT dans votre cabinet en 1 journée",
    description:
      "Comprenez les bases de l'IA générative, maîtrisez ChatGPT et découvrez les cas d'usages concrets pour votre métier. Une formation conçue par un expert-comptable praticien.",
    duration: "1 journée (7h)",
    audience: [
      "Experts-comptables",
      "Commissaires aux comptes",
      "Collaborateurs comptables",
      "Gestionnaires de paie",
      "Avocats",
    ],
    prerequisites: null,
    objectives: [
      "Comprendre le fonctionnement et les bases de l'IA générative",
      "Maîtriser l'interface et les fonctionnalités de ChatGPT",
      "Acquérir la compétence clé : la rédaction de prompts efficaces",
      "Identifier les limites et les risques pour les éviter",
      "Appliquer l'IA à des cas d'usages concrets de votre métier",
    ],
    modules: [
      {
        number: 1,
        title: "L'IA Générative, de quoi s'agit-il ?",
        duration: "~45 min",
        topics: [
          "Les origines de l'Intelligence Artificielle",
          "Définition et fonctionnement des LLM (Large Language Models)",
          "Le développement de l'IA depuis 2010",
          "Pourquoi ChatGPT est une révolution",
          "L'IA de ChatGPT en bref",
        ],
      },
      {
        number: 2,
        title: "Les différents acteurs et les évolutions attendues",
        duration: "~30 min",
        topics: [
          "OpenAI : le pionnier",
          "Microsoft : la stratégie contre Google",
          "Google : dans la course avec Gemini",
          "Anthropic : un outsider prometteur avec Claude",
          "Mistral AI : l'espoir français",
          "Les classements d'IA génératives",
        ],
      },
      {
        number: 3,
        title: "ChatGPT d'OpenAI : mode d'emploi",
        duration: "~60 min",
        topics: [
          "Créer un compte sur ChatGPT",
          "Les abonnements et versions disponibles",
          "Présentation de l'interface",
          "Les instructions personnalisées",
          "Mise en pratique guidée",
          "Les fonctionnalités avancées de ChatGPT",
        ],
      },
      {
        number: 4,
        title: "La rédaction des prompts : LA compétence clé",
        duration: "~90 min",
        topics: [
          "Comprendre la notion de Prompt",
          "La méthode RCT+ pour rédiger un prompt efficace",
          "Le Prompt Engineering : principes fondamentaux",
          "Les recommandations d'OpenAI en matière de prompt",
          "Exercices pratiques de rédaction de prompts",
        ],
      },
      {
        number: 5,
        title: "Limites et confidentialité : les bonnes pratiques",
        duration: "~45 min",
        topics: [
          "Les limites liées à la base de données",
          "ChatGPT est bridé : comprendre les garde-fous",
          "La fiabilité de l'IA et les hallucinations",
          "ChatGPT et confidentialité des données",
          "La réponse de l'UE : l'IA Act",
          "Le C2PA pour lutter contre les Deepfakes",
        ],
      },
      {
        number: 6,
        title: "Les cas d'usage de ChatGPT en cabinet",
        duration: "~90 min",
        topics: [
          "Communication technique avec un client",
          "Extraction de données",
          "L'analyse stratégique (SWOT)",
          "Résumer un fichier PDF",
          "Formules et code VBA sur Excel",
          "Cas d'usage bonus",
        ],
      },
    ],
    results: [
      "Vous maîtrisez les fondamentaux de l'IA générative",
      "Vous savez utiliser ChatGPT de manière professionnelle",
      "Vous rédigez des prompts efficaces et structurés",
      "Vous identifiez les risques et les bonnes pratiques de confidentialité",
      "Vous appliquez l'IA à vos missions quotidiennes dès J+1",
    ],
    pricing: {
      inter: { amount: 400, unit: "€ HT / personne" },
      intra: { amount: 2500, unit: "€ HT / jour" },
    },
    pedagogy: [
      "Démonstrations du formateur basées sur sa pratique au cabinet AUM Conseil",
      "Mise en pratique guidée sur vos propres cas d'usage",
      "Alternance théorie et pratique",
      "Groupes limités pour un suivi personnalisé",
    ],
    isComingSoon: false,
    badgeLabel: "Initiation",
    seo: {
      title: "Formation IA Niveau 1 — Maîtrisez ChatGPT en cabinet comptable",
      description:
        "Formation IA d'une journée pour experts-comptables et avocats. Apprenez ChatGPT, le prompt engineering et les cas d'usages métiers. +500 professionnels formés.",
    },
  },
  {
    slug: "niveau-2-perfectionnement",
    level: 2,
    title: "Formation IA Niveau 2 — Créez vos assistants et transformez vos pratiques",
    shortTitle: "Niveau 2 — Perfectionnement",
    subtitle: "Approfondissez l'usage de l'IA et créez vos propres assistants GPT",
    description:
      "Maîtrisez les prompts avancés, choisissez les bons outils IA et créez vos propres assistants GPT personnalisés pour votre cabinet.",
    duration: "1 journée (7h)",
    audience: [
      "Experts-comptables",
      "Chefs de mission",
      "Collaborateurs comptables",
      "Gestionnaires de paie",
    ],
    prerequisites:
      "Avoir suivi la formation Niveau 1 ou justifier d'une pratique régulière de ChatGPT",
    objectives: [
      "Choisir l'IA la plus adaptée selon vos besoins",
      "Découvrir et maîtriser les nouvelles fonctionnalités avancées",
      "Appliquer les principes du prompt engineering avancé",
      "Créer ses propres assistants GPT personnalisés",
    ],
    modules: [
      {
        number: 1,
        title: "Introduction — L'adoption de l'IA en chiffres",
        duration: "~30 min",
        topics: [
          "Panorama global de l'adoption de l'IA",
          "Chiffres clés pour les métiers du chiffre",
          "Mise en perspective pour la profession comptable",
        ],
      },
      {
        number: 2,
        title: "Choisir son IA selon ses besoins",
        duration: "~60 min",
        topics: [
          "Les meilleures IA par tâches (rédaction, analyse, recherche, automatisation)",
          "Focus sur 5 outils incontournables",
          "Cas pratiques orientés métiers",
        ],
      },
      {
        number: 3,
        title: "Les nouvelles notions (2025 et après)",
        duration: "~30 min",
        topics: [
          "RLM : Retrieval Language Model",
          "MCP : Model Context Protocol",
          "Agents : automatisation et délégation intelligente",
        ],
      },
      {
        number: 4,
        title: "Le Prompt Engineering : 5 techniques à maîtriser",
        duration: "~60 min",
        topics: [
          "Chain of Thought — raisonnement étape par étape",
          "Chain of Verification — auto-vérification des sources",
          "Self-Refine — production, critique, amélioration",
          "Program of Thoughts — décomposition en sous-problèmes",
          "Automatic Prompt Engineer — l'IA optimise ses propres prompts",
        ],
      },
      {
        number: 5,
        title: "ChatGPT d'OpenAI — Nouvelles fonctionnalités",
        duration: "~45 min",
        topics: [
          "Projets et Tâches",
          "Mode Agent",
          "Deep Search",
          "Autres nouveautés 2025",
        ],
      },
      {
        number: 6,
        title: "Créer ses GPT : mode d'emploi",
        duration: "~60 min",
        topics: [
          "Étapes de création d'un GPT personnalisé",
          "Exemples concrets",
          "Les 4 GPTs essentiels pour un expert-comptable",
          "Atelier : créez votre premier GPT",
        ],
      },
      {
        number: 7,
        title: "Sécurité et confidentialité",
        duration: "~30 min",
        topics: [
          "Anonymiser ses documents avant de les soumettre à une IA",
          "Travailler en local sur son PC",
          "Bonnes pratiques de confidentialité pour la profession",
        ],
      },
    ],
    results: [
      "Vous savez choisir le bon outil IA pour chaque tâche",
      "Vous maîtrisez 5 techniques avancées de prompt engineering",
      "Vous créez vos propres assistants GPT personnalisés",
      "Vous appliquez les meilleures pratiques de sécurité et confidentialité",
    ],
    pricing: {
      inter: { amount: 400, unit: "€ HT / personne" },
      intra: { amount: 2500, unit: "€ HT / jour" },
    },
    pedagogy: [
      "Alternance théorie / pratique (50-50)",
      "Études de cas métier fournies ou apportées par les participants",
      "Quiz interactifs, démonstrations live, ateliers collaboratifs",
      "Accompagnement personnalisé durant les ateliers de création de GPT",
    ],
    isComingSoon: false,
    badgeLabel: "Perfectionnement",
    seo: {
      title: "Formation IA Niveau 2 — Prompt engineering avancé et GPTs personnalisés",
      description:
        "Formation IA avancée : 5 techniques de prompt engineering, création de GPTs sur mesure, outils IA spécialisés. Pour experts-comptables et chefs de mission.",
    },
  },
  {
    slug: "niveau-3-transformation-cabinet",
    level: 3,
    title: "Formation IA Niveau 3 — Transformez votre cabinet avec l'IA",
    shortTitle: "Niveau 3 — Transformation",
    subtitle: "Un programme complet pour intégrer l'IA à l'échelle de votre cabinet",
    description:
      "Le programme Niveau 3 vous accompagne dans la transformation IA de votre cabinet : gouvernance, formation des équipes, refonte des processus et sélection d'outils.",
    duration: "À définir",
    audience: [
      "Associés et dirigeants de cabinets",
      "Directeurs de mission",
    ],
    prerequisites: "Avoir suivi les Niveaux 1 et 2 ou justifier d'une maturité IA avancée",
    objectives: [
      "Définir une stratégie IA pour votre cabinet",
      "Structurer la gouvernance IA interne",
      "Piloter la montée en compétences de vos équipes",
      "Intégrer l'IA dans vos processus métier",
    ],
    modules: [],
    results: [],
    pricing: {
      inter: null,
      intra: { amount: 2500, unit: "€ HT / jour" },
    },
    pedagogy: [],
    isComingSoon: true,
    badgeLabel: "Transformation",
    seo: {
      title: "Formation IA Niveau 3 — Transformation digitale cabinet comptable",
      description:
        "Programme de transformation IA pour cabinets comptables : gouvernance, processus, outils. Formation inter premium par Vénissien Ducarre.",
    },
  },
];
