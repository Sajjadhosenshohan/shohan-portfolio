"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { SkillKey } from "./SkillKey";
import { skillsData } from "./SkillsData";
import Image from "next/image";
import SectionToSectionLine from "../shared/SectionToSectionLine";

export default function SkillsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <div className="w-full h-screen bg-black" />;

  // Layout definition: category এবং কত কলাম দখল করবে (span)
  const layout = [
    { category: "Frontend", span: 2 },
    { category: "Backend", span: 1 },
    { category: "Database", span: 1 },
    { category: "Tools", span: 1 },
  ];
  // মোট 5 কলাম: 2 + 1 + 1 + 1
  const columns = [-3.6, -1.8, 0, 1.8, 3.6];
  const spacingZ = 1.3;

  // হেডিং এবং কী-গুলো render করার জন্য একটি চলমান কলাম ইনডেক্স
  let colCursor = 0;

  return (
    <div className="w-full h-screen relative my-20">
      <SectionToSectionLine/>
      {/* Overlay Title */}
      <div className="absolute top-0 left-0 w-full z-10 text-center pt-16">
        <h1 className="text-5xl font-bold text-gray-300">SKILLS</h1>
      </div>

      <Canvas camera={{ position: [0, 3, 8], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* ক্যাটেগরি হেডিংগুলো */}
        <group>
          {layout.map((item, layoutIdx) => {
            // এই ক্যাটের স্প্যান অনুযায়ী শুরু/শেষ কলাম
            const startCol = colCursor;
            const endCol = colCursor + item.span - 1;
            // ওই span এ থাকা x পজিশনগুলোর গড়
            const xs = columns.slice(startCol, endCol + 1);
            const headingX = xs.reduce((a, b) => a + b, 0) / xs.length;
            // পরবর্তী ক্যাটেগরির জন্য কার্সর এগিয়ে দেই
            colCursor += item.span;

            return (
              <Html
                key={item.category}
                position={[headingX, 0.8, -1.2]}
                center
                style={{ pointerEvents: "none" }}
              >
                <div className="text-white text-lg font-bold">
                  {item.category}
                </div>
              </Html>
            );
          })}
        </group>

        {/* Keyboard Base */}
        <group position={[0, -0.5, 0]} rotation={[-0.2, 0, 0]}>
          <mesh position={[0, -0.3, 0]} receiveShadow>
            <boxGeometry args={[9.5, 0.2, 6.5]} />
            <meshStandardMaterial color="#322F39" />
          </mesh>

          {/* কী গুলো */}
          {(() => {
            // আবার কার্সর ০ এ রিসেট
            let cursor = 0;
            return layout.flatMap((item) => {
              const filtered = skillsData.filter(
                (s) => s.category === item.category
              );
              const rows = Math.ceil(filtered.length / item.span);
              const group: JSX.Element[] = [];

              filtered.forEach((skill, idx) => {
                const row = Math.floor(idx / item.span);
                const colInGroup = idx % item.span;
                const colIndex = cursor + colInGroup;
                const x = columns[colIndex];
                const z = row * spacingZ - 1.0;
                group.push(
                  <SkillKey
                    key={skill.name}
                    position={[x, 0, z]}
                    skill={skill}
                    index={row + cursor * 5 + idx}
                  />
                );
              });

              cursor += item.span;
              return group;
            });
          })()}
        </group>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 3.2}
          rotateSpeed={0.5}
          target={[0, 0, 0]}
        />
      </Canvas>

      <Image
        src="/AllSvg/section.svg"
        alt="Background"
        fill
        className="object-cover absolute top-0 left-60 z-[-10]"
        priority
      />
    </div>
  );
}
