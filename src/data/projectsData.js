import freelanceThumb from "../assets/images/projects/freelance/thumb.png";
import freelance1 from "../assets/images/projects/freelance/1.png";
import freelance2 from "../assets/images/projects/freelance/2.png";

import expenseThumb from "../assets/images/projects/expense/thumb.png";
import expense1 from "../assets/images/projects/expense/1.png";
import expense2 from "../assets/images/projects/expense/2.png";


import calculatorThumb from "../assets/images/projects/IncomeCalculator/thumb.png";
import calculator1 from "../assets/images/projects/IncomeCalculator/1.png";
import calculator2 from "../assets/images/projects/IncomeCalculator/2.png";

import memoryGameThumb from "../assets/images/projects/MemoryCardGame/thumb.png";
import memoryGame1 from "../assets/images/projects/MemoryCardGame/1.png";
import memoryGame2 from "../assets/images/projects/MemoryCardGame/2.png";

import moviepremireThumb from "../assets/images/projects/moviepremire/thumb.png";
import moviepremire1 from "../assets/images/projects/moviepremire/1.png";
import moviepremire2 from "../assets/images/projects/moviepremire/2.png"; 

import expensetrackerThumb from "../assets/images/projects/expensetrackerReact/thumb.png";
import expensetracker1 from "../assets/images/projects/expensetrackerReact/1.png";
import expensetracker2 from "../assets/images/projects/expensetrackerReact/2.png";

import believersCookingThumb from "../assets/images/projects/cookingApp/thumb.png";
import believersCooking1 from "../assets/images/projects/cookingApp/1.png";
import believersCooking2 from "../assets/images/projects/cookingApp/2.png";

import acadaemyCoursesThumb from "../assets/images/projects/academyPage/thumb.png";
import acadamyCourses1 from "../assets/images/projects/academyPage/1.png";
import academyCourses2 from "../assets/images/projects/academyPage/2.png";

import travelAgencyThumb from "../assets/images/projects/travelPage/thumb.png";
import travelAgency1 from "../assets/images/projects/travelPage/1.png";
import travelAgency2 from "../assets/images/projects/travelPage/2.png";


const projectCategories = [
  "MERN Full Stack App",
  "Frontend App",
  "React App",
  "Tailwind CSS / HTML",
];

