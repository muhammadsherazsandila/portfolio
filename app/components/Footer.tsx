import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaWhatsapp,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/muhammadsherazsandila",
      color: "hover:text-gray-400",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/muhammad-sheraz-800948347/",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/muhammadsheraz046",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/+923260468787",
      color: "hover:text-green-500",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-r from-gray-900 to-gray-950 pt-16 pb-8 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
              Muhammad Sheraz
            </h3>
            <p className="text-gray-400 mb-4">
              Full-stack developer passionate about creating innovative web
              solutions with cutting-edge technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-xl text-gray-300 ${link.color} transition-colors`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Summary"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Islamabad, Pakistan</li>
              <li>msd.sheraz046@gmail.com</li>
              <li>+92 326 0468787</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              &copy; {currentYear} Muhammad Sheraz. All Rights Reserved.
            </p>

            <div className="flex items-center gap-1 text-gray-400">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-red-500 mx-1"
              >
                <FaHeart />
              </motion.span>
              <span>in Pakistan</span>
            </div>

            <p className="text-gray-400">Version 1.1.0</p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
    </motion.footer>
  );
}

export default Footer;
