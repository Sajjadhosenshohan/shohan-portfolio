import AboutMe from "@/components/views/AboutMe";
import Banner from "@/components/views/Banner";
import ContactMe from "@/components/views/ContactMe";
import MyEducation from "@/components/views/MyEducation";
import MyProjects from "@/components/views/MyProjects";
import MySkills from "@/components/views/MySkills";
// import RobotAnimation2 from "@/components/views/RobotAnimation2";

export default async function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        <Banner />
        {/* <RobotAnimation2 /> */}
      </div>
      <AboutMe />
      <MySkills />
      <MyEducation />
      <MyProjects />

      <ContactMe />
    </div>
  );
}
