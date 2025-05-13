"use client";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []); //
  return (
    <div className="w-full lg:min-h-screen bg-gray-900 ">
      <div className="container mx-auto text-white flex flex-col md:flex-row gap-10 items-center pb-5 lg:h-screen overflow-hidden px-8">
        <div className="h-auto">
          <h3
            data-aos-duration="1000"
            data-aos="fade-right"
            className="text-xl md:text-2xl lg:text-3xl xl:text-5xl"
          >
            It&apos;s Me
          </h3>
          <h1
            data-aos-duration="1000"
            data-aos="fade-left"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold py-3 xl:py-5"
          >
            MD. HUMAYUN KABIR SOBUJ
          </h1>
          <h3
            data-aos-duration="1000"
            data-aos="fade-right"
            className="text-3xl font-semibold"
          >
            I&apos;m a
            <span className="text-blue-300">
              <Typewriter
                words={[
                  " MERN Stack Developer",
                  " Full-Stack Developer",
                  " Node Js Developer",
                ]}
                loop={true}
                cursorStyle="_"
                cursorColor="#2196F3"
              />
            </span>
          </h3>
          <p
            data-aos-duration="1000"
            data-aos="fade-up"
            className="max-w-[550px] text-justify font-light pt-3"
          >
            Highly skilled MERN Stack Web Developer with extensive knowledge in Tailwind CSS, JavaScript, TypeScript, React.js, and Next.js. I have hands-on experience with Firebase, Node.js, Express.js, MongoDB, Mongoose, Redux, Ant Design, and ShadCN for building dynamic and user-friendly web applications.
          </p>
          <div className="pt-10">
            <SocialIcons />
          </div>
          <div className="pt-10">
            <button
              data-aos-duration="1000"
              data-aos="fade-up"
              className=" bg-blue-500 rounded-full hover:scale-105 duration-300 px-5 py-2 font-bold"
            >
              Hire Me
            </button>
          </div>
        </div>
        <div>
        
        </div>
       
      </div>
    </div>
  );
};

export default Banner;
