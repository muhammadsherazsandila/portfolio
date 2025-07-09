"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Heading from "./Heading";

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

const certificates = ["/certifications/certura.jpeg"];

function Certifications() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
            <Heading
              title="Certifications"
              description="My certifications and achievements"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {certificates.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl"
                onClick={() => setShowModal(true)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* creating model to show certificate Image bigger */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showModal ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setShowModal(false)}
        className={`fixed inset-0 p-4 bg-transparent bg-opacity-50 items-center justify-center z-50 ${
          showModal ? "flex" : "hidden"
        }`}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
          <Image
            src="/certifications/certura.jpeg"
            alt="Certificate"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          <button
            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default Certifications;
