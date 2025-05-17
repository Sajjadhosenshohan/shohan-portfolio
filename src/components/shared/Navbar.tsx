"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Education", path: "/education" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Menubar = () => {
  const pathname = usePathname();
  const { setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold  tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Sajjad
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 shadow-lg">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <button
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group",
                    pathname === item.path
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.name}
                  {pathname === item.path && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-purple-400 transition-colors" />
                  )}
                </button>
              </Link>
            ))}
          </div>
        </div>
        {/* Theme Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-white/10 text-white/70 hover:text-white"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-gray-900/95 border-white/10 text-white"
          >
            <DropdownMenuItem
              onClick={() => setTheme("light")}
              className="hover:bg-white/10 focus:bg-white/10"
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme("dark")}
              className="hover:bg-white/10 focus:bg-white/10"
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme("system")}
              className="hover:bg-white/10 focus:bg-white/10"
            >
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white/70 hover:text-white hover:bg-white/10"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-6 pb-6 pt-2 flex flex-col gap-2 bg-black/80 backdrop-blur-lg">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.path
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {item.name}
              </div>
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
                >
                  <Sun className="h-5 w-5 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 mr-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  Toggle Theme
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="bg-gray-900/95 border-white/10 text-white"
              >
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="hover:bg-white/10 focus:bg-white/10"
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="hover:bg-white/10 focus:bg-white/10"
                >
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="hover:bg-white/10 focus:bg-white/10"
                >
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
