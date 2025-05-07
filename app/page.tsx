"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaCogs,
  FaBuilding,
  FaNewspaper,
  FaEnvelope,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaPlay
} from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'animate.css/animate.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", icon: <FaHome className="mr-2" />, label: "Home" },
    { path: "/about", icon: <FaInfoCircle className="mr-2" />, label: "Who We Are" },
    { path: "/projects", icon: <FaBriefcase className="mr-2" />, label: "Our Work" },
    { path: "/services", icon: <FaCogs className="mr-2" />, label: "Services" },
    { path: "/studios", icon: <FaBuilding className="mr-2" />, label: "Studios" },
    { path: "/contact", icon: <FaEnvelope className="mr-2" />, label: "Contact" },
  ];

  return (
    <nav className="h-42 bg-white p-6 transition-colors duration-300 shadow-lg rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30 border-b-gray-200 flex items-center text-gray-950 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center">
          <img src="logo.jpg" alt="QBF Productions Logo" className="h-42 w-auto object-contain" />
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links */}
        <motion.div
          className={`${isMenuOpen ? "block" : "hidden"} md:flex md:space-x-4 mt-4 md:mt-0`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.path}
              href={item.path}
              className={`hover:text-blue-600 block md:inline flex items-center p-3 rounded-md text-lg ${
                pathname === item.path
                  ? "bg-gradient-to-r from-blue-200 to-blue-300 text-white font-bold text-2xl shadow-md transform scale-150 relative"
                  : ""
              }`}
              initial={{ opacity: 0.8 }}
              animate={pathname === item.path ? { scale: [1, 1.02, 1], boxShadow: ["0px 0px 5px rgba(0, 0, 255, 0.3)", "0px 0px 10px rgba(0, 0, 255, 0.5)", "0px 0px 5px rgba(0, 0, 255, 0.3)"] } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {item.icon}
              {item.label}
              {pathname === item.path && (
                <motion.div
                  className="absolute inset-0 border-2 border-blue-200 rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const carouselVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: i * 0.3,
      },
    }),
  };

  return (
    <main className="w-full overflow-hidden text-gray-900 bg-white">
      {/* === NAVBAR === */}
      <Navbar />

      {/* === HERO SECTION === */}
      <motion.section
        className="relative w-full h-screen bg-blue-50"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/hero.mp4"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4 text-center z-10">
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
          <p className="mt-4 text-lg md:text-2xl max-w-2xl text-gray-200">
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
      </motion.section>

      {/* === WHO WE ARE === */}
      <motion.section
        id="who-we-are"
        className="bg-white text-gray-900 py-24 px-6 md:px-20"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Who We Are</h2>
            <p className="text-lg leading-relaxed max-w-3xl text-gray-700">
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
      </motion.section>

      {/* === CAPABILITY STATEMENT === */}
      <motion.section
        id="capability-statement"
        className="bg-blue-50 text-gray-900 py-24 px-6 md:px-20"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-blue-900">Capability Statement</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="mySwiper"
          >
            {[
              {
                img: "/img2.jpg",
                content: (
                  <p className="text-lg leading-relaxed text-gray-700">
                    Quite Bright Films (QBF) is based in Nairobi and is one of the leading film and TV production houses in the Sub Saharan
                    African region. We have been in operation for 21 years. We produce content including Event, Commercial, Factual,
                    Drama, Lifestyle and Corporate programming. At QBF we pride ourselves on producing cutting edge programming for
                    budgets across the board. We have continually invested in world-class equipment, facilities and highly trained personnel.
                    Whatever the budget of any project we undertake, we strive to produce only the highest quality films that always adhere
                    strictly to international broadcast standards.
                  </p>
                ),
              },
              {
                img: "/img3.jpg",
                content: (
                  <p className="text-lg leading-relaxed text-gray-700">
                    Over the last twenty one years QBF has built a reputation of being one of the most dynamic, creative and professional
                    film production companies in the region today. We continue to demonstrate an unparalleled ability to be versatile and
                    practical while working in diverse locations, addressing challenging issues, and delivering films that are creative, thought
                    provoking, and informative. Our productions are well researched, compelling, and sensitive to local environments and
                    concerns.
                  </p>
                ),
              },
              {
                content: (
                  <p className="text-lg leading-relaxed text-gray-700">
                    In testament to QBF's production values, in 2014 we were awarded both the "Best TV Show" at the Kalasha Awards
                    (East Africa's biggest film & television Award ceremony) and an "Emerald Award" at the Crystal African Advertising
                    Awards. In 2015 we received a nomination for "Best TV Show" and in 2016 we received a Cannes Lion Award for our
                    "Join the Herd" campaign. Our short feature "Poacher" also won "Best Short Film" in 2018.
                  </p>
                ),
              },
            ].map(({ img, content }, index) => (
              <SwiperSlide key={index} className="p-4">
                {img && <img src={img} alt="Capability Statement" className="w-full h-auto rounded-xl shadow-lg object-cover mb-4" />}
                <div>{content}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

      {/* === FEATURED PROJECTS / SHOWREEL === */}
      <motion.section
        id="projects"
        className="bg-blue-50 text-gray-900 py-24 px-6 md:px-20"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-900">Our Work</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {[
            { id: 1, title: "Project 1", description: "QBF LIVE EXPERIENCE", img: "/img1.jpg" },
            { id: 2, title: "Project 2", description: "QBF LIVE EXPERIENCE", img: "/img2.jpg" },
            { id: 3, title: "Project 3", description: "QBF LIVE EXPERIENCE", img: "/img3.jpg" },
            { id: 11, title: "Project 11", description: "QBF LIVE EXPERIENCE", img: "/img11.jpg" },
            { id: 12, title: "Project 12", description: "QBF LIVE EXPERIENCE Part 2", img: "/img12.jpg" },
            { id: 13, title: "Project 13", description: "QBF LIVE EXPERIENCE Part 3", img: "/img13.jpg" },
            { id: 14, title: "Project 14", description: "QBF LIVE EXPERIENCE Season 2", img: "/img14.jpg" },
            { id: 15, title: "Project 15", description: "QBF LIVE EXPERIENCE Season 3", img: "/img15.jpg" },
            { id: 16, title: "Project 16", description: "QBF LIVE EXPERIENCE Season 4", img: "/img16.jpg" },
          ].map((project) => (
            <SwiperSlide key={project.id}>
              <div className="relative group bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition h-full">
                <img src={project.img} alt={project.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <FaPlay className="text-white text-4xl mb-2" />
                  <p className="text-white text-center px-4">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* === STUDIO LOCATIONS === */}
      <motion.section
        id="studios"
        className="bg-blue-50 text-gray-900 py-24 px-6 md:px-20"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-900">Where We Operate</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {[
            { city: 'Nairobi', img: '/nrb.jpg', description: 'High-spec equipment, remote team capabilities, and a focus on top-tier quality.' },
            { city: 'Kampala', img: '/kampala.jpg', description: 'High-spec equipment, remote team capabilities, and a focus on top-tier quality.' },
            { city: 'Virtual Studio', img: '/img4.jpg', description: 'High-spec equipment, remote team capabilities, and a focus on top-tier quality.' },
          ].map(({ city, img, description }) => (
            <SwiperSlide key={city}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
                <img src={img} alt={city} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900">{city}</h3>
                  <p className="text-sm mt-2 text-gray-700">{description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* === NEWS & INSIGHTS === */}
      <motion.section
        className="relative bg-blue-50 text-gray-900 py-12 px-4 md:py-24 md:px-20"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-blue-900">Blog/Articles/Industry Thought Leadership</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {[
              { id: 1, title: "The Future of African Cinema", img: "/img2.jpg", description: "Exploring the trends and innovations shaping African cinema." },
              { id: 2, title: "Behind the Scenes", img: "/img3.jpg", description: "A sneak peek into the making of our newest project." },
              { id: 3, title: "Industry Insights", img: "/img4.jpg", description: "Key trends and insights shaping the film industry today." },
              { id: 11, title: "GCA's Africa Acceleration Day", img: "/11.jpg", description: "Days before the launch of COP26, QBF hosted, filmed and livestreamed globally GCA's Africa Acceleration Day at the University of Nairobi.", link: "https://www.youtube.com/watch?v=YtZMsbIQR8c" },
              { id: 12, title: "Inauguration of the Global Champion for the AAAP", img: "/12.jpg", description: "QBF hosted a second conference for GCA in July 2022 with the aim of launching the inauguration of the Global Champion for the AAAP.", link: "https://www.youtube.com/watch?v=5d0u1L36wk0" },
              { id: 13, title: "4th Africa Adaptation Acceleration Program Partnership Forum", img: "/13.jpg", description: "QBF hosted and live streamed the 4th Africa Adaptation Acceleration Program Partnership Forum in Nairobi, Kenya in September 2024.", link: "https://gca.org/video/https-youtu-be-8mo-vy0ztgssiwn8cz6v4h-7y2e8h/" },
            ].map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform h-full">
                  <img
                    className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                    src={item.img}
                    alt={item.title}
                  />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-900">{item.title}</h3>
                  <p className="text-sm sm:text-lg text-gray-700">{item.description}</p>
                  {item.link && (
                    <a href={item.link} className="text-blue-500">Watch Video</a>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

      <motion.section
        className="relative bg-blue-50 text-gray-900 py-12 px-4 md:py-24 md:px-20"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-blue-900">QBF FACTUAL</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {[
              { id: 14, title: "Studio Based International Formats", img: "/14.jpg", description: "QBF has been building its factual entertainment portfolio with studio-based international formats." },
              { id: 15, title: "Field Based Factual Lifestyle Programming", img: "/15.jpg", description: "QBF produces field-based factual lifestyle programming." },
              { id: 16, title: "Field Based Edutainment Magazine Programming", img: "/16.jpg", description: "QBF offers field-based edutainment magazine programming." },
              { id: 17, title: "NGO/CSR/Corporate Documentaries and Docuseries", img: "/11.jpg", description: "QBF creates NGO/CSR/Corporate documentaries and docuseries." },
              { id: 18, title: "News Features", img: "/12.jpg", description: "QBF produces news features." },
            ].map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform h-full">
                  <img
                    className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                    src={item.img}
                    alt={item.title}
                  />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-900">{item.title}</h3>
                  <p className="text-sm sm:text-lg text-gray-700">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

      {/* === FOOTER === */}
      <footer className="bg-gray-950 text-white py-12 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} QBF Productions</div>
          <div className="flex space-x-6 text-lg">
            <a href="#" className="hover:text-blue-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}