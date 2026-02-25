import React from "react";
import { Link } from "react-router-dom";

import {
    FaThLarge,
    FaPalette,
    FaLeaf,
    FaTruckMoving,
    FaCheckCircle,
    FaRecycle,
} from "react-icons/fa";
import useInViewAnimation from "../../hooks/useInViewAnimation";

const services = [
    {
        title: "Paver Blocks",
        slug: "paver-blocks",
        desc: "High-strength interlocking paver blocks ideal for driveways and outdoor flooring.",
        color: "bg-[#B74722]",
        icon: <FaThLarge />,
        image: "/services/paver-blocks.png"
    },

    {
        title: "Designer Tiles",
        slug: "designer-tiles",
        desc: "Premium wall and floor tiles designed for modern interiors.",
        color: "bg-[#DD615F]",
        icon: <FaPalette />,
        image: "/services/designer-tiles.png",
    },
    {
        title: "Outdoor Flooring",
        slug: "outdoor-flooring",
        desc: "Weather-resistant tiles suitable for patios and outdoor areas.",
        color: "bg-[#427A43]",
        icon: <FaLeaf />,
        image: "/services/outdoor-flooring.png",
    },
    {
        title: "Bulk Supply",
        slug: "bulk-supply",
        desc: "Large-scale production capacity for commercial projects.",
        color: "bg-sky-500",
        icon: <FaTruckMoving />,
        image: "/services/bulk-supply.png",
    },
    {
        title: "Quality Assurance",
        slug: "quality-assurance",
        desc: "Strict quality checks for strength, durability and finish.",
        color: "bg-red-500",
        icon: <FaCheckCircle />,
        image: "/services/quality-assurance.png",
    },
    {
        title: "Eco-Friendly Tiles",
        slug: "eco-friendly-tiles",
        desc: "Sustainable manufacturing with minimal environmental impact.",
        color: "bg-green-500",
        icon: <FaRecycle />,
        image: "/services/eco-friendly.png",
    },
];

const Services = () => {
    const { ref, isVisible } = useInViewAnimation();

    return (
        <section ref={ref} className="mt-24 py-20 bg-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* HEADER */}
                <div className={`text-center mb-14 ${isVisible ? "animate-fadeUp" : "opacity-0"}`}>
                    <p className="text-[#B1441D] font-semibold uppercase tracking-wide">
                        Our Products
                    </p>
                    <h2 className="md:text-4xl text-4xl font-bold mt-2">
                        Tiles, Paver Blocks & Flooring Solutions
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl font-semibold mx-auto">
                        Discover a wide range of high-quality tiles and paver solutions
                        designed for durability, beauty, and long-term performance.
                    </p>
                </div>

                {/* SERVICES GRID / CAROUSEL */}
                <div
                    className="
            flex gap-6 overflow-x-auto no-scrollbar
            md:grid md:grid-cols-3 md:gap-10
            snap-x snap-mandatory md:snap-none pb-4
          "
                >
                    {services.map((item, index) => (
                        <div
                            key={item.slug}
                            className={`
                group card-glow relative
                min-w-[280px] md:min-w-0 snap-center
                bg-white rounded-2xl overflow-hidden
                border border-gray-100
                shadow-md hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-3
                ${isVisible ? "animate-slideUp" : "opacity-0"}
              `}
                            style={{ animationDelay: `${index * 0.12}s` }}
                        >
                            {/* IMAGE */}
                            <div className="relative h-44 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div
                                    className={`absolute bottom-4 left-4 w-12 h-12 ${item.color}
                  text-white rounded-full flex items-center justify-center text-xl icon-animate`}
                                >
                                    {item.icon}
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                                <Link
                                    to={`/services/${item.slug}`}
                                    state={{
                                        title: item.title,
                                        image: item.image,
                                        desc: item.desc,
                                    }}
                                    className="mt-6 inline-flex items-center gap-2
             text-[#B1441D] font-medium relative overflow-hidden"
                                >

                                    <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                                        View Details →
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B1441D]
                    group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
