"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaArrowUp, FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { translaterUpDown } from "../animation/Animation";

function Navbar() {
  const [activeLink, setActiveLink] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navElements = [
    { name: "Home" },
    { name: "About" },
    { name: "Skills" },
    { name: "Projects" },
    { name: "Summary" },
  ];

  const handleClick = (index: number) => {
    setActiveLink(index);
    setShowMenu(false);
    document.body.style.overflow = "auto";
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode

  // Mobile menu animation variants
  const mobileMenuVariants: Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`absolute w-full z-50 py-4 transition-all duration-300 ${
          scrolled
            ? "dark:bg-gray-900/90 bg-white/90 backdrop-blur-md shadow-md"
            : "dark:bg-transparent bg-transparent"
        }`}
        id="nav"
      >
        <div className="mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl md:text-2xl"
          >
            <span className="text-cyan-500">MS </span>
            <span className="text-white">Developer</span>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {navElements.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="relative"
              >
                <Link
                  onClick={() => handleClick(index)}
                  className={`cursor-pointer text-lg font-medium transition-colors ${
                    activeLink === index
                      ? "text-cyan-500"
                      : "dark:text-gray-300 text-gray-700 hover:text-cyan-400"
                  }`}
                  to={item.name.toLowerCase()}
                  duration={700}
                  smooth={true}
                  spy={true}
                >
                  {item.name}
                  {activeLink === index && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500"
                      layoutId="navIndicator"
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="md:hidden text-2xl text-white  p-2"
            onClick={() => {
              setShowMenu(true);
              document.body.style.overflow = "hidden";
            }}
            aria-label="Open menu"
          >
            <GiHamburgerMenu />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 z-50 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => {
                setShowMenu(false);
                document.body.style.overflow = "auto";
              }}
            />

            <motion.div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm dark:bg-gray-900 bg-white shadow-xl">
              <div className="p-6 flex justify-end">
                <button
                  className="text-2xl dark:text-white text-gray-900 p-2"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  aria-label="Close menu"
                >
                  <ImCross />
                </button>
              </div>

              <ul className="flex flex-col gap-8 p-8">
                {navElements.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <Link
                      onClick={() => handleClick(index)}
                      className={`block text-2xl font-medium py-2 transition-colors ${
                        activeLink === index
                          ? "text-cyan-500"
                          : "dark:text-gray-300 text-gray-700 hover:text-cyan-400"
                      }`}
                      to={item.name.toLowerCase()}
                      duration={700}
                      smooth={true}
                    >
                      {item.name}
                      {activeLink === index && (
                        <motion.div
                          className="absolute left-0 bottom-0 w-16 h-1 bg-cyan-500"
                          layoutId="mobileNavIndicator"
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <Link
        onClick={() => setActiveLink(0)}
        to="nav"
        duration={700}
        smooth={true}
        className="fixed right-6 bottom-6 z-40"
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
    </>
  );
}

export default Navbar;
