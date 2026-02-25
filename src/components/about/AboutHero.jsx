import React from "react";
import aboutBg from "../../assets/about-bg.png";
import aboutBg1 from "../../assets/about1.png";

const AboutHero = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">          
          {/* LEFT CONTENT */}
          <div className="text-white">
            <p className="text-orange-500 font-semibold uppercase mb-3">
              About Our Company
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Home, Pathway & Outdoor Areas
            </h1>
            <p className="text-gray-300 mb-6 max-w-lg">
              We manufacture and supply concrete products suitable for regular
              construction needs, providing dependable strength, consistency,
              and timely delivery for residential and commercial projects.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#B13F1A] hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition">
                Our Services
              </button>
              <button className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE WITH ZOOM */}
          <div className="hidden md:block group overflow-hidden rounded-xl shadow-lg">
            <img
              src={aboutBg1}
              alt="Urban Mix Concrete Work"
              className="
                w-full h-[360px] object-cover
                transition-transform duration-700 ease-in-out
                group-hover:scale-110
              "
            />
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE WITH ZOOM */}
          <div className="group overflow-hidden rounded-xl shadow-lg">
            <img
              src={aboutBg1}
              alt="Urban Mix Concrete Plant"
              className="
                w-full h-[360px] object-cover
                transition-transform duration-700 ease-in-out
                group-hover:scale-110
              "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="grid md:grid-cols-2 gap-10 items-center">            
            {/* TEXT CONTENT */}
            <div>
              <p className="text-[#B13F1A] font-semibold uppercase mb-2">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Urban Mix Concrete – Tiles for Regular Use
              </h2>
              <p className="text-gray-600 mb-4">
                Urban Mix Concrete is engaged in manufacturing and supplying a wide
                range of tiles and concrete products used in homes, pathways,
                outdoor flooring, and general construction work. Our products are
                designed for regular use, offering practical designs and
                dependable strength.
              </p>
              <p className="text-gray-600 mb-6">
                With standard production facilities, trained staff, and
                controlled processes, we ensure reliable material supply that
                meets basic construction requirements and project timelines.
              </p>
              {/* FEATURES */}
              <div className="space-y-3 mb-6">
                {[
                  "Standard quality raw materials",
                  "Timely material supply",
                  "Experienced operational team",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">✔</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SECOND IMAGE WITH ZOOM */}
            <div className="group overflow-hidden rounded-2xl shadow-lg">
              <img
                src={aboutBg1}
                alt="Urban Mix Concrete"
                className="
                  w-full h-[350px] object-cover
                  transition-transform duration-700 ease-in-out
                  group-hover:scale-110
                "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
