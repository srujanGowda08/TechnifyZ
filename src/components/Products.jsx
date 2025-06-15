import React from "react";
import { Zap,Smartphone,Cloud,Star } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "TechPlatform Pro",
      description: "Enterprise-grade platform for digital transformation and business automation.",
      Icon: Zap,
      features: ["Advanced Analytics", "API Integration", "Custom Workflows", "24/7 Support"],
      price: "Contact for Pricing"
    },
    {
      title: "Mobile Suite",
      description: "Complete mobile application development and management solution.",
      Icon: Smartphone,
      features: ["Cross-Platform", "Push Notifications", "Analytics Dashboard", "App Store Support"],
      price: "Starting at $999"
    },
    {
      title: "Cloud Connect",
      description: "Seamless cloud integration and infrastructure management platform.",
      Icon: Cloud,
      features: ["Multi-Cloud Support", "Auto Scaling", "Security Monitoring", "Cost Optimization"],
      price: "Starting at $499"
    }
  ];

  return (
    <section id="products" className="relative py-20 bg-gradient-to-br from-blue-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Our
            </span>{" "}
            <span className="text-white">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Powerful products designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full flex flex-col">
                <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                  <product.Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{product.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <Star className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{product.price}</div>
                  <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
