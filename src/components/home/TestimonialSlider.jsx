import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../assets/client1.png";
import img2 from "../../assets/client2.png";
import img3 from "../../assets/client3.png";

const testimonials = [
  {
    name: "Raghav Sharma",
    role: "Contractor",
    image: img1,
    text: "Urban Mix Concrete delivers outstanding quality products. The paver blocks and tiles are strong, durable and beautifully finished."
  },
  {
    name: "Anita Roy",
    role: "Builder",
    image: img2,
    text: "We have used Urban Mix Concrete materials for multiple projects. Always satisfied with quality and service."
  },
  {
    name: "Suresh Patel",
    role: "Engineer",
    image: img3,
    text: "Best concrete products supplier in the region. Timely delivery and excellent support."
  }
];

const TestimonialSlider = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-orange-500 font-semibold uppercase text-3xl md:text-4xl font-bold mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold">
              Our Clients Say
            </h2>
          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          slidesPerView={1}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-5 gap-6 items-center">
                {/* LEFT IMAGE CARD */}
                <div className="md:col-span-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-xl w-full h-64 object-cover"
                  />
                </div>
                {/* RIGHT CONTENT CARD */}
                <div className="md:col-span-3 bg-white shadow-lg rounded-xl p-8 relative">
                  {/* QUOTE ICON */}
                  <div className="absolute top-6 right-6 text-gray-200 text-6xl">
                    ❝
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={item.image}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-3xl md:text-4xl font-bold">{item.name}</h4>
                      <p className="text-xl text-gray-500">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
                    {item.text}
                  </p>
                  {/* STARS */}
                  <div className="text-orange-500 text-lg mt-4">
                    ★★★★★
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default TestimonialSlider;
