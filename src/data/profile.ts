export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  note?: string;
}

export const profile = {
  name: "Hazem Lenin",
  title: "Software Engineer",
  tagline:
    "I own complex modules end-to-end in enterprise B2B systems — from .NET Core APIs and Clean Architecture to Angular frontends and production mobile apps.",
  about:
    "Software Engineer with 4+ years of experience. Known for going beyond delivery: restructuring frontend monorepos, implementing MFA flows from scratch, building developer tooling adopted company-wide, and contributing to engineering culture through mentoring, knowledge-sharing sessions, and co-authoring my company's official engineering competency matrix.",
  email: "hazemlenin@gmail.com",
  phone: "+20 100 235 3194",
  phoneHref: "+201002353194",
  location: "Egypt",
  cvPath: "/Hazem_Lenin_CV.pdf",
  links: {
    github: "https://github.com/HazemLenin",
    linkedin: "https://www.linkedin.com/in/hazem-lenin/",
  },
  experience: [
    {
      company: "GAMP",
      role: "Software Engineer",
      period: "Mar 2024 — Present",
      location: "Poland · Remote",
      highlights: [
        "Mid-senior software engineer on GapMap, a modular B2B partition management platform serving enterprise clients — owned the Contractors module end-to-end across .NET Core API and Angular.",
        "Designed and shipped MFA (Identity Server, recovery codes), PayU payments, subscriptions, a cross-platform feature-toggle system, and raw TCP communication with ethernet-connected printers.",
        "Solely owned the mobile project: built and shipped GapMap and eZRRT (Capacitor + Angular + Trapeze) to both Google Play and the App Store, with Fastlane CI/CD.",
        "Co-led a 2-month restructure consolidating two large Angular apps into an Nx monorepo with a shared component library.",
        "Redesigned a calendar API and optimized DB queries, cutting load time by ~70%; mentored 3 junior developers and co-authored the company's engineering competency matrix.",
      ],
    },
    {
      company: "Pixel Academy",
      role: "Full Stack Developer",
      period: "Oct 2021 — Mar 2024",
      location: "Egypt",
      highlights: [
        "Architected and built multiple e-learning platforms from the ground up with Django REST Framework — API design, data modelling, and backend architecture.",
        "Designed and delivered a full learning-center management system covering appointments, scheduling, pricing rules, and financial reporting.",
        "Delivered frontend features across React, Vue.js, and Next.js depending on project requirements.",
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      name: "Merge Polisher",
      description:
        "AI-powered GitLab/GitHub CI tool that polishes MR/PR descriptions, posts inline code-review suggestions, and generates a confidence score based on coverage of critical code paths.",
      tags: ["Python", "LLM", "CI/CD", "Docker"],
      link: "https://github.com/HazemLenin/merge-polisher",
    },
    {
      name: "Zenith",
      description:
        "Peer-to-peer skill-sharing and learning platform — courses, skill transfers between students, live sessions, and chat. Full-stack TypeScript with Drizzle ORM.",
      tags: ["TypeScript", "Node.js", "Drizzle ORM"],
      link: "https://github.com/HazemLenin/zenith",
    },
    {
      name: "Learn Flow",
      description:
        "Event-driven mini e-learning platform: Nx monorepo of 3 NestJS microservices (Catalog, Enrollment, Notification) over RabbitMQ, plus a React frontend. Idempotent event consumers, retry/backoff email pipeline, Docker Compose, and Jest/Supertest tests with GitHub Actions CI.",
      tags: ["NestJS", "RabbitMQ", "React", "Docker"],
      link: "https://github.com/HazemLenin/learn-flow",
    },
    {
      name: "GapMap & eZRRT",
      description:
        "Enterprise B2B partition management platform and its companion mobile apps, shipped to the App Store and Google Play. Professional work at GAMP.",
      tags: [".NET Core", "Angular", "Capacitor"],
      note: "Proprietary",
    },
  ] satisfies Project[],
  skills: [
    {
      group: "Backend",
      items: [".NET Core", "Clean Architecture", "CQRS / MediatR", "SignalR", "Django", "REST APIs"],
    },
    {
      group: "Frontend",
      items: ["Angular", "React", "Vue.js", "Next.js", "Redux", "Tailwind CSS"],
    },
    {
      group: "Mobile",
      items: ["Capacitor", "Trapeze", "FCM", "Fastlane"],
    },
    {
      group: "DevOps",
      items: ["GitLab CI/CD", "Docker", "App Store Connect", "Google Play Console"],
    },
    {
      group: "Other",
      items: ["Python", "LLM APIs", "SQL", "Playwright", "Git"],
    },
  ],
  education: {
    degree: "B.Sc. Management Information Systems",
    school: "Faculty of Business, Alexandria University",
    year: "2025",
    grade: "GPA 3.69 / 4.0",
  },
  certifications: [
    {
      name: "Software Design and Architecture Specialization",
      issuer: "University of Alberta · Coursera",
    },
    {
      name: "Coding Instructor (Volunteer)",
      issuer: "Semicolon",
    },
  ],
};
