"use client"
import React from 'react';
import Navbar from '../components/Navbar';

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
    </main>
  );
}
