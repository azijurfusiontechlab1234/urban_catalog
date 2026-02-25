import React, { useState } from "react";

import productImg3 from "../../assets/product4.png";
import productImg4 from "../../assets/product5.png";
import productImg6 from "../../assets/product7.png";
import productImg8 from "../../assets/product9.png";
import productImg11 from "../../assets/product11.png";
import productImg19 from "../../assets/product19.png";

const TilesSection = () => {
    const [activeCard, setActiveCard] = useState(null);

    const products = [
        { id: 3, name: "Guti Polis Tiles", price: "₹42 / pcs", image: productImg3 },
        { id: 4, name: "Tuff Tiles", price: "₹26 / pcs", image: productImg4 },
        { id: 6, name: "1/1 Polis Tiles", price: "₹35 / pcs", image: productImg6 },
        { id: 8, name: "Cosmis Tiles", price: "₹26 / pcs", image: productImg8 },
        { id: 11, name: "36 Guti / 16 Tiles", price: "₹35 / pcs", image: productImg11 },
        { id: 19, name: "1/1 Chekar Tiles", price: "₹35 / pcs", image: productImg19 },
    ];

    const handleCardClick = (id) => {
        setActiveCard(id);
        setTimeout(() => setActiveCard(null), 300);
    };

    return (
        <section className="bg-[#F5BA78]/10 py-20 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#B33F18]">
                        Designer Tiles
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-3xl text-lg font-medium mx-auto">
                        Affordable and durable tile solutions suitable for homes,
                        courtyards, pathways, and outdoor flooring. Designed for
                        long-lasting performance with modern and traditional styles.
                    </p>
                </div>

                {/* Tiles Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => handleCardClick(product.id)}
                            className={`
                                relative cursor-pointer rounded-2xl overflow-hidden
                                shadow-lg transition-all duration-300
                                hover:-translate-y-2 hover:shadow-2xl
                                ${activeCard === product.id ? "scale-105 shadow-[0_20px_40px_rgba(179,63,24,0.35)]" : ""}
                            `}
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-72 w-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            {/* Price Badge */}
                            <span className="absolute top-4 left-4 bg-[#B33F18] text-white text-sm px-4 py-1 rounded-full shadow">
                                {product.price}
                            </span>

                            {/* Name Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition duration-500 flex items-end">
                                <h3 className="text-white text-lg font-semibold p-6">
                                    {product.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TilesSection;