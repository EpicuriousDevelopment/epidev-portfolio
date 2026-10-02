export const projects = [
  {
    title: {
      nl: "epidev.nl",
      en: "epidev.nl",
    },
    tag: {
      nl: "Uitgelicht",
      en: "Featured",
    },
    description: {
      nl: "Persoonlijk portfolio met GSAP animaties, SCSS styling en een Three.js logo model.",
      en: "Personal portfolio with GSAP animations, SCSS styling and a Three.js logo model.",
    },
    stack: ["Astro", "SCSS", "GSAP", "Three.js"],
    live: "https://www.epidev.nl",
    github: "https://github.com/EpicuriousDevelopment/epidev-portfolio",
    featured: true,
    comingSoon: false,
    coming: null,
  },
  {
    title: {
      nl: "Frank van Oosterhout Metselwerken",
      en: "Frank van Oosterhout Metselwerken",
    },
    tag: {
      nl: "Klantproject",
      en: "Client project",
    },
    description: {
      nl: "Portfolio en contact site voor een lokaal bedrijf in de bouw.",
      en: "Portfolio and contact site for a local construction business.",
    },
    coming: {
      nl: "In ontwikkeling · Binnenkort live",
      en: "In development · Live soon",
    },
    stack: ["Astro", "SCSS", "GSAP"],
    live: null,
    github: null,
    featured: false,
    comingSoon: true,
  },
];