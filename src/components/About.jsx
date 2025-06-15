import React from "react";
import { Target, Rocket, Wrench } from "lucide-react";

const About = () => {
  const sections = [
    {
      title: "Our Vision",
      description:
        "To become a trusted web and mobile development company by serving clients from all over the international frontiers. We have a legacy of working hand-in-hand with our clients and keep transparent communication at every level of the development process.",
      Icon: Target,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to build a strong digital transformational focus and empower SMBs and Enterprises and make them more agile and competitive by leveraging new technologies. Together, we strive to enhance your profitability, and market position in their competitive landscape.",
      Icon: Rocket,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Our Expertise",
      description:
        "We specialize in building robust web and mobile applications using modern tech stacks. Our core strengths lie in MERN stack development, scalable backend systems, intuitive UI/UX design, and full-cycle product development tailored to client needs.",
      Icon: Wrench,
      color: "from-purple-500 to-cyan-500",
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              About
            </span>{" "}
            <span className="text-white">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            At TechnifyZ, we’re passionate about creating innovative solutions that transform businesses and drive digital excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative p-6 rounded-2xl bg-slate-700/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className={`mb-4 inline-block p-3 rounded-xl bg-gradient-to-r ${section.color}`}>
                  <section.Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                <p className="text-gray-300">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
