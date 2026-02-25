import React, { useEffect, useState } from "react";
import {
  FaIndustry,
  FaProjectDiagram,
  FaRulerCombined,
  FaSmile,
} from "react-icons/fa";

const CounterBox = ({ target, label, suffix = "", icon: Icon, gradient }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 1500;
    const step = Math.ceil(end / (duration / 10));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div
      className="p-8 rounded-xl text-center text-white shadow-lg
                 hover:scale-105 transition-transform duration-300"
      style={{
        background: `linear-gradient(135deg, ${gradient})`,
      }}
    >
      {/* Icon */}
      <div className="text-4xl mb-4 flex justify-center opacity-90">
        <Icon />
      </div>

      {/* Number */}
      <h2 className="text-4xl font-bold">
        {count.toLocaleString("en-IN")}
        {suffix}
      </h2>

      {/* Label */}
      <p className="mt-2 opacity-90">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <CounterBox
            target={1986}
            label="Year Established"
            icon={FaIndustry}
            gradient="#60A7C3, #3B82F6"
          />

          <CounterBox
            target={5016}
            label="Projects Completed"
            icon={FaProjectDiagram}
            gradient="#C98D99, #EC4899"
          />

          <CounterBox
            target={365}
            suffix=" M"
            label="Square Feet Paved"
            icon={FaRulerCombined}
            gradient="#DF6155, #F97316"
          />

          <CounterBox
            target={2250}
            label="Happy Clients"
            icon={FaSmile}
            gradient="#EDC07F, #EAB308"
          />

        </div>

      </div>
    </section>
  );
};

export default StatsCounter;
