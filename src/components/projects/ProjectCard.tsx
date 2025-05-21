"use client"

import type { TProject } from "@/types/types"
import Image from "next/image"
import { ExternalLink, Code2, Server } from "lucide-react"
import Link from "next/link"
import { MagicCard } from "../magicui/magic-card"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: TProject
  onClick: () => void
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer h-full"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: "rgba(255,255,255,0.1)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
      onClick={onClick}
    >
      <MagicCard className="w-full p-[1px] rounded-xl overflow-hidden h-full" gradientOpacity={0}>
        <div className="flex flex-col h-full">
          <div className="relative h-60 w-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
              <Image
                src={project?.project_image || "/placeholder.svg"}
                alt={project?.title || "Project Image"}
                fill
                className="object-contain p-2"
              />
            </div>
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3
              className="text-xl font-bold mb-2 text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, #f72585, #a259ff)",
              }}
            >
              {project?.title}
            </h3>

            <p className="text-sm mb-4 line-clamp-2" style={{ opacity: 0.8 }}>
              {project?.description}
            </p>

            {/* Technologies tags similar to blog section */}
            <div className="flex flex-wrap gap-2 mb-4 mt-auto">
              {project?.technologies?.slice(0, 3)?.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-block text-xs px-2 py-1 rounded-full"
                  style={{
                    background: "rgba(247, 37, 133, 0.1)",
                    border: "1px solid rgba(247, 37, 133, 0.3)",
                    color: "#f72585",
                  }}
                >
                  {tech?.name}
                </span>
              ))}
              {project?.technologies && project?.technologies?.length > 3 && (
                <span
                  className="inline-block text-xs px-2 py-1 rounded-full"
                  style={{
                    background: "rgba(162, 89, 255, 0.1)",
                    border: "1px solid rgba(162, 89, 255, 0.3)",
                    color: "#a259ff",
                  }}
                >
                  +{project?.technologies?.length - 3}
                </span>
              )}
            </div>

            <div className="flex justify-between items-center pt-4 border-t mt-auto">
              <div className="flex gap-2">
                <Link
                  href={project?.client_link || ""}
                  target="_blank"
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Code2 className="h-3 w-3" style={{ color: "#f72585" }} />
                  <span>Frontend code</span>
                </Link>

                {project?.server_link && (
                  <Link
                    href={project?.server_link || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Server className="h-3 w-3" style={{ color: "#a259ff" }} />
                    <span>Backend code</span>
                  </Link>
                )}
              </div>

              <Link
                href={project?.live_link || ""}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md transition-colors hover:opacity-80"
                style={{
                  background: "#f72585",
                  color: "white",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-3 w-3" />
                Demo
              </Link>
            </div>
          </div>
        </div>
      </MagicCard>
    </motion.div>
  )
}

export default ProjectCard
