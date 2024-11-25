import React from "react";
import { Brain, Shield, ArrowRight, ShoppingBasket } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "GroceryShare",
      description:
        "Create, share, and manage grocery lists with family and friends. Get AI-powered recipe suggestions based on your ingredients.",
      Icon: ShoppingBasket,
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      bgPattern:
        "radial-gradient(circle at 20% 20%, rgba(219, 39, 119, 0.1) 0%, transparent 50%)",
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      Icon: Brain,
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      bgPattern:
        "radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      Icon: Shield,
      gradient: "from-purple-500 via-pink-500 to-indigo-500",
      bgPattern:
        "radial-gradient(circle at 50% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
    },
  ];

  return (
    <section id="products" className="relative py-32 bg-purple-950">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[100%] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="container relative mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Our Products
            </span>
          </h2>
          <p className="text-xl text-gray-300/80 max-w-2xl mx-auto">
            Discover our suite of innovative solutions designed to transform
            your digital landscape.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Animated Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
              {/* Card Content */}
              <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors duration-300">
                {/* Icon */}
                <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500">
                  <product.Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300/90 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Learn More Button */}
                <div className="absolute bottom-8 right-8">
                  <button className="group/btn flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowRight
                      size={20}
                      className="transform transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-950 to-transparent" />
    </section>
  );
};

export default Products;
