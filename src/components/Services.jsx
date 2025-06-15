import React from "react";
import { Brain, Globe, Smartphone,Cloud,CheckCircle , Brush,Wrench} from "lucide-react";


const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and responsive design.",
      Icon: Globe,
      features: ["React & Next.js", "Node.js Backend", "Cloud Deployment", "SEO Optimized"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      Icon: Smartphone,
      features: ["React Native", "Flutter", "iOS & Android", "App Store Publishing"]
    },
      {
    title: "UI/UX Design",
    description: "Clean, user-focused interfaces that enhance usability and drive user engagement.",
    Icon: Brush,
    features: ["Wireframing", "Figma Design", "Responsive Layouts", "User Journey Mapping"]
  },
  {
    title: "Maintenance & Support",
    description: "Keep your applications running smoothly with regular updates, monitoring, and technical support.",
    Icon: Wrench,
    features: ["Bug Fixes", "Enhancements", "Monitoring", "Security Patches"]
  }
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            <span className="text-white">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full">
                <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                  <service.Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
