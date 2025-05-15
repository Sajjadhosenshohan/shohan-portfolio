"use client"

import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import type * as THREE from "three"
import { skillsData } from "./SkillsData"
import { SkillKey } from "./SkillKey"

export default function SkillsSection() {
  return (
    <div className="w-full h-screen relative">
      {/* Title overlay */}
      <div className="absolute top-0 left-0 w-full z-10 text-center pt-16">
        <h1 className="text-5xl font-bold text-gray-300">SKILLS</h1>
        <p className="text-gray-400 mt-2">(hint: press a key)</p>
      </div>

      {/* JavaScript text overlay */}
      <div className="absolute top-1/3 left-10 z-10 transform -rotate-12">
        <h2 className="text-4xl font-bold text-white">JavaScript</h2>
        <p className="text-sm text-gray-300">
          writing code in the DOM
          <br />
          since '95 in caps!
        </p>
      </div>

      <Canvas camera={{ position: [0, 3, 8], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={["#000008"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Keyboard */}
        <group position={[0, -0.5, 0]} rotation={[-0.2, 0, 0]}>
          {/* Base of keyboard */}
          <mesh position={[0, -0.3, 0]} receiveShadow>
            <boxGeometry args={[5.5, 0.2, 3.5]} />
            <meshStandardMaterial color="#111111" />
          </mesh>

          {/* Keys */}
          {skillsData.map((skill, index) => {
            const row = Math.floor(index / 5)
            const col = index % 5
            const x = col * 1.1 - 2.2
            const z = row * 1.1 - 1.1

            return <SkillKey key={skill.name} position={[x, 0, z]} skill={skill} />
          })}
        </group>

        {/* Add some stars in the background */}
        <Stars />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

function Stars() {
  const starsRef = useRef<THREE.Points>(null)

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={new Float32Array(3000).map(() => (Math.random() - 0.5) * 50)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" sizeAttenuation />
    </points>
  )
}
