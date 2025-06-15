import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Services from "./components/Services";
import Career from "./components/Career";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="font-sans">
      {/* Custom Toastify Component */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeButton={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // Optional, use "light", "dark", or "colored" for different themes
        style={{
          marginTop: "5rem", // Custom margin to space the toast out
          zIndex: 9999, // Ensure it appears on top
        }}
        toastStyle={{
          backgroundColor: "purple", // Dark background
          color: "#fff", // White text
          borderRadius: "8px", // Rounded corners
          padding: "12px 20px", // Padding around toast
          fontWeight: "600", // Font weight for text
        }}
        progressStyle={{
          backgroundColor: "violet", // Progress bar color (tomato)
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Services/>
      <Career/>
      {/* <Products /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
