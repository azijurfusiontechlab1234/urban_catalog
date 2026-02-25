import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
    const { id } = useParams();

    const product = products.find(p => p.id === Number(id));
    if (!product) return <p>Product not found</p>;

    const relatedProducts = products.filter(
        p => p.category === product.category && p.id !== product.id
    );

    return (
        <section className="py-16 px-6 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <ProductCard product={product} variant="details" />
                </div>

                {/* PRODUCT DETAILS */}
                <div className="max-w-3xl mb-20">
                    <h1 className="text-5xl font-bold text-[#B3421D] mb-4">
                        {product.name}
                    </h1>
                    <p className="text-2xl font-semibold mb-6">
                        {product.price}
                    </p>
                    <p className="text-gray-600 text-xl font-medium leading-relaxed">
                        This product is suitable for residential, commercial, and outdoor
                        construction use. Designed for durability, strength, and long-term
                        performance in regular usage conditions.
                    </p>
                    <p className="mt-4 text-lg text-gray-500">
                        Category: <span className="font-semibold">{product.category}</span>
                    </p>
                </div>

                {/* RELATED PRODUCTS */}
                <div>
                    <h2 className="text-4xl text-gray-700 font-bold mb-8">
                        Related Products
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {relatedProducts.slice(0, 3).map(item => (
                            <ProductCard
                                key={item.id}
                                product={item}
                                hoverEffect=""
                            />
                        ))}
                    </div>
                </div>
                <p className="text-gray-600 text-xl font-medium leading-relaxed pt-20">
                    This product is suitable for residential, commercial, and outdoor construction use. Designed for durability, strength, and long-term performance in regular usage conditions.
                    Manufactured using quality raw materials and controlled processes, it ensures uniform shape and dependable performance.
                </p>
                <p className="mt-4 text-lg text-gray-500 font-semibold">
                    Suitable for homes, walkways, driveways, and outdoor spaces requiring reliable concrete solutions. </p>
            </div>
        </section>
    );
};

export default ProductDetails;
