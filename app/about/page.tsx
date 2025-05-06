import React from 'react';

export default function About() {
  return (
    <main className="w-full overflow-hidden text-white bg-gray-800">
        {/* === NAVBAR === */}
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

      <section className="relative bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          src="/img1.jpg"
          alt="Background"
        />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Mission & Legacy</h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Quite Bright Films is dedicated to elevating African storytelling to global platforms. With a rich legacy of award-winning productions, we strive to deliver high-end branded content, music videos, and commercials with unmatched precision and soul.
          </p>
        </div>
      </section>

      <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Team Bios</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Example team member */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
            <img src="/team1.jpg" alt="Team Member" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Amber L.</h3>
              <p className="text-sm mt-2 text-gray-300">Director & Founder</p>
            </div>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      <section className="bg-gray-800 text-[#e5e5e5] py-24 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Awards/Timeline</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">2014</h3>
            <p className="text-lg">Best TV Show at the Kalasha Awards</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">2016</h3>
            <p className="text-lg">Cannes Lion Award for "Join the Herd" campaign</p>
          </div>
          {/* Add more awards/timeline entries as needed */}
        </div>
      </section>
    </main>
  );
}
