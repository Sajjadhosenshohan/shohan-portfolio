// "use client";

// import { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import { motion, useAnimation, AnimatePresence } from "framer-motion";

// export default function SkillsPage() {
//   const branchImage = "/tree_branch1.png";
//   const birdImage = "/bird.png";
//   const [isLoaded, setIsLoaded] = useState(false);
//   const containerRef = useRef(null);
//   const [debugInfo, setDebugInfo] = useState({ status: "Loading..." });

//   const backendControls = useAnimation();
//   const frontendControls = useAnimation();
//   const databaseControls = useAnimation();
//   const othersControls = useAnimation();

//   useEffect(() => {
//     const startAnimations = async () => {
//       try {
//         setIsLoaded(true);
//         setDebugInfo({ status: "Starting animations..." });

//         await new Promise((resolve) => setTimeout(resolve, 500));
//         await frontendControls.start("visible");
//         setDebugInfo({ status: "Frontend branch animated" });

//         await new Promise((resolve) => setTimeout(resolve, 500));
//         await backendControls.start("visible");
//         setDebugInfo({ status: "Backend branch animated" });

//         await new Promise((resolve) => setTimeout(resolve, 500));
//         await databaseControls.start("visible");
//         setDebugInfo({ status: "Database branch animated" });

//         await new Promise((resolve) => setTimeout(resolve, 500));
//         await othersControls.start("visible");
//         setDebugInfo({ status: "All branches animated" });
//         await new Promise((resolve) => setTimeout(resolve, 500));
//       } catch (error) {
//         setDebugInfo({ status: "Animation error", error: String(error) });
//       }
//     };

//     const timer = setTimeout(() => {
//       startAnimations();
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [frontendControls, backendControls, databaseControls, othersControls]);

//   const skills = {
//     Backend: ["Node.js", "Express", "JWT", "Firebase", "Socket.io"],
//     Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Next.js"],
//     Database: ["MongoDB", "Mongoose", "Prisma", "PostgreSQL", "Supabase"],
//     Others: ["Git", "GitHub", "Netlify", "Vercel", "Figma", "VS Code"],
//   };

