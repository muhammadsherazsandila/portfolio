"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "./Heading";
import { projects } from "../assets/projects";
import Image from "next/image";
import { translater } from "../animation/Animation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Projects() {
  const [isHovering, setIsHovering] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      duration: 45,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());

    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi && emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="projects"
      className="px-6 py-24 md:px-12 lg:px-24 bg-gradient-to-br from-gray-900 to-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        <Heading
          title="My Projects"
          description="Explore my latest web development projects. Each one is crafted with modern technologies and best practices."
        />

        <motion.div
          variants={translater(-100)}
          initial="hidden"
          whileInView="visible"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Embla viewport */}
          <div className="relative overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="embla__slide shrink-0 basis-[85%] sm:basis-[70%] md:basis-[45%] lg:basis-[30%] px-3 py-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="relative group rounded-2xl overflow-hidden h-full border border-white/10 bg-gradient-to-br from-gray-800/30 to-gray-900/50 shadow-2xl"
                  >
                    <div className="relative overflow-hidden rounded-2xl h-full flex flex-col">
                      <div className="relative h-60 overflow-hidden">
                        <Image
                          src={project.imgUrl}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
                      </div>

                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {project.title}
                          </h3>
                          <motion.div
                            className="flex gap-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                              opacity:
                                selectedIndex === index || isHovering ? 1 : 0,
                              y: selectedIndex === index || isHovering ? 0 : 10,
                            }}
                          >
                            <a
                              href={project.siteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                              aria-label="Live demo"
                            >
                              <FaExternalLinkAlt className="text-cyan-300" />
                            </a>
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                                aria-label="GitHub repository"
                              >
                                <FaGithub className="text-cyan-300" />
                              </a>
                            )}
                          </motion.div>
                        </div>

                        <motion.p
                          className="text-gray-300 mb-1 flex-1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity:
                              selectedIndex === index || isHovering ? 1 : 0,
                            y: selectedIndex === index || isHovering ? 0 : 10,
                          }}
                          transition={{ delay: 0.1 }}
                        >
                          {project.description}
                        </motion.p>

                        <motion.div
                          className="flex flex-wrap gap-2 mb-1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity:
                              selectedIndex === index || isHovering ? 1 : 0,
                            y: selectedIndex === index || isHovering ? 0 : 10,
                          }}
                          transition={{ delay: 0.15 }}
                        >
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 backdrop-blur-md text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>

                        {/* <div className="flex gap-3">
                          <a
                            href={project.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg text-white transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                          >
                            <FaExternalLinkAlt /> Demo
                          </a>
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-all"
                            >
                              <FaGithub /> Code
                            </a>
                          )}
                        </div> */}
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-5/6 md:top-1/2 z-20 p-3 bg-white/10 backdrop-blur-[0.2px] text-white cursor-pointer rounded-full hover:bg-white/20 transition-all transform -translate-y-1/2"
              aria-label="Previous slide"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-5/6 md:top-1/2 z-20 p-3 bg-white/10 backdrop-blur-[0.2px] text-white cursor-pointer rounded-full hover:bg-white/20 transition-all transform -translate-y-1/2"
              aria-label="Next slide "
            >
              <FaChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === selectedIndex
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Progress bar pagination */}
          <div className="mt-8">
            <div className="relative h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                animate={{
                  width: `${((selectedIndex + 1) / projects.length) * 100}%`,
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-3 text-sm text-gray-400">
              <span className="font-medium">
                {projects[selectedIndex]?.title}
              </span>
              <span>
                {selectedIndex + 1} / {projects.length}
              </span>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 w-full hidden md:flex justify-between z-10 -translate-y-1/2 px-2">
            <motion.button
              onClick={() => emblaApi?.scrollPrev()}
              className="p-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </motion.button>
            <motion.button
              onClick={() => emblaApi?.scrollNext()}
              className="p-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-cyan-400 italic flex justify-center items-center gap-2"
          >
            <span className="hidden sm:inline">Swipe</span>
            <span className="inline sm:hidden">Tap</span>
            to explore more projects
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="ml-2"
            >
              →
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
