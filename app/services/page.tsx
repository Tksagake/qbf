import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function Services() {
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

      <section className="relative w-full h-96">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/img2.jpg"
          alt="Services Hero"
        />
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center px-4 text-center z-10">
          <h1 className="text-4xl md:text-7xl font-extrabold drop-shadow-xl bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to bottom, white, #FFD700, black)' }}>
            Our Services
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl text-[#e5e5e5]">
            Comprehensive solutions for all your production needs.
          </p>
          <div className="mt-10 animate-bounce text-[#FFD700] text-2xl">
            <FaChevronDown />
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Commercial Production</h2>
            <p className="text-lg leading-relaxed max-w-3xl">
              We specialize in creating compelling commercials that resonate with audiences and drive brand engagement.
            </p>
          </div>
          <div>
            <img
              src="/img4.jpg"
              alt="Commercial Production"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/img1.jpg"
              alt="Film & TV"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Film & TV</h2>
            <p className="text-lg leading-relaxed max-w-3xl">
              From feature films to TV series, we produce captivating content that tells powerful stories.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Animation</h2>
            <p className="text-lg leading-relaxed max-w-3xl">
              Our animation services bring your ideas to life with creativity and technical expertise.
            </p>
          </div>
          <div>
            <img
              src="/img3.jpg"
              alt="Animation"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/img2.jpg"
              alt="Post-Production"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Post-Production</h2>
            <p className="text-lg leading-relaxed max-w-3xl">
              We offer comprehensive post-production services, including editing, color grading, and sound design.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Live Streaming</h2>
            <p className="text-lg leading-relaxed max-w-3xl">
              Our live streaming solutions ensure your events reach a global audience with seamless execution.
            </p>
          </div>
          <div>
            <img
              src="/img1.jpg"
              alt="Live Streaming"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
