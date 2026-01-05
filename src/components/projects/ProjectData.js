// بيانات المشاريع
export const projectsData = {
  "html-css": {
    title: "HTML & CSS",
    projects: [
      {
        id: 1,
        title: "Landing Page Design",
        description: "Professional landing page design with responsive design",
        image: "/thumb1.jpg",
        technologies: ["HTML5", "CSS3", "SASS", "Responsive Design"],
        liveLink: 'https://github.com/Mecha-Mind',
        features: [
          "Responsive design for all devices",
          "Advanced animations with CSS",
          "Performance optimization and SEO"
        ],
        logic: "Using Grid and Flexbox for layout, with animations for interaction"
      },
      {
        id: 2,
        title: "Portfolio Website",
        description: "Personal portfolio website showcasing projects and skills",
        image: "/thumb2.jpg",
        technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        liveLink: 'https://github.com/Mecha-Mind',
        features: [
          "Interactive gallery for projects",
          "smooth scroll navigation",
          "dark/light mode toggle"
        ],
        logic: "Using vanilla JavaScript for interactions with GSAP for animations"
      }
    ]
  },
  "nextjs-tailwind": {
    title: "Next.js & Tailwind",
    projects: [
      {
        id: 3,
        title: "E-commerce Platform",
        description: "Full-featured e-commerce platform",
        image: "/thumb3.jpg",
        technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
        liveLink: 'https://github.com/Mecha-Mind',
        features: [
          "Secure payment system with Stripe",
          "Inventory management",
          "Order tracking"
        ],
        logic: "Using Next.js API routes, Tailwind for design, Stripe for payment"
      }
    ]
  },
  "pure-js": {
    title: "Pure JavaScript",
    projects: [
      {
        id: 4,
        title: "Weather App",
        description: "Interactive weather app with API",
        image: "/thumb4.jpg",
        technologies: ["JavaScript", "Weather API", "Local Storage"],
        liveLink: 'https://github.com/Mecha-Mind',
        features: [
            "Precise weather data",
          "Favorite cities saving",
          "Automatic updates"
        ],
        logic: "Using fetch API for data, localStorage for local storage"
      }
    ]
  },
  "games": {
    title: "Games",
    projects: [
      {
        id: 5,
        title: "Snake Game",
        description: "Classic snake game",
        image: "/project5.jpg",
        technologies: ["JavaScript", "Canvas API", "CSS3"],
        liveLink: 'https://github.com/Mecha-Mind',
        features: [
          "Arrow control",
          "Points and levels system",
          "High score saving"
        ],
        logic: "Using Canvas API for drawing, game loop for continuous updates"
      }
    ]
  }
}
