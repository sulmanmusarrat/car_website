import React from "react";
import ProductCard from "../components/ProductCard";

export default function Models() {
  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen transition-colors duration-75">
      {/* Section Title */}
      <section className="relative flex items-start justify-start px-10 py-12">
        <h1
          className="text-4xl font-extrabold font-serif 
          text-gray-900 dark:text-white
          drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]
          animate-pulse"
        >
          Our Models
        </h1>

        {/* Gradient underline effect */}
        <span className="absolute left-10 bottom-8 h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg animate-pulse"></span>
      </section>

      {/* Product Cards */}
      <ProductCard />
    </div>
  );
}
