"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBriefcase, FaCogs, FaBuilding, FaNewspaper, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", icon: <FaHome className="mr-2" />, label: "Home" },
    { path: "/about", icon: <FaInfoCircle className="mr-2" />, label: "Who We Are" },
    { path: "/projects", icon: <FaBriefcase className="mr-2" />, label: "Our Work" },
    { path: "/services", icon: <FaCogs className="mr-2" />, label: "Services" },
    { path: "/studios", icon: <FaBuilding className="mr-2" />, label: "Studios" },
    { path: "/contact", icon: <FaEnvelope className="mr-2" />, label: "Contact" },
  ];

  return (
    <nav className="h-42 bg-white p-6 transition-colors duration-300 shadow-lg rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-200 flex items-center text-gray-950">
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center">
          <img src="logo.jpg" alt="QBF Productions Logo" className="h-42 w-auto object-contain" />
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links */}
        <motion.div
          className={`${isMenuOpen ? "block" : "hidden"} md:flex md:space-x-4 mt-4 md:mt-0`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.path}
              href={item.path}
              className={`hover:text-blue-600 block md:inline flex items-center p-3 rounded-md text-lg ${
                pathname === item.path
                  ? "bg-gradient-to-r from-blue-200 to-blue-300 text-white font-bold text-2xl shadow-md transform scale-150 relative"
                  : ""
              }`}
              initial={{ opacity: 0.8 }}
              animate={pathname === item.path ? { scale: [1, 1.02, 1], boxShadow: ["0px 0px 5px rgba(0, 0, 255, 0.3)", "0px 0px 10px rgba(0, 0, 255, 0.5)", "0px 0px 5px rgba(0, 0, 255, 0.3)"] } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {item.icon}
              {item.label}
              {pathname === item.path && (
                <motion.div
                  className="absolute inset-0 border-2 border-blue-200 rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
