import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0d081f] text-white py-10 px-6 sm:px-10 md:px-[10vw] lg:px-[20vw]">
      <div className="container mx-auto flex flex-col items-center text-center space-y-6">

        {/* Logo / Name */}
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-500 tracking-wide">
          ___Anamika__
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-3 sm:gap-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Education", id: "education" },
            { name: "Projects", id: "work" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 mt-2">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/share/1CeP1Fpu5L/" },
            { icon: <FaTwitter />, link: "https://x.com/anamikaa1303" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/anamika-singh-587817354" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/annu_0668?igsh=ODA5dTVrNmU3OGc0" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/@Anamika-e1p4y" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-[1.8rem] hover:text-purple-500 transform hover:scale-125 transition-transform duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider line (optional aesthetic touch) */}
        <div className="w-3/4 sm:w-1/2 border-t border-gray-700 mt-4"></div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-400 mt-3">
          © {new Date().getFullYear()} <span className="text-purple-400 font-medium">Anamika</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
