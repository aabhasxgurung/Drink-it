"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = usePathname(); // This returns the current path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Cocktails", path: "/cocktails" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4 
    }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/home/logo.png"
            width={200}
            height={60}
            alt="Company Logo"
            className="w-[200px] h-[60px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((nav) => (
            <Link
              href={nav.path}
              key={nav.path}
              className={`text- font-medium transition-colors duration-200 ${
                location === nav.path
                  ? "text-[#7B0323]" // Change to a Tailwind default color
                  : "text-gray-800 hover:text-[#7B0323]"
              }`}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 hover:text-wine-900 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-fade-in">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-base font-medium px-2 py-2 rounded-md transition-colors duration-200 ${
                  location === link.path
                    ? "text-[#7B0323] bg-wine-50"
                    : "text-gray-800 hover:text-[#7B0323] hover:bg-wine-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
