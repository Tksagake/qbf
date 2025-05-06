"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function NewsInsights() {
  return (
    <main className="w-full overflow-hidden text-white bg-gray-800">
      <Navbar />

      <section className="relative bg-gray-800 text-[#e5e5e5] py-12 px-4 md:py-24 md:px-20">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Blog/Articles/Industry Thought Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                src="/img2.jpg"
                alt="The Future of African Cinema"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">The Future of African Cinema</h3>
              <p className="text-sm sm:text-lg text-gray-300">Exploring the trends and innovations shaping African cinema.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                src="/img3.jpg"
                alt="Behind the Scenes"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Behind the Scenes: Our Latest Production</h3>
              <p className="text-sm sm:text-lg text-gray-300">A sneak peek into the making of our newest project.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                src="/img4.jpg"
                alt="Industry Insights"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Industry Insights: Trends to Watch</h3>
              <p className="text-sm sm:text-lg text-gray-300">Key trends and insights shaping the film industry today.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-800 text-[#e5e5e5] py-12 px-4 md:py-24 md:px-20">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">QBF LIVE EXPERIENCE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                src="/11.jpg"
                alt="QBF Live Experience 1"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">GCA’s Africa Acceleration Day</h3>
              <p className="text-sm sm:text-lg text-gray-300">
                Days before the launch of COP26, QBF hosted, filmed and livestreamed globally GCA’s Africa
                Acceleration Day at the University of Nairobi.
              </p>
              <a href="https://www.youtube.com/watch?v=YtZMsbIQR8c" className="text-blue-500">Watch Video</a>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                src="/12.jpg"
                alt="QBF Live Experience 2"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Inauguration of the Global Champion for the AAAP</h3>
              <p className="text-sm sm:text-lg text-gray-300">
                QBF hosted a second conference for GCA in July 2022 with the aim of launching the inauguration of the Global Champion for the AAAP.
              </p>
              <a href="https://www.youtube.com/watch?v=5d0u1L36wk0" className="text-blue-500">Watch Video</a>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                src="/13.jpg"
                alt="QBF Live Experience 3"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">4th Africa Adaptation Acceleration Program Partnership Forum</h3>
              <p className="text-sm sm:text-lg text-gray-300">
                QBF hosted and live streamed the 4th Africa Adaptation Acceleration Program Partnership Forum in Nairobi, Kenya in September 2024.
              </p>
              <a href="https://gca.org/video/https-youtu-be-8mo-vy0ztgssiwn8cz6v4h-7y2e8h/" className="text-blue-500">Watch Video</a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-800 text-[#e5e5e5] py-12 px-4 md:py-24 md:px-20">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">QBF FACTUAL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                src="/14.jpg"
                alt="QBF Factual 1"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Studio Based International Formats</h3>
              <p className="text-sm sm:text-lg text-gray-300">QBF has been building its factual entertainment portfolio with studio-based international formats.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                src="/15.jpg"
                alt="QBF Factual 2"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Field Based Factual Lifestyle Programming</h3>
              <p className="text-sm sm:text-lg text-gray-300">QBF produces field-based factual lifestyle programming.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                src="/16.jpg"
                alt="QBF Factual 3"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Field Based Edutainment Magazine Programming</h3>
              <p className="text-sm sm:text-lg text-gray-300">QBF offers field-based edutainment magazine programming.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                src="/11.jpg"
                alt="QBF Factual 4"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">NGO/CSR/Corporate Documentaries and Docuseries</h3>
              <p className="text-sm sm:text-lg text-gray-300">QBF creates NGO/CSR/Corporate documentaries and docuseries.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                src="/12.jpg"
                alt="QBF Factual 5"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">News Features</h3>
              <p className="text-sm sm:text-lg text-gray-300">QBF produces news features.</p>
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
