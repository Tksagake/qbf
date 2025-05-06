"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Quite Bright Films</div>

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
          <a href="/" className="hover:text-yellow-400 block md:inline">Home</a>
          <a href="/about" className="hover:text-[#FFD700] block md:inline">Who We Are</a>
          <a href="/projects" className="hover:text-[#FFD700] block md:inline">Our Work</a>
          <a href="/services" className="hover:text-[#FFD700] block md:inline">Services</a>
          <a href="/studios" className="hover:text-[#FFD700] block md:inline">Studios</a>
          <a href="/news" className="hover:text-[#FFD700] block md:inline">News & Insights</a>
          <a href="/contact" className="hover:text-[#FFD700] block md:inline">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
