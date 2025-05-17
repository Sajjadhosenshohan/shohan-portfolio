"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {  ExternalLink, Code2, Server, X } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types/types";
import { projectData } from "@/const/demo/demoData";
import Heading from "../shared/Heading";
import CommonSection from "../shared/CommonSection";

const ProjectSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const showModal = (project: Project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  return (
    <CommonSection>
      <div className="container mx-auto">
        <div className="text-center mb-16">

        <Heading heading="Projects" />

        <Image
          src="/AllSvg/section.svg"
          alt="Background"
          fill
          className="object-cover absolute top-0 left-60 z-[-10]"
          priority
        />
      </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => showModal(project)}
            />
          ))}
        </div>
      </div>

      {/* Custom Modal Implementation */}
      {isModalOpen && activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
          <div
            ref={modalRef}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-gray-800 p-6"
            style={{
              background: "var(--background, #0f0f0f)",
              color: "var(--foreground, #f5f5f5)",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <X
                className="w-5 h-5"
                style={{ color: "var(--foreground, #f5f5f5)" }}
              />
            </button>

            {/* Modal header */}
            <div className="mb-6 text-center">
              <h2
                className="text-2xl font-bold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--accent, #A458F6), #d580ff)",
                }}
              >
                {activeProject.name}
              </h2>
            </div>

            {/* Project image */}
            <div className="relative w-full h-64 md:h-80 mb-6 overflow-hidden rounded-lg">
              <Image
                src={activeProject.image || "/placeholder.svg"}
                alt={activeProject.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Title and Links Section */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <a
                href={activeProject.githubFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md transition-colors"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.1)",
                  color: "var(--foreground, #f5f5f5)",
                }}
              >
                <Code2 className="h-3 w-3" />
                Frontend
              </a>

              {activeProject.githubBackend && (
                <a
                  href={activeProject.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.1)",
                    color: "var(--foreground, #f5f5f5)",
                  }}
                >
                  <Server className="h-3 w-3" />
                  Backend
                </a>
              )}

              <a
                href={activeProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md transition-colors"
                style={{
                  background: "var(--accent, #A458F6)",
                  color: "white",
                }}
              >
                <ExternalLink className="h-3 w-3" />
                Live Demo
              </a>
            </div>

            {/* Description Section */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider mb-2 opacity-70">
                Description
              </h3>
              <p style={{ color: "var(--foreground, #f5f5f5)", opacity: 0.9 }}>
                {activeProject.description}
              </p>
            </div>

            {/* Features Section */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider mb-3 opacity-70">
                Features
              </h3>
              <ol className="list-decimal pl-5 space-y-2">
                {activeProject.features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      color: "var(--foreground, #f5f5f5)",
                      opacity: 0.9,
                    }}
                  >
                    {feature}
                  </li>
                ))}
              </ol>
            </div>

            {/* Tech Stack Section */}
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-3 opacity-70">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {activeProject.tech.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <div
                      className="text-3xl mb-2"
                      style={{ color: "var(--accent, #A458F6)" }}
                    >
                      {tech.icon}
                    </div>
                    <span
                      className="text-sm"
                      style={{
                        color: "var(--foreground, #f5f5f5)",
                        opacity: 0.9,
                      }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </CommonSection>
  );
};

// Project Card details Component
interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: "rgba(255,255,255,0.1)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
      onClick={onClick}
    >
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>

      <div className="p-6">
        <h3
          className="text-xl font-bold mb-2 text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--accent, #A458F6), #d580ff)",
          }}
        >
          {project.name}
        </h3>

        <p
          className="text-sm mb-4 line-clamp-2"
          style={{ color: "var(--foreground, #f5f5f5)", opacity: 0.8 }}
        >
          {project.description}
        </p>

        <div className="mb-4">
          <h4
            className="text-xs uppercase tracking-wider mb-2"
            style={{ color: "var(--foreground, #f5f5f5)", opacity: 0.6 }}
          >
            Key Features
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className="inline-block text-xs px-2 py-1 rounded-md"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "var(--foreground, #f5f5f5)",
                }}
              >
                {feature}
              </span>
            ))}
            {project.features.length > 3 && (
              <span
                className="inline-block text-xs px-2 py-1 rounded-md"
                style={{
                  background: `rgba(${
                    Number.parseInt(project.id, 36) % 255
                  }, 88, 246, 0.2)`,
                  border: "1px solid var(--accent, #A458F6)",
                  color: "var(--foreground, #f5f5f5)",
                }}
              >
                +{project.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div
          className="rounded-lg p-2 mb-4"
          style={{ background: "rgba(0,0,0,0.3)" }}
        >
          <Marquee speed={40} gradient={false} pauseOnHover>
            <div
              className="flex gap-6 text-xl"
              style={{ color: "var(--accent, #A458F6)" }}
            >
              {project.tech.map((tech, idx) => (
                <div key={idx} className="mx-2">
                  {tech.icon}
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        <div className="flex justify-between items-center">
          <Link
          
            href={project?.githubFrontend  || ''}
            target="_blank"
            
            className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md transition-colors"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderColor: "rgba(255,255,255,0.1)",
              color: "var(--foreground, #f5f5f5)",
            }}
          >
            <Code2 className="h-3 w-3" />
            Frontend
          </Link>

          <Link
            href={project?.githubBackend  || ''}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md transition-colors"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderColor: "rgba(255,255,255,0.1)",
              color: "var(--foreground, #f5f5f5)",
            }}
          >
            <Server className="h-3 w-3" />
            Backend
          </Link>

          <Link
            href={project?.live || ''}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md transition-colors"
            style={{
              background: "var(--accent, #A458F6)",
              color: "white",
            }}
          >
            <ExternalLink className="h-3 w-3" />
            Live Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
