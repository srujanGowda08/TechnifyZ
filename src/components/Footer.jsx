import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const quickLinks = ["about", "products", "features", "contact"];
  const socialLinks = [
    { icon: "linkedin", url: "https://www.linkedin.com/company/technifyz/" },
    { icon: "facebook", url: "#" },
    { icon: "twitter", url: "#" },
    { icon: "instagram", url: "#" },
  ];

  return (
    <footer className="relative py-16 bg-purple-950">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[100%] opacity-50">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 cursor-pointer"
            >
              TechnifyZ
            </Link>
            <p className="text-gray-300/90 mt-4">
              Innovating tomorrow's technology today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-300/90 hover:text-white cursor-pointer transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-300/90 flex items-center gap-2 group">
                <i className="fas fa-map-marker-alt text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
                <span className="group-hover:text-white transition-colors duration-300">
                  Hassan Karnataka , India
                </span>
              </li>
              <li className="text-gray-300/90 flex items-center gap-2 group">
                <i className="fas fa-phone text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
                <span className="group-hover:text-white transition-colors duration-300">
                  +91 9148147745
                </span>
              </li>
              <li className="text-gray-300/90 flex items-center gap-2 group">
                <i className="fas fa-envelope text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
                <span className="group-hover:text-white transition-colors duration-300">
                  srujan0821@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-500">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full flex items-center justify-center group relative"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full opacity-50 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <div className="relative w-full h-full rounded-full flex items-center justify-center border border-white/10 bg-purple-900/30 backdrop-blur-sm">
                    <i
                      className={`fab fa-${social.icon} text-xl text-gray-300/90 group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative mt-12 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-indigo-500/50 blur-sm" />
          <div className="h-px w-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20" />
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300/90">
          <p>
            &copy; {new Date().getFullYear()} TechnifyZ. All rights reserved.
          </p>
        </div>
      </div>

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-purple-950 to-transparent" />
    </footer>
  );
};

export default Footer;
