import React, { useEffect, useState } from "react";
import {
  Menu,
  X
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isOpen) setIsOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About Us" },
    { to: "services", label: "Services" },
    { to: "career", label: "Career" },
    { to: "contact", label: "Contact Us" },
    // Removed Join Us from scrollable links
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled || isOpen
        ? "bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-cyan-500/20"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('home')}
            className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            TechnifyZ
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => scrollToSection(link.to)}
                className="relative px-4 py-2 text-sm lg:text-base text-gray-300 hover:text-white cursor-pointer group overflow-hidden rounded-lg transition-colors duration-300"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </button>
            ))}
            {/* Join Us Button (LinkedIn) */}
            <a
              href="https://www.linkedin.com/company/technifyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 text-sm lg:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:scale-105 transition-transform duration-300 shadow"
            >
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 md:hidden focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => scrollToSection(link.to)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            {/* Mobile Join Us Button */}
            <a
              href="https://www.linkedin.com/company/technifyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
