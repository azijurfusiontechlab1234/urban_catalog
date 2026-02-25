import React, { useState } from "react";
import img1 from "../../assets/tiles-1.png";
import img2 from "../../assets/product21.png";
import img3 from "../../assets/product5.png";
import { Link } from "react-router-dom";
import useInViewAnimation from "../../hooks/useInViewAnimation";

const ExperienceSection = () => {
  const { ref, isVisible } = useInViewAnimation();
  const [activeImg, setActiveImg] = useState(null);

  const captions = {
    1: "Affordable floor tiles for everyday living spaces",
    2: "Budget-friendly kitchen wall tiles with simple design",
    3: "Durable and economical tiles for practical interiors",
  };

  return (
    <section ref={ref} className="md:py-44 py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className={isVisible ? "animate-slideUp" : "opacity-0"}>
          <span className="text-[#B1441D] font-semibold uppercase tracking-wide">
            About Our Tiles
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-tight">
            Affordable Tiles for <br /> Home & Outdoor Use
          </h2>

          <p className="text-gray-600 mt-5 max-w-xl font-medium">
            We supply normal quality tiles designed for everyday flooring
            and construction needs at an affordable price.
          </p>

          <div className="mt-8 space-y-5 text-lg">
            {[
              "Simple and practical designs",
              "Reliable strength for daily use",
              "Suitable for indoor & outdoor areas",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-[#B1441D]">
                  ✔
                </div>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>

          <Link to="/products">
            <button className="mt-10 bg-[#B1441D] hover:bg-[#B33F18] text-white px-8 py-3 rounded-md transition">
              Explore Tile Collection
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE COLLAGE */}
        <div
          className={`relative h-[420px] ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
        >

          {/* CENTER IMAGE */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative">
              <img
                src={img1}
                alt="Center tile"
                onClick={() => setActiveImg(activeImg === 1 ? null : 1)}
                className={`w-64 md:w-72 rounded-xl shadow-lg cursor-pointer transition-all duration-500
                  ${activeImg === 1 ? "scale-[1.6] z-40" : "hover:scale-105"}`}
              />

              {activeImg === 1 && (
                <p className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2
                  w-72 text-sm text-white bg-black/70 px-4 py-2 rounded-lg text-center">
                  {captions[1]}
                </p>
              )}
            </div>
          </div>

          {/* TOP RIGHT IMAGE */}
          <div className="absolute top-0 right-0">
            <div className="relative">
              <img
                src={img2}
                alt="Top right tile"
                onClick={() => setActiveImg(activeImg === 2 ? null : 2)}
                className={`w-48 md:w-56 rounded-xl shadow-lg cursor-pointer transition-all duration-500
                  ${activeImg === 2 ? "scale-[1.6] z-40" : "hover:scale-105"}`}
              />

              {activeImg === 2 && (
                <p className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2
                  w-64 text-sm text-white bg-black/70 px-4 py-2 rounded-lg text-center">
                  {captions[2]}
                </p>
              )}
            </div>
          </div>

          {/* BOTTOM LEFT IMAGE */}
          <div className="absolute bottom-0 left-0">
            <div className="relative">
              <img
                src={img3}
                alt="Bottom left tile"
                onClick={() => setActiveImg(activeImg === 3 ? null : 3)}
                className={`w-44 md:w-48 rounded-xl shadow-lg cursor-pointer transition-all duration-500
                  ${activeImg === 3 ? "scale-[1.6] z-40" : "hover:scale-105"}`}
              />

              {activeImg === 3 && (
                <p className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2
                  w-64 text-sm text-white bg-black/70 px-4 py-2 rounded-lg text-center">
                  {captions[3]}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;