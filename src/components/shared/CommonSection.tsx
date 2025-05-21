import React from "react";
import SectionToSectionLine from "./SectionToSectionLine";
import Image from "next/image";

const CommonSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative -top-4">
      <SectionToSectionLine />
      <Image
        src="/AllSvg/section.svg"
        alt="Background"
        fill
        className="object-cover absolute top-0 left-0 right-0 z-[-10]"
        priority
      />

      <div className="container mx-auto py-14  md:py-20 lg:pt-24 lg:pb-28 px-4 md:px-8 lg:px-16 relative">{children}</div>
    </section>
  );
};

export default CommonSection;
