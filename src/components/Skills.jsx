"use client";
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// ===== Skill Logos =====
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import javascriptLogo from "../assets/tech_logo/javascript.png";
import reactjsLogo from "../assets/tech_logo/reactjs.png";
import nodejsLogo from "../assets/tech_logo/nodejs.png";
import mongodbLogo from "../assets/tech_logo/mongodb.png";
import tailwindcssLogo from "../assets/tech_logo/tailwindcss.png";
import gitLogo from "../assets/tech_logo/git.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";
import vercelLogo from "../assets/tech_logo/vercel.png";
import expressjsLogo from "../assets/tech_logo/express.png";
import javaLogo from "../assets/tech_logo/java.png";
import springbootLogo from "../assets/tech_logo/springboot.png";

// ===== Skills Data =====
const SkillsInfo = [
  {
    title: "Frontend Development",
    description:
      "Designing interactive and responsive interfaces using modern technologies.",
    skills: [
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Building secure, scalable APIs and server-side logic for seamless performance.",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Java", logo: javaLogo },
      { name: "Spring Boot", logo: springbootLogo },
    ],
  },
  {
    title: "Tools & Deployment",
    description:
      "Leveraging top developer tools for version control, debugging, and deployment.",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] font-sans">
      {/* ===== Section Header ===== */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          My Tech Stack
        </h2>
        <div className="w-28 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-base sm:text-lg">
          I craft modern, scalable web applications using a combination of
          frontend, backend, and developer tools.
        </p>
      </motion.div>

      {/* ===== Skill Cards ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
            >
              <div className="bg-gradient-to-br from-[#1e1e2f] to-[#2e2e48] p-8 rounded-3xl shadow-lg border border-white/10 hover:shadow-purple-500/40 transition-all">
                {/* Category Title */}
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base mb-6 text-center">
                  {category.description}
                </p>

                {/* Skill Icons */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 bg-gray-900 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all p-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-2"
                      />
                      <span className="text-sm sm:text-base text-gray-300 text-center font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
