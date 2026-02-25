import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCommentAlt, FaArrowRight } from "react-icons/fa";
import newsData from "../../data/newsData";

const LatestNews = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
          <div>
            <p className="text-[#BA461C] font-semibold uppercase tracking-wide text-lg md:text-xl font-bold">
              Our Blog
            </p>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mt-2">
              Latest News & Insights
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl text-lg font-medium">
              Stay updated with the latest trends, tips, and innovations in
              tiles, paver blocks, and construction solutions.
            </p>
          </div>

          {/* VIEW ALL */}
          <Link
            to="/news"
            className="mt-6 md:mt-0 inline-flex items-center gap-2
                       px-6 py-3 rounded-full border border-gray-300
                       text-gray-700 font-medium
                       hover:bg-[#BA461C] hover:text-white hover:border-[#BA461C]
                       transition"
          >
            View All News
            <FaArrowRight />
          </Link>
        </div>

        {/* NEWS CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {newsData.slice(0, 3).map((item) => (
            <div
              key={item.slug}
              className="group bg-white rounded-2xl overflow-hidden
                         shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover
                             transition-transform duration-500
                             group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

                {/* CATEGORY / LABEL (optional) */}
                {item.category && (
                  <span className="absolute top-4 left-4 bg-[#BA461C]
                                   text-white text-xs px-3 py-1 rounded-full uppercase">
                    {item.category}
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* META */}
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-2 text-lg font-bold">
                    <FaUser /> {item.author}
                  </span>
                  <span className="flex items-center gap-2 text-lg font-bold">
                    <FaCommentAlt /> {item.comments}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3
                               group-hover:text-[#BA461C] transition">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 mb-5 leading-relaxed text-lg font-medium">
                  {item.desc}
                </p>

                {/* READ MORE */}
                <Link
                  to={`/news/${item.slug}`}
                  className="inline-flex items-center gap-2
                             text-[#BA461C] font-semibold
                             group-hover:gap-3 transition-all text-xl"
                >
                  Read More
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestNews;
