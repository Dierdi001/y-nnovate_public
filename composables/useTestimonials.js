import userIcon from "@/assets/images/icon-user-testimonial.png";

export function useTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "AMANA Sophie Loïce",
      memberOf: "LomeXpresService",
      image: userIcon,
      message:
        "Un service impeccable ! L’équipe a su comprendre nos besoins et nous proposer une solution sur mesure.",
    },
    {
      id: 2,
      name: "Jean-Luc Lefevre",
      memberOf: "Procedural World Lab",
      image: userIcon,
      message:
        "Je recommande vivement ! L’innovation est au cœur de leur approche et cela se ressent dans les résultats obtenus.",
    },
    {
      id: 3,
      name: "Tawelessi Samtou",
      memberOf: "Mon Inventaire",
      image: userIcon,
      message:
        "Grâce à leur expertise, notre projet a pu voir le jour plus rapidement que prévu. Une équipe à l’écoute et réactive.",
    },
    {
      id: 4,
      name: "Thomas Durand",
      username: "thomas_durand",
      image: userIcon,
      message:
        "Un service client exceptionnel ! Toujours disponibles et prêts à répondre à nos questions. Très satisfait !",
    },
    {
      id: 5,
      name: "Claire Bernard",
      username: "claire_bernard",
      image: userIcon,
      message:
        "J’ai été impressionnée par leur professionnalisme et leur souci du détail. Une collaboration très enrichissante !",
    },
    {
      id: 6,
      name: "Mehdi Bensaid",
      username: "mehdi_bensaid",
      image: userIcon,
      message:
        "Une approche innovante et des résultats concrets. C’est exactement ce dont notre entreprise avait besoin.",
    },
    // {
    //   id: 7,
    //   name: "Elena Rossi",
    //   username: "elena_rossi",
    //   image: userIcon,
    //   message:
    //     "Une équipe passionnée qui sait trouver des solutions adaptées. Un plaisir de travailler avec eux !",
    // },
    // {
    //   id: 8,
    //   name: "David Laurent",
    //   username: "david_laurent",
    //   image: userIcon,
    //   message:
    //     "Leur expertise nous a permis d’optimiser notre activité. Un vrai plus pour notre croissance !",
    // },
    // {
    //   id: 9,
    //   name: "Nathalie Simon",
    //   username: "nathalie_simon",
    //   image: userIcon,
    //   message:
    //     "Un accompagnement personnalisé et une équipe disponible. Je recommande les yeux fermés !",
    // },
  ];

  return {
    testimonials,
    column1: testimonials.slice(0, 2),
    column2: testimonials.slice(2,4),
    column3: testimonials.slice(4, 6),
  };
}
