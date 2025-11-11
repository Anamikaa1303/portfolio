import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d1bbiih", // Replace with your EmailJS service ID
        "template_hel7vrs", // Replace with your EmailJS template ID
        form.current,
        "P_cPVdwU-gsSXPXMA" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();

          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-6 sm:px-10 md:px-[8vw] lg:px-[20vw] bg-[#090314] text-white"
    >
      <ToastContainer />

      {/* === Section Title === */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
          CONTACT
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          I'd love to hear from you — reach out for any opportunities or questions!
        </p>
      </motion.div>

      {/* === Contact Form === */}
      <motion.div
        className="w-full max-w-md bg-[#0d081f] p-6 sm:p-8 rounded-lg shadow-xl border border-gray-700"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">
          Connect With Me
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4 text-sm sm:text-base"
        >
          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 font-semibold rounded-md hover:opacity-90 transition"
          >
            SEND
          </motion.button>
        </form>

        {/* === Social Media Icons === */}
        <motion.div
          className="flex justify-center space-x-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.linkedin.com/in/anamika-singh-587817354/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://github.com/Anamikaa1303"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
