"use client"

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function About() {
  const [logoSize, setLogoSize] = useState('w-42 h-42');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setLogoSize('w-24 h-24');
      } else {
        setLogoSize('w-42 h-42');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="w-full overflow-hidden text-white bg-gray-900">
      {/* === NAVBAR === */}
      <Navbar />

      <div className="fixed top-0 left-0 mt-16 ml-4 z-20 transition-transform duration-300 ease-in-out">
        <img src="/logo.jpg" alt="Logo" className={`object-cover shadow-lg transition-all duration-300 ease-in-out ${logoSize}`} />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/img1.jpg")',
          opacity: 0.5
        }}>
        </div>
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Mission & Legacy</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Quite Bright Films is dedicated to elevating African storytelling to global platforms. With a rich legacy of award-winning productions, we strive to deliver high-end branded content, music videos, and commercials with unmatched precision and soul.
          </p>
        </div>
      </section>

      {/* Team Bios */}
      <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Example team member */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src="/avatar.jpg" alt="Team Member" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Tom Browne</h3>
              <p className="text-gray-300">Director & Founder</p>
            </div>
          </div>
          {/* Add more team members as needed */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src="/ceo.jpg" alt="Team Member" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Sikolia M. W</h3>
              <p className="text-gray-300">Co-Founder & Producer</p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src="/avatar.jpg" alt="Team Member" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Malcolm X</h3>
              <p className="text-gray-300">Producer & Co-Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards/Timeline */}
      <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Awards & Timeline</h2>
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 bg-gray-300 h-full"></div>
          </div>
          <div className="relative z-10 space-y-12">
            {/* Timeline Item */}
            <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
              <div className="flex-shrink-0 w-12 h-12 bg-[#FFD700] text-black rounded-full flex items-center justify-center text-xl font-bold">
                2014
              </div>
              <div className="flex-1 bg-gray-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold">Best TV Show</h3>
                <p className="text-lg text-gray-300">Kalasha Awards</p>
              </div>
            </div>
            {/* Timeline Item */}
            <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-8 space-y-4 md:space-y-0">
              <div className="flex-shrink-0 w-12 h-12 bg-[#FFD700] text-black rounded-full flex items-center justify-center text-xl font-bold">
                2016
              </div>
              <div className="flex-1 bg-gray-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold">Cannes Lion Award</h3>
                <p className="text-lg text-gray-300">"Join the Herd" campaign</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-[#e5e5e5] py-12 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} QBF Productions</div>
          <div className="flex space-x-6 text-lg">
            <a href="#" className="hover:text-[#FFD700]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#FFD700]">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-[#FFD700]">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
