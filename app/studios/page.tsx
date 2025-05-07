"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Studios() {

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
    <main className="w-full overflow-hidden text-white bg-gray-800">
       <Navbar />
       <div className="fixed top-0 left-0 mt-16 ml-4 z-20 transition-transform duration-300 ease-in-out">
        <img src="/logo.jpg" alt="Logo" className={`object-cover shadow-lg transition-all duration-300 ease-in-out ${logoSize}`} />
      </div>

      <section className="relative">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          src="/img1.jpg"
          alt="Background"
        />
        <div className="relative z-10">
          <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nairobi Studio</h2>
            <p className="text-lg leading-relaxed max-w-3xl">
              Our Nairobi studio is equipped with state-of-the-art facilities and a team of experts dedicated to delivering top-tier quality productions.
            </p>
            <img src="/nrb.jpg" alt="Nairobi Studio" className="w-full h-64 object-cover mt-6 rounded-xl shadow-lg" />
          </section>
        </div>
      </section>

      <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Kampala Studio</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          The Kampala studio offers high-spec equipment and remote team capabilities, ensuring seamless and high-quality productions.
        </p>
        <img src="/kampala.jpg" alt="Kampala Studio" className="w-full h-64 object-cover mt-6 rounded-xl shadow-lg" />
      </section>

      <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Virtual Production / Facilities</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          Our virtual production facilities enable us to create immersive and innovative content, pushing the boundaries of what's possible in film and TV production.
        </p>
        <img src="/img4.jpg" alt="Virtual Studio" className="w-full h-64 object-cover mt-6 rounded-xl shadow-lg" />
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
