"use client";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import CommonSection from "../shared/CommonSection";
import Image from "next/image";
import Heading from "../shared/Heading";
import { Card } from "antd";

const ContactSection = () => {
  return (
    <CommonSection>
      <div className="text-center mb-16">
        <Heading heading="GET IN TOUCH" />
        <Image
          src="/AllSvg/section.svg"
          alt="Background"
          fill
          className="object-cover absolute top-0 left-60 z-[-10]"
          priority
        />
      </div>

      <div className="!text-white/60 w-full mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* Left Card - Contact Info */}
        <Card
          className="w-full !bg-white/5 !backdrop-blur-md  !border-white/10 !shadow-md
                 hover:shadow-purple-500/10 hover:shadow-lg transition-all duration-300"
          variant="outlined"
        >
          <h2 className="text-3xl font-extrabold mb-8 text-purple-300">
            Contact Info
          </h2>
          {/* <p className="mb-6 text-sm text-gray-200">
            Feel free to reach out or connect via social channels
          </p> */}

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-black/15 p-4 rounded-xl hover:bg-purple-600/30 text-white/60 transition">
              <div className="p-2 bg-purple-500 rounded-full text-white">
                <FaEnvelope />
              </div>
              <span className="text-sm">mdshohansajjad@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 bg-black/15 p-4 rounded-xl hover:bg-purple-600/30 text-white/60 transition">
              <div className="p-2 bg-pink-500 rounded-full text-white">
                <FaMapMarkerAlt />
              </div>
              <span className="text-sm">Rangpur, Bangladesh</span>
            </div>
            <div className="flex items-center gap-4 bg-black/15 p-4 rounded-xl hover:bg-purple-600/30 text-white/60 transition">
              <div className="p-2 bg-green-500 rounded-full text-white">
                <FaCalendarAlt />
              </div>
              <span className="text-sm">Open to opportunities</span>
            </div>
          </div>
        </Card>

        {/* Right Card - Social Media & Digital Card */}
        <Card
          className="w-full !text-white/60 !bg-white/5 !backdrop-blur-md  !border-white/10 !shadow-md
                 hover:shadow-purple-500/10 hover:shadow-lg transition-all duration-300"
          variant="outlined"
        >
          <h2 className="text-3xl font-extrabold mb-4 text-purple-300">
            Social Connect
          </h2>
          <p className="mb-6 text-sm text-gray-200">
            Follow me and explore my works
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-[#EA4335] hover:scale-105 transition"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-[#333] hover:scale-105 transition"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-[#0A66C2] hover:scale-105 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-[#1DA1F2] hover:scale-105 transition"
            >
              <FaTwitter /> Twitter
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-[#C13584] hover:scale-105 transition"
            >
              <FaInstagram /> Instagram
            </a>
          </div>

          {/* Digital Card */}
          <div className="bg-black/15  p-6 rounded-2xl shadow-inner   backdrop-blur-md hover:bg-purple-600/30  transition">

            <h3 className="text-xl font-bold mb-1 text-purple-300">
              Khan Humayun
            </h3>
            <p className="text-sm mb-1">Full-Stack Developer</p>
           
          </div>
        </Card>
      </div>
    </CommonSection>
  );
};

export default ContactSection;
