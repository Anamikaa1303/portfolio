import React from "react";
import { motion } from "framer-motion";
import AITDlogo from "../assets/education_logo/AITD_logo.jpeg";
import YSA1 from "../assets/education_logo/YSA1.png";

const educationData = [
  {
    id: 0,
    img: AITDlogo,
    degree: "B.Tech in Computer Science",
    school: "Dr. AITD College, Kanpur",
    date: "Oct 2023 - Aug 2027",
    grade: "70.63%",
    desc: "Currently, I'm pursuing my Bachelor of Technology (B.Tech) degree in Computer Science from Dr. AITD College, Kanpur. During my academic journey, I’ve explored a wide range of core subjects that have strengthened my foundation in computing and software engineering. By developing hands-on skills in Web Development and Database Management Systems, I’ve gained both theoretical knowledge and practical experience. My time at Dr. AITD College has also provided opportunities to work on projects that apply classroom concepts to real-world challenges, enhancing my problem-solving and technical abilities.",
  },
  {
    id: 1,
    img: YSA1,
    degree: "CBSE (XII) - PCM",
    school: "Young Scholars Academy, Shikohabad", 
    date: "Apr 2021 - Mar 2022",
    grade: "78.2%",
    desc: "I completed my class 12 education from Young Scholar's Academy, Shikohabad, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
  },
  {
    id: 2,
    img: YSA1,
    degree: "CBSE (X) - Science with Computer Application",
    school: "Young Scholars Academy, Shikohabad",
    date: "Apr 2019 - Mar 2020",
    grade: "70.2%",
    desc: "I completed my class 10 education from Young Scholars Academy, Shikohabad, under the CBSE board, where I studied Science with Computer Applications.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-8 md:px-12 lg:px-24 bg-gradient-to-b from-gray-950 to-gray-900 font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Education Cards */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900/80 border border-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
          >
            {/* Logo and Title Row */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-purple-500 flex-shrink-0">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <h4 className="text-lg sm:text-xl text-gray-300 mt-1">
                  {edu.school}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                <p className="text-gray-400 font-semibold mt-2">
                  Grade: {edu.grade}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 mt-6 leading-relaxed text-justify">
              {edu.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
