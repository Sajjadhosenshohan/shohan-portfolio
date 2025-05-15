"use client";

import Image from "next/image";
import Heading from "../shared/Heading";

const AboutSection = () => {
  return (
    <section className="container mx-auto py-16 px-4 md:px-8 lg:px-16 relative">
      {/* <h2 className="text-6xl md:text-8xl font-bold text-gray-800 text-center opacity-20 absolute top-0 left-0 right-0">
        ABOUT ME
      </h2> */}

      <Heading heading="ABOUT ME"/>

      <div className="flex  flex-col md:flex-row justify-between  gap-5">
        {/* image div */}
        <div className="w-full md:w-2/5 max-w-sm mx-auto rounded-xl relative flex items-center">
          {/* Image Container with fixed height */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden relative">
            <Image
              src="/myimage.png"
              fill
              alt="Image"
              className="object-cover"
            />

            {/* Floating Buttons — Now placed inside the same container */}
            <button className="absolute bottom-4 left-4 py-2 px-6 rounded-3xl bg-orange-600 text-white text-sm shadow-lg animate-bounce">
              Coder
            </button>

            <button className="absolute top-4 right-4 py-2 px-6 rounded-3xl bg-[var(--accent)] text-white text-sm shadow-lg animate-bounce">
              Developer
            </button>
          </div>
        </div>

        <div className="mt-14 md:mt-0 z-10 w-full md:w-3/5  text-start ">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Hey! I&apos;m <span className="text-accent">Sajjad</span>
          </h3>
          <p className="text-gray-400 mb-6">
            I&apos;m Md. Sajjad Hosen Shohan, a Web developer and Computer
            Science student with 3+ years of experience. I specialize in
            building clean, responsive, and dynamic websites using HTML, CSS,
            JavaScript, React, Next.js, PostgreSQL, Prisma, and MongoDB.
          </p>
          <p className="text-gray-400 mb-8">
            I&apos;m always leveling up my skills and currently diving deeper
            into backend and DevOps. Whether it&apos;s full-time or freelance,
            I&apos;m open to exciting opportunities where I can grow and build
            dope stuff with amazing people.
          </p>

          {/* What I Do */}
          <h4 className="text-2xl font-semibold mb-4">What I Do</h4>
          <div className="flex  gap-4 mb-8">
            <span className="px-4 py-2 bg-gray-800 text-sm font-semibold rounded-full">
              Frontend Development
            </span>
            <span className="px-4 py-2 bg-gray-800 text-sm font-semibold rounded-full">
              Backend Development
            </span>
            <span className="px-4 py-2 bg-gray-800 text-sm font-semibold rounded-full">
              Computer Science
            </span>
          </div>

          {/* Connect With Me */}
          <h4 className="text-2xl font-semibold mb-4">Connect With Me</h4>
          <div className="flex  gap-4 mb-8">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <span>𝕏</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <span>📧</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <span>📘</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <span>💼</span>
            </a>
          </div>
        </div>
      </div>

      <Image
        src="/AllSvg/section.svg"
        alt="Background"
        fill
        className="object-cover absolute top-0 left-60 z-[-10]"
        priority
      />
    </section>
  );
};

export default AboutSection;
