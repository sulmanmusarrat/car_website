"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProductCard() {
  const products = [
    { id: 1, img: "./pic1.jpg", title: "Lamborghini", desc: "Fast and secure" },
    { id: 2, img: "./pic2.jpg", title: "Ferrari", desc: "Speed & luxury" },
    { id: 3, img: "./pic3.jpg", title: "Bugatti", desc: "Ultimate performance" },
  ];

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-gray-100 dark:bg-black px-6 py-12 transition-colors duration-300">
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: index === 1 ? 1.1 : 0.95 }}
            whileHover={{ scale: index === 1 ? 1.2 : 1.05, y: -10 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className={`
              group relative rounded-2xl bg-white dark:bg-zinc-900 
              shadow-lg overflow-hidden cursor-pointer
              border-4 ${index === 1 
                ? "border-gradient-to-r from-blue-500 via-purple-500 to-pink-500" 
                : "border-gray-300 dark:border-zinc-700"} 
              ${index === 1 ? "z-20" : "z-10 opacity-90 hover:opacity-100"}
            `}
          >
            {/* BEST Badge for Middle Card */}
            {index === 1 && (
              <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                BEST
              </div>
            )}

            {/* Inner Border Glow */}
            {index === 1 && (
              <div className="absolute inset-0 rounded-2xl ring-4 ring-blue-400/50 animate-pulse pointer-events-none"></div>
            )}

            {/* Product Image */}
            <img
              src={product.img}
              alt={product.title}
              className="h-72 w-64 rounded-t-2xl object-cover"
            />

            {/* Content */}
            <div className="p-5 text-center">
              <h2
                className={`text-xl font-bold ${
                  index === 1
                    ? "text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    : "text-gray-800 dark:text-white"
                }`}
              >
                {product.title}
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {product.desc}
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-4 rounded-xl px-5 py-2 text-white shadow-md transition-colors
                  ${index === 1 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                    : "bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500"}`}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
