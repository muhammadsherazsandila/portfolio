"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { FaRocket, FaCogs, FaBolt } from "react-icons/fa";

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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

const statCards = [
  {
    value: "+5",
    label: "Completed Projects",
    icon: <FaRocket className="text-indigo-400" />,
    color: "from-indigo-900/30 to-indigo-700/20",
  },
  {
    value: "+10",
    label: "Master Skills",
    icon: <FaCogs className="text-emerald-400" />,
    color: "from-emerald-900/30 to-emerald-700/20",
  },
  {
    value: "+4",
    label: "Coming Soon",
    icon: <FaBolt className="text-amber-400" />,
    color: "from-amber-900/30 to-amber-700/20",
  },
];

function Summary() {
  return (
    <section
      id="summary"
      className="px-6 py-24 md:px-12 lg:px-24 bg-gradient-to-br from-gray-900 to-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00a3e7] to-black text-center">
            Summary
          </h1>
          <div className="h-2 w-20 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-8 rounded-2xl bg-gradient-to-br ${stat.color} backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="text-4xl">{stat.icon}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {stat.value}
                </div>
                <div className="text-xl font-medium text-gray-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Summary;
