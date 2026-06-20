import { IconType } from "react-icons";
import {
  FaPhp,
  FaLaravel,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiVercel,
  SiFigma,
} from "react-icons/si";

export interface StackItem {
  name: string;
  url: string;
  icon: IconType;
  color: string;
}

export const stacksData: StackItem[] = [
  // Language
  { name: "PHP", url: "https://www.php.net", icon: FaPhp, color: "#777bb4" },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: FaJs,
    color: "#f7df1e",
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
    icon: SiTypescript,
    color: "#3178c6",
  },
  {
    name: "HTML5",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    icon: FaHtml5,
    color: "#e34f26",
  },
  {
    name: "CSS3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: FaCss3Alt,
    color: "#1572b6",
  },

  // Frontend Framework & Styling
  {
    name: "React.js",
    url: "https://react.dev",
    icon: FaReact,
    color: "#61dafb",
  },
  {
    name: "Next.js",
    url: "https://nextjs.org",
    icon: SiNextdotjs,
    color: "#ffffff",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    icon: SiTailwindcss,
    color: "#06b6d4",
  },

  // Backend & Runtime
  {
    name: "Node.js",
    url: "https://nodejs.org",
    icon: FaNodeJs,
    color: "#339933",
  },
  {
    name: "Express.js",
    url: "https://expressjs.com",
    icon: SiExpress,
    color: "#ffffff",
  },
  {
    name: "Laravel",
    url: "https://laravel.com",
    icon: FaLaravel,
    color: "#ff2d20",
  },

  // Database & ORM
  {
    name: "MySQL",
    url: "https://www.mysql.com",
    icon: SiMysql,
    color: "#4479a1",
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org",
    icon: SiPostgresql,
    color: "#4169e1",
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com",
    icon: SiMongodb,
    color: "#47a248",
  },
  { name: "Redis", url: "https://redis.io", icon: SiRedis, color: "#dc382d" },
  {
    name: "Prisma",
    url: "https://www.prisma.io",
    icon: SiPrisma,
    color: "#2d3748",
  },

  // Tools & DevOps
  {
    name: "Docker",
    url: "https://www.docker.com",
    icon: FaDocker,
    color: "#2496ed",
  },
  { name: "Git", url: "https://git-scm.com", icon: FaGitAlt, color: "#f05032" },
  {
    name: "Vercel",
    url: "https://vercel.com",
    icon: SiVercel,
    color: "#ffffff",
  },
  {
    name: "Figma",
    url: "https://www.figma.com",
    icon: SiFigma,
    color: "#f24e1e",
  },
];
