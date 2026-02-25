import React from "react";
import BlogCard from "../../components/blog/BlogCard";
import blogs from "../../data/blogs";
import { Link } from "react-router-dom";
import product12 from "../../assets/product13.png";

const Blogs = () => {
  return (
    <section className="bg-gray-100">
      {/* HERO SECTION */}
      <div
        className="relative h-[300px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${product12})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-wide">
            Our Blogs
          </h1>
          <p className="text-gray-200 mt-4 max-w-3xl text-lg font-medium mx-auto">
            Insights, trends, and expert knowledge on tiles, flooring,
            construction, and modern design solutions.
          </p>
        </div>
      </div>

      {/* BLOG LIST */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="animate-fadeUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Blogs;
