"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, AnimatePresence } from "framer-motion"

export default function SkillsPage() {
  const branchImage = "/tree_branch1.png"
  const birdImage = "/bird.png"
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef(null)
  const [debugInfo, setDebugInfo] = useState({ status: "Loading..." })

  // Controls for sequencing animations
  const frontendControls = useAnimation()
  const backendControls = useAnimation()
  const databaseControls = useAnimation()
  const othersControls = useAnimation()

  useEffect(() => {
    // Start the animation sequence
    const startAnimations = async () => {
      try {
        setIsLoaded(true)
        setDebugInfo({ status: "Starting animations..." })

        // Start with frontend branch - force it to be visible immediately
        await frontendControls.start("visible")
        setDebugInfo({ status: "Frontend branch animated" })

        // Wait before starting the next branch
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Continue with other branches
        await backendControls.start("visible")
        setDebugInfo({ status: "Backend branch animated" })

        await new Promise((resolve) => setTimeout(resolve, 2000))

        await databaseControls.start("visible")
        setDebugInfo({ status: "Database branch animated" })

        await new Promise((resolve) => setTimeout(resolve, 2000))

        await othersControls.start("visible")
        setDebugInfo({ status: "All branches animated" })
      } catch (error) {
        setDebugInfo({ status: "Animation error", error: error.message })
      }
    }

    // Short delay before starting animations
    const timer = setTimeout(() => {
      startAnimations()
    }, 500)

    return () => clearTimeout(timer)
  }, [frontendControls, backendControls, databaseControls, othersControls])

  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Next.js"],
    Backend: ["Node.js", "Express", "JWT", "Firebase", "Socket.io"],
    Database: ["MongoDB", "Mongoose", "Prisma", "PostgreSQL", "Supabase"],
    Others: ["Git", "GitHub", "Netlify", "Vercel", "Figma", "VS Code"],
  }

  // Branch animation variants
  const branchVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
      y: 30,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  // Enhanced bird animation variants with clear side-specific flying
  const birdVariants = {
    hidden: (i) => {
      // Alternate birds coming from left and right
      const fromLeft = i % 2 === 0
      return {
        x: fromLeft ? -300 : 300,
        y: fromLeft ? 100 : 50,
        opacity: 0,
        rotateZ: fromLeft ? -20 : 20,
        scale: 0.6,
      }
    },
    visible: (i) => ({
      x: 0,
      y: 0,
      opacity: 1,
      rotateZ: 0,
      scale: 1,
      transition: {
        x: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 1.2,
          delay: i * 0.2,
        },
        y: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 1.2,
          delay: i * 0.2,
        },
        opacity: {
          duration: 0.4,
          delay: i * 0.2,
        },
        rotateZ: {
          type: "spring",
          stiffness: 80,
          damping: 10,
          duration: 1.2,
          delay: i * 0.2,
        },
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 1.2,
          delay: i * 0.2,
        },
      },
    }),
    hover: {
      y: -15,
      scale: 1.15,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  // Bird idle animations
  const idleAnimations = (i) => {
    // Create slightly different animations for each bird to make it more natural
    const baseDelay = i * 0.3
    const randomOffset = Math.random() * 0.5

    return {
      // Gentle hovering
      hover: {
        y: [-2, -4, -2, -1, -2],
        transition: {
          duration: 3 + randomOffset,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: baseDelay,
        },
      },

      // Wing flapping
      wingFlap: {
        scale: [1, 1.03, 1, 1.02, 1],
        rotateZ: [0, 1, 0, -1, 0],
        transition: {
          duration: 2 + randomOffset,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: baseDelay + 0.2,
        },
      },

      // Head bobbing
      headBob: {
        rotateZ: [0, 2, 0, -2, 0],
        transition: {
          duration: 4 + randomOffset,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: baseDelay + 0.5,
        },
      },
    }
  }

  // Function to calculate bird positions on a branch
  const getBirdPosition = (index, total, branchWidth = 500) => {
    // Distribute birds evenly along the branch
    const spacing = branchWidth / (total + 1)
    const xPos = spacing * (index + 1) - 24 // 24 is half the bird width to center it

    // Add some vertical variation - birds sit at slightly different heights
    const yVariation = [0, -10, 5, -5, 10][index % 5]

    return { x: xPos, y: yVariation }
  }

  // Branch swaying animation
  const branchSwayAnimation = (i) => ({
    rotateZ: [0, 0.3, 0, -0.3, 0],
    y: [0, -1, 0, 1, 0],
    transition: {
      duration: 6 + i,
      ease: "easeInOut",
      repeat: Number.POSITIVE_INFINITY,
      delay: i * 0.5,
    },
  })

  // Label animation
  const labelVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    }),
  }

  return (
    <div className="container mx-auto">
      <div>
        <div className="flex items-center justify-center pb-5">
          <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-violet-500 inline-block">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500">
              Skills
            </span>
          </h1>
        </div>
      </div>

      <div
        className="mx-auto px-5 lg:pt-10 pt-5 min-h-screen flex flex-col justify-center items-center"
        style={{
          background: "linear-gradient(to bottom right, #E0E7FF, #F3E8FF)",
        }}
        ref={containerRef}
      >
        {/* Debug info - remove in production */}
        <div className="text-xs text-gray-500 mb-4 absolute top-2 left-2">Status: {debugInfo.status}</div>

        <AnimatePresence>
          {isLoaded && (
            <div className="relative w-full max-w-4xl flex flex-col items-center justify-center gap-32">
              {/* Frontend Branch */}
              <motion.div
                className="relative w-full flex justify-center"
                variants={branchVariants}
                initial="hidden"
                animate={frontendControls}
                key="frontend"
              >
                <motion.div className="relative w-[600px]" animate={branchSwayAnimation(0)}>
                  <Image
                    src={branchImage || "/placeholder.svg?height=200&width=600"}
                    alt="Frontend Branch"
                    width={600}
                    height={200}
                    className="w-full"
                    priority
                  />

                  {skills?.Frontend.map((skill, i) => {
                    const position = getBirdPosition(i, skills.Frontend.length)
                    const animations = idleAnimations(i)
                    const fromLeft = i % 2 === 0

                    return (
                      <motion.div
                        key={skill}
                        className="absolute w-12 h-auto"
                        style={{
                          left: position.x,
                          top: position.y,
                        }}
                        variants={birdVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        custom={i}
                      >
                        <motion.div animate={animations.hover} className="relative">
                          <motion.div animate={animations.wingFlap}>
                            <motion.div animate={animations.headBob}>
                              <Image
                                src={birdImage || "/placeholder.svg?height=48&width=48"}
                                alt={`${skill} Bird`}
                                width={48}
                                height={48}
                              />

                              {/* Visual indicator of bird attachment to branch */}
                              <motion.div
                                className="absolute bottom-0 left-1/2 w-1 h-3 bg-yellow-600"
                                initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 1,
                                  transition: { delay: i * 0.2 + 1.2 },
                                }}
                                style={{ transform: "translateX(-50%)" }}
                              />
                            </motion.div>
                          </motion.div>
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                            {skill}
                          </span>
                        </motion.div>
                      </motion.div>
                    )
                  })}

                  <motion.div
                    className="text-center text-xl font-bold text-violet-700 mt-2"
                    variants={labelVariants}
                    initial="hidden"
                    animate="visible"
                    custom={1.5}
                  >
                    Frontend
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Backend Branch */}
              <motion.div
                className="relative w-full flex justify-center"
                variants={branchVariants}
                initial="hidden"
                animate={backendControls}
                key="backend"
              >
                <motion.div className="relative w-[600px]" animate={branchSwayAnimation(1)}>
                  <Image
                    src={branchImage || "/placeholder.svg?height=200&width=600"}
                    alt="Backend Branch"
                    width={600}
                    height={200}
                    className="w-full"
                  />

                  {skills.Backend.map((skill, i) => {
                    const position = getBirdPosition(i, skills.Backend.length)
                    const animations = idleAnimations(i)
                    const fromLeft = i % 2 === 0

                    return (
                      <motion.div
                        key={skill}
                        className="absolute w-12 h-auto"
                        style={{
                          left: position.x,
                          top: position.y,
                        }}
                        variants={birdVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        custom={i}
                      >
                        <motion.div animate={animations.hover} className="relative">
                          <motion.div animate={animations.wingFlap}>
                            <motion.div animate={animations.headBob}>
                              <Image
                                src={birdImage || "/placeholder.svg?height=48&width=48"}
                                alt={`${skill} Bird`}
                                width={48}
                                height={48}
                              />

                              {/* Visual indicator of bird attachment to branch */}
                              <motion.div
                                className="absolute bottom-0 left-1/2 w-1 h-3 bg-yellow-600"
                                initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 1,
                                  transition: { delay: i * 0.2 + 1.2 },
                                }}
                                style={{ transform: "translateX(-50%)" }}
                              />
                            </motion.div>
                          </motion.div>
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                            {skill}
                          </span>
                        </motion.div>
                      </motion.div>
                    )
                  })}

                  <motion.div
                    className="text-center text-xl font-bold text-violet-700 mt-2"
                    variants={labelVariants}
                    initial="hidden"
                    animate="visible"
                    custom={1.5}
                  >
                    Backend
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Database Branch */}
              <motion.div
                className="relative w-full flex justify-center"
                variants={branchVariants}
                initial="hidden"
                animate={databaseControls}
                key="database"
              >
                <motion.div className="relative w-[600px]" animate={branchSwayAnimation(2)}>
                  <Image
                    src={branchImage || "/placeholder.svg?height=200&width=600"}
                    alt="Database Branch"
                    width={600}
                    height={200}
                    className="w-full"
                  />

                  {skills.Database.map((skill, i) => {
                    const position = getBirdPosition(i, skills.Database.length)
                    const animations = idleAnimations(i)
                    const fromLeft = i % 2 === 0

                    return (
                      <motion.div
                        key={skill}
                        className="absolute w-12 h-auto"
                        style={{
                          left: position.x,
                          top: position.y,
                        }}
                        variants={birdVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        custom={i}
                      >
                        <motion.div animate={animations.hover} className="relative">
                          <motion.div animate={animations.wingFlap}>
                            <motion.div animate={animations.headBob}>
                              <Image
                                src={birdImage || "/placeholder.svg?height=48&width=48"}
                                alt={`${skill} Bird`}
                                width={48}
                                height={48}
                              />

                              {/* Visual indicator of bird attachment to branch */}
                              <motion.div
                                className="absolute bottom-0 left-1/2 w-1 h-3 bg-yellow-600"
                                initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 1,
                                  transition: { delay: i * 0.2 + 1.2 },
                                }}
                                style={{ transform: "translateX(-50%)" }}
                              />
                            </motion.div>
                          </motion.div>
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                            {skill}
                          </span>
                        </motion.div>
                      </motion.div>
                    )
                  })}

                  <motion.div
                    className="text-center text-xl font-bold text-violet-700 mt-2"
                    variants={labelVariants}
                    initial="hidden"
                    animate="visible"
                    custom={1.5}
                  >
                    Database
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Others Branch */}
              <motion.div
                className="relative w-full flex justify-center"
                variants={branchVariants}
                initial="hidden"
                animate={othersControls}
                key="others"
              >
                <motion.div className="relative w-[600px]" animate={branchSwayAnimation(3)}>
                  <Image
                    src={branchImage || "/placeholder.svg?height=200&width=600"}
                    alt="Others Branch"
                    width={600}
                    height={200}
                    className="w-full"
                  />

                  {skills.Others.map((skill, i) => {
                    const position = getBirdPosition(i, skills.Others.length)
                    const animations = idleAnimations(i)
                    const fromLeft = i % 2 === 0

                    return (
                      <motion.div
                        key={skill}
                        className="absolute w-12 h-auto"
                        style={{
                          left: position.x,
                          top: position.y,
                        }}
                        variants={birdVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        custom={i}
                      >
                        <motion.div animate={animations.hover} className="relative">
                          <motion.div animate={animations.wingFlap}>
                            <motion.div animate={animations.headBob}>
                              <Image
                                src={birdImage || "/placeholder.svg?height=48&width=48"}
                                alt={`${skill} Bird`}
                                width={48}
                                height={48}
                              />

                              {/* Visual indicator of bird attachment to branch */}
                              <motion.div
                                className="absolute bottom-0 left-1/2 w-1 h-3 bg-yellow-600"
                                initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 1,
                                  transition: { delay: i * 0.2 + 1.2 },
                                }}
                                style={{ transform: "translateX(-50%)" }}
                              />
                            </motion.div>
                          </motion.div>
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                            {skill}
                          </span>
                        </motion.div>
                      </motion.div>
                    )
                  })}

                  <motion.div
                    className="text-center text-xl font-bold text-violet-700 mt-2"
                    variants={labelVariants}
                    initial="hidden"
                    animate="visible"
                    custom={1.5}
                  >
                    Others
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
