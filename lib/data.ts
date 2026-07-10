// =============================================================================
// SHARED SITE DATA — non-translated assets & links.
// Translated copy (id/en) lives in content.ts.
// =============================================================================

import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiLaravel,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiFigma,
  SiStrapi,
  SiCloudflare,
  SiGoogleanalytics,
  SiUbuntu,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// -----------------------------------------------------------------------------
// Personal / site basics
// -----------------------------------------------------------------------------
export const site = {
  logo: "ramdhani.dev",
  // 👉 GANTI foto profil: taruh file di public/ lalu ubah path ini (mis. "/profile.jpg")
  profileImage: "/FotoRamdhani.jpeg",
  // 👉 GANTI file CV: taruh PDF di public/ lalu ubah nama file ini
  cvPath: "/cv-muhamad-ramdhani.pdf",
};

// -----------------------------------------------------------------------------
// Contact + social links (same in every language)
// -----------------------------------------------------------------------------
export const contact = {
  email: "muhammadramdhani6417@gmail.com",
  phone: "+62 857-6146-4821",
  // tel: link uses the plain number
  phoneHref: "+6285761464821",
};

export const socials = {
  linkedin: "https://www.linkedin.com/in/mramdhani12",
};

// -----------------------------------------------------------------------------
// Tech stack — icons come from react-icons/si (simple-icons)
// -----------------------------------------------------------------------------
export type TechItem = {
  name: string;
  icon: IconType;
  // Brand color shown on hover
  color: string;
  // `true` shows a small "learning" badge — honest about skills in progress
  learning?: boolean;
};

export const techStack: TechItem[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Strapi", icon: SiStrapi, color: "#4945FF" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
  { name: "GA4", icon: SiGoogleanalytics, color: "#E37400" },
  { name: "Ubuntu VPS", icon: SiUbuntu, color: "#E95420" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Java", icon: FaJava, color: "#F89820", learning: true },
];
