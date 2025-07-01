"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";
import { translater, translaterUpDown } from "./Animation";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    delay: 0.1,
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    delay: 0.2,
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    delay: 0.3,
    color: "from-yellow-500 to-yellow-700",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    delay: 0.1,
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "React.js",
    icon: <FaReact />,
    delay: 0.4,
    color: "from-cyan-500 to-cyan-700",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    delay: 0.5,
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    delay: 0.6,
    color: "from-gray-800 to-black",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    delay: 0.7,
    color: "from-green-600 to-green-800",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    delay: 0.8,
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    delay: 0.9,
    color: "from-green-700 to-green-900",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    delay: 1,
    color: "from-teal-500 to-teal-700",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    delay: 0.1,
    color: "from-orange-600 to-red-700",
  },
  {
    name: "Python",
    icon: <FaPython />,
    delay: 0.1,
    color: "from-blue-700 to-indigo-900",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    delay: 0.1,
    color: "from-purple-600 to-purple-800",
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop />,
    delay: 1.1,
    color: "from-blue-800 to-indigo-900",
  },
  {
    name: "Illustrator",
    icon: <SiAdobeillustrator />,
    delay: 1.2,
    color: "from-orange-600 to-orange-800",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 40,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      duration: 0.5,
    },
  },
  hover: {
    y: -10,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-24 md:px-12 lg:px-24 bg-gradient-to-br from-gray-900 to-gray-950"
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
            My Skills
          </h1>
          <div className="h-1 w-20 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Technologies I've mastered and tools I use daily to create modern
            web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={translaterUpDown(skill.delay, 100, 0.2)}
              initial="hidden"
              whileInView={"visible"}
              className={`flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br ${skill.color} backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <div className="text-5xl mb-4 text-white">{skill.icon}</div>
              <p className="text-lg font-semibold text-white text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={translater(100)}
            initial="hidden"
            whileInView={"visible"}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              Frontend Expertise
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                <span>Responsive UI/UX Design</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                <span>Component-Based Architecture</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                <span>State Management</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                <span>Performance Optimization</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={translater(200)}
            initial="hidden"
            whileInView="visible"
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg"
          >
            <h3 className="text-xl font-bold text-emerald-400 mb-4">
              Backend & Database
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                <span>RESTful API Development</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                <span>Database Design & Management</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                <span>Authentication & Authorization</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                <span>Server Deployment & Maintenance</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={translater(300)}
            initial="hidden"
            whileInView="visible"
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg"
          >
            <h3 className="text-xl font-bold text-amber-400 mb-4">
              Design & Tools
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                <span>UI/UX Prototyping</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                <span>Responsive Design Implementation</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                <span>Version Control with Git</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                <span>Design to Code Conversion</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
