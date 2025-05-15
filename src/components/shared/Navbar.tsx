"use client";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "contact", path: "/contact" },
  { name: "More", path: "/more" },
];

const Menubar = () => {
  const pathname = usePathname();
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null;

  return (
    <nav className="w-full container mx-auto flex justify-between items-center px-8 py-4 fixed top-0 z-50 bg-black/40 backdrop-blur-md">
      {/* Left Logo */}
      <div className="text-white text-xl font-bold">Sajjad</div>

      {/* Center Nav Items */}
      <div className="flex gap-6 px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-md">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.path}>
            <button
              className={`px-4 py-1 rounded-full text-sm transition-all duration-300 relative ${
                pathname === item.path
                  ? "bg-white/10 text-white font-medium"
                  : "hover:text-white/70 text-white/50"
              }`}
            >
              {item.name}
              {pathname === item.path && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 rounded-full bg-white/60 blur-sm" />
              )}
            </button>
          </Link>
        ))}

        {/* Book a Call CTA Button */}
        <Link href="/contact">
          <button className="ml-2 px-4 py-1 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full border border-white/10 transition">
            Book a Call
          </button>
        </Link>
      </div>

      {/* Right Theme Toggle */}
      {/* <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="ml-4 text-white text-sm border border-white/10 rounded-full px-3 py-1 hover:bg-white/10 transition"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button> */}
    </nav>
  );
};

export default Menubar;
