"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"; // Importing icons from react-icons
import { Card, CardTitle, CardDescription, CardDemo } from "./Card"; // Adjust the path if necessary

const tools = [
  {
    icon: <FaReact className="text-blue-500 w-12 h-12" />,
    title: "React",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    icon: <FaNodeJs className="text-green-500 w-12 h-12" />,
    title: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine.",
  },
  {
    icon: <FaDatabase className="text-yellow-500 w-12 h-12" />,
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
  },
  // Add more tools as needed
];

const AllTools = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <CardDemo/>
    </section>
  );
};

export default AllTools;
