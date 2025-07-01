"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaUserGraduate,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { translater } from "./Animation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const skillVariants: Variants = {
  hover: {
    y: -10,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

function About() {
  const skills = [
    { name: "Frontend", icon: <FaUserGraduate className="text-blue-400" /> },
    { name: "Fullstack", icon: <FaLaptopCode className="text-emerald-400" /> },
    {
      name: "Problem Solving",
      icon: <FaLightbulb className="text-amber-400" />,
    },
    { name: "Freelancing", icon: <FaRocket className="text-purple-400" /> },
  ];

  return (
    <section
      className="px-6 py-24 md:px-12 lg:px-24 bg-gradient-to-br from-gray-900 to-gray-950"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            About Me
          </h1>
          <div className="h-1 w-20 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={translater(-100)}
            initial="hidden"
            whileInView="visible"
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl">
              <FaQuoteLeft className="text-cyan-400 mb-4 text-2xl opacity-80" />

              <motion.p
                variants={itemVariants}
                className="text-gray-200 text-lg md:text-xl leading-relaxed tracking-wide"
              >
                Hi, I'm Muhammad Sheraz, a BSIT student at Quaid-i-Azam
                University, Islamabad. I have hands-on experience in full-stack
                development, specializing in React.js, MongoDB, and Express.js.
                <br />
                <br />
                I've built projects like e-commerce websites and hospital
                management systems, focusing on creating efficient,
                user-friendly, and scalable web applications. I enjoy
                problem-solving and continuously improving my coding skills.
                <br />
                <br />
                Currently exploring freelancing to gain industry experience, my
                goal is to develop impactful projects and grow as a skilled
                developer.
              </motion.p>

              <div className="flex justify-end mt-6">
                <FaQuoteRight className="text-cyan-400 text-2xl opacity-80" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl z-0"></div>
          </motion.div>

          <motion.div
            variants={translater(100)}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={skillVariants}
                  whileHover="hover"
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg flex flex-col items-center text-center"
                >
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">
                Current Focus
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Building scalable MERN stack applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    Developing responsive UI/UX with modern frameworks
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Exploring cloud technologies and DevOps practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Contributing to open source projects</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
