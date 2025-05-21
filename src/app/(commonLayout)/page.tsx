import AboutSection from "@/components/about";
import EducationSection from "@/components/education";
import Banner from "@/components/views/Banner";
import ContactPage from "./contact/page";
import SkillsSection from "@/components/skills/SkillSection";
import ProjectSection from "@/components/projects";
import BlogSection from "@/components/blogs";

export default async function Home() {
  return (
    <div className="space-y-10">
      <Banner />
      <AboutSection />

      <SkillsSection />
      
      <ProjectSection/>
      <EducationSection />
      <BlogSection/>
      <ContactPage />
    </div>
  );
}
