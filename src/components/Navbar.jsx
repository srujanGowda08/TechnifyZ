import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About Us" },
    { to: "products", label: "Products" },
    { to: "features", label: "Features" },
    { to: "testimonials", label: "Testimonials" },
    { to: "founder", label: "Founder" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-gradient-to-r from-purple-900/90 via-violet-800/90 to-purple-900/90 backdrop-blur-lg shadow-lg shadow-purple-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              TechnifyZ
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="relative px-4 py-2 text-sm lg:text-base text-white cursor-pointer group overflow-hidden rounded-lg"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    {link.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform duration-300"></div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 md:hidden focus:outline-none group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute w-6 h-0.5 bg-white transform transition duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-white transform transition-all duration-200 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-white transform transition duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 md:hidden ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-64 h-screen bg-gradient-to-b from-purple-900 to-violet-950 transform transition-transform duration-500 ease-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col pt-16 px-4 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-lg focus:outline-none"
              aria-label="Close menu"
            >
              &times;
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="py-4 text-base font-medium text-white/90 border-b border-white/10 hover:text-pink-400 transition-colors relative group"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
