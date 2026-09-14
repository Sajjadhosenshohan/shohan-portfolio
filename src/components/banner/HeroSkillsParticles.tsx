"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  SiNodedotjs, 
  SiPostgresql, 
  SiNextdotjs, 
  SiN8N, 
  SiZapier, 
  SiDocker, 
  SiTypescript 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface FloatingLogo {
  id: string;
  icon: React.ReactNode;
  name: string;
  initialX: number; // percentage
  initialY: number; // percentage
  animateX: number[];
  animateY: number[];
  duration: number;
  delay: number;
  glowColor: string;
  sizeClass: string;
}

const floatingLogos: FloatingLogo[] = [
  {
    id: "node-1",
    name: "Node.js",
    icon: <SiNodedotjs className="text-[#539E43]" />,
    initialX: 5,
    initialY: 12,
    animateX: [0, 25, -15, 0],
    animateY: [0, -25, 20, 0],
    duration: 18,
    delay: 0,
    glowColor: "rgba(83, 158, 67, 0.25)",
    sizeClass: "w-11 h-11 text-2xl",
  },
  {
    id: "postgres-1",
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-[#336791]" />,
    initialX: 45,
    initialY: 8,
    animateX: [0, -30, 20, 0],
    animateY: [0, 30, -20, 0],
    duration: 22,
    delay: 1.5,
    glowColor: "rgba(51, 103, 145, 0.25)",
    sizeClass: "w-12 h-12 text-2xl",
  },
  {
    id: "aws-1",
    name: "AWS",
    icon: <FaAws className="text-[#FF9900]" />,
    initialX: 85,
    initialY: 15,
    animateX: [0, -25, 15, 0],
    animateY: [0, 25, -15, 0],
    duration: 20,
    delay: 2,
    glowColor: "rgba(255, 153, 0, 0.25)",
    sizeClass: "w-12 h-12 text-2xl",
  },
  {
    id: "nextjs-1",
    name: "Next.js",
    icon: <SiNextdotjs className="text-foreground" />,
    initialX: 3,
    initialY: 48,
    animateX: [0, 35, -20, 0],
    animateY: [0, -20, 30, 0],
    duration: 24,
    delay: 0.8,
    glowColor: "rgba(162, 89, 255, 0.25)",
    sizeClass: "w-11 h-11 text-2xl",
  },
  {
    id: "n8n-1",
    name: "n8n",
    icon: <SiN8N className="text-[#EA4B71]" />,
    initialX: 92,
    initialY: 45,
    animateX: [0, -35, 15, 0],
    animateY: [0, 25, -30, 0],
    duration: 19,
    delay: 2.5,
    glowColor: "rgba(234, 75, 113, 0.25)",
    sizeClass: "w-12 h-12 text-2xl",
  },
  {
    id: "zapier-1",
    name: "Zapier",
    icon: <SiZapier className="text-[#FF4A00]" />,
    initialX: 20,
    initialY: 82,
    animateX: [0, 30, -25, 0],
    animateY: [0, -30, 20, 0],
    duration: 21,
    delay: 3,
    glowColor: "rgba(255, 74, 0, 0.25)",
    sizeClass: "w-11 h-11 text-2xl",
  },
  {
    id: "docker-1",
    name: "Docker",
    icon: <SiDocker className="text-[#2496ED]" />,
    initialX: 52,
    initialY: 85,
    animateX: [0, -25, 30, 0],
    animateY: [0, -25, 15, 0],
    duration: 23,
    delay: 1.2,
    glowColor: "rgba(36, 150, 237, 0.25)",
    sizeClass: "w-11 h-11 text-2xl",
  },
  {
    id: "typescript-1",
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6]" />,
    initialX: 82,
    initialY: 78,
    animateX: [0, -30, 25, 0],
    animateY: [0, -20, 25, 0],
    duration: 25,
    delay: 4,
    glowColor: "rgba(49, 120, 198, 0.25)",
    sizeClass: "w-11 h-11 text-2xl",
  },
  {
    id: "node-2",
    name: "Node.js",
    icon: <SiNodedotjs className="text-[#539E43]" />,
    initialX: 30,
    initialY: 35,
    animateX: [0, -20, 25, 0],
    animateY: [0, 20, -25, 0],
    duration: 26,
    delay: 3.5,
    glowColor: "rgba(83, 158, 67, 0.2)",
    sizeClass: "w-10 h-10 text-xl",
  },
  {
    id: "n8n-2",
    name: "n8n",
    icon: <SiN8N className="text-[#EA4B71]" />,
    initialX: 68,
    initialY: 62,
    animateX: [0, 25, -20, 0],
    animateY: [0, -25, 20, 0],
    duration: 24,
    delay: 2.2,
    glowColor: "rgba(234, 75, 113, 0.2)",
    sizeClass: "w-10 h-10 text-xl",
  },
];

export const HeroSkillsParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const particleCount = Math.min(width < 768 ? 24 : 45, 50);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;
      pulsing: number;
    }

    const colors = [
      "rgba(162, 89, 255,",
      "rgba(247, 37, 133,",
      "rgba(56, 189, 248,",
      "rgba(83, 158, 67,",
      "rgba(255, 153, 0,",
    ];

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsing: Math.random() * Math.PI * 2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const maxDistance = width < 768 ? 85 : 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const linkAlpha = (1 - dist / maxDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(162, 89, 255, ${linkAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulsing += 0.025;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const currentAlpha = p.alpha + Math.sin(p.pulsing) * 0.12;
        const boundedAlpha = Math.max(0.1, Math.min(0.8, currentAlpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${boundedAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Background Interactive Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-50 dark:opacity-75"
      />

      {/* Ambient Glow Lights */}
      <div className="absolute top-1/4 left-1/12 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-80 h-80 bg-[var(--accent)]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Animated Skill Logos across the entire hero section */}
      {floatingLogos.map((item) => (
        <motion.div
          key={item.id}
          title={item.name}
          className={`absolute flex items-center justify-center rounded-2xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-md hover:shadow-xl transition-shadow ${item.sizeClass}`}
          style={{
            left: `${item.initialX}%`,
            top: `${item.initialY}%`,
            boxShadow: `0 8px 20px ${item.glowColor}`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.65, 0.95, 0.65],
            x: item.animateX,
            y: item.animateY,
            rotate: [0, 8, -8, 0],
            scale: [0.95, 1.08, 0.95],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSkillsParticles;
