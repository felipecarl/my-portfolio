export interface ExperienceEntry {
  company: string;
  role: string;
  model: string;
  period: string;
  showLine: boolean;
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "BEES / AB InBev",
    role: "Software Engineer",
    model: "Remote",
    period: "Current Role",
    showLine: true,
    points: [
      "Built and evolved frontend experiences for a large-scale B2B commerce platform operating across 15 countries",
      "Worked with React, TypeScript, micro-frontends, design systems, feature flags, observability, and international product teams",
      "Led the environment setup, deployment, and integration of a new micro-frontend",
      "Investigated and documented previously unclear setup and delivery processes",
      "Created most of the technical documentation associated with major migration workflows",
      "Helped migrate markets and vendors to a new architecture",
      "Trained more than 40 engineers on the internal design system",
      "Helped improve UI consistency and reduce interface-related defects",
      "Currently improving the company's developer portal",
      "Contributing to frontend integrations for an internal AI chat and smart search experience",
    ],
  },
  {
    company: "Elemental Systems",
    role: "Lead Frontend Developer",
    model: "Remote · Independent Contractor",
    period: "Previous experience",
    showLine: true,
    points: [
      "Modernized legacy React applications using TypeScript, Hooks, and modern component patterns",
      "Introduced structured state management with Context API and Effector",
      "Reduced duplicated frontend code through reusable components",
      "Built complex operational interfaces, editable data grids, custom widgets, and forms",
      "Architected touchscreen kiosk applications for a fuel station chain",
      "Worked across frontend and backend integration boundaries",
      "Mentored engineers on React, maintainability, and frontend standards",
    ],
  },
  {
    company: "Carl Consulting",
    role: "Full-Stack Software Engineer",
    model: "Blumenau, Brazil - Self-Employed",
    period: "Previous experience",
    showLine: false,
    points: [
      "Built production web applications for regional businesses",
      "Owned requirements, frontend, backend, data modeling, deployment, and maintenance",
      "Developed a retail management system for an optical store",
      "Worked with React, TypeScript, Node.js, Express, MongoDB, and Docker",
      "Built authentication, role-based permissions, forms, dashboards, and image-management workflows",
    ],
  },
];

export const prTrackerTech = [
  "React 19",
  "TypeScript",
  "Vite",
  "Zustand",
  "Tailwind CSS",
  "NestJS",
  "Prisma",
  "PostgreSQL",
  "JWT / Passport.js",
  "Docker",
];

export interface Project {
  title: string;
  subtitle: string;
  status: string;
  shotLabel: string;
  body: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "Optical Store Management System",
    subtitle:
      "A production management platform that replaced manual workflows for a regional optical business.",
    status: "Private client project — details in interviews",
    shotLabel: "Screenshot placeholder — dashboard & records",
    body: "Designed and built the complete application — data modeling, frontend, backend APIs, auth, and role-based permissions. Currently in production with 5,000+ registered customer records, replacing fragmented manual processes.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Docker"],
  },
];

export interface SkillGroup {
  name: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend Engineering",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Sass/SCSS",
      "Tailwind CSS",
      "Responsive Design",
      "Accessibility",
      "i18n",
      "Performance",
    ],
  },
  {
    name: "UI Systems",
    items: [
      "Design Systems",
      "Component Libraries",
      "Material UI",
      "Shadcn/ui",
      "Radix UI",
      "Storybook",
      "Figma",
      "InVision",
    ],
  },
  {
    name: "State & Architecture",
    items: [
      "Zustand",
      "Effector",
      "Redux Toolkit",
      "Context API",
      "Micro-Frontends",
      "Modular Architecture",
      "Domain-Oriented Architecture",
      "Adapter Pattern",
      "DTO Pattern",
      "Monorepos",
      "Custom Hooks",
    ],
  },
  {
    name: "Backend & Data",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "REST APIs",
      "GraphQL",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Passport.js",
      "bcrypt",
      "class-validator",
      "RBAC",
      "Multi-Tenancy",
    ],
  },
  {
    name: "Testing & Quality",
    items: [
      "Jest",
      "Vitest",
      "React Testing Library",
      "Cypress",
      "Supertest",
      "TS strict mode",
      "ESLint",
      "Prettier",
    ],
  },
  {
    name: "DevOps & Observability",
    items: [
      "Git",
      "Docker",
      "Azure DevOps",
      "GitHub Actions",
      "ArgoCD",
      "SonarQube",
      "New Relic",
      "Swagger/OpenAPI",
    ],
  },
  {
    name: "AI-Assisted Development",
    items: [
      "Claude",
      "Cursor",
      "ChatGPT",
      "Codex",
      "UI Prototyping",
      "Design-to-Code",
      "Code Review",
      "Refactoring",
      "Debugging",
    ],
  },
  {
    name: "Practices & Delivery",
    items: [
      "Technical Scoping",
      "Project Ownership",
      "Mentoring",
      "Documentation",
      "Agile Delivery",
      "Production Troubleshooting",
    ],
  },
];

export interface Principle {
  index: string;
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    index: "01",
    title: "Own the outcome",
    body: "I take responsibility beyond implementation, including clarification, architecture, testing, documentation, release, and follow-up.",
  },
  {
    index: "02",
    title: "Build for maintainability",
    body: "I favor clear boundaries, reusable components, strong typing, and solutions that the next engineer can understand.",
  },
  {
    index: "03",
    title: "Communicate early",
    body: "I surface unclear requirements, risks, and trade-offs before they become delivery problems.",
  },
  {
    index: "04",
    title: "Solve real problems",
    body: "I care about whether a technical decision improves the experience of users, engineering teams, or the business.",
  },
];

export interface Highlight {
  mark: string;
  text: string;
}

export const highlights: Highlight[] = [
  { mark: "6+ yrs", text: "6+ years of professional software engineering experience" },
  { mark: "15 countries", text: "Products delivered across 15 countries" },
  { mark: "40+ engineers", text: "40+ engineers trained on an internal design system" },
  { mark: "End to end", text: "Full-stack product ownership from architecture to release" },
];

export const focusAreas = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "NestJS",
  "Design Systems",
  "Micro-Frontends",
  "SaaS Architecture",
];

export const site = {
  githubUrl: "https://github.com/felipecarl",
  linkedinUrl: "https://www.linkedin.com/in/felipe-carl/",
  email: "hello@felipecarl.dev",
  resumeUrl: "/resume-felipe-carl.pdf",
  domain: "https://felipecarl.dev",
};
