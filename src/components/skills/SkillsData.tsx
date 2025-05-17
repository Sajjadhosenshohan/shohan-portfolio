"use client";

import type React from "react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaGithub,
  FaFigma,
  FaTrello,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiExpress,
  SiNetlify,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { AiFillApi } from "react-icons/ai";

export interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
}

export const skillsData: Skill[] = [
  // Frontend
  {
    name: "React",
    icon: <FaReact size={24} />,
    color: "#00D8FF",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={24} />,
    color: "#111111",
    category: "Frontend",
  },
  {
    name: "HTML",
    icon: <FaHtml5 size={24} />,
    color: "#FF5722",
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={24} />,
    color: "#2196F3",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <FaJs size={24} />,
    color: "#F7DF1E",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={24} />,
    color: "#2F74C0",
    category: "Frontend",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={24} />,
    color: "#00C8FF",
    category: "Frontend",
  },
  {
    name: "Figma",
    icon: <FaFigma size={24} />,
    color: "#FF7262",
    category: "Frontend",
  },
  {
    name: "ShadCN",
    icon: <FaFigma size={24} />,
    color: "#FF7262",
    category: "Frontend",
  },
  {
    name: "Antd",
    icon: <FaFigma size={24} />,
    color: "#FF7262",
    category: "Frontend",
  },
  // Database
  {
    name: "MongoDB",
    icon: <SiMongodb size={24} />,
    color: "#4DB33D",
    category: "Database",
  },
  {
    name: "Mongoose",
    icon: <FaDatabase size={24} />,
    color: "#3E8ACC",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql size={24} />,
    color: "#3366CC",
    category: "Database",
  },
  {
    name: "Prisma",
    icon: <FaDatabase size={24} />,
    color: "#3E8ACC",
    category: "Database",
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={24} />,
    color: "#FFA000",
    category: "Database",
  },

  // Tools
  {
    name: "Git",
    icon: <BsGit size={24} />,
    color: "#FF5722",
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={24} />,
    color: "#24292F",
    category: "Tools",
  },
  {
    name: "Vercel",
    icon: <SiVercel size={24} />,
    color: "#000000",
    category: "Tools",
  },
  {
    name: "Trello",
    icon: <FaTrello size={24} />,
    color: "#000000",
    category: "Tools",
  },
  // { name: "Three.js", icon: <TbBrandThreejs size={24} />, color: "#121212", category: "Tools" },
  {
    name: "Netlify",
    icon: <SiNetlify size={24} />,
    color: "#121212",
    category: "Tools",
  },

  // Backend
  {
    name: "Node.js",
    icon: <FaNodeJs size={24} />,
    color: "#66BB6A",
    category: "Backend",
  },
  {
    name: "Express",
    icon: <SiExpress size={24} />,
    color: "#333333",
    category: "Backend",
  },
  {
    name: "REST API",
    icon: <AiFillApi size={24} />,
    color: "#FF7043",
    category: "Backend",
  },
];
