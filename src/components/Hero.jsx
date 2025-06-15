import React from "react";
import { Link } from "react-scroll";
import hero from "../images/TechnifyZ.webp";
import { Code, Smartphone, Globe, Database, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container relative mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Building
              </span>
              <br />
              <span className="text-white">
                Tomorrow's
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Digital</span>
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Future
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Empowering businesses with cutting-edge technology solutions that drive innovation, 
              enhance productivity, and create meaningful digital experiences.
            </p>

            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 rounded-xl overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 rounded-xl text-white font-semibold border-2 border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="lg:w-1/2 relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/20 flex items-center justify-center ">
                <img
                  src={hero}
                  alt="TechnifyZ Hero"
                  className="rounded-xl shadow-lg max-w-xs sm:max-w-sm md:max-w-md h-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
