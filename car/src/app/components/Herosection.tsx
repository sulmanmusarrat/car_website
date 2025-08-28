import React from "react";
import Link from "next/link";

export default function Herosection() {
  return (
    <>
      <section className="relative flex items-center justify-center h-screen w-full">
        {/* Background Image */}
        <img
          className="object-cover w-full h-full md:h-screen rounded-e-full"
          src="/banner.jpg"
          alt="Banner"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-10 md:px-20 lg:px-32">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-bold font-serif mb-4 
            text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]
            animate-pulse"
          >
            Drive the Future
          </h1>

          <p
            className="max-w-full sm:max-w-md md:max-w-xl lg:max-w-2xl 
            font-serif text-sm sm:text-base md:text-lg mb-6 
            text-gray-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
          >
            Experience the thrill of innovation with Velocity. Our cutting-edge
            vehicles and commitment to performance and design set us apart.
          </p>

          <Link href="/models">
            <button
              className="relative overflow-hidden rounded-full px-6 sm:px-8 py-3 sm:py-4 
              font-serif font-bold text-lg 
              bg-gradient-to-r from-blue-500 to-purple-600 text-white
              shadow-[0_0_25px_rgba(59,130,246,0.8)] 
              hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Explore Our Vehicles</span>
              {/* Glowing Ring */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 opacity-70 blur-lg"></span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
