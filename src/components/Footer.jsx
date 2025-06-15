import React from "react";
import { Link } from "react-scroll";
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = ["about", "products", "features", "contact"];
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/company/technifyz/" },
    { icon: <Facebook className="w-5 h-5" />, url: "#" },
    { icon: <Twitter className="w-5 h-5" />, url: "#" },
    { icon: <Instagram className="w-5 h-5" />, url: "#" },
  ];

  return (
    <footer className="relative py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
              className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 cursor-pointer"
            >
              TechnifyZ
            </Link>
            <p className="text-gray-300/90 mt-4">
              Empowering businesses with cutting-edge technology solutions that drive innovation, enhance productivity, and create meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
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
                    className="text-gray-300/90 hover:text-cyan-400 cursor-pointer transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-300/90 flex items-center gap-2 group">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="group-hover:text-white transition-colors duration-300">
                  Hassan Karnataka, India
                </span>
              </li>
              <li className="text-gray-300/90 flex items-center gap-2 group">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="group-hover:text-white transition-colors duration-300">
                  +91 9148147745
                </span>
              </li>
              <li className="text-gray-300/90 flex items-center gap-2 group">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="group-hover:text-white transition-colors duration-300">
                  srujan0821@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full opacity-40 group-hover:opacity-80 blur transition-opacity duration-300" />
                  <div className="relative w-full h-full rounded-full flex items-center justify-center border border-white/10 bg-slate-800/50 backdrop-blur-sm">
                    <span className="text-gray-300/90 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative mt-12 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-purple-600/40 blur-sm" />
          <div className="h-px w-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20" />
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300/90">
          <p>
            &copy; {new Date().getFullYear()} TechnifyZ. All rights reserved.
          </p>
        </div>
      </div>

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-900 to-transparent" />
    </footer>
  );
};

export default Footer;
