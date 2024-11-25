import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Coming soon",
      role: "Coming soon",
      content: "Coming soon",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Coming soon",
      role: "Coming soon",
      content: "Coming soon",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Coming soon",
      role: "Coming soon",
      content: "Coming soon",
      image: "/api/placeholder/100/100",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-purple-950 via-violet-900 to-purple-900"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Client
            </span>{" "}
            <span className="text-white">Testimonials</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300/90">
            What our clients say about our technological solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 p-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <p className="text-gray-300/90 mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-50" />
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative rounded-full w-full h-full object-cover border-2 border-white/20"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-300/80 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
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

export default Testimonials;
