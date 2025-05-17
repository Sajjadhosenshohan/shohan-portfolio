"use client";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import { useEffect } from "react";
import Image from "next/image";
import CommonSection from "../shared/CommonSection";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
     <CommonSection>
      {/* Background SVG */}
      <Image
        src="/AllSvg/section.svg"
        alt="Hero"
        fill
        className="object-cover absolute top-0 left-60 z-[-10]"
        priority
      />

      {/* Banner Content */}
      <div className="container mx-auto flex flex-col justify-between md:flex-row gap-10  items-center  lg:h-auto overflow-hidden px-8 py-14 md:py-20">
        {/* About Me Text Section */}
        <div className="text-center md:text-left max-w-4xl">
          <h3
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-xl md:text-2xl lg:text-3xl xl:text-5xl"
          >
            It&apos;s Me
          </h3>
          <h1
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold py-3 xl:py-5"
          >
            MD. SAJJAD HOSEN SHOHAN
          </h1>
          <h3
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-3xl font-semibold"
          >
            I&apos;m a{" "}
            <span className="text-[var(--accent)]">
              <Typewriter
                words={[
                  " MERN Stack Developer",
                  " Full-Stack Developer",
                  " Node Js Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="#"
                cursorColor="var(--accent)"
              />
            </span>
          </h3>

          {/* <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="max-w-[550px] mx-auto md:mx-0 text-justify font-light pt-3"
          >
            Highly skilled MERN Stack Web Developer with extensive knowledge in
            Tailwind CSS, JavaScript, TypeScript, React.js, and Next.js. I have
            hands-on experience with Firebase, Node.js, Express.js, MongoDB,
            Mongoose, Redux, Ant Design, and ShadCN for building dynamic and
            user-friendly web applications.
          </p> */}

          {/* Social Icons */}
          <div className="pt-8 flex justify-center">
            <SocialIcons />
          </div>

          {/* Hire Me Button */}
          <div className="pt-6">
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-[var(--accent)] cursor-pointer text-white rounded-full hover:scale-105 duration-300 px-5 py-2 font-bold"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* YouTube Video Embed Section */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          className="w-full max-w-3xl aspect-video shadow-lg rounded-xl overflow-hidden mt-10"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oskiEydAaok?si=iXFJUInNz0krUQy6"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
     </CommonSection>
  );
};

export default Banner;
