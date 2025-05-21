import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../../app/globals.css";
const SocialIcons = () => {
    return (
        <div >
            <div className=" flex  gap-10 text-xl">
               
                <div className="flex justify-center items-center p-2  border-2  hover:bg-[var(--accent)] duration-300 hover:border-[var(--accent)]  cursor-pointer rounded-full">
                    <Link target="_blank" href="https://github.com/Sajjadhosenshohan">
                        <FaGithub />
                    </Link>
                </div>
                <div className="flex justify-center items-center p-2  border-2 hover:bg-[var(--accent)] duration-300 hover:border-[var(--accent)] cursor-pointer rounded-full">
                    <Link target="_blank" href="https://www.linkedin.com/in/sajjadhosenshohan">
                        <FaLinkedinIn />
                    </Link>
                </div>
                <div className="flex justify-center items-center p-2  border-2 hover:bg-[var(--accent)] duration-300 hover:border-[var(--accent)] cursor-pointer rounded-full">
                    <Link target="_blank" href="https://www.facebook.com/home.php">
                        <FaFacebookF />
                    </Link>
                </div>
               
            </div>
        </div>
    );
};

export default SocialIcons;