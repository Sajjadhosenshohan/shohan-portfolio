import AboutSection from "@/components/about";
import EducationSection from "@/components/education";
import SectionToSectionLine from "@/components/shared/SectionToSectionLine";
import Banner from "@/components/views/Banner";
import ContactPage from "./contact/page";
import SkillsSection from "@/components/skills/SkillSection";

export default async function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <SectionToSectionLine />
      <AboutSection />

      <SectionToSectionLine />
      <SkillsSection />
      
      <SectionToSectionLine />
      <EducationSection />

      {/* <MyEducation />
      <MyProjects /> */}
      <SectionToSectionLine />
      <ContactPage />
    </div>
  );
}
