import React from "react";
import { motion } from "framer-motion";

function Heading({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        {title}
      </h1>
      <div className="h-1 w-20 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
      <p className="mt-6 text-gray-300 max-w-2xl mx-auto">{description}</p>
    </motion.div>
  );
}

export default Heading;
