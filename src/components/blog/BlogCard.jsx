import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">

      {/* IMAGE SECTION */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Category Badge (optional) */}
        {blog.category && (
          <span className="absolute top-4 left-4 bg-[#BA461C] text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
            {blog.category}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <p className="text-sm text-gray-700 font-semibold mb-2">
          {blog.date}
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-snug group-hover:text-[#BA461C] transition">
          {blog.title}
        </h3>

        <p className="text-gray-600 text-lg mb-6 font-medium leading-relaxed">
          {blog.excerpt}
        </p>

        <Link
          to={`/blog/${blog.slug}`}
          className="inline-flex items-center text-lg gap-2 text-[#BA461C] font-semibold group-hover:gap-3 transition-all"
        >
          Read More
          <span className="text-lg">→</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
