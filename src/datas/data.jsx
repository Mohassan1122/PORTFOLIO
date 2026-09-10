import { AiFillCode, AiOutlineControl } from "react-icons/ai";
import { FaServer, FaReact, FaLaravel, FaLink, FaBug, FaCloudUploadAlt, FaProjectDiagram, FaTools, FaLaptopCode, FaGitAlt, FaDatabase, FaDocker, FaFire } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiReactquery, SiMysql, SiFirebase } from "react-icons/si";

export const featuresData = [
  {
    id: 1,
    icon: <AiFillCode />,
    title: 'Full-Stack Web Development',
    des: 'Expertise in building scalable end-to-end applications with React, TypeScript, and Node.js/Laravel, delivering high performance and clean architectures.',
  },
  {
    id: 2,
    icon: <FaReact />,
    title: 'Frontend Mastery (React 19 & Next.js)',
    des: 'Crafting responsive, accessible, and dynamic user interfaces with modern React, hooks, server components, and Tailwind CSS.',
  },
  {
    id: 3,
    icon: <SiTypescript />,
    title: 'TypeScript & Type Safety',
    des: 'Building enterprise-grade applications with strict TypeScript typing, interfaces, and automated contract generation for bug-free codebases.',
  },
  {
    id: 4,
    icon: <SiReactquery />,
    title: 'State Management & TanStack Query',
    des: 'Managing client and server state seamlessly with TanStack (React) Query, caching strategies, optimistic updates, and Redux Toolkit.',
  },
  {
    id: 5,
    icon: <FaLaravel />,
    title: 'Backend Systems (Laravel & Node.js)',
    des: 'Architecting robust RESTful APIs, microservices, authentication systems, and database ORMs with Laravel and Express/Node.js.',
  },
  {
    id: 6,
    icon: <SiFirebase />,
    title: 'Firebase & Cloud Services',
    des: 'Integrating Firebase Authentication, Cloud Firestore, Realtime Databases, and serverless functions for rapid production deployments.',
  },
  {
    id: 7,
    icon: <FaDocker />,
    title: 'Containerization & DevOps (Docker)',
    des: 'Dockerizing web applications, configuring multi-container services with Docker Compose, and deploying seamlessly via CI/CD pipelines.',
  },
  {
    id: 8,
    icon: <FaLink />,
    title: 'API Integration & OpenAPI/Swagger',
    des: 'Designing and consuming REST APIs with automated client SDK generation (Orval/OpenAPI), OAuth2 authentication, and payload validation.',
  },
  {
    id: 9,
    icon: <SiTailwindcss />,
    title: 'Modern UI/UX & Tailwind CSS',
    des: 'Designing clean, responsive interfaces with custom Tailwind CSS themes, glassmorphism, animations, and dark mode support.',
  },
  {
    id: 10,
    icon: <FaDatabase />,
    title: 'Database Architecture (MySQL & PostgreSQL)',
    des: 'Designing optimized relational database schemas, complex SQL queries, indexing, and data migrations for high throughput.',
  },
  {
    id: 11,
    icon: <FaGitAlt />,
    title: 'Version Control & Agile Workflow',
    des: 'Proficient with Git, GitHub pull request workflows, code reviews, and Agile/Scrum team collaboration using Jira & Trello.',
  },
  {
    id: 12,
    icon: <FaTools />,
    title: 'Performance & Progressive Web Apps (PWA)',
    des: 'Building offline-first PWAs with service workers, Vite optimization, web manifests, and Lighthouse performance auditing.',
  },
];