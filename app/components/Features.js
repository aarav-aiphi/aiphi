"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const featuresData = [
  {
    id: 1,
    title: "B2B Data",
    content: "Access detailed and accurate B2B data to empower your sales.",
    image: "/demo.png",
  },
  {
    id: 2,
    title: "AI Email Generation",
    content:
      "Generate personalized emails using AI to connect with potential leads.",
    image: "/demo.png",
  },
  {
    id: 3,
    title: "Email Warmup",
    content:
      "Enhance deliverability with automated email warmup strategies tailored to your needs.",
    image: "/demo.png",
  },
  {
    id: 4,
    title: "Watchtower Campaigns",
    content:
      "Pinpoint high-potential leads based on custom triggers and enroll them seamlessly in targeted outreach sequences.",
    image: "/demo.png",
  },
  {
    id: 5,
    title: "Email Deliverability",
    content:
      "Track and improve email deliverability rates to maximize your outreach campaigns.",
    image: "/demo.png",
  },
  {
    id: 6,
    title: "Personalization Waterfall",
    content:
      "Craft hyper-personalized messaging strategies based on advanced AI analytics.",
    image: "/demo.png",
  },
];

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(featuresData[0]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-200">
          Innovation At Every Stage of the{" "}
          <span className="text-purple-500">Outbound Cycle</span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg">Features</p>
      </div>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center items-center space-x-4 mb-12">
        {featuresData.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setSelectedFeature(feature)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
              selectedFeature.id === feature.id
                ? "bg-purple-500 text-white"
                : "bg-gray-700 text-gray-200 hover:bg-gray-600"
            }`}
          >
            {feature.title}
          </button>
        ))}
      </div>

      {/* Animated Content */}
      <div className="flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFeature.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl"
          >
            {/* Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-200">
                {selectedFeature.title}
              </h2>
              <p className="text-gray-400 mt-4">{selectedFeature.content}</p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <Image
                src={selectedFeature.image}
                alt={selectedFeature.title}
                width={400}
                height={300}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Features;
