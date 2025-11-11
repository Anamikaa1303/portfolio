import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { IoMdDownload } from "react-icons/io";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import annulogo from "../assets/profile_logo/annulogo.jpeg";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-12 bg-gradient-to-b from-black via-[#0a0a0a] to-gray-900 text-white font-sans"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:gap-20">
        
        {/* ==== Text Section ==== */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-10 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 text-purple-400">
            Hey, I am
          </h1>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4">
            Anamika
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
            <span className="text-white">I am a </span>
            <Typewriter
              words={["Full-Stack Developer", "Video Editor", "Tech Enthusiast"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
            Passionate about crafting web experiences that are visually stunning, performant, and user-friendly. I specialize in building
            end-to-end solutions — from responsive frontend UI using React & Next.js to robust backend APIs with Node.js and MongoDB. 
            <br /><br />
            I also love exploring new technologies, improving code quality, and sharing knowledge through projects and tutorials.
          </p>

          {/* ==== Buttons ==== */}
          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            <motion.a
              href="/My_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-white transition-all"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 10px #8245ec, 0 0 30px #a855f7",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <IoMdDownload size={24} /> Resume
            </motion.a>

            <motion.a
              href="https://github.com/Anamikaa1303"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-purple-200 bg-gray-900 hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #8245ec" }}
              whileTap={{ scale: 0.97 }}
            >
              <FaGithub size={20} /> Explore My Codebase
            </motion.a>
          </div>
        </motion.div>

        {/* ==== Image Section ==== */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Tilt
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-3xl border-4 border-purple-600 overflow-hidden"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={900}
            scale={1.05}
            transitionSpeed={1200}
          >
            <motion.img
              src={annulogo}
              alt="Anamika"
              className="w-full h-full object-cover rounded-3xl shadow-[0_20px_40px_rgba(130,69,236,0.4)]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
