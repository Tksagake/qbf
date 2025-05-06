'use client'

import { a } from 'framer-motion/client'
import { FaChevronDown, FaEnvelope, FaInstagram, FaLinkedin, FaPlay } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="w-full overflow-hidden text-white bg-gray-800">
      {/* === NAVBAR === */}
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
         <a href="/"><div className="text-white text-2xl font-bold">Quite Bright Films</div> </a> 
          <div className="space-x-4">
          <a href="/about" className="hover:text-[#FFD700]">Who We Are</a>
            <a href="/projects" className="hover:text-[#FFD700]">Our Work</a>
            <a href="/services" className="hover:text-[#FFD700]">Services</a>
            <a href="/studios" className="hover:text-[#FFD700]">Studios</a>
            <a href="/news" className="hover:text-[#FFD700]">News & Insights</a>
            <a href="/contact" className="hover:text-[#FFD700]">Contact</a>
          </div>
        </div>
      </nav>

      {/* === HERO SECTION === */}
      <section className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/hero.mp4"
        />

        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center px-4 text-center z-10">
            <h1
            className="text-4xl md:text-7xl font-extrabold drop-shadow-xl bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(to bottom, white, #FFD700, black)',
            }}
            >
            Quite Bright Films
            </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent text-yellow-600 drop-shadow-xl"
           style={{
            backgroundImage: 'linear-gradient(to bottom, white, #FFD700, black)',
          }}>
            Quality Beyond Imagination
          </h2>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl text-[#e5e5e5]">
            Award-winning production. African-rooted. Globally recognized.
          </p>
          <a
            href="#projects"
            className="mt-6 inline-block bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Watch Our Work
          </a>
          <div className="mt-10 animate-bounce text-[#FFD700] text-2xl">
            <FaChevronDown />
          </div>
        </div>
      </section>

      {/* === WHO WE ARE === */}
      <section id="who-we-are" className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          QBF is a pan-African creative powerhouse delivering high-end branded content, music videos, and commercials with unmatched precision and soul. With bases in Nairobi and Kampala, we elevate African storytelling to global platforms.
        </p>
          </div>
          <div>
        <img
          src="/img1.jpg"
          alt="Who We Are"
          className="w-full h-auto rounded-xl shadow-lg object-cover"
        />
          </div>
        </div>
      </section>

      {/* === FEATURED PROJECTS / SHOWREEL === */}
      <section id="projects" className="bg-[#171717] text-[#e5e5e5] py-24 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Work</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="relative group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img src={`/img${n}.jpg`} alt={`Project ${n}`} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <FaPlay className="text-white text-4xl" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === STUDIO LOCATIONS === */}
      <section id="studios" className="bg-gray-900 text-[#e5e5e5] py-24 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Where We Operate</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { city: 'Nairobi', img: '/nrb.jpg' },
            { city: 'Kampala', img: '/kampala.jpg' },
            { city: 'Virtual Studio', img: '/img4.jpg' },
          ].map(({ city, img }) => (
            <div key={city} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <img src={img} alt={city} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{city}</h3>
                <p className="text-sm mt-2 text-gray-300">
                  High-spec equipment, remote team capabilities, and a focus on top-tier quality.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === FOOTER === */}
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
  )
}

