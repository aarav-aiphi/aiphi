'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  '/demo.png',
  '/demo2.png',
  '/demo.png',
  // Add more image paths as needed
];

export const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const imageIndex = (current + images.length) % images.length;

  const paginate = (newDirection) => {
    setCurrent((prev) => (prev + newDirection + images.length) % images.length);
  };

  const variants = {
    enter: {
      opacity: 0,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
  };

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Heading Above Carousel */}
      <div className="text-center px-6 py-8">
        <span className="bg-purple-100 text-purple-700 text-sm font-bold px-4 py-1 rounded-full mb-4 inline-block">
          The Future is Consolidated
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          We&apos;re Building the Future of Software,
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mt-2">
          With AI Employees Called Artisans
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          Explore how we replace, optimize, and automate the entire GTM stack
          with world-class AI software solutions.
        </p>
      </div>

      {/* Image Slider */}
      <div className="relative w-full h-[60vh] overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            className="absolute w-full h-full z-0"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
            }}
          >
            <Image
              src={images[imageIndex]}
              alt={`Slide ${imageIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay for better visibility of navigation buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30 z-0"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 right-4 flex justify-between transform -translate-y-1/2 z-10">
        <button
          onClick={() => paginate(-1)}
          className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition focus:outline-none"
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition focus:outline-none"
          aria-label="Next Slide"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              idx === imageIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};
