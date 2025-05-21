"use client"

import { useState, useEffect } from "react"
import CommonSection from "@/components/shared/CommonSection"
import Heading from "@/components/shared/Heading"
import Image from "next/image"
import { MagicCard } from "../magicui/magic-card"
import LoadingPage from "@/app/loading"
import { getAllSkill } from "@/services/GetAllService"
import { TSkill } from "@/types/types"

export default function SkillsSection() {
  const [mounted, setMounted] = useState(false)
  const [filter, setFilter] = useState("All")
  const [skills, setSkills] = useState<TSkill[] | []>([])

  useEffect(() => {
    setMounted(true)

    // Fetch skills data from the API
    const fetchSkills = async () => {
      try {
        const res = await getAllSkill();
        setSkills(res?.data)
      } catch (error) {
        console.error("Error fetching skills:", error)
      }
    }
    
    fetchSkills()
  }, [])
  if (!mounted) return <LoadingPage/>

  const filters =  ["All","Frontend", "Backend", "Database", "Tools", "Other"];

  // Filter skills based on selected category
  const filteredSkills = filter === "All" ? skills : skills?.filter((skill) => skill.category === filter)

  return (
    <CommonSection>
      <div className="text-center mb-16">
        <Heading heading="Skills & Technologies" />

      </div>

      {/* Main Content */}
      <div className="">
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters?.map((category) => (
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
                    src={skill?.image || "/skills/js.png"}
                    alt={skill.name || "Skill"}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <span className="text-center text-sm md:text-base font-medium">{skill?.name}</span>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </CommonSection>
  )
}
