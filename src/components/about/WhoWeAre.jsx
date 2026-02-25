import React from "react";
import whoImg1 from "../../assets/who-we-are1.png";
import whoImg2 from "../../assets/who-we-are2.png";
import { Link } from "react-router-dom";

const WhoWeAreSection = () => {
  return (
    <section className="md:pt-20 md:pb-34 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">        
        {/* LEFT IMAGES */}
        <div className="relative group">          
          {/* Big Image */}
          <div className="overflow-hidden rounded-lg md:w-3/4 w-full shadow-lg">
            <img
              src={whoImg1}
              alt="Engineer"
              className="
                w-full h-full object-cover
                transition-transform duration-700 ease-out
                group-hover:scale-110
              "
            />
          </div>

          {/* Small Image */}
          <div className="overflow-hidden rounded-lg w-1/2 absolute md:bottom-[-40px] bottom-[-101px] md:right-0 shadow-xl">
            <img
              src={whoImg2}
              alt="Construction"
              className="
                w-full h-full object-cover
                transition-transform duration-700 ease-out
                group-hover:scale-110
              "
            />
          </div>

          {/* Experience Box */}
          <div className="
            md:mt-0 mt-1 absolute md:top-6 md:right-6 right-0
            bg-[#B13F1A] text-white p-6 rounded-lg text-center shadow-lg
            transition-transform duration-500
            group-hover:-translate-y-2
          ">
            <h2 className="text-3xl font-bold">25+</h2>
            <p className="text-sm">Years Experience</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:py-0 py-20">
          <p className="text-[#D96E4F] font-semibold mb-2 uppercase">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Always Think On <br /> Your Dream
          </h2>
          <p className="text-gray-600 mb-6">
            We are a professional concrete solutions company delivering
            innovative and sustainable building materials.
          </p>

          {/* FEATURES */}
          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✔</span>
              <div>
                <h4 className="font-semibold">Worldwide Services</h4>
                <p className="text-gray-600 text-sm">
                  Delivering concrete solutions across regions.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✔</span>
              <div>
                <h4 className="font-semibold">Best Company Award Winner</h4>
                <p className="text-gray-600 text-sm">
                  Recognized for quality and excellence.
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <Link to="/paver">
            <button className="bg-[#B13F1A] hover:bg-[#B33F18] text-white px-6 py-3 rounded-md font-semibold transition">
              More About Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
