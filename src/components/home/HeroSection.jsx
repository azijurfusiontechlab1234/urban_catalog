import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slide1 from "../../assets/tiles-1.png";
import slide2 from "../../assets/tiles-2.png";
import slide3 from "../../assets/tiles-3.png";

const slides = [
  {
    image: slide1,
    title: "TILES & PAVER BLOCKS",
    subtitle:
      "We provide checker katali block, brick guti tiles, polish tiles, and tuff tiles suitable for daily construction use.",
  },
  {
    image: slide2,
    title: "PAVER BLOCK DESIGNS",
    subtitle:
      "Available designs include damru paver block, arch paver block, floral block, and diamond paver blocks.",
  },
  {
    image: slide3,
    title: "OUTDOOR & FLOORING PRODUCTS",
    subtitle:
      "Our products are suitable for flooring, pathways, parking areas, and outdoor construction applications.",
  },
];

const AboutHero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[70vh] md:h-[90vh] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div key={current} className="max-w-2xl animate-fadeUp">            
            <h1 className="pt-34 md:pt-0 text-white text-3xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide">
              {slides[current].title}
            </h1>

            <p className="text-gray-200 text-xl md:text-2xl mb-8 leading-relaxed">
              {slides[current].subtitle}
            </p>

            {/* KNOW MORE BUTTON */}
            <Link to="/products">
              <button className="
                bg-white text-black
                md:px-8 px-5 md:py-4 py-2
                text-lg font-semibold
                rounded-md
                transition-all duration-300
                hover:bg-black hover:text-white
              ">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
