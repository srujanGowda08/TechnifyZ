import React from "react";
import { Brain, Cloud, LineChart, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Cloud Integration",
      description:
        "Seamlessly connect with leading cloud platforms for scalable and efficient operations.",
      Icon: Cloud,
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Leverage advanced artificial intelligence to transform raw data into actionable insights.",
      Icon: Brain,
    },
    {
      title: "Real-time Monitoring",
      description:
        "Keep track of your systems with 24/7 monitoring and instant alert notifications.",
      Icon: LineChart,
    },
    {
      title: "Secure Infrastructure",
      description:
        "Protect your data with enterprise-grade security protocols and encryption.",
      Icon: Lock,
    },
  ];

  return (
    <section
      id="features"
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
              Powerful
            </span>{" "}
            <span className="text-white">Features</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300/90">
            Discover the tools that power your digital transformation
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

export default Features;
