import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import SocialIcons from "../SocialIcons/SocialIcons";
import { getServerSession } from "next-auth";
import ContactForm from "./ContactForm";

const ContactMe = async () => {
  const session = await getServerSession();
  // console.log(session?.user);

  const user = session?.user;

 

  return (
    <div>
      <div className="flex items-center justify-center  ">
        <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block ">
          Contact <span className="text-[#64B5F6]">Me</span>
        </h1>
      </div>
      <div className=" mx-auto  text-white min-h-screen  px-5  flex justify-center items-center">
        <div className="flex flex-col gap-10 md:flex-row w-full item-center h-auto justify-center ">
          <div className="flex gap-7 flex-col w-full">
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="flex gap-2 item-center"
            >
              <IoLogoWhatsapp className="mt-1" />
              <p>+8801747477746</p>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="flex gap-2 item-center"
            >
              <FaEnvelope className="mt-1" />
              <p>humayunkabir506034@gmail.com</p>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="flex gap-2 item-center"
            >
              <IoCall className="mt-1" />
              <p>+8801747477746</p>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="flex gap-2 item-center"
            >
              <FaLocationDot className="mt-1" />
              <p>Zirabo, Ashulia, Savar, Dhaka</p>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="flex gap-2 item-center"
            >
              <SocialIcons />
            </div>
          </div>
         

          <div  className="w-full">
          <ContactForm user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
