"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🖼️ Project Images
import Netgif from "../assets/work_gif/Net.gif";
import Passgif from "../assets/work_gif/Pass.gif";
import Todogif from "../assets/work_gif/Todo.gif";
import Twitgif from "../assets/work_gif/Twit.gif";
import bitreegif from "../assets/work_gif/bitree.gif";
import urliasgif from "../assets/work_gif/urlias.gif";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Netflix-clone",
      description:
        "A fully responsive Netflix landing page clone built using HTML5, CSS3, and JavaScript. This project replicates the look and feel of the official Netflix India homepage with sleek UI design and responsive layouts.",
      image: Netgif,
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Anamikaa1303/Netflix-clone-.git",
      webapp: "https://netflix-clone-gamma-olive.vercel.app/",
    },
    {
      id: 2,
      title: "Twitter-clone",
      description:
        "A modern Twitter Clone built using HTML, Tailwind CSS, and JavaScript. This project recreates the core design and interactions of Twitter’s interface, focusing on responsive design, clean UI, and dynamic functionality.",
      image: Twitgif,
      tags: ["HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Anamikaa1303/Twitter-Clone.git",
      webapp: "https://twitter-clone-livid.vercel.app/",
    },
    {
      id: 3,
      title: "Todo-List App",
      description:
        "A simple and elegant Todo List application built using React, Tailwind CSS, and React Icons. This app allows users to add, edit, delete, and manage their daily tasks efficiently — with data stored locally using LocalStorage for persistence.",
      image: Todogif,
      tags: ["React", "Tailwind CSS", "React Icons"],
      github: "https://github.com/Anamikaa1303/Todo-list.git",
      webapp: "https://todo-list-rho-six-64.vercel.app/",
    },
    {
      id: 4,
      title: "VaultX",
      description:
        "VaultX is a secure and modern Password Manager web application built using the MERN stack — MongoDB, Express.js, React, and Node.js — and styled with Tailwind CSS.",
      image: Passgif,
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Anamikaa1303/VaultX.git",
      webapp: "https://todo-list-nzkf.vercel.app/",
    },
    {
      id: 5,
      title: "URL-Alias",
      description:
        "URL-Alias is a modern URL shortener built with Next.js. It allows users to generate short, custom URLs quickly and easily. The project features a responsive design, local font optimization, and a short URL generator connected to MongoDB.",
      image: urliasgif,
      tags: ["Next.js", "React", "MongoDB", "JavaScript", "Web App", "URL Shortener"],
      github: "https://github.com/Anamikaa1303/URL-Alias.git",
      webapp: "#",
    },
    {
      id: 6,
      title: "Link-tree",
      description:
        "Link-tree is a simple tool that allows you to share all your important links through a single, customizable webpage.",
      image: bitreegif,
      tags: ["Next.js", "React", "Web App", "Responsive Design"],
      github: "https://github.com/Anamikaa1303/Link-tree.git",
      webapp: "#",
    },
  ];

  return (
    <section
      id="work"
      className="py-20 px-5 sm:px-10 md:px-16 lg:px-24 bg-black text-white font-sans"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Explore my best work built with modern web technologies — fully responsive, fast, and user-friendly.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-[400px] hover:shadow-purple-500/30 overflow-hidden cursor-pointer transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover sm:h-60 md:h-64"
            />
            <div className="p-5 md:p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-purple-400 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Section */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl w-full max-w-3xl relative shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 text-3xl text-white hover:text-purple-500"
              >
                &times;
              </button>

              {/* Modal Content */}
              <div className="overflow-y-auto">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-56 sm:h-64 md:h-72 object-contain bg-gray-800"
                />
                <div className="p-5 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#251f38] text-purple-400 text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-800 hover:bg-purple-700 text-gray-300 py-2 rounded-md font-semibold transition"
                    >
                      View Code
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold transition"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
