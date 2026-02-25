import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../../data/blogs";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) {
    return (
      <div className="pt-24 text-center">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <Link
          to="/blogs"
          className="text-[#BA461C] font-semibold mt-4 inline-block"
        >
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* HERO IMAGE */}
        <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-lg mb-10">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          {/* CATEGORY */}
          {blog.category && (
            <span className="absolute top-6 left-6 bg-[#BA461C] text-white px-4 py-1 rounded-full text-sm uppercase tracking-wide">
              {blog.category}
            </span>
          )}
        </div>
        {/* CONTENT */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          {/* DATE */}
          <p className="text-gray-700 text-lg font-semibold mb-2">
            {blog.date}
          </p>

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold  text-[#B33F18] mb-6 leading-snug">
            {blog.title}
          </h1>

          {/* BLOG CONTENT */}
          <div className="prose prose-lg max-w-none text-gray-700 text-lg font-medium">
            {blog.content.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* BACK LINK */}
          <div className="mt-10">
            <Link
              to="/blog"
              className="inline-flex text-lg items-center gap-2 text-[#BA461C] font-semibold hover:gap-3 transition-all"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
