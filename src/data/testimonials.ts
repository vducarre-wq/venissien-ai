export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  rating: number;
  date: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "cammarata",
    quote:
      "Formation très adaptée aux métiers du droit et à la portée de tous grâce à la pédagogie de Vénissien ! Je recommande sans hésitation.",
    authorName: "Ophélie Cammarata",
    rating: 5,
    date: "Janvier 2026",
  },
  {
    id: "kerleo",
    quote: "Très bon formateur",
    authorName: "Charles Kerleo",
    rating: 5,
    date: "Janvier 2026",
  },
  {
    id: "gcr",
    quote:
      "Excellent formateur en IA : pédagogue, clair et orienté pratique. Formation utile et directement applicable. Merci Venissien",
    authorName: "Cabinet GCR",
    rating: 5,
    date: "Décembre 2025",
  },
  {
    id: "pandjou",
    quote:
      "Formation très pratico pratique axée métier et formateur très sympa !",
    authorName: "Reza Pandjou",
    rating: 5,
    date: "Décembre 2025",
  },
  {
    id: "gozdik",
    quote:
      "Bravo à Venissien pour une formation sur mesure sur l'IA avec des cas concrets !",
    authorName: "Philippe Gozdik",
    rating: 5,
    date: "Décembre 2025",
  },
  {
    id: "mafonkou",
    quote:
      "Pratique et efficace pour améliorer sa productivité et sa visibilité",
    authorName: "Lydie Mafonkou",
    rating: 5,
    date: "Décembre 2025",
  },
  {
    id: "romary",
    quote: "Formation très pratique, très claire, très accessible",
    authorName: "Nicolas Romary",
    rating: 5,
    date: "Décembre 2025",
  },
  {
    id: "pomet",
    quote:
      "La formation sur l'IA animée par Vénissien m'a beaucoup plu. Vénissien est un formateur dynamique, clair et très pédagogue. Il a su rendre les sujets accessibles tout en transmettant des connaissances utiles et concrètes pour nos métiers. Je recommande vivement cette formation.",
    authorName: "Emily Pomet",
    rating: 5,
    date: "Novembre 2025",
  },
  {
    id: "rivollier",
    quote:
      "La formation est très fluide et animée. La présentation de plusieurs IA et de leurs points forts est très appréciable. Vénissien arrive à présenter l'IA quel que soit le niveau des participants. Merci",
    authorName: "Irène Rivollier",
    rating: 5,
    date: "Novembre 2025",
  },
  {
    id: "sarah-k",
    quote:
      "La formation sur l'IA proposée par Vénissien est vraiment complète. Il est agréable et pédagogue. Je n'ai pas vu la journée passer.",
    authorName: "Sarah K.",
    rating: 5,
    date: "Novembre 2025",
  },
  {
    id: "bertrand",
    quote:
      "Merci Vénissien pour ta formation & tes conseils toujours très utiles et surtout applicables dans notre quotidien ! Un vrai plus pour gagner en réflexion, en efficacité et en temps !",
    authorName: "Justine Bertrand",
    rating: 5,
    date: "Novembre 2025",
  },
  {
    id: "expertise-swap",
    quote:
      "Des outils pratiques à mettre en œuvre à la sortie, dans le cadre d'une formation animée de manière dynamique, interactive et très sympathique par Vénissien, contrat rempli !",
    authorName: "Expertise Swap",
    rating: 5,
    date: "Novembre 2025",
  },
  {
    id: "baudiment",
    quote:
      "Merci Vénissien pour cette découverte de l'IA. Une formation enrichissante, dynamique et parfaitement adaptée au métier de comptable. Pour les personnes qui veulent évoluer avec leur temps.",
    authorName: "Olivier Baudiment",
    rating: 5,
    date: "Octobre 2025",
  },
  {
    id: "michael-k",
    quote:
      "Vénissien a su animer cette journée de formation de la meilleure des manières. Ses exemples et cas d'usages ont été passionnants. Charge à nous de poursuivre ces enseignements en les retranscrivant dans notre quotidien.",
    authorName: "Michael K.",
    rating: 5,
    date: "Octobre 2025",
  },
  {
    id: "le-gallic",
    quote:
      "Formation très intéressante et d'actualité. Formateur souriant, dynamique et professionnel. Merci beaucoup, à bientôt",
    authorName: "Andria Le Gallic",
    rating: 5,
    date: "Octobre 2025",
  },
  {
    id: "deborah-m",
    quote:
      "Formation utile et importante pour la maîtrise des outils IA",
    authorName: "Deborah M.",
    rating: 5,
    date: "Octobre 2025",
  },
  {
    id: "martin",
    quote:
      "Une très bonne formation pour les cabinets d'Expertise Comptable.",
    authorName: "Franck Martin",
    rating: 5,
    date: "Octobre 2025",
  },
  {
    id: "saillant",
    quote:
      "Formation au top. L'IA n'a plus de secret pour moi maintenant.",
    authorName: "Valérie Saillant",
    rating: 5,
    date: "Octobre 2025",
  },
  {
    id: "cesarini",
    quote:
      "Je pense que la formation reprend l'ensemble des points essentiels et de vigilance que doivent connaître des personnes qui débutent avec l'IA. Nous avons toutes les clés pour pouvoir l'utiliser au mieux dans notre quotidien professionnel et/ou personnel. Merci Vénissien !",
    authorName: "Delphine Cesarini",
    rating: 5,
    date: "Septembre 2025",
  },
  {
    id: "euksuzian",
    quote:
      "Super formateur, dynamique et passionné, la formation est très utile merci beaucoup",
    authorName: "Sandrine Euksuzian",
    rating: 5,
    date: "Septembre 2025",
  },
  {
    id: "bernard",
    quote:
      "Super formateur, très dynamique et accessible, il rend l'IA compréhensible pour tout le monde. Chaque session est rythmée par des anecdotes passionnantes qui rendent l'apprentissage vivant et concret. Une formation que je recommande à 100 %",
    authorName: "Tiphaine Bernard",
    rating: 5,
    date: "Mai 2025",
  },
  {
    id: "farah",
    quote:
      "Nous avons eu la chance de bénéficier d'une formation sur l'intelligence artificielle et l'utilisation de ChatGPT animée par Vénissien DUCARRE. Franchement, c'était exceptionnel ! L'intervenant était ultra compétent, pédagogue, et passionné, il a su captiver toute l'équipe du début à la fin.",
    authorName: "Rayane Farah",
    rating: 5,
    date: "Mai 2025",
  },
  {
    id: "ginier",
    quote:
      "Formateur très agréable, compétent et extrêmement jovial !",
    authorName: "Laurent Ginier",
    rating: 5,
    date: "Février 2025",
  },
  {
    id: "marcerou",
    quote:
      "Nous avons suivi cette formation dans un cadre professionnel, et celle-ci s'est avérée parfaitement adaptée aux TPE, notamment aux cabinets d'expertise comptable. Le contenu était varié entre théorie et de nombreux cas pratiques. Je recommande vivement cette formation !",
    authorName: "Arnaud Marcerou",
    rating: 5,
    date: "Janvier 2025",
  },
  {
    id: "perez",
    quote: "Super formation sur l'IA !",
    authorName: "Léa Perez",
    rating: 5,
    date: "Décembre 2024",
  },
  {
    id: "diadema",
    quote:
      "Super formation pour tous les collaborateurs. Vénissien est pédagogue et agréable ! Merci pour cette journée pleine d'enseignements !",
    authorName: "Fanny Diadema",
    rating: 5,
    date: "Décembre 2024",
  },
  {
    id: "bourrat",
    quote: "Formation concrète et intéressante",
    authorName: "Maxime Bourrat",
    rating: 4,
    date: "Septembre 2024",
  },
  {
    id: "marin",
    quote:
      "Une formation très complète que je recommande à toutes les personnes souhaitant se former à l'IA !",
    authorName: "Sébastien Marin",
    rating: 5,
    date: "Septembre 2024",
  },
];