const projectsData = [
  {
    id: "believers-freelance-marketplace",
    name: "Believers Freelance Marketplace",
    category: "MERN Full Stack App",
    featured: true,
    status: "Live",
    shortDescription:
      "A production-grade MERN freelance marketplace for clients and freelancers with contracts, milestones, payments, and real-time communication.",
    detailedDescription:
      "Believers Freelance Marketplace is a full-stack role-based platform designed to simulate a real freelance ecosystem. It supports job posting, proposals, contract creation, milestone tracking, escrow-oriented payment flow, and real-time contract chat. The project demonstrates advanced frontend/backend coordination, workflow modeling, and scalable application structure.",
    keyFeatures: [
      "Role-based authentication for Client, Freelancer, and Admin",
      "Job posting and proposal lifecycle",
      "Contract creation and milestone-based workflow",
      "Escrow-inspired payment handling with Razorpay",
      "Real-time notifications and contract chat with Socket.IO",
      "Admin monitoring and moderation features",
    ],
    howToUse: [
      "Sign up and log in with the appropriate role",
      "Clients can post jobs and review proposals",
      "Freelancers can browse jobs and submit proposals",
      "Accepted proposals move into contracts and milestones",
      "Users collaborate and complete payment workflows",
    ],
    techStack: [
      "React (Vite)",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT Auth",
      "Razorpay",
      "Firebase",
      "Swagger",
    ],
    images: {
      thumbnail: freelanceThumb,
      gallery: [freelance1, freelance2],
    },
    links: {
      frontend:
        "https://github.com/saiprasannaworks-droid/Believers_freelancer_App/tree/main/frontend/believers_freelancerApp",
      backend:
        "https://github.com/saiprasannaworks-droid/Believers_freelancer_App/tree/main/backend",
      github:
        "https://github.com/saiprasannaworks-droid/Believers_freelancer_App/tree/main",
      live: "https://believersfreelancerapp.netlify.app/",
    },
  },

  {
    id: "believers-expense-tracker-fullstack",
    name: "Believers Expense Tracker",
    category: "MERN Full Stack App",
    featured: false,
    status: "Live",
    shortDescription:
      "A full-stack expense tracking platform with authentication, dashboard analytics, filtering, and category-based spending insights.",
    detailedDescription:
      "Believers Expense Tracker is a full-stack application built to manage daily expense workflows through a structured dashboard experience. It includes authentication, categorized entries, summary views, filters, chart-based insights, and persistent backend-driven data handling.",
    keyFeatures: [
      "Login and sign-up authentication flow",
      "Dashboard overview with summaries",
      "Category-wise expense management",
      "Filtering support",
      "Chart visualization for spending analysis",
      "Persistent full-stack data flow",
    ],
    howToUse: [
      "Create an account or log in",
      "Add income or expense entries",
      "Filter entries by category or date",
      "Review charts to understand spending patterns",
      "Manage records as needed",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Authentication Flow",
      "Dashboard UI",
      "Chart Visualization",
    ],
    images: {
      thumbnail: expenseThumb,
      gallery: [expense1, expense2],
    },
    links: {
      frontend: "https://github.com/saiprasannaworks-droid/Believers-Expense-Tracker",
      backend: "https://github.com/saiprasannaworks-droid/Believers-Expense-Tracker",
      github: "https://github.com/saiprasannaworks-droid/Believers-Expense-Tracker",
      live: "https://believersexpensetracker.netlify.app/",
    },
  },

  {
    id: "income-expense-calculator-task",
    name: "Expense Tracker (Income & Expense Calculator)",
    category: "Frontend App",
    featured: false,
    status: "Live",
    shortDescription:
      "A responsive vanilla JavaScript transaction calculator with add, edit, delete, filter, and localStorage persistence.",
    detailedDescription:
      "A frontend-only income and expense calculator built using HTML, CSS, and vanilla JavaScript. It supports transaction management, automatic totals, filtering, and localStorage persistence.",
    keyFeatures: [
      "Add income and expense transactions",
      "Edit and delete records",
      "Filter by all, income, or expense",
      "Automatic balance calculation",
      "Reset flow and localStorage persistence",
    ],
    howToUse: [
      "Open the application",
      "Enter transaction details and choose type",
      "Submit to add records",
      "Use filters to view records",
      "Edit or delete entries as needed",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Local Storage API"],
    images: {
      thumbnail: calculatorThumb,
      gallery: [calculator1, calculator2],
    },
    links: {
      frontend: "https://github.com/saiprasannaworks-droid/Income-Expense-Calculator-Task",
      backend: "",
      github: "https://github.com/saiprasannaworks-droid/Income-Expense-Calculator-Task",
      live: "https://transactioncalculator.netlify.app/",
    },
  },

  {
    id: "believers-memory-card-game",
    name: "Believers Memory Card Game",
    category: "Frontend App",
    featured: false,
    status: "Live",
    shortDescription:
      "A colorful memory-match browser game with timer, move counter, shuffle logic, and responsive gameplay.",
    detailedDescription:
      "A frontend-only interactive game built with HTML, CSS, and JavaScript. It focuses on card-flip logic, randomized layouts, timer handling, move tracking, and responsive gameplay.",
    keyFeatures: [
      "Smooth flip animations",
      "Timer and move counter",
      "Randomized card positions",
      "Game-end modal",
      "Reset and restart controls",
    ],
    howToUse: [
      "Start the game",
      "Flip two cards at a time",
      "Match all pairs to complete the game",
      "Track your moves and time",
      "Restart and play again",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    images: {
      thumbnail: memoryGameThumb,
      gallery: [memoryGame1, memoryGame2],
    },
    links: {
      frontend: "https://github.com/saiprasannaworks-droid/Mini-Project",
      backend: "",
      github: "https://github.com/saiprasannaworks-droid/Mini-Project",
      live: "https://believersmemorycardgame.netlify.app/html_files/index.html",
    },
  },

  {
    id: "believers-movie-premire",
    name: "Believers Movie Premire",
    category: "React App",
    featured: false,
    status: "Live",
    shortDescription:
      "A React-based movie search experience using the OMDb API with filters, pagination, and detailed movie views.",
    detailedDescription:
      "A React application focused on search-driven browsing with API integration. It lets users search movie titles, filter by media type, open detailed views, and navigate paginated results.",
    keyFeatures: [
      "Movie search by title",
      "Type filtering",
      "Detailed movie page",
      "Pagination support",
      "Loading and error handling",
    ],
    howToUse: [
      "Open the homepage",
      "Search a movie title",
      "Apply filters",
      "Navigate paginated results",
      "Open a movie card for details",
    ],
    techStack: [
      "React",
      "React Router DOM",
      "Tailwind CSS",
      "JavaScript",
      "OMDb API",
      "Vite",
    ],
    images: {
      thumbnail: moviepremireThumb,
      gallery: [moviepremire1, moviepremire2],
    },
    links: {
      frontend: "https://github.com/saiprasannaworks-droid/Movies-Search-App",
      backend: "",
      github: "https://github.com/saiprasannaworks-droid/Movies-Search-App",
      live: "https://believerspremire.netlify.app/",
    },
  },

  {
    id: "smart-expense-tracker-react",
    name: "Smart Expense Tracker",
    category: "React App",
    featured: true,
    status: "Live",
    shortDescription:
      "A React expense manager with Context API, filtering, edit flows, summary cards, and chart-based visualization.",
    detailedDescription:
      "A React-based frontend application using Context API for shared state and localStorage for persistence. It includes add, edit, delete, search, category filtering, summaries, and charts.",
    keyFeatures: [
      "Add, edit, and delete expenses",
      "Filtering and search support",
      "Summary cards",
      "Chart-based visualization",
      "localStorage persistence",
    ],
    howToUse: [
      "Add expense entries",
      "Filter by category or search",
      "Review charts and summary cards",
      "Edit or delete entries",
      "Continue with saved localStorage data",
    ],
    techStack: [
      "React",
      "Context API",
      "Recharts",
      "Tailwind CSS",
      "localStorage",
    ],
    images: {
      thumbnail: expensetrackerThumb,
      gallery: [expensetracker1, expensetracker2],
    },
    links: {
      frontend: "https://github.com/saiprasannaworks-droid/BelieversExpenseTracker",
      backend: "",
      github: "https://github.com/saiprasannaworks-droid/BelieversExpenseTracker",
      live: "https://believersexpensetrackerapp.netlify.app/",
    },
  },

  {
    id: "believers-cooking",
    name: "Believers Cooking",
    category: "React App",
    featured: false,
    status: "Live",
    shortDescription:
      "A polished recipe browsing application using TheMealDB API with search, filters, favorites, and detailed recipe views.",
    detailedDescription:
      "A modern React recipe application built with Vite and Tailwind CSS. It provides recipe listing, debounced search, multi-filter support, detailed pages, and favorites persistence.",
    keyFeatures: [
      "Recipe listing from API",
      "Debounced search",
      "Filtering by category, area, and ingredient",
      "Detailed recipe page",
      "Favorites with localStorage",
    ],
    howToUse: [
      "Browse recipe cards",
      "Search by meal name",
      "Apply filters",
      "Open a recipe card for details",
      "Save favorites",
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "React Router DOM",
      "Lucide React",
      "TheMealDB API",
    ],
    images: {
      thumbnail: believersCookingThumb,
      gallery: [believersCooking1, believersCooking2],
    },
    links: {
      frontend: "https://github.com/saiprasannaworks-droid/Believers_CookingApp",
      backend: "",
      github: "https://github.com/saiprasannaworks-droid/Believers_CookingApp",
      live: "https://believerscookingapp.netlify.app/",
    },
  },

  {
    id: "academy-courses-landing-page",
    name: "Academy & Courses Landing Page",
    category: "Tailwind CSS / HTML",
    featured: false,
    status: "Live",
    shortDescription:
      "A landing page built with Tailwind CSS for academy and course presentation with a clean marketing-oriented layout.",
    detailedDescription:
      "A static landing page focused on presenting academy and course content with structured visual hierarchy and responsive Tailwind styling.",
    keyFeatures: [
      "Structured landing page layout",
      "Responsive sections",
      "Utility-first Tailwind styling",
      "Promotional page composition",
    ],
    howToUse: [
      "Open the landing page",
      "Scroll through the sections",
      "Review academy and course blocks",
    ],
    techStack: ["HTML5", "Tailwind CSS"],
    images: {
      thumbnail: acadaemyCoursesThumb,
      gallery: [acadamyCourses1, academyCourses2],
    },
    links: {
      frontend: "https://github.com/saiprasannaworks-droid/task02",
      backend: "",
      github: "https://github.com/saiprasannaworks-droid/task02",
      live: "https://guvitask02landingpage.netlify.app/html_files/index.html",
    },
  },

  {
    id: "html-css-landing-page",
    name: "HTML & CSS Landing Page",
    category: "Tailwind CSS / HTML",
    featured: false,
    status: "Live",
    shortDescription:
      "A basic landing page built using only HTML and CSS with a straightforward static website structure.",
    detailedDescription:
      "A static landing page created using HTML and CSS only, showing foundational frontend layout work and page-structure implementation.",
    keyFeatures: [
      "Pure HTML and CSS implementation",
      "Static landing page structure",
      "Simple visual hierarchy",
      "Responsive basics",
    ],
    howToUse: [
      "Open the page",
      "Review section layout and content presentation",
    ],
    techStack: ["HTML5", "CSS3"],
    images: {
      thumbnail: travelAgencyThumb,
      gallery: [travelAgency1, travelAgency2],
    },
    links: {
      frontend: "https://github.com/saiprasannaworks-droid/task01",
      backend: "",
      github: "https://github.com/saiprasannaworks-droid/task01",
      live: "https://saiprasnnaguvitask01.netlify.app/html/landing",
    },
  },
];

export { projectCategories, projectsData };