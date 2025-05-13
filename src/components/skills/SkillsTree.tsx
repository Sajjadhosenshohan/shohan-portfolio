"use client"

import { useEffect, useRef, useState } from "react"

export default function SkillsTree() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [animationStarted, setAnimationStarted] = useState(false)

  useEffect(() => {
    // Start the animation sequence after a short delay
    const timer = setTimeout(() => {
      setAnimationStarted(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Bird positions on the tree
  const birdPositions = [
    { skill: "React", x: 250, y: 180, direction: "right", delay: 0 },
    { skill: "CSS", x: 520, y: 200, direction: "left", delay: 1 },
    { skill: "JavaScript", x: 180, y: 250, direction: "right", delay: 2 },
    { skill: "Node.js", x: 580, y: 270, direction: "left", delay: 3 },
    { skill: "Mongoose", x: 230, y: 320, direction: "right", delay: 4 },
    { skill: "Tailwind CSS", x: 500, y: 340, direction: "left", delay: 5 },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>

        <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
          <svg ref={svgRef} viewBox="0 0 800 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Pastel Background */}
            <rect width="800" height="500" fill="#f0f7ff" rx="20" ry="20" />

            {/* Realistic Tree */}
            <g className="tree">
              {/* Tree Trunk */}
              <path
                d="M400,400 L400,300 C400,300 390,250 380,230 C370,210 360,200 370,180 C380,160 390,150 400,140 C410,130 420,140 430,150 C440,160 450,170 440,190 C430,210 420,230 410,250 C400,270 400,300 400,300"
                fill="#8B4513"
                stroke="#5D2906"
                strokeWidth="2"
              />

              {/* Main Branches */}
              <path
                d="M400,300 C380,280 350,270 320,280 C290,290 270,300 250,290"
                fill="none"
                stroke="#5D2906"
                strokeWidth="3"
              />
              <path
                d="M400,300 C420,280 450,270 480,280 C510,290 530,300 550,290"
                fill="none"
                stroke="#5D2906"
                strokeWidth="3"
              />
              <path
                d="M400,250 C380,230 350,220 330,230 C310,240 290,250 270,240"
                fill="none"
                stroke="#5D2906"
                strokeWidth="3"
              />
              <path
                d="M400,250 C420,230 450,220 470,230 C490,240 510,250 530,240"
                fill="none"
                stroke="#5D2906"
                strokeWidth="3"
              />
              <path
                d="M400,200 C380,180 360,170 340,180 C320,190 300,200 280,190"
                fill="none"
                stroke="#5D2906"
                strokeWidth="3"
              />
              <path
                d="M400,200 C420,180 440,170 460,180 C480,190 500,200 520,190"
                fill="none"
                stroke="#5D2906"
                strokeWidth="3"
              />

              {/* Smaller Branches */}
              <path d="M320,280 C310,270 300,265 290,270" fill="none" stroke="#5D2906" strokeWidth="2" />
              <path d="M480,280 C490,270 500,265 510,270" fill="none" stroke="#5D2906" strokeWidth="2" />
              <path d="M330,230 C320,220 310,215 300,220" fill="none" stroke="#5D2906" strokeWidth="2" />
              <path d="M470,230 C480,220 490,215 500,220" fill="none" stroke="#5D2906" strokeWidth="2" />
              <path d="M340,180 C330,170 320,165 310,170" fill="none" stroke="#5D2906" strokeWidth="2" />
              <path d="M460,180 C470,170 480,165 490,170" fill="none" stroke="#5D2906" strokeWidth="2" />

              {/* Tree Foliage */}
              <ellipse cx="400" cy="150" rx="100" ry="80" fill="#a8d5ba" fillOpacity="0.7" />
              <ellipse cx="320" cy="200" rx="80" ry="60" fill="#a8d5ba" fillOpacity="0.7" />
              <ellipse cx="480" cy="200" rx="80" ry="60" fill="#a8d5ba" fillOpacity="0.7" />
              <ellipse cx="280" cy="250" rx="70" ry="50" fill="#a8d5ba" fillOpacity="0.7" />
              <ellipse cx="520" cy="250" rx="70" ry="50" fill="#a8d5ba" fillOpacity="0.7" />
              <ellipse cx="250" cy="300" rx="60" ry="40" fill="#a8d5ba" fillOpacity="0.7" />
              <ellipse cx="550" cy="300" rx="60" ry="40" fill="#a8d5ba" fillOpacity="0.7" />
            </g>

            {/* Birds with Skills */}
            {birdPositions.map((bird, index) => {
              const isRightFacing = bird.direction === "right"
              const startX = isRightFacing ? -100 : 900
              const startY = 100

              return (
                <g
                  key={index}
                  className="bird"
                  style={{
                    opacity: animationStarted ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  {/* Bird and animation */}
                  <g
                    transform={`translate(${animationStarted ? bird.x : startX}, ${animationStarted ? bird.y : startY}) scale(0.6)`}
                  >
                    {/* Flying animation */}
                    {animationStarted && (
                      <animateTransform
                        attributeName="transform"
                        type="translate"
                        from={`${isRightFacing ? -100 : 900} 100`}
                        to={`${bird.x} ${bird.y}`}
                        begin={`${bird.delay}s`}
                        dur="2s"
                        fill="freeze"
                        calcMode="spline"
                        keySplines="0.42 0 0.58 1"
                        additive="replace"
                      />
                    )}

                    {/* Realistic Bird SVG - different for each direction */}
                    {isRightFacing ? (
                      // Right-facing bird
                      <g>
                        {/* Bird body */}
                        <ellipse cx="0" cy="0" rx="25" ry="15" fill="white" stroke="#333" strokeWidth="1" />

                        {/* Bird head */}
                        <circle cx="20" cy="-5" r="12" fill="white" stroke="#333" strokeWidth="1" />

                        {/* Bird eye */}
                        <circle cx="25" cy="-8" r="2" fill="#333" />

                        {/* Bird beak */}
                        <path d="M32,-8 L42,-5 L32,-2" fill="#f8c291" stroke="#333" strokeWidth="0.5" />

                        {/* Bird tail */}
                        <path d="M-25,0 L-40,10 L-40,-10 Z" fill="white" stroke="#333" strokeWidth="1" />

                        {/* Bird wing */}
                        <path
                          d="M0,-15 C10,-25 20,-25 10,-10 C0,5 -10,-5 0,-15 Z"
                          fill="white"
                          stroke="#333"
                          strokeWidth="1"
                        >
                          {/* Wing flapping animation during flight */}
                          {animationStarted && (
                            <animate
                              attributeName="d"
                              values="M0,-15 C10,-25 20,-25 10,-10 C0,5 -10,-5 0,-15 Z;
                                      M0,-15 C10,-35 25,-30 15,-10 C5,10 -10,0 0,-15 Z;
                                      M0,-15 C10,-25 20,-25 10,-10 C0,5 -10,-5 0,-15 Z"
                              begin={`${bird.delay}s`}
                              dur="0.3s"
                              repeatCount="6"
                            />
                          )}

                          {/* Gentle bobbing after landing */}
                          {animationStarted && (
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              values="0 0 -15; 5 0 -15; 0 0 -15"
                              begin={`${bird.delay + 2}s`}
                              dur={`${2 + index * 0.2}s`}
                              repeatCount="indefinite"
                              additive="sum"
                            />
                          )}
                        </path>

                        {/* Skill label */}
                        <g transform="translate(0, 25)">
                          <rect
                            x="-25"
                            y="0"
                            width="50"
                            height="20"
                            rx="10"
                            fill="white"
                            stroke="#333"
                            strokeWidth="1"
                          />
                          <text x="0" y="14" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#333">
                            {bird.skill}
                          </text>
                        </g>
                      </g>
                    ) : (
                      // Left-facing bird
                      <g>
                        {/* Bird body */}
                        <ellipse cx="0" cy="0" rx="25" ry="15" fill="white" stroke="#333" strokeWidth="1" />

                        {/* Bird head */}
                        <circle cx="-20" cy="-5" r="12" fill="white" stroke="#333" strokeWidth="1" />

                        {/* Bird eye */}
                        <circle cx="-25" cy="-8" r="2" fill="#333" />

                        {/* Bird beak */}
                        <path d="M-32,-8 L-42,-5 L-32,-2" fill="#f8c291" stroke="#333" strokeWidth="0.5" />

                        {/* Bird tail */}
                        <path d="M25,0 L40,10 L40,-10 Z" fill="white" stroke="#333" strokeWidth="1" />

                        {/* Bird wing */}
                        <path
                          d="M0,-15 C-10,-25 -20,-25 -10,-10 C0,5 10,-5 0,-15 Z"
                          fill="white"
                          stroke="#333"
                          strokeWidth="1"
                        >
                          {/* Wing flapping animation during flight */}
                          {animationStarted && (
                            <animate
                              attributeName="d"
                              values="M0,-15 C-10,-25 -20,-25 -10,-10 C0,5 10,-5 0,-15 Z;
                                      M0,-15 C-10,-35 -25,-30 -15,-10 C-5,10 10,0 0,-15 Z;
                                      M0,-15 C-10,-25 -20,-25 -10,-10 C0,5 10,-5 0,-15 Z"
                              begin={`${bird.delay}s`}
                              dur="0.3s"
                              repeatCount="6"
                            />
                          )}

                          {/* Gentle bobbing after landing */}
                          {animationStarted && (
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              values="0 0 -15; -5 0 -15; 0 0 -15"
                              begin={`${bird.delay + 2}s`}
                              dur={`${2 + index * 0.2}s`}
                              repeatCount="indefinite"
                              additive="sum"
                            />
                          )}
                        </path>

                        {/* Skill label */}
                        <g transform="translate(0, 25)">
                          <rect
                            x="-25"
                            y="0"
                            width="50"
                            height="20"
                            rx="10"
                            fill="white"
                            stroke="#333"
                            strokeWidth="1"
                          />
                          <text x="0" y="14" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#333">
                            {bird.skill}
                          </text>
                        </g>
                      </g>
                    )}
                  </g>
                </g>
              )
            })}

            {/* Ground */}
            <path d="M0 400 L800 400" stroke="#5D2906" strokeWidth="2" />

            {/* Grass */}
            <path
              d="M0 400 C100 380, 200 390, 300 385 C400 380, 500 390, 600 385 C700 380, 800 400, 800 400"
              fill="#a8d5ba"
              stroke="#a8d5ba"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="mt-8 text-center text-gray-700">
          <p className="max-w-2xl mx-auto">
            My technical expertise spans across frontend and backend technologies, allowing me to build complete web
            applications with modern frameworks and tools.
          </p>
        </div>
      </div>
    </section>
  )
}
