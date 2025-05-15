"use client";

import { Card, Timeline } from "antd";
import Image from "next/image";
import Heading from "../shared/Heading";
import { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";

const EducationSection = () => {
  const [timelineMode, setTimelineMode] = useState<"left" | "alternate">(
    "alternate"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTimelineMode("left");
      } else {
        setTimelineMode("alternate");
      }
    };

    // initial check
    handleResize();

    // listen to resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <CommonSection>
      <div className="text-center mb-16">

        <Heading heading="Education Qualification" />

        <Image
          src="/AllSvg/section.svg"
          alt="Background"
          fill
          className="object-cover absolute top-0 left-60 z-[-10]"
          priority
        />
      </div>

      <Timeline
        mode={timelineMode}
        items={[
          {
            color: "purple",
            children: (
              <Card
                className="w-full !bg-white/5 !backdrop-blur-md  !border-white/10 !shadow-md
                 hover:shadow-purple-500/10 hover:shadow-lg transition-all duration-300"
                variant="outlined"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Bachelor in Computer Science and Engineering
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 mt-2 md:mt-0">
                    2019 - 2023
                  </span>
                </div>
                <p className="text-gray-400 mb-4">
                  Bangladesh University of Business and Technology (BUBT)
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                    <span className="text-purple-300">🎓</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Specialized in advanced algorithms and software engineering
                  </p>
                </div>
              </Card>
            ),
          },
          {
            color: "cyan",
            children: (
              <Card
                className="w-full !bg-white/5 !backdrop-blur-md  !border-white/10 !shadow-md
                 hover:shadow-purple-500/10 hover:shadow-lg transition-all duration-300"
                variant="outlined"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Diploma in Computer Science & Technology
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-teal-500/20 text-teal-300 border border-teal-500/30 mt-2 md:mt-0">
                    2015 - 2019
                  </span>
                </div>
                <p className="text-gray-400 mb-4">Feni Computer Institute</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center mr-3">
                    <span className="text-teal-300">🎓</span>
                  </div>
                  <p className="text-sm text-gray-300">CGPA: 3.58 out of 4</p>
                </div>
              </Card>
            ),
          },
          {
            color: "orange",
            children: (
              <Card
                className="w-full !bg-white/5 !backdrop-blur-md  !border-white/10 !shadow-md
                 hover:shadow-purple-500/10 hover:shadow-lg transition-all duration-300"
                variant="outlined"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Secondary School Certificate (SSC)
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-300 border border-orange-500/30 mt-2 md:mt-0">
                    2015
                  </span>
                </div>
                <p className="text-gray-400 mb-4">Feni Central High School</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-3">
                    <span className="text-orange-300">🎓</span>
                  </div>
                  <p className="text-sm text-gray-300">GPA: 5.00 out of 5.00</p>
                </div>
              </Card>
            ),
          },
        ]}
      />
    </CommonSection>
  );
};

export default EducationSection;
