import React from "react";

const SectionToSectionLine = () => {
  return (
    <div className="flex justify-center -translate-y-[1px]">
      <div className="w-3/4">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent  w-full" />
      </div>
    </div>
  );
};

export default SectionToSectionLine;
