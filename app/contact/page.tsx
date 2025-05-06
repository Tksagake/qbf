import React from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className="w-full overflow-hidden text-white bg-gray-800">
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Quite Bright Films</div>
          <div className="space-x-4">
          <a href="/" className='hover:text-yellow-400'>Home</a>
          <a href="/about" className="hover:text-[#FFD700]">Who We Are</a>
            <a href="/projects" className="hover:text-[#FFD700]">Our Work</a>
            <a href="/services" className="hover:text-[#FFD700]">Services</a>
            <a href="/studios" className="hover:text-[#FFD700]">Studios</a>
            <a href="/news" className="hover:text-[#FFD700]">News & Insights</a>
            <a href="/contact" className="hover:text-[#FFD700]">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
      <img
    className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
    src="/img1.jpg"
    alt="Background"
  />
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
        <form className="space-y-4 max-w-2xl">
          <div>
            <label className="block text-lg">Name</label>
            <input type="text" className="w-full p-2 bg-gray-900 rounded-lg" />
          </div>
          <div>
            <label className="block text-lg">Email</label>
            <input type="email" className="w-full p-2 bg-gray-900 rounded-lg" />
          </div>
          <div>
            <label className="block text-lg">Message</label>
            <textarea className="w-full p-2 bg-gray-900 rounded-lg h-32"></textarea>
          </div>
          <button type="submit" className="bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
            Send Message
          </button>
        </form>
      </section>

      <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Studio Addresses & Map</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">Nairobi Studio</h3>
            <p className="text-lg">Block G, Springette Office Park, Nairobi, Kenya</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Kampala Studio</h3>
            <p className="text-lg">123 Kampala Road, Kampala, Uganda</p>
          </div>
          {/* Add map integration as needed */}
        </div>
      </section>

      <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Social Media Links</h2>
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
      </section>
    </main>
  );
}
