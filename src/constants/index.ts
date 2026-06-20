// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  reactnative,
  php,
  fullstack,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  instagram,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },

  // {
  //   id: "source-code",
  //   title: "Source Code",
  //   link: "http://www.github.com/sanidhyy/3d-portfolio",
  // },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "React.js Developer",
    company_name: "CodeXpert Dev",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "March 2021 - April 2022",
    points: [
      "Built and maintained reusable React.js components to create scalable and user-friendly web applications.",
      "Integrated REST APIs and managed application state using Redux.",
      "Optimized website performance, reducing page load times and improving user experience.",
      "Worked closely with UI/UX designers to implement responsive and pixel-perfect interfaces.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "CodeXpert Dev",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "May 2022 - Dec 2023",
    points: [
      "Developed cross-platform mobile applications using React Native for Android and iOS.",
      "Integrated third-party services such as Firebase Authentication, Push Notifications, and Analytics.",
      "Implemented navigation, state management, and offline data synchronization features.",
      "Published app updates, fixed bugs, and improved application performance across devices.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "CodeXpert Dev",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Dec 2024",
    points: [
      "Designed and developed responsive websites using HTML, CSS, JavaScript, and modern frontend frameworks.",
      "Implemented SEO best practices and optimized websites for speed and accessibility.",
      "Collaborated with backend developers to integrate APIs and dynamic content.",
      "Maintained and enhanced existing web applications while ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "CodeXpert Dev",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developing end-to-end web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Designing RESTful APIs and implementing secure authentication and authorization systems.",
      "Building scalable database architectures and optimizing query performance.",
      "Deploying and maintaining applications on cloud platforms while following CI/CD practices.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Task Manager",
    description:
      "A productivity application that allows users to create, update, organize, and track daily tasks with priority levels and status management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/yourusername/task-manager",
    live_site_link: "https://task-manager-demo.vercel.app",
  },
  {
    name: "Expense Tracker",
    description:
      "A personal finance application that helps users track income, expenses, and monthly spending with interactive charts and reports.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chartjs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/yourusername/expense-tracker",
    live_site_link: "https://expense-tracker-demo.vercel.app",
  },
  {
    name: "Employee Management System",
    description:
      "A dashboard for managing employee records, departments, attendance, and role-based access within an organization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/yourusername/employee-management",
    live_site_link: "https://employee-management-demo.vercel.app",
  },
  {
    name: "E-Commerce Store",
    description:
      "A modern online shopping platform featuring product browsing, cart management, user authentication, and secure checkout functionality.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/yourusername/ecommerce-store",
    live_site_link: "https://ecommerce-demo.vercel.app",
  },
  {
    name: "Portfolio Website",
    description:
      "A responsive developer portfolio showcasing projects, technical skills, work experience, and contact information with smooth animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/yourusername/portfolio",
    live_site_link: "https://portfolio-demo.vercel.app",
  },
  {
    name: "Notes App",
    description:
      "A simple note-taking application with CRUD operations, search functionality, and local storage synchronization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/yourusername/notes-app",
    live_site_link: "https://notes-app-demo.vercel.app",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/codexpert_dev/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/codexpertdev",
  },
] as const;
