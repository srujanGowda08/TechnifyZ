import React from "react";
import { Brain, Users, Shield, Lightbulb } from "lucide-react";

const About = () => {
  const features = [
    {
      title: "Innovative Solutions",
      description:
        "We aim to revolutionize industries with cutting-edge technologies, making processes smoother, faster, and more efficient.",
      Icon: Lightbulb,
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We focus on understanding and addressing the unique needs of our customers, providing personalized services and long-term support.",
      Icon: Users,
    },
    {
      title: "Data Security & Privacy",
      description:
        "Your data is safeguarded with the highest standards of encryption and strict privacy policies, ensuring peace of mind.",
      Icon: Shield,
    },
    {
      title: "Empowering Growth",
      description:
        "We work relentlessly to empower businesses and individuals to achieve their goals with state-of-the-art tools and solutions.",
      Icon: Brain,
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-purple-950 via-violet-900 to-purple-900"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              About
            </span>{" "}
            <span className="text-white">Us</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300/90">
            At Technifyz, we're focused on creating simple solutions that make
            life easier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors duration-300">
                <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500">
                  <feature.Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300/90">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-950 to-transparent" />
    </section>
  );
};

export default About;
