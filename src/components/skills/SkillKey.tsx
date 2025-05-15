"use client"

import { useState, useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import * as THREE from "three"
import { Skill } from "./SkillsData"

interface SkillKeyProps {
  position: [number, number, number]
  skill: Skill
  index: number
}

export function SkillKey({ position, skill, index }: SkillKeyProps) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [showLabel, setShowLabel] = useState(false)
  const meshRef = useRef<THREE.Mesh>(null)
  const baseY = position[1]

  // Handle hover animation
  useFrame(() => {
    if (!meshRef.current) return

    if (hovered) {
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, baseY + 0.2, 0.1)
    } else {
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, baseY, 0.1)
    }

    if (pressed) {
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, baseY - 0.1, 0.3)
    }
  })

  // Staggered animation on initial render
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setShowLabel(true)
      },
      index * 100 + 500,
    )

    return () => clearTimeout(timer)
  }, [index])

  return (
    <group position={position}>
      {/* Key base */}
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={() => setPressed(true)}
        onPointerUp={() => setPressed(false)}
        onClick={() => {
          console.log(`Clicked on ${skill.name}`)
        }}
      >
        <boxGeometry args={[1, 0.3, 1]} />
        <meshStandardMaterial color={skill.color} />

        {/* Icon on top of the key */}
        <Html position={[0, 0.2, 0]} center distanceFactor={10} zIndexRange={[100, 0]}>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "2px solid white",
              boxShadow: hovered
                ? "0 0 10px rgba(255,255,255,0.8)"
                : "0 0 5px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
              pointerEvents: "none",
            }}
          >
            <div style={{ color: "white", fontSize: "1.25rem" }}>
              {skill.icon}
            </div>
          </div>
        </Html>
      </mesh>

      {/* Skill name label */}
      {showLabel && (
        <Html position={[0, -0.1, 0]} center>
          <div
            className="text-white text-xs font-bold bg-black bg-opacity-50 px-2 py-1 rounded whitespace-nowrap"
            style={{
              opacity: hovered ? 1 : 0.7,
              transform: `scale(${hovered ? 1.1 : 1})`,
              transition: "all 0.2s ease-out",
              pointerEvents: "none",
            }}
          >
            {skill.name}
          </div>
        </Html>
      )}
    </group>
  )
}
