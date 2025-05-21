"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ExternalLink, Code2, Server, X } from "lucide-react"
import Heading from "../shared/Heading"
import CommonSection from "../shared/CommonSection"
import type { TProject } from "@/types/types"
import { getAllProjects } from "@/services/GetAllService"
import ProjectCard from "./ProjectCard"
import { motion, AnimatePresence } from "framer-motion"
import { MagicCard } from "../magicui/magic-card"

const ProjectSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<TProject | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const [Projects, setProjects] = useState<TProject[] | []>([])

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      // Re-enable scrolling
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  // Close modal on escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        setIsModalOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscKey)
    return () => {
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [isModalOpen])

  const showModal = (project: TProject) => {
    setActiveProject(project)
    setIsModalOpen(true)
  }

  useEffect(() => {
    // Fetch projects data from the API
    const fetchProjects = async () => {
      try {
        const res = await getAllProjects()
        setProjects(res?.data)
      } catch (error) {
        console.error("Error fetching projects:", error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <CommonSection>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Heading heading="Projects" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
          {Projects ? (
            Projects?.map((project) => (
              <ProjectCard key={project?.id} project={project} onClick={() => showModal(project)} />
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center">
              <p className="text-lg">No projects available at the moment.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal - Simplified like blog section */}
      <AnimatePresence>
        {isModalOpen && activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <MagicCard className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl" gradientOpacity={0}>
              <motion.div
                ref={modalRef}
                className="relative w-full"
                style={{
                  background: "var(--background, #fff)",
                }}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors"
                  style={{
                    background: "rgba(247, 37, 133, 0.1)",
                    color: "#f72585",
                  }}
                  aria-label="Close modal"
                >
                  <X className="w-6 w-6" />
                </button>

                {/* Project image with consistent aspect ratio */}
                <div className="relative w-full aspect-video bg-gray-50 dark:bg-gray-800">
                  <Image
                    src={activeProject?.project_image || "/placeholder.svg"}
                    alt={activeProject?.title || "Project Image"}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  />
                </div>
                {/* Links */}
                  <div className="flex flex-wrap gap-3 mt-6 p-6">
                    <a
                      href={activeProject?.client_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md"
                      style={{
                        background: "rgba(247, 37, 133, 0.1)",
                        color: "#f72585",
                      }}
                    >
                      <Code2 className="h-4 w-4" />
                      Frontend Code
                    </a>

                    {activeProject?.server_link && (
                      <a
                        href={activeProject?.server_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md"
                        style={{
                          background: "rgba(162, 89, 255, 0.1)",
                          color: "#a259ff",
                        }}
                      >
                        <Server className="h-4 w-4" />
                        Backend Code
                      </a>
                    )}

                    <a
                      href={activeProject?.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md ml-auto"
                      style={{
                        background: "#f72585",
                        color: "white",
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live Demo
                    </a>
                  </div>

                <div className="p-6">
                  {/* Title */}
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{
                      background: "linear-gradient(to right, #f72585, #a259ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {activeProject?.title}
                  </h2>

                  {/* Description */}
                  <p className="text-base leading-relaxed mb-6 opacity-90">{activeProject?.description}</p>

                  

                  {/* Features Section - Simplified */}
                  {activeProject?.features && activeProject.features.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-3 " >
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {activeProject?.features?.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span
                              className="inline-flex items-center justify-center h-5 w-5 rounded-full text-xs font-medium flex-shrink-0 mt-0.5"
                              style={{
                                background: "#f72585",
                                color: "white",
                              }}
                            >
                              {index + 1}
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies - Similar to blog tags */}
                  {activeProject?.technologies && activeProject.technologies.length > 0 && (
                    <div className="mb-6 pt-4 border-t">
                      <div className="flex items-center gap-2 mb-3 text-sm font-medium" >
                        Technologies:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeProject?.technologies?.map((tech, index) => (
                          <span
                            key={index}
                            className="inline-block text-xs md:text-sm px-3 py-1 rounded-full"
                            style={{
                              background: "rgba(247, 37, 133, 0.1)",
                              color: "#f72585",
                            }}
                          >
                            {tech?.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </MagicCard>
          </motion.div>
        )}
      </AnimatePresence>
    </CommonSection>
  )
}

export default ProjectSection
