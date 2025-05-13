"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiPhone } from "react-icons/hi";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Menubar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="bg-white/10 fixed top-5 backdrop-blur-md px-4 py-2 rounded-full flex gap-4 shadow-md border border-white/10">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.path}>
            <button
              className={`px-4 py-2 rounded-full text-sm text-white transition-all duration-300 relative
              ${pathname === item.path ? "bg-white/10 shadow-inner font-semibold" : "hover:bg-white/5"}`}
            >
              {item.name}
              {pathname === item.path && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-1 rounded-full bg-white/70 blur-sm" />
              )}
            </button>
          </Link>
        ))}

        <Link href="/book-call">
          <button className="px-4 py-2 rounded-full text-sm text-white bg-white/10 hover:bg-white/20 border border-white/10 flex items-center gap-1">
            Book a Call <HiPhone className="text-sm" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menubar;
