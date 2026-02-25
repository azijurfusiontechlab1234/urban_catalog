import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  product,
  hoverEffect,
  isActive,
  onClick,
  variant = "default", 
}) => {
  const navigate = useNavigate();

  const isDetails = variant === "details";

  return (
    <div
      onClick={() => !isDetails && navigate(`/products/${product.id}`)}
      className={`
        relative rounded-2xl cursor-pointer
        transition-all duration-300 transform-gpu
        ${isDetails ? "shadow-lg" : "shadow-xl hover:z-30"}
        ${hoverEffect}
      `}
    >
      {/* IMAGE WRAPPER */}
      <div className="relative group overflow-hidden rounded-2xl">
        <img
          src={
            isActive && product.activeImage
              ? product.activeImage
              : product.image
          }
          alt={product.name}
          className={`
            w-full object-cover transition-all duration-700 ease-out
            ${isDetails ? "h-[420px] scale-100" : "h-[380px] group-hover:scale-105"}
          `}
        />

        {/* DARK OVERLAY */}
        <div
          className={`
            absolute inset-0
            bg-gradient-to-t from-black/70 via-black/30 to-transparent
            transition-opacity duration-500
            ${isDetails ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
        />

        {/* TEXT OVERLAY */}
        <div
          className={`
            absolute bottom-0 left-0 w-full text-center
            px-6 py-6
            transition-all duration-500 ease-out
            ${isDetails
              ? "bg-gray-100 translate-y-0"
              : "bg-gray-100 translate-y-full group-hover:translate-y-0"}
          `}
        >
          <h3 className="text-[#B3421D] text-3xl font-bold mb-2">
            {product.name}
          </h3>
          <p className="text-gray-700 text-lg font-semibold">
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
