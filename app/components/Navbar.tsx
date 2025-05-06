"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBriefcase, FaCogs, FaBuilding, FaNewspaper, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <p><span className="text-[#FFD700]">QBF</span> Productions</p>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 mt-4 md:mt-0`}
        >
          <a href="/" className="hover:text-yellow-400 block md:inline flex items-center">
            <FaHome className="mr-2" /> Home
          </a>
          <a href="/about" className="hover:text-[#FFD700] block md:inline flex items-center">
            <FaInfoCircle className="mr-2" /> Who We Are
          </a>
          <a href="/projects" className="hover:text-[#FFD700] block md:inline flex items-center">
            <FaBriefcase className="mr-2" /> Our Work
          </a>
          <a href="/services" className="hover:text-[#FFD700] block md:inline flex items-center">
            <FaCogs className="mr-2" /> Services
          </a>
          <a href="/studios" className="hover:text-[#FFD700] block md:inline flex items-center">
            <FaBuilding className="mr-2" /> Studios
          </a>
          <a href="/news" className="hover:text-[#FFD700] block md:inline flex items-center">
            <FaNewspaper className="mr-2" /> News & Insights
          </a>
          <a href="/contact" className="hover:text-[#FFD700] block md:inline flex items-center">
            <FaEnvelope className="mr-2" /> Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
