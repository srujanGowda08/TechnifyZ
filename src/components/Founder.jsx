import React from "react";
import { Linkedin, Github } from "lucide-react";
import founder from "../images/Ceo.jpg";

const Founder = () => {
  return (
    <section
      id="founder"
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-purple-950 via-violet-900 to-purple-900"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Meet Our
            </span>{" "}
            <span className="text-white">Founder</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Image Section */}
          <div className="lg:w-1/3 relative group" data-aos="fade-right">
            {/* Gradient Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300" />

            <div className="relative">
              <img
                src={founder}
                alt="Founder"
                className="rounded-xl w-full h-[550px] object-cover transform transition-all duration-500 group-hover:scale-[1.02]"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-purple-900/50 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-70" />
                  <div className="relative px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <span className="text-white text-sm font-medium">
                      Founder & Visionary
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3" data-aos="fade-left">
            <div className="relative group p-8 rounded-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <h3 className="text-4xl font-bold text-white mb-2">
                  Srujan G S
                </h3>
                <p className="text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
                  Founder & CEO
                </p>
                <p className="text-gray-300/90 leading-relaxed text-lg mb-8">
                  As the founder of TechnifyZ, I am a passionate final-year
                  engineering student with a drive to create impactful
                  technology solutions. My vision is to build a platform that
                  simplifies lives and promotes innovation. I am committed to
                  learning, growing, and bringing value to the tech community
                  through creativity and perseverance.
                </p>

                {/* Social Links */}
                <div className="flex space-x-6">
                  <a
                    href="https://www.linkedin.com/in/srujan-gs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300" />
                    <div className="relative p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 group-hover:border-purple-500/50 transition-colors duration-300">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                  </a>
                  <a
                    href="https://github.com/srujanGowda08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300" />
                    <div className="relative p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 group-hover:border-purple-500/50 transition-colors duration-300">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                  </a>
                </div>
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

export default Founder;
