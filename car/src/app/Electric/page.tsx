import React from "react";
import Link from "next/link";

export default function Electric() {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      {/* Title Section */}
      <section className="px-10 pt-10 pb-6">
        <h1 className="text-gray-900 dark:text-white font-bold font-serif text-3xl">
          Electric Vehicle
        </h1>
      </section>

      {/* Content Section */}
      <div className="flex items-center justify-center px-8 pb-19">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src="./pic1.jpg"
              alt="Electric Lamborghini"
              className="rounded-2xl shadow-lg object-cover w-full max-w-md"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white font-serif">
              Embrace The Electric Future
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Experience the future of performance with cutting-edge electric
              vehicles that combine speed, sustainability, and luxury. From
              lightning-fast acceleration to eco-friendly engineering, the
              evolution of electric mobility is here.
            </p>
            <Link
              href="/electric"
              className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold transition-colors hover:bg-blue-700 dark:hover:bg-blue-500"
            >
              Explore Electric Vehicles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
