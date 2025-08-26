import React from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';

export default function Herosection() {
    return (
        <>
            <section className="relative flex items-center justify-center h-screen w-full">
                {/* Image */}
                <img
                    className="object-cover w-full h-full md:h-screen rounded-e-full"
                    src="/banner.jpg"
                    alt="Banner"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-6 sm:px-10 md:px-20 lg:px-32 bg-black/20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4">
                        Drive the future
                    </h1>
                    <p className="max-w-full sm:max-w-md md:max-w-xl lg:max-w-2xl font-serif text-sm sm:text-base md:text-lg mb-4">
                        Experience the thrill of innovation with velocity. Our cutting-edge vehicles and commitment to performance and design set us apart.
                    </p>
                    <button className="bg-white text-black font-bold px-4 py-2 sm:px-6 sm:py-3 hover:bg-zinc-700 hover:text-white font-serif">
                        Explore our vehicles
                    </button>
                </div>
            </section>


                    <h1 className='text-white font-bold font-serif px-20 py-6 text-3xl'>Our Models</h1>
            <section className='relative flex items-center justify-center h-screen w-full'>
            </section>
            <ProductCard/>
        </>
    );
}
