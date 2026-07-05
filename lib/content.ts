// =============================================================================
// TRANSLATED CONTENT — Indonesian (id) & English (en).
// Non-translated data (photo, tech stack, contact details) lives in data.ts.
// =============================================================================

export type Lang = "id" | "en";

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  // `active: true` shows a highlighted green dot on the timeline
  active?: boolean;
};

export type Project = {
  name: string;
  description: string;
  role: string;
  // Tech names shown as small pills
  stack: string[];
};

export type Dict = {
  nav: { label: string; href: string }[];
  hero: {
    availability: string;
    headingLead: string;
    name: string;
    role: string;
    subheading: string;
  };
  stats: { value: string; label: string }[];
  about: { label: string; paragraph: string };
  experience: ExperienceItem[];
  projects: { eyebrow: string; subtitle: string; items: Project[] };
  tech: { eyebrow: string; subtitle: string };
  contact: { heading: string; cta: string };
};

export const dict: Record<Lang, Dict> = {
  // ---------------------------------------------------------------------------
  // Bahasa Indonesia
  // ---------------------------------------------------------------------------
  id: {
    nav: [
      { label: "tentang", href: "#about" },
      { label: "pengalaman", href: "#experience" },
      { label: "proyek", href: "#projects" },
      { label: "stack", href: "#stack" },
      { label: "kontak", href: "#contact" },
    ],
    hero: {
      availability: "tersedia untuk bekerja",
      headingLead: "Hi, saya",
      name: "Muhamad Ramdhani",
      role: "full-stack developer",
      subheading:
        "Saya merancang dan membangun aplikasi web berskala enterprise — dari SaaS multi-tenant hingga sistem ticketing — dengan Next.js, Node.js, dan Laravel.",
    },
    stats: [
      { value: "5+", label: "proyek selesai" },
      { value: "10+", label: "teknologi dikuasai" },
      { value: "2", label: "pengalaman kerja" },
    ],
    about: {
      label: "TENTANG SAYA",
      paragraph:
        "Full-Stack Developer lulusan Teknologi Informasi Universitas Brawijaya. Saya berpengalaman membangun platform dari nol hingga deployment — mulai dari arsitektur decoupled, keamanan sistem (RBAC, JWT), desain database, hingga infrastruktur server (Docker, Ubuntu VPS). Fokus saya menciptakan solusi yang scalable, aman, dan berkinerja tinggi.",
    },
    experience: [
      {
        role: "Full-Stack Developer (Magang)",
        company: "Sibernetik Integra Data",
        period: "Des 2025 – Jun 2026",
        description:
          "Membangun SaaS multi-tenant IT Asset Management dan IT Support Ticketing System. Menangani deployment Docker, worker SMTP, dan migrasi server cPanel ke Ubuntu VPS.",
        active: true,
      },
      {
        role: "Frontend Developer (Magang)",
        company: "Diskominfo Kab. Malang",
        period: "Sep 2024 – Jan 2025",
        description:
          "Mengembangkan antarmuka untuk Sistem Single Sign-On (SSO) berbasis web, merancang prototipe, dan mengintegrasikan frontend dengan backend.",
      },
    ],
    projects: {
      eyebrow: "PROYEK",
      subtitle: "Beberapa proyek yang pernah saya kerjakan",
      items: [
        {
          name: "IT Asset Management (SaaS Multi-tenant)",
          description:
            "Platform manajemen aset IT berbasis SaaS multi-tenant dengan isolasi data antar tenant, RBAC, dan autentikasi JWT.",
          role: "Full-Stack Developer",
          stack: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
        },
        {
          name: "IT Support Ticketing System",
          description:
            "Portal ticketing dukungan IT antar organisasi dengan proteksi sesi berbasis token dan isolasi data antar pengguna.",
          role: "Full-Stack Developer",
          stack: ["Next.js", "Laravel", "Laravel Sanctum", "MySQL"],
        },
        {
          name: "Company Profile Dinamis",
          description:
            "Pengembangan UI website company profile dengan optimasi performa (SSR/SSG, optimasi image), integrasi frontend ke headless CMS, serta setup analytics & tracking (heatmap, UTM tracking).",
          role: "Frontend Developer",
          stack: ["Next.js", "Strapi", "GA4"],
        },
        {
          name: "E-Commerce Fullstack",
          description:
            "Aplikasi e-commerce dengan fitur manajemen stok dan laporan penjualan otomatis.",
          role: "Full-Stack Developer",
          stack: ["Laravel", "MySQL"],
        },
        {
          name: "Aplikasi Survey Kepuasan",
          description:
            "Sistem survei kepuasan dengan visualisasi data interaktif untuk analisis umpan balik.",
          role: "Full-Stack Developer",
          stack: ["Laravel", "MySQL"],
        },
      ],
    },
    tech: {
      eyebrow: "TECH STACK",
      subtitle: "Tools yang saya gunakan sehari-hari",
    },
    contact: {
      heading: "Mari bekerja sama",
      cta: "Unduh CV",
    },
  },


  
  en: {
    nav: [
      { label: "about", href: "#about" },
      { label: "experience", href: "#experience" },
      { label: "projects", href: "#projects" },
      { label: "stack", href: "#stack" },
      { label: "contact", href: "#contact" },
    ],
    hero: {
      availability: "available for work",
      headingLead: "Hi, I'm",
      name: "Muhamad Ramdhani",
      role: "full-stack developer",
      subheading:
        "I design and build enterprise-scale web applications — from multi-tenant SaaS to ticketing systems — with Next.js, Node.js, and Laravel.",
    },
    stats: [
      { value: "5+", label: "projects completed" },
      { value: "10+", label: "technologies mastered" },
      { value: "2", label: "work experiences" },
    ],
    about: {
      label: "ABOUT ME",
      paragraph:
        "Full-Stack Developer and Information Technology graduate of Universitas Brawijaya. I have experience building platforms from the ground up to deployment — from decoupled architecture, system security (RBAC, JWT), and database design to server infrastructure (Docker, Ubuntu VPS). My focus is building solutions that are scalable, secure, and high-performing.",
    },
    experience: [
      {
        role: "Full-Stack Developer (Intern)",
        company: "Sibernetik Integra Data",
        period: "Dec 2025 – Jun 2026",
        description:
          "Built multi-tenant SaaS for IT Asset Management and IT Support Ticketing. Handled Docker deployment, the SMTP worker, and server migration from cPanel to Ubuntu VPS.",
        active: true,
      },
      {
        role: "Frontend Developer (Intern)",
        company: "Diskominfo Kab. Malang",
        period: "Sep 2024 – Jan 2025",
        description:
          "Developed the interface for a web-based Single Sign-On (SSO) system, designed prototypes, and integrated the frontend with the backend.",
      },
    ],
    projects: {
      eyebrow: "PROJECTS",
      subtitle: "A selection of projects I've built",
      items: [
        {
          name: "IT Asset Management (Multi-tenant SaaS)",
          description:
            "Multi-tenant SaaS IT asset management platform with cross-tenant data isolation, RBAC, and JWT authentication.",
          role: "Full-Stack Developer",
          stack: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
        },
        {
          name: "IT Support Ticketing System",
          description:
            "Cross-organization IT support ticketing portal with token-based session protection and per-user data isolation.",
          role: "Full-Stack Developer",
          stack: ["Next.js", "Laravel", "Laravel Sanctum", "MySQL"],
        },
        {
          name: "Dynamic Company Profile",
          description:
            "Company profile UI development with performance optimization (SSR/SSG, image optimization), frontend integration with a headless CMS, plus analytics & tracking setup (heatmap, UTM tracking).",
          role: "Frontend Developer",
          stack: ["Next.js", "Strapi", "GA4"],
        },
        {
          name: "Full-stack E-Commerce",
          description:
            "E-commerce application with inventory management and automated sales reporting.",
          role: "Full-Stack Developer",
          stack: ["Laravel", "MySQL"],
        },
        {
          name: "Satisfaction Survey App",
          description:
            "Satisfaction survey system with interactive data visualization for feedback analysis.",
          role: "Full-Stack Developer",
          stack: ["Laravel", "MySQL"],
        },
      ],
    },
    tech: {
      eyebrow: "TECH STACK",
      subtitle: "Tools I use every day",
    },
    contact: {
      heading: "Let's work together",
      cta: "Download CV",
    },
  },
};
