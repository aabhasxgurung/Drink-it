"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const location = usePathname(); // Current route

  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsScrolled(false);
        setIsHidden(false);
      } else if (currentScrollY > lastScrollY) {
        setIsHidden(true); // Hide navbar when scrolling down
      } else {
        setIsHidden(false);
        setIsScrolled(true); // Show navbar with white background when scrolling up
      }

      lastScrollY = currentScrollY;
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-10 py-4 
        ${isHidden ? "-translate-y-full" : "translate-y-0"} 
        ${
          isScrolled
            ? "bg-white/30 backdrop-blur-sm shadow-md" // Glassmorphism when scrolled
            : "bg-white/30 backdrop-blur-sm md:bg-transparent" // Glassmorphism at the top
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
            className="w-[150px] md:w-[200px] md:h-[60px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((nav) => (
            <Link
              href={nav.path}
              key={nav.path}
              className={`font-medium transition-colors duration-200 ${
                location === nav.path
                  ? isScrolled
                    ? "text-[#7B0323]"
                    : "text-[#7B0323]" // Active link color
                  : isScrolled
                  ? "text-gray-800 hover:text-[#7B0323]"
                  : "text-white hover:text-[#7B0323]" // White text at top
              }`}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 hover:text-[#7B0323] transition-colors"
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
