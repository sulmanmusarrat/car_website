import React from "react";
import Link from "next/link";

export default function Electric() {
  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen transition-colors duration-300">
      {/* Title Section */}
      <section className="relative px-10 pt-10 pb-6 text-center md:text-left">
        <h1
          className="text-4xl font-extrabold font-serif 
          text-gray-900 dark:text-white
          drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]
          animate-pulse"
        >
          Electric Vehicles
        </h1>
        <span className="absolute left-10 top-23 h-1 w-52 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg animate-pulse"></span>

      </section>

      {/* Content Section */}
      <div className="flex items-center justify-center px-8  py-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl">

          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src="./pic1.jpg"
              alt="Electric Lamborghini"
              className="rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.5)] object-cover w-full max-w-md hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-center md:text-left">
            <h2
              className="
                text-2xl md:text-4xl font-bold font-serif text-gray-900 dark:text-white
                drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]
              "
            >
              Embrace The Electric Future
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0">
              Experience the future of performance with cutting-edge electric
              vehicles that combine speed, sustainability, and luxury. From
              lightning-fast acceleration to eco-friendly engineering, the
              evolution of electric mobility is here.
            </p>

            {/* Glowing Button */}
            <Link
              href="/electric"
              className="
                inline-block relative rounded-xl px-8 py-3 text-lg font-semibold
                text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                shadow-[0_0_20px_rgba(59,130,246,0.6)]
                transition-all duration-500
                hover:shadow-[0_0_35px_rgba(236,72,153,0.8)]
                hover:scale-105
              "
            >
              Explore Electric Vehicles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
