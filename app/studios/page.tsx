import React from 'react';

export default function Studios() {
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
    </main>
  );
}
