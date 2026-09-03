import freelanceThumb from "../assets/images/projects/freelance/thumb.png";
import freelance1 from "../assets/images/projects/freelance/1.png";
import freelance2 from "../assets/images/projects/freelance/2.png";

import expenseThumb from "../assets/images/projects/expense/thumb.png";
import expense1 from "../assets/images/projects/expense/1.png";
import expense2 from "../assets/images/projects/expense/2.png";

import cookingBuddyThumb from "../assets/images/projects/cooking_buddy/thumb.png";
import cookingBuddy1 from "../assets/images/projects/cooking_buddy/1.png";
import cookingBuddy2 from "../assets/images/projects/cooking_buddy/2.png";

import believersCookingThumb from "../assets/images/projects/cookingApp/thumb.png";
import believersCooking1 from "../assets/images/projects/cookingApp/1.png";
import believersCooking2 from "../assets/images/projects/cookingApp/2.png";

import expensetrackerThumb from "../assets/images/projects/expensetrackerReact/thumb.png";
import expensetracker1 from "../assets/images/projects/expensetrackerReact/1.png";
import expensetracker2 from "../assets/images/projects/expensetrackerReact/2.png";

/* ── MERN Full Stack Projects ─────────────────────────── */

const mernProjects = [
  {
    id: "believers-freelance-marketplace",
    name: "FreelancerConnect",
    shortDescription:
      "A production-grade freelance marketplace with role-based workflows, contracts, milestones, payments, and real-time communication.",
    detailedDescription:
      "Full-stack role-based platform simulating a real freelance ecosystem. Supports job posting, proposals, contract creation, milestone tracking, escrow-oriented payment flow, and real-time contract chat.",
    keyFeatures: [
      "Role-based authentication (Client, Freelancer, Admin) with JWT & OAuth",
      "Job posting and proposal lifecycle management",
      "Contract creation and milestone-based workflow",
      "Escrow-inspired payment handling with Razorpay",
      "Real-time notifications and chat with Socket.IO",
      "Backend security — rate limiting, sanitization, Swagger docs",
    ],
    techStack: [
      "React (Vite)",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT & OAuth",
      "Razorpay",
      "Firebase",
      "Swagger",
    ],
    images: {
      thumbnail: freelanceThumb,
      gallery: [freelance1, freelance2],
    },
    links: {
      live: "https://freelancerconnect.netlify.app/login",
      github:
        "https://github.com/saiprasannaworks-droid/FreelancerConnect",
      frontend:
        "https://github.com/saiprasannaworks-droid/FreelancerConnect/tree/main/frontend/believers_freelancerApp",
      backend:
        "https://github.com/saiprasannaworks-droid/FreelancerConnect/tree/main/backend",
    },
  },

  {
    id: "believers-expense-tracker-fullstack",
    name: "SpendWise",
    shortDescription:
      "A full-stack expense tracking platform with authentication, dashboard analytics, filtering, and category-based spending insights.",
    detailedDescription:
      "Full-stack application built to manage daily expense workflows through a structured dashboard experience with authentication, categorized entries, charts, and persistent backend-driven data handling.",
    keyFeatures: [
      "Login and sign-up authentication flow",
      "Dashboard overview with summary cards",
      "Category-wise expense management",
      "Dynamic filtering by category and date",
      "Chart visualization for spending analysis",
      "Persistent full-stack data flow",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "Chart.js / Recharts",
    ],
    images: {
      thumbnail: expenseThumb,
      gallery: [expense1, expense2],
    },
    links: {
      live: "https://spendwise-webapp.netlify.app",
      github:
        "https://github.com/saiprasannaworks-droid/SpendWise",
      frontend:
        "https://github.com/saiprasannaworks-droid/SpendWise/tree/main/frontend",
      backend:
        "https://github.com/saiprasannaworks-droid/SpendWise/tree/main/backend",
    },
  },

  {
    id: "cooking-buddy",
    name: "Cooking Buddy",
    shortDescription:
      "A MERN app to discover recipes from pantry ingredients, with step-by-step cooking, quick-commerce ordering, and an admin dashboard.",
    detailedDescription:
      "Full-stack MERN application enabling users to discover recipes based on pantry ingredients, reducing food waste through smart matching algorithms. Features interactive cooking, quick-commerce integration, and admin analytics.",
    keyFeatures: [
      "Zero-waste pantry matcher with real-time % match scoring",
      "Step-by-step cooking interface with ingredient checklists",
      "Quick-commerce integration (Swiggy Instamart, Blinkit, Zepto)",
      "User-generated recipes with Cloudinary image uploads",
      "Personal cookbook with real-time favourite synchronization",
      "Admin dashboard with live metrics and CSV/Excel ingestion",
    ],
    techStack: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Cloudinary",
      "JWT Auth",
    ],
    images: {
      thumbnail: cookingBuddyThumb,
      gallery: [cookingBuddy1, cookingBuddy2],
    },
    links: {
      live: "https://cookingbuddy.netlify.app/",
      frontend:
        "https://github.com/saiprasannaworks-droid/Cooking_buddy/tree/main/client",
      backend:
        "https://github.com/saiprasannaworks-droid/Cooking_buddy/tree/main/server",
    },
  },
];

/* ── Frontend React Projects ──────────────────────────── */

const frontendProjects = [
  {
    id: "believers-cooking-frontend",
    name: "RecipeVerse",
    shortDescription:
      "A recipe discovery application using React and TheMealDB API with search, filters, favorites, and detailed recipe views.",
    detailedDescription:
      "Modern React recipe application built with Vite and Tailwind CSS. Provides recipe listing, debounced search, multi-filter support, detailed pages, and favorites persistence.",
    keyFeatures: [
      "Recipe listing from TheMealDB API",
      "Debounced search by meal name",
      "Filtering by category, area, and ingredient",
      "Detailed recipe page with structured data",
      "Favorites with localStorage persistence",
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "React Router DOM",
      "TheMealDB API",
    ],
    images: {
      thumbnail: believersCookingThumb,
      gallery: [believersCooking1, believersCooking2],
    },
    links: {
      live: "https://recipeverseapp.netlify.app/",
      github:
        "https://github.com/saiprasannaworks-droid/RecipeVerse",
    },
  },

  {
    id: "smart-expense-tracker-react",
    name: "Smart Expense Tracker",
    shortDescription:
      "A React expense manager with Context API, filtering, edit flows, summary cards, and chart-based visualization.",
    detailedDescription:
      "React-based frontend application using Context API for shared state and localStorage for persistence. Includes CRUD operations, search, category filtering, summaries, charts, and light/dark mode.",
    keyFeatures: [
      "Add, edit, and delete expenses with Context API",
      "Filtering and search support",
      "Pie chart visualization using Recharts",
      "localStorage persistence",
      "Light / dark mode support",
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
      live: "https://believersexpensetrackerapp.netlify.app/",
      github:
        "https://github.com/saiprasannaworks-droid/BelieversExpenseTracker",
    },
  },
];

export { mernProjects, frontendProjects };