import React from 'react';

export default function Projects() {
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
    </main>
  );
}
