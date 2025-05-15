import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiNextdotjs,
  SiThreedotjs,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiVercel,
  SiFirebase,
  SiWebpack,
  SiVite,
  SiSass,
} from "react-icons/si"

import type { JSX } from "react"

export interface Skill {
  name: string
  icon: JSX.Element
  color: string
}

export const skillsData: Skill[] = [
  { name: "JavaScript", icon: <SiJavascript size={24} />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript size={24} />, color: "#3178C6" },
  { name: "React", icon: <SiReact size={24} />, color: "#61DAFB" },
  { name: "HTML", icon: <SiHtml5 size={24} />, color: "#E34F26" },
  { name: "CSS", icon: <SiCss3 size={24} />, color: "#1572B6" },
  { name: "Node.js", icon: <SiNodedotjs size={24} />, color: "#339933" },
  { name: "Next.js", icon: <SiNextdotjs size={24} />, color: "#000000" },
  { name: "Three.js", icon: <SiThreedotjs size={24} />, color: "#000000" },
  { name: "Tailwind", icon: <SiTailwindcss size={24} />, color: "#06B6D4" },
  { name: "Git", icon: <SiGit size={24} />, color: "#F05032" },
  { name: "Docker", icon: <SiDocker size={24} />, color: "#2496ED" },
  { name: "GraphQL", icon: <SiGraphql size={24} />, color: "#E10098" },
  { name: "MongoDB", icon: <SiMongodb size={24} />, color: "#47A248" },
  { name: "PostgreSQL", icon: <SiPostgresql size={24} />, color: "#4169E1" },
  { name: "Redux", icon: <SiRedux size={24} />, color: "#764ABC" },
  { name: "Vercel", icon: <SiVercel size={24} />, color: "#000000" },
  { name: "Firebase", icon: <SiFirebase size={24} />, color: "#FFCA28" },
  { name: "Webpack", icon: <SiWebpack size={24} />, color: "#8DD6F9" },
  { name: "Vite", icon: <SiVite size={24} />, color: "#646CFF" },
  { name: "Sass", icon: <SiSass size={24} />, color: "#CC6699" },
]
