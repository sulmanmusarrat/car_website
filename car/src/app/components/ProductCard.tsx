import React from "react";

export default function ProductCard() {
  const products = [
    { id: 1, img: "./pic1.jpg", title: "Lamborghini", desc: "Fast and secure" },
    { id: 2, img: "./pic2.jpg", title: "Ferrari", desc: "Speed & luxury" },
    { id: 3, img: "./pic3.jpg", title: "Bugatti", desc: "Ultimate performance" },
  ];

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-950 px-8 py-12 transition-colors duration-300">
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`
              group relative rounded-2xl bg-white dark:bg-gray-900 shadow-lg 
              transition-all duration-500 ease-in-out cursor-pointer
              ${index === 1 
                ? "z-20 scale-110 hover:scale-125" // middle card bigger
                : "z-10 scale-90 hover:scale-100 opacity-80 hover:opacity-100"} 
            `}
          >
            <img
              src={product.img}
              alt={product.title}
              className="h-72 w-64 rounded-t-2xl object-cover"
            />
            <div className="p-5 text-center">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {product.title}
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {product.desc}
              </p>
              <button className="mt-4 rounded-xl bg-blue-600 px-5 py-2 text-white transition-colors group-hover:bg-blue-700 dark:group-hover:bg-blue-500">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
