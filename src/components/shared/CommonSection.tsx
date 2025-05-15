import React from "react";

const CommonSection = ({ children }: {children:React.ReactNode}) => {
  return (
    <section className="container mx-auto py-16 px-4 md:px-8 lg:px-16 relative">
      {children}
    </section>
  );
};

export default CommonSection;
