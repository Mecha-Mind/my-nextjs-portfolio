// بيانات المشاريع
export const projectsData = {
  "html-css": {
    title: "HTML & CSS Projects",
    projects: [
      {
        id: 2,
        title: "Responsive Admin Dashboard",
        description: "Multi-page dashboard layout with reusable UI patterns and responsive design.",
        image: "/thumb1.jpg",
        technologies: ["HTML5", "CSS3", "Responsive Design"],
        liveLink: "https://mecha-mind.github.io/Dashboard/",
        features: [
          "8 structured pages",
          "Sidebar navigation system",
          "Reusable card and table components",
          "Fully responsive layout"
        ],
        logic:
          "Built using modular CSS structure with consistent spacing system and layout patterns."
      }
    ]
  },
  "nextjs": {
    title: "Next.js Applications",
    projects: [
      {
        id: 1,
        title: "E-commerce Store (WIP)",
        description: "Modern e-commerce web app with product variants, cart logic, and persistent state.",
        image: "/store-thumb.jpg",
        technologies: ["Next.js", "React", "Tailwind CSS", "Context API"],
        liveLink: "PUT_YOUR_LIVE_LINK_HERE",
        features: [
          "Product variants (color & size)",
          "Stock limit handling",
          "Persistent cart with localStorage",
          "Toast notifications system",
          "Clean modular architecture"
        ],
        logic:
          "Implemented custom cart context with variant-based unique keys and optimized state updates using React hooks."
      }
    ]
  },
  "pure-js": {
    title: "Pure JavaScript",
    projects: [
      {
        id: 4,
        title: "PrayerTimes App",
        description: "Interactive PrayerTimes app with API",
        image: "/thumb4.jpg",
        technologies: ["JavaScript", "PrayerTimes API", "Local Storage"],
        liveLink: 'https://mecha-mind.github.io/PrayerTimes/',
        features: [
            "Precise PrayerTimes data",
          "Favorite cities saving",
          "Automatic updates"
        ],
        logic: "Using fetch API for data, localStorage for local storage"
      }
    ]
  },
  "games": {
    title: "Interactive Games",
    projects: [
      {
        id: 3,
        title: "Hangman Game",
        description: "Interactive word guessing game built with pure JavaScript.",
        image: "/hangman-thumb.jpg",
        technologies: ["JavaScript", "HTML5", "CSS3"],
        liveLink: "PUT_YOUR_LIVE_LINK_HERE",
        features: [
          "Dynamic word generation",
          "Game state management",
          "Win/Lose detection logic",
          "Score tracking system"
        ],
        logic:
          "Implemented game state transitions and dynamic UI updates using vanilla JavaScript without external libraries."
      }
    ]
  },
}
