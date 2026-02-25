import React from "react";
import { useParams } from "react-router-dom";
import newsData from "../../data/newsData";

const NewsDetails = () => {
  const { slug } = useParams();
  const news = newsData.find((n) => n.slug === slug);
  if (!news) {
    return <div className="text-center py-20">News not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-sm text-gray-500 mb-3">
        👤 {news.author} • 💬 {news.comments}
      </p>
      <h1 className="text-4xl font-bold mb-6">
        {news.title}
      </h1>
      <img
        src={news.image}
        alt={news.title}
        className="w-full rounded-xl mb-8"
      />
      <div className="text-lg text-gray-700 whitespace-pre-line leading-8">
        {news.content}
      </div>
    </div>
  );
};

export default NewsDetails;
