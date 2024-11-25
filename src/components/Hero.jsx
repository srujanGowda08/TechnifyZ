import React from "react";
import { Link } from "react-scroll";
import hero from "../images/TechnifyZ.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-950 via-violet-900 to-purple-900"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8" data-aos="fade-right">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                Innovating
              </span>
              <br />
              <span className="text-white">
                Tomorrow's Technology
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  {" "}
                  Today
                </span>
              </span>
            </h1>

            <p className="text-xl text-gray-300/90 leading-relaxed">
              Transforming visionary ideas into cutting-edge solutions that
              redefine the boundaries of technological innovation and shape the
              future of digital excellence.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="group relative px-8 py-4 rounded-xl overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow duration-300 cursor-pointer"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="group relative px-8 py-4 rounded-xl text-white font-semibold cursor-pointer"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 border-2 border-purple-400 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative" data-aos="fade-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative">
                <img
                  src={hero}
                  alt="Hero"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-950 to-transparent" />
    </section>
  );
};

export default Hero;
