"use client";

import { useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { SkillKey } from "./SkillKey";
import { skillsData } from "./SkillsData";
import Image from "next/image";
import SectionToSectionLine from "../shared/SectionToSectionLine";

// Custom hook to track window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

// Component to adjust camera position
function CameraController({ windowSize }) {
  const { camera } = useThree();

  useEffect(() => {
    if (windowSize.width) {
      const baseWidth = 1920;
      const z = Math.min(20, Math.max(8, 8 * (baseWidth / windowSize.width)));
      camera.position.set(0, 3, z);
      camera.lookAt(0, 0, 0);
    }
  }, [windowSize, camera]);

  return null;
}

export default function SkillsSection1() {
  const [mounted, setMounted] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-screen bg-black" />;

  const layout = [
    { category: "Frontend", span: 3 },
    { category: "Backend", span: 1 },
    { category: "Database", span: 2 },
    { category: "Tools", span: 2 },
  ];
  const columns = [-6.3, -4.5, -2.7, -0.9, 0.9, 2.7, 4.5, 6.3];
  const spacingZ = 1.3;

  let colCursor = 0;

  return (
    <div className="w-full h-screen relative my-20">
      <SectionToSectionLine />
      <div className="absolute top-0 left-0 w-full z-10 text-center pt-16">
        <h1 className="text-5xl font-bold text-gray-300" style={{ fontSize: "5vw" }}>
          SKILLS
        </h1>
      </div>

      <Canvas camera={{ position: [0, 3, 8], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <CameraController windowSize={windowSize} />

        <group>
          {layout.map((item, layoutIdx) => {
            const startCol = colCursor;
            const endCol = colCursor + item.span - 1;
            const xs = columns.slice(startCol, endCol + 1);
            const headingX = xs.reduce((a, b) => a + b, 0) / xs.length;
            colCursor += item.span;

            return (
              <Html
                key={item.category}
                position={[headingX, 0.8, -1.2]}
                center
                style={{ pointerEvents: "none" }}
              >
                <div className="text-white font-bold" style={{ fontSize: "1.5vw" }}>
                  {item.category}
                </div>
              </Html>
            );
          })}
        </group>

        <group position={[0, -0.5, 0]} rotation={[-0.2, 0, 0]}>
          <mesh position={[0, -0.3, 0]} receiveShadow>
            <boxGeometry args={[13, 0.2, 6.5]} />
            <meshStandardMaterial color="#322F39" />
          </mesh>

          {(() => {
            let cursor = 0;
            return layout.flatMap((item) => {
              const filtered = skillsData.filter((s) => s.category === item.category);
              const rows = Math.ceil(filtered.length / item.span);
              const group = [];

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