"use client";

import React from "react";
import { motion } from "framer-motion";
import AuroraBackground from "./ui/AuroraBackground";

const Hero = () => {
  return (
    <AuroraBackground>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center px-8 mt-12 md:mt-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight dark:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500"
        >
          Automate Your Outbound With <br />
          <span className="text-purple-600 dark:text-purple-400">
            an All-In-One, AI-First Platform
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg text-gray-600 max-w-3xl dark:text-neutral-200"
        >
          Equip your team with the best-in-class outbound tools and our AI BDR
          Ava, who automates your entire outbound workflow.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 flex w-full max-w-md"
        >
          <input
            type="email"
            placeholder="Enter Work Email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium px-6 py-3 rounded-r-lg hover:from-purple-600 hover:to-pink-600 dark:from-purple-400 dark:to-pink-400 dark:hover:from-purple-500 dark:hover:to-pink-500 transition duration-300 ease-in-out">
            Get Started
          </button>
        </motion.div>
      </motion.header>
    </AuroraBackground>
  );
};

export default Hero;
