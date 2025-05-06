import React from 'react';

export default function NewsInsights() {
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

      <section className="relative">
        <div className="relative z-10">
          <section className="relative bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover opacity-30"
                src="/img1.jpg"
                alt="Background"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Blog/Articles/Industry Thought Leadership</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                  <img
                    className="w-full h-48 object-cover rounded-md mb-4"
                    src="/img2.jpg"
                    alt="The Future of African Cinema"
                  />
                  <h3 className="text-2xl font-semibold mb-2">The Future of African Cinema</h3>
                  <p className="text-lg text-gray-300">Exploring the trends and innovations shaping African cinema.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                  <img
                    className="w-full h-48 object-cover rounded-md mb-4"
                    src="/img3.jpg"
                    alt="Behind the Scenes"
                  />
                  <h3 className="text-2xl font-semibold mb-2">Behind the Scenes: Our Latest Production</h3>
                  <p className="text-lg text-gray-300">A sneak peek into the making of our newest project.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                  <img
                    className="w-full h-48 object-cover rounded-md mb-4"
                    src="/img4.jpg"
                    alt="Industry Insights"
                  />
                  <h3 className="text-2xl font-semibold mb-2">Industry Insights: Trends to Watch</h3>
                  <p className="text-lg text-gray-300">Key trends and insights shaping the film industry today.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
