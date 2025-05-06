"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Projects() {
  return (
    <main className="w-full overflow-hidden text-white bg-gray-800">
       <Navbar />

      <section className="relative">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          src="/img1.jpg"
          alt="Background"
        />
        <div className="relative z-10">
          <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Select Projects / Case Studies</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="relative group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
                  <img src={`/img${n}.jpg`} alt={`Project ${n}`} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <p className="text-white text-2xl">Project {n} Details</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Short Film Thumbnails or Mini Trailers</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="relative group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
              <video
                className="w-full h-64 object-cover"
                autoPlay
                loop
                muted
                playsInline
                src={`/trailer${n}.mp4`}
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-2xl">Trailer {n} Details</p>
              </div>
            </div>
          ))}
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
