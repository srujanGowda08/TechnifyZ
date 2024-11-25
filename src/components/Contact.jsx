import React, { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-purple-950 via-violet-900 to-purple-900"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Get in
            </span>{" "}
            <span className="text-white">Touch</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300/90">
            Let's discuss how we can help transform your business
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
            <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Name Input */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="relative w-full p-4 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-purple-500/50 backdrop-blur-sm transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="relative w-full p-4 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-purple-500/50 backdrop-blur-sm transition-colors"
                  />
                </div>

                {/* Subject Input */}
                <div className="relative group md:col-span-2">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="relative w-full p-4 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-purple-500/50 backdrop-blur-sm transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div className="relative group md:col-span-2">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows="4"
                    className="relative w-full p-4 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-purple-500/50 backdrop-blur-sm transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="group relative w-full px-8 py-4 rounded-xl overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-950 to-transparent" />
    </section>
  );
};

export default Contact;
