import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { slug } = useParams();
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="pt-24 text-center">
        <h2 className="text-2xl font-bold">Service not found</h2>
      </div>
    );
  }

  return (
    <section className="pt-24 pb-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* IMAGE (SAME AS CARD IMAGE) */}
        <div className="mb-10">
          <img
            src={state.image}
            alt={state.title}
            className="w-full h-[380px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-4">
          {state.title}
        </h1>

        {/* BRIEF DESCRIPTION */}
        <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
          {state.desc}
        </p>

      </div>
    </section>
  );
};

export default ServiceDetails;
