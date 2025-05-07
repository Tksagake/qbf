'use client'

import { useEffect, useState } from 'react';
import { a } from 'framer-motion/client'
import { FaChevronDown, FaEnvelope, FaInstagram, FaLinkedin, FaPlay } from 'react-icons/fa'
import Navbar from './components/Navbar'

export default function Home() {
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
      {/* === NAVBAR === */}
      <Navbar />

      {/* === FIXED LOGO === */}
      <div className="fixed top-0 left-0 mt-16 ml-4 z-20 transition-transform duration-300 ease-in-out">
        <img src="/logo.jpg" alt="Logo" className={`object-cover shadow-lg transition-all duration-300 ease-in-out ${logoSize}`} />
      </div>

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
          <h2
            className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent text-yellow-600 drop-shadow-xl"
            style={{
              backgroundImage: 'linear-gradient(to bottom, white, #FFD700, black)',
            }}
          >
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
              src="/logo.jpg"
              alt="Who We Are"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* === CAPABILITY STATEMENT === */}
      <section id="capability-statement" className="bg-gray-900 text-[#e5e5e5] py-24 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Capability Statement</h2>

          {/* First Paragraph with Image on the Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-lg leading-relaxed">
                Quite Bright Films (QBF) is based in Nairobi and is one of the leading film and TV production houses in the Sub Saharan
                African region. We have been in operation for 21 years. We produce content including Event, Commercial, Factual,
                Drama, Lifestyle and Corporate programming. At QBF we pride ourselves on producing cutting edge programming for
                budgets across the board. We have continually invested in world-class equipment, facilities and highly trained personnel.
                Whatever the budget of any project we undertake, we strive to produce only the highest quality films that always adhere
                strictly to international broadcast standards.
              </p>
            </div>
            <img src="/img2.jpg" alt="Production Equipment" className="w-full h-auto rounded-xl shadow-lg object-cover" />
          </div>

          {/* Second Paragraph with Image on the Left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img src="/img3.jpg" alt="Team at Work" className="w-full h-auto rounded-xl shadow-lg object-cover" />
            <div>
              <p className="text-lg leading-relaxed">
                Over the last twenty one years QBF has built a reputation of being one of the most dynamic, creative and professional
                film production companies in the region today. We continue to demonstrate an unparalleled ability to be versatile and
                practical while working in diverse locations, addressing challenging issues, and delivering films that are creative, thought
                provoking, and informative. Our productions are well researched, compelling, and sensitive to local environments and
                concerns.
              </p>
            </div>
          </div>

          {/* Third Paragraph with No Image */}
          <div>
            <p className="text-lg leading-relaxed">
              In testament to QBF’s production values, in 2014 we were awarded both the “Best TV Show” at the Kalasha Awards
              (East Africa’s biggest film & television Award ceremony) and an “Emerald Award” at the Crystal African Advertising
              Awards. In 2015 we received a nomination for “Best TV Show” and in 2016 we received a Cannes Lion Award for our
              “Join the Herd” campaign. Our short feature “Poacher” also won “Best Short Film” in 2018.
            </p>
          </div>
        </div>
      </section>

      {/* === FEATURED PROJECTS / SHOWREEL === */}
      <section id="projects" className="bg-[#171717] text-[#e5e5e5] py-24 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Work</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { id: 1, title: "Project 1", description: "QBF LIVE EXPERIENCE" },
            { id: 2, title: "Project 2", description: "QBF LIVE EXPERIENCE" },
            { id: 3, title: "Project 3", description: "QBF LIVE EXPERIENCE" },
            { id: 11, title: "Project 11", description: "QBF LIVE EXPERIENCE" },
            { id: 12, title: "Project 12", description: "QBF LIVE EXPERIENCE Part 2" },
            { id: 13, title: "Project 13", description: "QBF LIVE EXPERIENCE Part 3" },
            { id: 14, title: "Project 14", description: "QBF LIVE EXPERIENCE Season 2" },
            { id: 15, title: "Project 15", description: "QBF LIVE EXPERIENCE Season 3" },
            { id: 16, title: "Project 16", description: "QBF LIVE EXPERIENCE Season 4" },
          ].map((project) => (
            <div
              key={project.id}
              className="relative group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
              onClick={() => window.open('https://www.youtube.com/watch?v=8mo-VY0ztgs&embeds_referring_euri=https%3A%2F%2Fgca.org%2F', '_blank')}
            >
              <img src={`/img${project.id}.jpg`} alt={project.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <FaPlay className="text-white text-4xl mb-2" />
                <p className="text-white text-center px-4">{project.description}</p>
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
