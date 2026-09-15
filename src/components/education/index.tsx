"use client"

import Heading from "../shared/Heading"
import { useEffect, useState } from "react"
import CommonSection from "../shared/CommonSection"
import { MagicCard } from "../magicui/magic-card"

// Education data
const educationData = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    shortDegree: "B.Sc. in CSE",
    institution: "Northern University Bangladesh",
    period: "Jan 2026 - Present",
    status: "Currently Studying",
    result: "In Progress",
    field: "Computer Science & Engineering",
    location: "Dhaka, Bangladesh",
    description:
      "Currently pursuing a bachelor's degree with a focus on software engineering, backend development, and modern computing technologies.",
    color: "purple",
    icon: "🎓",
  },
  {
    degree: "Diploma in Computer Science & Technology",
    shortDegree: "Diploma in CST",
    institution: "Rangpur Polytechnic Institute",
    period: "2020 - 2024",
    status: "Completed",
    result: "CGPA: 3.63 / 4.00",
    field: "Computer Science & Technology",
    location: "Rangpur, Bangladesh",
    description:
      "Completed a four-year diploma program with a strong foundation in programming, databases, networking, web development, and computer technology.",
    color: "secondary",
    icon: "💻",
  },
  {
    degree: "Secondary School Certificate",
    shortDegree: "SSC",
    institution: "Keramotia High School",
    period: "2020",
    status: "Completed",
    result: "GPA: 5.00 / 5.00",
    field: "Science",
    location: "Rangpur, Bangladesh",
    description:
      "Completed secondary education with a strong academic result and a foundation in science and technology.",
    color: "secondary",
    icon: "🏫",
  },
]

const EducationSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <CommonSection>
      {/* Section heading */}
      <div className="text-center mb-16">
        <Heading heading="Education Qualification" />

        <p className="max-w-2xl mx-auto mt-4 text-sm md:text-base opacity-70 leading-relaxed">
          My academic journey in computer science and technology, building the
          foundation for my career in software development.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="
            absolute
            left-4
            md:left-1/2
            top-0
            bottom-0
            w-px
            bg-gradient-to-b
            from-purple-500
            via-purple-400/50
            to-[var(--accent)]
            md:-translate-x-1/2
          "
        />

        {/* Timeline items */}
        <div className="space-y-14 md:space-y-16">
          {educationData.map((item, index) => {
            const isPurple = item.color === "purple"
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`relative flex ${
                  isMobile
                    ? "ml-12"
                    : isEven
                      ? "justify-end md:pr-12"
                      : "md:pl-12"
                }`}
              >
                {/* Timeline marker */}
                <div
                  className={`
                    absolute
                    top-6
                    ${
                      isMobile
                        ? "left-[-31px]"
                        : isEven
                          ? "md:right-[-16px]"
                          : "md:left-[-16px]"
                    }
                    w-8
                    h-8
                    rounded-full
                    z-10
                    flex
                    items-center
                    justify-center
                    border
                    ${
                      isPurple
                        ? "bg-purple-500/15 border-purple-500/40"
                        : "bg-[var(--accent-secondary)] border-[var(--accent)]/40"
                    }
                    backdrop-blur-sm
                  `}
                >
                  <span className="text-sm">{item.icon}</span>
                </div>

                {/* Card */}
                <div className="w-full md:w-[calc(50%-24px)]">
                  <MagicCard
                    className="w-full p-[1px] rounded-xl overflow-hidden"
                    gradientOpacity={0}
                  >
                    <div
                      className="
                        relative
                        w-full
                        backdrop-blur-md
                        border
                        shadow-md
                        hover:shadow-purple-500/10
                        hover:shadow-lg
                        transition-all
                        duration-300
                        p-5
                        md:p-6
                        rounded-xl
                      "
                    >
                      {/* Top row */}
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between gap-4">
                          {/* Degree icon + title */}
                          <div className="flex items-start gap-3">
                            <div
                              className={`
                                hidden
                                sm:flex
                                shrink-0
                                w-10
                                h-10
                                rounded-lg
                                items-center
                                justify-center
                                ${
                                  isPurple
                                    ? "bg-purple-500/10 text-purple-400"
                                    : "bg-[var(--accent-secondary)] text-[var(--accent)]"
                                }
                              `}
                            >
                              <span className="text-lg">{item.icon}</span>
                            </div>

                            <div>
                              <p
                                className={`
                                  text-xs
                                  font-medium
                                  uppercase
                                  tracking-wider
                                  mb-1
                                  ${
                                    isPurple
                                      ? "text-purple-400"
                                      : "text-[var(--accent)]"
                                  }
                                `}
                              >
                                {item.shortDegree}
                              </p>

                              <h3 className="text-lg md:text-xl font-bold leading-snug">
                                {item.degree}
                              </h3>
                            </div>
                          </div>

                          {/* Period */}
                          <span
                            className={`
                              shrink-0
                              px-3
                              py-1.5
                              rounded-full
                              text-[11px]
                              md:text-xs
                              font-medium
                              whitespace-nowrap
                              ${
                                isPurple
                                  ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                                  : "bg-[var(--accent-secondary)] text-[var(--accent)] border border-[var(--accent)]/20"
                              }
                            `}
                          >
                            {item.period}
                          </span>
                        </div>

                        {/* Institution */}
                        <div className="flex items-center gap-2">
                          <span
                            className={`
                              text-sm
                              ${
                                isPurple
                                  ? "text-purple-400"
                                  : "text-[var(--accent)]"
                              }
                            `}
                          >
                            🏛
                          </span>

                          <p className="font-medium text-sm md:text-base">
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="my-5 border-t opacity-10" />

                      {/* Academic information */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                        {/* Field */}
                        <div className="flex items-center gap-3">
                          <div
                            className={`
                              w-8
                              h-8
                              rounded-md
                              flex
                              items-center
                              justify-center
                              shrink-0
                              ${
                                isPurple
                                  ? "bg-purple-500/10"
                                  : "bg-[var(--accent-secondary)]"
                              }
                            `}
                          >
                            <span className="text-sm">📚</span>
                          </div>

                          <div className="min-w-0">
                            <p className="text-[10px] uppercase tracking-wide opacity-50">
                              Field
                            </p>
                            <p className="text-xs md:text-sm font-medium truncate">
                              {item.field}
                            </p>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-3">
                          <div
                            className={`
                              w-8
                              h-8
                              rounded-md
                              flex
                              items-center
                              justify-center
                              shrink-0
                              ${
                                isPurple
                                  ? "bg-purple-500/10"
                                  : "bg-[var(--accent-secondary)]"
                              }
                            `}
                          >
                            <span className="text-sm">📍</span>
                          </div>

                          <div>
                            <p className="text-[10px] uppercase tracking-wide opacity-50">
                              Location
                            </p>
                            <p className="text-xs md:text-sm font-medium">
                              {item.location}
                            </p>
                          </div>
                        </div>

                        {/* Result */}
                        <div className="flex items-center gap-3">
                          <div
                            className={`
                              w-8
                              h-8
                              rounded-md
                              flex
                              items-center
                              justify-center
                              shrink-0
                              ${
                                isPurple
                                  ? "bg-purple-500/10"
                                  : "bg-[var(--accent-secondary)]"
                              }
                            `}
                          >
                            <span className="text-sm">📊</span>
                          </div>

                          <div>
                            <p className="text-[10px] uppercase tracking-wide opacity-50">
                              Result
                            </p>
                            <p className="text-xs md:text-sm font-semibold">
                              {item.result}
                            </p>
                          </div>
                        </div>

                        {/* Status */}
                        <div className="flex items-center gap-3">
                          <div
                            className={`
                              w-8
                              h-8
                              rounded-md
                              flex
                              items-center
                              justify-center
                              shrink-0
                              ${
                                isPurple
                                  ? "bg-purple-500/10"
                                  : "bg-[var(--accent-secondary)]"
                              }
                            `}
                          >
                            <span className="text-sm">
                              {isPurple ? "◉" : "✓"}
                            </span>
                          </div>

                          <div>
                            <p className="text-[10px] uppercase tracking-wide opacity-50">
                              Status
                            </p>
                            <p
                              className={`
                                text-xs
                                md:text-sm
                                font-semibold
                                ${
                                  isPurple
                                    ? "text-purple-400"
                                    : "text-[var(--accent)]"
                                }
                              `}
                            >
                              {item.status}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div
                        className={`
                          flex
                          items-start
                          gap-3
                          p-3
                          rounded-lg
                          ${
                            isPurple
                              ? "bg-purple-500/5"
                              : "bg-[var(--accent-secondary)]/50"
                          }
                        `}
                      >
                        <span
                          className={`
                            mt-0.5
                            text-sm
                            ${
                              isPurple
                                ? "text-purple-400"
                                : "text-[var(--accent)]"
                            }
                          `}
                        >
                          ✦
                        </span>

                        <p className="text-xs md:text-sm leading-relaxed opacity-75">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </MagicCard>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </CommonSection>
  )
}

export default EducationSection
