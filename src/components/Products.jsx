import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useNavigate } from "react-router-dom";

const hoverEffects = [
  "imghvr-fold-right",
  "imghvr-zoom-in",
  "imghvr-fold-left",
  "imghvr-zoom-out-left",
  "imghvr-zoom-out-flip-horiz",
  "imghvr-zoom-out-flip-vert",
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProducts = products
    .filter((item) => {
      const matchName = item.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchCategory =
        category === "All" || item.category === category;
      return matchName && matchCategory;
    })
    .slice(0, 8); 

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <h1 className="text-[#BA461C] md:text-5xl text-3xl font-bold text-center mb-6 uppercase">
          Our Products
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          We provide tiles, paver blocks, and concrete products suitable for
          residential, commercial, and outdoor construction use.
        </p>
        {/* SEARCH */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>

        {/* CATEGORY */}
        <div className="flex justify-center gap-4 mb-12 md:flex-wrap">
          {["All", "Tiles", "Blocks", "Pavers"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full border transition
                ${
                  category === cat
                    ? "bg-[#BA461C] text-white border-[#BA461C]"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID → 2 BIG CARDS PER ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProducts.map((item, index) => (
            <ProductCard
              key={item.id}
              product={item}
              hoverEffect={hoverEffects[index % hoverEffects.length]}
            />
          ))}
        </div>        
      </div>
    </section>
  );
};

export default Products;