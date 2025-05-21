import Link from "next/link";
import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container mx-auto px-5 py-12  space-y-5">
      <hr />

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <Link href="/" className="text-2xl font-extrabold  tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 ">
            Sajjad
          </span>
        </Link>
        </div>
        <div className="flex justify-center flex-col md:flex-row items-center gap-5 pt-5">
          <h1 className="text-xl font-semibold">Follow Me : </h1>
          <SocialIcons />
        </div>
      </div>
      <p className="pt-10 text-center md:text-end">
        &copy;{currentYear} All Right Reserved By SAJJAD
      </p>
    </div>
  );
};

export default Footer;
