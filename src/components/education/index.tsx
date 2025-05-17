"use client"

import Image from "next/image"
import Heading from "../shared/Heading"
import { useEffect, useState } from "react"
import CommonSection from "../shared/CommonSection"
import { MagicCard } from "../magicui/magic-card"

// Education data
const educationData = [
  {
    degree: "Bachelor in Computer Science and Engineering",
    institution: "Bangladesh University of Business and Technology (BUBT)",
    period: "2019 - 2023",
    description: "Specialized in advanced algorithms and software engineering",
    color: "purple",
    icon: "🎓",
  },
  {
    degree: "Diploma in Computer Science & Technology",
    institution: "Feni Computer Institute",
    period: "2015 - 2019",
    description: "CGPA: 3.58 out of 4",
    color: "teal",
    icon: "🎓",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Feni Central High School",
    period: "2015",
    description: "GPA: 5.00 out of 5.00",
    color: "orange",
    icon: "🎓",
  },
]

const EducationSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // initial check
    handleResize()

    // listen to resize
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <CommonSection>
      <div className="text-center mb-16">
        <Heading heading="Education Qualification" />

        <Image
          src="/AllSvg/section.svg"
          alt="Background"
          fill
          className="object-cover absolute top-0 left-60 z-[-10]"
          priority
        />
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-teal-500 to-orange-500 md:transform md:-translate-x-1/2"></div>

        {/* Timeline items */}
        <div className="space-y-12">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`relative flex ${isMobile ? "ml-12" : index % 2 === 0 ? "justify-end md:pr-12" : "md:pl-12"}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-6 ${
                  isMobile ? "left-[-24px]" : index % 2 === 0 ? "md:right-[-12px]" : "md:left-[-12px]"
                } w-6 h-6 rounded-full z-10`}
                style={{
                  backgroundColor:
                    item.color === "purple"
                      ? "rgb(147, 51, 234)"
                      : item.color === "teal"
                        ? "rgb(20, 184, 166)"
                        : "rgb(249, 115, 22)",
                }}
              ></div>

              {/* Card */}
              <div className={`w-full md:w-[calc(50%-24px)]`}>
                <MagicCard className="w-full p-[1px] rounded-lg overflow-hidden" gradientOpacity={0} >
                  <div className="w-full  backdrop-blur-md border  shadow-md hover:shadow-purple-500/10 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <h3 className="text-xl font-bold ">{item.degree}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium mt-2 md:mt-0 ${
                          item.color === "purple"
                            ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                            : item.color === "teal"
                              ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                              : "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>
                    <p className=" mb-4">{item.institution}</p>
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          item.color === "purple"
                            ? "bg-purple-500/20"
                            : item.color === "teal"
                              ? "bg-teal-500/20"
                              : "bg-orange-500/20"
                        }`}
                      >
                        <span
                          className={
                            item.color === "purple"
                              ? "text-purple-300"
                              : item.color === "teal"
                                ? "text-teal-300"
                                : "text-orange-300"
                          }
                        >
                          {item.icon}
                        </span>
                      </div>
                      <p className="text-sm ">{item.description}</p>
                    </div>
                  </div>
                </MagicCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CommonSection>
  )
}

export default EducationSection
