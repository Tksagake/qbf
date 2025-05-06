"use client"

import React, { useState, useRef } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      onClose: () => {
        // Option 1: Clear the form fields
        if (formRef.current) {
          formRef.current.reset();
        }
      }
    });
  };

  return (
    <main className="w-full overflow-hidden text-white bg-gray-900">
      <Navbar />
      <ToastContainer />

      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white h-screen flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1424223022789-26fd8f34bba2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGlhfGVufDB8fDB8fHww&w=1000")',
          opacity: 0.5
        }}>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold">Contact Us</h1>
          <p className="text-base md:text-2xl mt-4">Get in touch with our studios in Nairobi and Kampala.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative bg-gray-800 text-[#e5e5e5] py-12 px-4 md:py-24 md:px-20">
        <form ref={formRef} className="space-y-4 max-w-full md:max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <div>
            <label className="block text-base md:text-lg">Name</label>
            <input type="text" className="w-full p-2 bg-gray-900 rounded-lg" required />
          </div>
          <div>
            <label className="block text-base md:text-lg">Email</label>
            <input type="email" className="w-full p-2 bg-gray-900 rounded-lg" required />
          </div>
          <div>
            <label className="block text-base md:text-lg">Message</label>
            <textarea className="w-full p-2 bg-gray-900 rounded-lg h-32" required></textarea>
          </div>
          <button type="submit" className="bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Studio Addresses & Map */}
      <section className="bg-gray-800 text-[#e5e5e5] py-12 px-4 md:py-24 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Studio Addresses & Map</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Nairobi Studio</h3>
            <p className="text-base md:text-lg">Block G, Springette Office Park, Nairobi, Kenya</p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.755494090179!2d36.8190893148514!3d-1.286381999036848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d8fbe6fb%3A0xf5727d90b11b70b8!2sSpringette%20Office%20Park!5e0!3m2!1sen!2ske!4v1632142785174!5m2!1sen!2ske"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Kampala Studio</h3>
            <p className="text-base md:text-lg">123 Kampala Road, Kampala, Uganda</p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.755494090179!2d32.5825202148514!3d0.347596299036848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd930cc67041%3A0x31f5d9f9f12f3e9f!2sKampala%20Road!5e0!3m2!1sen!2sug!4v1632142785174!5m2!1sen!2sug"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="bg-gray-800 text-[#e5e5e5] py-12 px-4 md:py-24 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Social Media Links</h2>
        <div className="flex flex-wrap space-x-6 text-lg">
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
