import React from "react";

import productImg1 from "../../assets/product1.png";
import productImg2 from "../../assets/productImg2.png";
import productImg7 from "../../assets/product21.png";
import productImg9 from "../../assets/product9.png";
import productImg10 from "../../assets/product18.png";
import productImg16 from "../../assets/product16.png";

const products = [
  { id: 1, name: "Diamond Paver Block", price: "₹29 / pcs", image: productImg1 },
  { id: 2, name: "Polis Diamond Paver", price: "₹30 / pcs", image: productImg2 },
  { id: 7, name: "Zig Zag Paver", price: "₹28 / pcs", image: productImg7 },
  { id: 9, name: "3D Paver Block", price: "₹23 / pcs", image: productImg9 },
  { id: 10, name: "4/8 Paver Block", price: "₹12 / pcs", image: productImg10 },
  { id: 16, name: "Chekar Katali", price: "₹35 / pcs", image: productImg16 },
];

const PaverBlocks = () => {
  return (
    <section className="bg-[#F5BA78]/15 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#B33F18]">
            Standard Paver Blocks
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg font-medium">
            Affordable and durable paver blocks suitable for homes, pathways, parking areas, and outdoor spaces. Designed for dependable strength and everyday use, our paver blocks provide excellent load-bearing capacity and resistance to weather conditions. Their interlocking structure ensures stability and easy installation. Available in various sizes, patterns, and colors, they enhance both functionality and visual appeal for residential and commercial projects.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#B33F18] mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-lg mb-3">
                  Reliable concrete block for everyday outdoor use.
                </p>

                <p className="text-[#B33F18] font-bold">
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

export default PaverBlocks;
