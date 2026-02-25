import React from "react";

import productImg5 from "../../assets/product17.png";
import productImg12 from "../../assets/product12.png";
import productImg13 from "../../assets/product13.png";
import productImg14 from "../../assets/product14.png";
import productImg15 from "../../assets/product15.png";
import productImg20 from "../../assets/product20.png";
import productImg21 from "../../assets/productImg21.png";
import productImg23 from "../../assets/productImg23.png";

const ConcreteBricksSection = () => {

    const products = [
        { id: 5, name: "Paver Brick", price: "₹22 / pcs", image: productImg5 },
        { id: 12, name: "Polis Diamond Paver Block", price: "₹28 / pcs", image: productImg12 },
        { id: 13, name: "Floral Paver Block", price: "₹26 / pcs", image: productImg13 },
        { id: 14, name: "Damru Shape Paver Block", price: "₹21 / pcs", image: productImg14 },
        { id: 15, name: "Arch Paver Block", price: "₹30 / pcs", image: productImg15 },
        { id: 20, name: "I-Block Brick", price: "₹18 / pcs", image: productImg20 },
        { id: 21, name: "Solid Concrete Block", price: "₹40 / pcs", image: productImg21 },
        { id: 20, name: "Single Hole Hollow Block", price: "₹15 / pcs", image: productImg23 },
    ];

    return (
        <section className="bg-[#F5BA78]/10 py-20 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#B33F18]">
                        Concrete Bricks Collection
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg font-medium">
                        Strong and affordable concrete bricks suitable for boundary walls, pathways, landscaping, and construction use. Designed for durability and long-term performance. Manufactured using quality materials, these bricks provide reliable strength and easy installation. Ideal for both residential and small commercial projects, offering practical solutions at cost-effective prices.

                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-64 w-full object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-[#B33F18] mb-2">
                                    {product.name}
                                </h3>

                                <p className="text-gray-600 text-lg mb-3">
                                    Reliable concrete brick for regular construction and
                                    outdoor applications.
                                </p>

                                <p className="text-[#B33F18] font-bold text-lg">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ConcreteBricksSection;
