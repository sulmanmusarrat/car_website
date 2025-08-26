import React from "react";
import ProductCard from "../components/ProductCard";

export default function Models() {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 min-h-screen transition-colors duration-75">
      {/* Section Title */}
      <section className="relative flex items-start justify-start h-10 w-full px-10 py-10">
        <h1 className="text-gray-900 dark:text-white font-bold font-serif text-3xl">
          Our Models
        </h1>
      </section>
      {/* Product Cards */}
      <ProductCard />
    </div>
  );
}
