"use client"

import { useState, useEffect } from "react"
import CommonSection from "@/components/shared/CommonSection"
import Heading from "@/components/shared/Heading"
import Image from "next/image"
import { MagicCard } from "../magicui/magic-card"

// Skills data
const skillsData = [
  { name: "React", category: "Frontend", icon: "/skills/js.png" },
  { name: "Tailwind CSS", category: "Frontend", icon: "/skills/tailwind.png" },
  { name: "Next.js", category: "Frontend", icon: "/skills/nextjs.png" },
  { name: "HTML5", category: "Frontend", icon: "/skills/html.png" },
  { name: "CSS3", category: "Frontend", icon: "/skills/css.png" },
  { name: "JavaScript", category: "Languages", icon: "/skills/js.png" },
  { name: "TypeScript", category: "Languages", icon: "/skills/typescript.png" },
  { name: "Git", category: "Tools", icon: "/skills/git.png" },
  { name: "VS Code", category: "Tools", icon: "/skills/vscode.png" },
  { name: "npm", category: "Tools", icon: "/skills/npm.png" },
  { name: "GitHub", category: "Tools", icon: "/skills/github.png" },
  { name: "Vercel", category: "Tools", icon: "/skills/vercel.png" },
]

export default function SkillsSection() {
  const [mounted, setMounted] = useState(false)
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="w-full h-screen bg-[#0f0a1a]" />

  const filters = ["All", "Frontend", "Languages", "Blockchain", "Tools"]

  // Filter skills based on selected category
  const filteredSkills = filter === "All" ? skillsData : skillsData.filter((skill) => skill.category === filter)

  return (
    <CommonSection>
      <div className="text-center mb-16">
        <Heading heading="Skills & Technologies" />

        <Image
          src="/AllSvg/section.svg"
          alt="Background"
          fill
          className="object-cover absolute top-0 z-[-10]"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="">
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-200 ${
                filter === category
                  ? "bg-[var(--accent)] text-white"
                  : "border-2 hover:bg-[var(--accent)] duration-300 hover:border-[var(--accent)] cursor-pointer"
              } border-2 hover:bg-[var(--accent)] hover:text-white duration-300 hover:border-[var(--accent)] cursor-pointer`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills?.map((skill, index) => (
            <MagicCard
              key={index}
              className="h-full w-full rounded-lg "
              
              gradientOpacity={0}
            >
              <div className="flex flex-col items-center justify-center z-10 h-full w-full p-4">
                <div className="mb-3 p-2">
                  <Image
                    src={skill.icon || "/skills/js.png"}
                    alt={skill.name}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <span className="text-center text-sm md:text-base font-medium">{skill.name}</span>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </CommonSection>
  )
}
