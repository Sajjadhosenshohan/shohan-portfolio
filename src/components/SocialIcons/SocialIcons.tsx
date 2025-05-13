import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <div >
            <div className="text-white flex gap-10 text-xl">
               
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <Link target="_blank" href="https://github.com/HumayunKabirSobuj">
                        <FaGithub />
                    </Link>
                </div>
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <Link target="_blank" href="https://www.linkedin.com/in/devhumayun123">
                        <FaLinkedinIn />
                    </Link>
                </div>
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <Link target="_blank" href="https://web.facebook.com/md.humayunkabirsobuj506034">
                        <FaFacebookF />
                    </Link>
                </div>
               
            </div>
        </div>
    );
};

export default SocialIcons;