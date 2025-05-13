import Image from "next/image";

const MySkills = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center pb-5 ">
          <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block">
            My <span className="text-[#64B5F6]">Skills</span>
          </h1>
        </div>
      </div>
      {/*  */}
      <div className=" mx-auto px-5 lg:pt-10 pt-5 min-h-screen">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Frontend Technologies Column */}
          <div className="relative">
            <div className="flex flex-col">
              {/* Header */}
              <div
                className="flex items-center pb-10 ml-2 relative"
                data-aos-duration="800"
                data-aos="fade-up"
              >
                <div className="absolute left-0 top-0 w-px h-full bg-white" />
                <div className="w-5 h-5 rounded-full bg-blue-300 z-10 absolute left-[-9px] top-0" />
                <h2 className="text-2xl text-white ml-5">
                  Frontend Technologies
                </h2>
              </div>

              {/* Items */}
              {[
                {
                  icon: "HTML.svg",
                  title: "HTML - 5",
                  text: "Proficient in creating structured and accessible web content using HTML.",
                  duration: "1000",
                },
                {
                  icon: "CSS.svg",
                  title: "CSS - 3",
                  text: "Skilled in designing visually appealing and responsive web layouts with CSS.",
                  duration: "1100",
                },
                {
                  icon: "TailwindCSS-Dark.svg",
                  title: "Tailwind CSS",
                  text: "Experienced in using Tailwind CSS for rapid and efficient UI development.",
                  duration: "1200",
                },
                {
                  icon: "JavaScript.svg",
                  title: "JavaScript",
                  text: "Proficient in JavaScript for dynamic, interactive web application development.",
                  duration: "1300",
                },
                {
                  icon: "TypeScript.svg",
                  title: "Typescript",
                  text: "Proficient in Typescript for dynamic, interactive web application development.",
                  duration: "1400",
                },
                {
                  icon: "React-Dark.svg",
                  title: "React JS",
                  text: "Skilled in building dynamic, efficient, and scalable user interfaces with React JS.",
                  duration: "1500",
                },
                {
                  icon: "NextJS-Dark.svg",
                  title: "Next.js",
                  text: "Expert in Next.js for building fast, SEO-friendly, and scalable web applications.",
                  duration: "1200",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative pb-8 pl-8 ml-2"
                  data-aos-duration={item.duration}
                  data-aos="fade-up"
                >
                  <div className="absolute left-0 top-0 w-px h-full bg-white" />
                  <div className="absolute left-[-15px] top-0 w-[30px] h-[30px]  flex items-center justify-center">
                    <Image
                      src={`https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/${item.icon}`}
                      className="rounded-full"
                      alt={item.title}
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white ">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mt-2">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Technologies Column */}
          <div className="relative">
            <div className="flex flex-col">
              {/* Header */}
              <div
                className="flex items-center pb-10 ml-2 relative"
                data-aos-duration="800"
                data-aos="fade-up"
              >
                <div className="absolute left-0 top-0 w-px h-full bg-gray-700" />
                <div className="w-5 h-5 rounded-full bg-blue-300 z-10 absolute left-[-9px] top-0" />
                <h2 className="text-2xl text-white  ml-5">
                  Backend Technologies
                </h2>
              </div>

              {[
                {
                  icon: "TypeScript.svg",
                  title: "Typescript",
                  text: "Proficient in Typescript for dynamic, interactive web application development.",
                  duration: "1100",
                },
                {
                  icon: "NodeJS-Dark.svg",
                  title: "Node JS",
                  text: "Proficient in using Node JS for developing fast and scalable server-side applications.",
                  duration: "1000",
                },
                {
                  icon: "ExpressJS-Dark.svg",
                  title: "Express JS",
                  text: "Experienced in building robust web applications and APIs using Express JS.",
                  duration: "1100",
                },
                {
                  icon: "MongoDB.svg",
                  title: "Mongo DB",
                  text: "Proficient in using MongoDB for scalable, flexible, and efficient database management.",
                  duration: "1200",
                },
                {
                  icon: "MongoDB.svg",
                  title: "Mongoose",
                  text: "Skilled in using Mongoose for seamless MongoDB integration with schema-based data modeling.",
                  duration: "1200",
                },

                {
                  icon: "Firebase-Dark.svg",
                  title: "Firebase",
                  text: "Skilled in using Firebase for real-time database, authentication, and hosting solutions.",
                  duration: "1300",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative pb-8 pl-8 ml-2"
                  data-aos-duration={item.duration}
                  data-aos="fade-up"
                >
                  <div className="absolute left-0 top-0 w-px h-full bg-white" />
                  <div className="absolute left-[-15px] top-0 w-[30px] h-[30px]  flex items-center justify-center">
                    <Image
                      src={`https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/${item.icon}`}
                      className="rounded-full"
                      alt={item.title}
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="ml-4">
                      <h3 className="text-lg text-white font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mt-2">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Column */}
          <div className="relative">
            <div className="flex flex-col">
              {/* Header */}
              <div
                className="flex items-center pb-10 ml-2 relative"
                data-aos-duration="800"
                data-aos="fade-up"
              >
                <div className="absolute left-0 top-0 w-px h-full bg-white" />
                <div className="w-5 h-5 rounded-full bg-blue-300 z-10 absolute left-[-9px] top-0" />
                <h2 className="text-2xl text-white  ml-5">Tools</h2>
              </div>

              {/* Items */}
              {[
                {
                  icon: "Git.svg",
                  title: "Git & GitHub",
                  text: "Proficient in Git for version control and GitHub for collaborative development.",
                  duration: "1000",
                },
                {
                  icon: "VSCode-Dark.svg",
                  title: "VS Code",
                  text: "VS Code is a powerful, lightweight code editor with support for extensions, making it ideal for web development across different languages and frameworks.",
                  duration: "1200",
                },
                {
                  icon: "Postman.svg",
                  title: "Postman",
                  text: "Postman is an API testing tool that allows developers to send requests and analyze responses, making API integration and debugging easier.",
                  duration: "1200",
                },
                {
                  icon: "Netlify-Dark.svg",
                  title: "Netlify",
                  text: "Netlify is a platform for deploying static sites and web applications, offering continuous integration and automated deployments from Git repositories.",
                  duration: "1200",
                },
                {
                  icon: "MongoDB.svg",
                  title: "MongoDB Atlas",
                  text: "MongoDB Atlas is a cloud-based database service that simplifies MongoDB deployments, providing automatic scaling, backups, and monitoring.",
                  duration: "1200",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative pb-8 pl-8 ml-2"
                  data-aos-duration={item.duration}
                  data-aos="fade-up"
                >
                  <div className="absolute left-0 top-0 w-px h-full bg-white" />
                  <div className="absolute left-[-15px] top-0 w-[30px] h-[30px]  flex items-center justify-center">
                    <Image
                      src={`https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/${item.icon}`}
                      className="rounded-full"
                      alt={item.title}
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="ml-4">
                      <h3 className="text-lg text-white font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mt-2">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