//   const branchVariants = {
//     hidden: {
//       scale: 0.9,
//       opacity: 0,
//       y: 30,
//     },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 1,
//         ease: [0.25, 0.1, 0.25, 1],
//         when: "beforeChildren",
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const birdVariants = {
//     hidden: (i) => {
//       const fromLeft = i % 2 === 0;
//       return {
//         x: fromLeft ? -300 : 300,
//         y: fromLeft ? 100 : 50,
//         opacity: 0,
//         rotateZ: fromLeft ? -20 : 20,
//         scale: 0.6,
//       };
//     },
//     visible: (i) => ({
//       x: 0,
//       y: 0,
//       opacity: 1,
//       rotateZ: 0,
//       scale: 1,
//       transition: {
//         x: {
//           type: "spring",
//           stiffness: 100,
//           damping: 15,
//           duration: 1.2,
//           delay: i * 0.2,
//         },
//         y: {
//           type: "spring",
//           stiffness: 100,
//           damping: 15,
//           duration: 1.2,
//           delay: i * 0.2,
//         },
//         opacity: {
//           duration: 0.4,
//           delay: i * 0.2,
//         },
//         rotateZ: {
//           type: "spring",
//           stiffness: 80,
//           damping: 10,
//           duration: 1.2,
//           delay: i * 0.2,
//         },
//         scale: {
//           type: "spring",
//           stiffness: 100,
//           damping: 15,
//           duration: 1.2,
//           delay: i * 0.2,
//         },
//       },
//     }),
//     hover: {
//       y: -15,
//       scale: 1.15,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut",
//       },
//     },
//   };

//   const idleAnimations = (i) => {
//     const baseDelay = i * 0.3;
//     const randomOffset = Math.random() * 0.5;

//     return {
//       hover: {
//         y: [-2, -4, -2, -1, -2],
//         transition: {
//           duration: 3 + randomOffset,
//           ease: "easeInOut",
//           repeat: Number.POSITIVE_INFINITY,
//           delay: baseDelay,
//         },
//       },
//       wingFlap: {
//         scale: [1, 1.03, 1, 1.02, 1],
//         rotateZ: [0, 1, 0, -1, 0],
//         transition: {
//           duration: 2 + randomOffset,
//           ease: "easeInOut",
//           repeat: Number.POSITIVE_INFINITY,
//           delay: baseDelay + 0.2,
//         },
//       },
//       headBob: {
//         rotateZ: [0, 2, 0, -2, 0],
//         transition: {
//           duration: 4 + randomOffset,
//           ease: "easeInOut",
//           repeat: Number.POSITIVE_INFINITY,
//           delay: baseDelay + 0.5,
//         },
//       },
//     };
//   };

//   const getBirdPosition = (index, total, branchWidth = 600) => {
//     const spacing = branchWidth / (total + 1);
//     const xPos = spacing * (index + 1) - 16;
//     const yVariation = [0, -5, 3, -3, 5][index % 5];
//     return { x: xPos, y: yVariation };
//   };

//   const branchSwayAnimation = (i) => ({
//     rotateZ: [0, 0.3, 0, -0.3, 0],
//     y: [0, -1, 0, 1, 0],
//     transition: {
//       duration: 6 + i,
//       ease: "easeInOut",
//       repeat: Number.POSITIVE_INFINITY,
//       delay: i * 0.5,
//     },
//   });

//   const labelVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: (delay) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         delay: delay,
//       },
//     }),
//   };

//   const categoryColors = {
//     Frontend: "text-blue-600",
//     Backend: "text-green-600",
//     Database: "text-red-600",
//     Others: "text-yellow-600",
//   };

//   return (
//     <div className="container mx-auto">
//       <div>
//         <div className="flex items-center justify-center pb-5">
//           <h1 className="text-2xl md:text-3xl text-center text-black font-bold border-b-2 border-violet-500 inline-block">
//             My{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500">
//               Skills
//             </span>
//           </h1>
//         </div>
//       </div>

//       <div
//         className="mx-auto px-5 lg:pt-10 pt-5 min-h-screen flex flex-col justify-center items-center"
//         style={{
//           background: "linear-gradient(to bottom right, #F3E8FF, #bfb0e4)",
//         }}
//         ref={containerRef}
//       >
//         <div className="text-xs text-gray-500 mb-4 absolute top-2 left-2">
//           Status: {debugInfo.status}
//         </div>

//         <AnimatePresence>
//   {isLoaded && (
//     <div className="relative w-full flex flex-col items-center justify-center gap-32">
//       {Object.entries(skills).map(([category, skillList], branchIndex) => {
//         const controls =
//           category === "Frontend"
//             ? frontendControls
//             : category === "Backend"
//             ? backendControls
//             : category === "Database"
//             ? databaseControls
//             : othersControls;

//         return (
//           <motion.div
//             key={category}
//             className="relative w-full flex justify-center"
//             variants={branchVariants}
//             initial="hidden"
//             animate={controls}
//           >
//             <motion.div
//               className="relative w-[600px]"
//               animate={branchSwayAnimation(branchIndex)}
//             >
//               {/* Branch Image */}
//               <Image
//                 src={branchImage}
//                 alt={`${category} Branch`}
//                 width={600}
//                 height={200}
//                 className="w-full drop-shadow-2xl mt-1"
//                 priority
//               />

//               {/* Category Name on Branch */}
//               <div className="absolute  left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow text-sm font-semibold text-purple-600 border border-purple-300">
//                 {category}
//               </div>

//               {/* Skills as Sticker Messages */}
//               {skillList.map((skill, i) => {
//                 const position = getBirdPosition(i, skillList.length);
//                 const animations = idleAnimations(i);

//                 return (
//                   <motion.div
//                     key={skill}
//                     className="absolute w-20 h-auto bottom-0"
//                     style={{
//                       left: position.x,
//                       top: position.y,
//                     }}
//                     variants={birdVariants}
//                     initial="hidden"
//                     animate={["visible"]}
//                     whileHover="hover"
//                     custom={i}
//                   >
//                     <motion.div animate={animations.hover} className="relative">
//                       <motion.div animate={animations.wingFlap}>
//                         <motion.div animate={animations.headBob}>
//                           <div className="flex flex-col items-center gap-1">
//                             {/* Skill Name as Message Bubble */}
//                             <div
//                               className={`px-2 py-1 text-[10px] font-medium rounded-full shadow-md bg-white border ${categoryColors[category]}`}
//                             >
//                               {skill}
//                             </div>

//                             {/* Bird Icon */}
//                             <Image
//                               src={birdImage}
//                               alt={skill}
//                               width={60}
//                               height={60}
//                               className="w-full"
//                             />
//                           </div>
//                         </motion.div>
//                       </motion.div>
//                     </motion.div>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//           </motion.div>
//         );
//       })}
//     </div>
//   )}
// </AnimatePresence>

//       </div>
//     </div>
//   );
// }

import SkillsKeyboard from '@/components/skills/Keyboard'
import React from 'react'

const SkillsPage = () => {
  return (
    <div>
      <SkillsKeyboard/>
    </div>
  )
}

export default SkillsPage
