"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { translater, translaterUpDown } from "../animation/Animation";
import { pre } from "framer-motion/client";

const projects = [
  {
    title: "Blogora",
    description: "Modern blogging platform with rich content editing",
    imgUrl: "/Images/blogora.png",
    siteUrl: "https://blogorablogs.vercel.app/",
    githubUrl: "https://github.com/muhammadsherazsandila/Bloging-website",
    tags: ["MERN", "CMS", "Authentication"],
  },
  {
    title: "Roomify",
    description: "Real-time chat application with user authentication",
    imgUrl: "/Images/roomify.png",
    siteUrl: "https://roomifychat.vercel.app/",
    githubUrl: "https://github.com/muhammadsherazsandila/Chat-room", // change if actual URL differs
    tags: ["MERN", "Socket.IO", "Real-time"],
  },
  {
    title: "Trendora",
    description:
      "Modern e-commerce platform with a responsive UI, product cart system, and smooth user experience",
    imgUrl: "/Images/trendora.png",
    siteUrl: "https://trendorashop.vercel.app/",
    githubUrl: "https://github.com/muhammadsherazsandila/Shopping-Cart-System", // update if needed
    tags: ["E-commerce", "React", "Cart"],
  },
  {
    title: "Sandila Digix",
    description: "Modern digital agency portfolio website with animations",
    imgUrl: "/Images/sandilaDigix.png",
    siteUrl: "https://sandiladigix.netlify.app/",
    githubUrl: "https://github.com/muhammadsherazsandila/SandilaDigix",
    tags: ["React", "Tailwind", "Framer"],
  },
  {
    title: "Future Programmers",
    description: "Educational platform for aspiring developers",
    imgUrl: "/Images/futureProgrammers.png",
    siteUrl: "https://future-programmers.vercel.app/",
    githubUrl: "https://github.com/muhammadsherazsandila/Future-Programmers",
    tags: ["EJS", "MongoDB", "UI/UX"],
  },
];

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverActive, setHoverActive] = useState("opacity-0");

  return (
    <section
      id="projects"
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
            My Projects
          </h1>
          <div className="h-1 w-20 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Explore my latest web development projects. Each one is crafted with
            modern technologies and best practices.
          </p>
        </motion.div>

        <motion.div
          variants={translaterUpDown(0, 100, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
            }}
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="py-10"
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                className="max-w-md rounded-xl overflow-hidden shadow-2xl"
              >
                <div className="relative group">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={project.imgUrl}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-b from-black/90 to-transparent opacity-0 ${
                      activeIndex === index ? hoverActive : "opacity-0"
                    } transition-opacity duration-500 flex flex-col justify-end p-6 `}
                    onMouseEnter={() => setHoverActive("opacity-100")}
                    onMouseLeave={() => setHoverActive("opacity-0")}
                    onClick={() =>
                      setHoverActive((prev) =>
                        prev === "opacity-100" ? "opacity-0" : "opacity-100"
                      )
                    }
                  >
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mt-2">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800  text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-6">
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white transition-colors"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
                        >
                          <FaGithub /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center mt-12">
            <div className="swiper-pagination !relative !bottom-0"></div>
          </div>

          <div className="absolute top-1/2 w-full hidden md:flex justify-between z-10 -translate-y-1/2">
            <button className="swiper-button-prev bg-gray-800/50 hover:bg-gray-700 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-white transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="swiper-button-next bg-gray-800/50 hover:bg-gray-700 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-white transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeIndex === 0 ? 1 : 0,
              transition: { duration: 0.3 },
            }}
            className="text-cyan-400 italic"
          >
            Swipe to explore more projects →
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
