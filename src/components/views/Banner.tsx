"use client";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";
import { TerminalDemo } from "../banner/TerminalDemo";
import { getResume } from "@/services/GetAllService";
import { motion } from "framer-motion";
import { TResume } from "@/types/types";
import { Download } from "lucide-react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Resumes, setResumes] = useState<TResume[] | []>([]);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await getResume();
        setResumes(res?.data);
      } catch (error) {
        console.error("Error fetching Resume:", error);
      }
    };
    fetchResume();
  }, []);

  const getDriveEmbedLink = (url: string): string => {
    if (!url) return "";
    const match = url.match(/\/d\/(.*?)\//);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  const getDriveDownloadLink = (url: string): string => {
    const match = url.match(/\/d\/(.*?)\//);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }
    return url;
  };

  const filterResume = Resumes?.filter((resume) => resume?.isActive)?.slice(0, 1);

  return (
    <CommonSection>
      {/* Banner Content */}
      <div className="container mx-auto flex flex-col justify-between md:flex-row gap-10 items-center lg:h-auto overflow-hidden px-8 py-14 md:py-20">
        {/* Left Section */}
        <div className="text-center md:text-left w-full lg:w-1/2">
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
            Let&apos;s add value{" "}
            <span className="text-[var(--accent)]">
              <Typewriter
                words={[
                  " to your business",
                  " to your company",
                  " to your project",
                ]}
                loop={true}
                cursor
                cursorStyle="#"
              />
            </span>
          </h3>

          {/* Social Icons */}
          <div className="pt-8 flex justify-center md:justify-start">
            <SocialIcons />
          </div>

          {/* Buttons */}
          <div className="pt-8 flex gap-4">
            {filterResume.length > 0 && (
              <>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="border border-[var(--accent)] cursor-pointer rounded-full hover:scale-105 duration-300 px-5 py-2 text-sm font-bold"
                >
                  View Resume
                </button>
                <a
                  href={getDriveDownloadLink(filterResume[0].pdfUrl)}
                  download="MD-SAJJAD-HOSEN-SHOHAN-Resume.pdf"
                  className="bg-[var(--accent)] text-white rounded-full hover:scale-105 duration-300 px-5 py-2 text-sm font-bold inline-flex gap-2 items-center"
                >
                  <Download /> <span>Resume</span>
                </a>
              </>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          className="w-full lg:w-1/2 mt-10 flex justify-center items-center"
        >
          <TerminalDemo />
        </div>
      </div>

      {/* Resume Modal */}
      {isModalOpen && filterResume.length > 0 && filterResume[0].pdfUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <div className="relative p-6 w-full max-w-4xl h-[90%]">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-7 -right-8 z-10 p-3 rounded-full border-2 border-[var(--accent)] text-[var(--accent)] bg-transparent hover:text-white hover:bg-[var(--accent)]"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              width="100%"
              height="100%"
              src={getDriveEmbedLink(filterResume[0].pdfUrl)}
              title="Resume PDF Preview"
              frameBorder="0"
              allow="autoplay"
            ></iframe>
          </div>
        </motion.div>
      )}
    </CommonSection>
  );
};

export default Banner;
