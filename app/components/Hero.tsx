"use client";
import React, { useRef, useEffect, useState } from "react";
import Typed from "typed.js";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaWhatsapp,
  FaArrowDown,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { translater } from "../animation/Animation";

function Hero() {
  const typedRef = useRef(null);
  const [typed, setTyped] = useState<Typed | null>(null);

  useEffect(() => {
    const typedInstance: Typed = new Typed(typedRef.current, {
      strings: [
        "Front-end Developer.",
        "Backend Developer.",
        "Full Stack Developer.",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      backDelay: 1500,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    });

    setTyped(typedInstance);
    return () => typedInstance.destroy();
  }, []);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1-q5FuJd7zLGOmLuh1zPjhrP5E9HcWD1r";
    link.setAttribute("download", "MuhammadSheraz-CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-br from-gray-900 to-gray-950"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Text Section */}
        <motion.div
          variants={translater(-100)}
          initial="hidden"
          whileInView="visible"
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-cyan-400">Muhammad Sheraz</span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap justify-center lg:justify-start">
              And I am a{" "}
              <span
                ref={typedRef}
                className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
              ></span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            Full-stack developer and freelancer passionate about creating
            innovative web solutions with cutting-edge technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.fiverr.com/muhammasdsheraz/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Hire Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/+923260468787"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-bold rounded-full hover:bg-cyan-500 hover:text-white transition-all"
            >
              Let's Talk
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
              className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-white font-bold rounded-full hover:shadow-cyan-500/20 transition-all flex items-center gap-2"
            >
              Download CV
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center lg:justify-start gap-6"
          >
            {[
              {
                icon: <FaGithub />,
                url: "https://github.com/muhammadsherazsandila",
                color: "from-gray-800 to-gray-900",
              },
              {
                icon: <FaLinkedinIn />,
                url: "https://www.linkedin.com/in/muhammad-sheraz-800948347/",
                color: "from-blue-700 to-blue-900",
              },
              {
                icon: <FaFacebook />,
                url: "https://www.facebook.com/muhammadsheraz046",
                color: "from-blue-600 to-blue-800",
              },
              {
                icon: <FaWhatsapp />,
                url: "https://wa.me/+923260468787",
                color: "from-green-600 to-green-800",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl p-4 rounded-full bg-gradient-to-br ${social.color} backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-all`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          variants={translater(100)}
          initial="hidden"
          whileInView="visible"
          className="order-1 lg:order-2 relative flex justify-center"
        >
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            {/* Main image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-10">
              <img
                src="/Images/admin.png"
                alt="Muhammad Sheraz"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-cyan-400 text-xl"
            >
              <FaArrowDown />
            </motion.div>
            {/* Scroll down text making the text clip by adding background */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-cyan-500 to-blue-500 text-sm mt-2 font-semibold ">
              Scroll Down
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
