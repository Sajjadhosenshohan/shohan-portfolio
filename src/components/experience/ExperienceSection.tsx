"use client";

import React from "react";
import Image from "next/image";
import CommonSection from "../shared/CommonSection";
import Heading from "../shared/Heading";
import { MagicCard } from "../magicui/magic-card";
import { 
  Server, 
  Workflow, 
  Layout, 
  Calendar, 
  MapPin, 
  Briefcase
} from "lucide-react";

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  logo: string;
  overview: string;
  highlights: {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
  }[];
  techStack: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: "SM Technology",
    role: "Backend Developer",
    duration: "21 Aug 2025 - Present",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    logo: "/smtechnology.webp",
    overview:
      "Spearheading scalable backend architectures and API engineering with Node.js and PostgreSQL, while actively driving workflow automations with n8n/Zapier and delivering responsive frontend dashboards with Next.js.",
    highlights: [
      {
        title: "Backend & Database Architecture",
        description:
          "Engineered high-throughput RESTful APIs with Node.js and Express. Architected relational schemas with PostgreSQL & Prisma, optimizing indexing and complex query performance.",
        icon: <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
        color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300",
      },
      {
        title: "Workflow Automation (n8n & Zapier)",
        description:
          "Designed multi-tier automated data pipelines and event-driven workflows with n8n and Zapier, connecting webhooks, transactional communications, and internal systems.",
        icon: <Workflow className="w-4 h-4 text-pink-600 dark:text-pink-400" />,
        color: "bg-pink-500/10 border-pink-500/30 text-pink-700 dark:text-pink-300",
      },
      {
        title: "Frontend Engineering (Next.js)",
        description:
          "Developed rich, interactive client portals and administrative dashboards using Next.js, React, and modern UI systems with seamless API state synchronization.",
        icon: <Layout className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
        color: "bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300",
      },
    ],
    techStack: [
      "Node.js",
      "PostgreSQL",
      "Database Design",
      "n8n Automation",
      "Zapier",
      "Next.js",
      "Express.js",
      "Prisma ORM",
      "AWS",
      "REST APIs",
      "Docker",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <CommonSection>
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <Heading heading="Work Experience" />
        <p className="text-zinc-700 dark:text-zinc-300 text-sm md:text-base max-w-2xl mx-auto -mt-8 md:-mt-12 font-medium">
          Hands-on professional engineering experience delivering scalable backend APIs,
          cross-system automations, and modern web applications.
        </p>
      </div>

      {/* Experience Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Glowing Decorative Line */}
        <div className="absolute left-4 md:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-500 via-[var(--accent)] to-transparent hidden sm:block" />

        <div className="space-y-10">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative sm:pl-16">
              {/* Timeline Dot Icon */}
              <div className="hidden sm:flex absolute left-4 md:left-8 -translate-x-1/2 top-8 w-8 h-8 rounded-full bg-background border-2 border-[var(--accent)] items-center justify-center shadow-[0_0_15px_rgba(247,37,133,0.4)] z-20">
                <Briefcase className="w-4 h-4 text-[var(--accent)]" />
              </div>

              {/* Experience Card */}
              <MagicCard
                className="w-full p-[1px] rounded-2xl overflow-hidden shadow-xl"
                gradientOpacity={0.15}
              >
                <div className="w-full bg-card text-card-foreground backdrop-blur-xl border border-border p-6 md:p-8 rounded-2xl transition-all duration-300 hover:border-purple-500/40">
                  {/* Top Row: Company Logo & Details */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border">
                    <div className="flex items-center gap-4">
                      {/* Company Logo */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-border bg-zinc-900 shadow-md shrink-0 flex items-center justify-center p-2 group">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={75}
                          height={75}
                          className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                          priority
                        />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
                            {exp.role}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[var(--accent-secondary)] text-[var(--accent)] border border-[var(--accent)]/30">
                            {exp.type}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-purple-600 dark:text-purple-400">
                          {exp.company}
                        </h4>
                      </div>
                    </div>

                    {/* Metadata (Duration & Location) */}
                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full border border-border text-foreground font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full border border-border text-zinc-600 dark:text-zinc-400">
                        <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary / Overview */}
                  <div className="py-5">
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 font-normal">
                      {exp.overview}
                    </p>
                  </div>

                  {/* Responsibilities & Highlights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {exp.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-border hover:border-purple-500/40 transition-colors flex flex-col justify-between shadow-xs"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`p-1.5 rounded-lg border ${h.color}`}>
                              {h.icon}
                            </div>
                            <h5 className="text-xs sm:text-sm font-bold text-foreground">
                              {h.title}
                            </h5>
                          </div>
                          <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                            {h.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-foreground mb-2.5 block">
                      Technologies &amp; Tools Used:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-border text-zinc-800 dark:text-zinc-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </MagicCard>
            </div>
          ))}
        </div>
      </div>
    </CommonSection>
  );
}
