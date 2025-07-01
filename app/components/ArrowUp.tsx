"use client";
import React from "react";

import { Link } from "react-scroll";
import { FaArrowUp, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
function ArrowUp() {
  return (
    <>
      {/* Scroll to Top Button */}
      <div className="fixed right-6 bottom-6 z-40">
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to="nav"
          duration={700}
          smooth={true}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg shadow-cyan-500/30 flex items-center justify-center animate-bounce duration-200 ease-in-out cursor-pointer transition-all"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp className="text-xl" />
          </motion.div>
        </Link>
      </div>
    </>
  );
}

export default ArrowUp;
