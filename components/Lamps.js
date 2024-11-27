"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { FaClock, FaCheckCircle, FaDollarSign, FaChartLine } from "react-icons/fa";

export function LampDemo() {
  const comparisonData = [
    {
      icon: <FaClock className="text-2xl text-blue-500" />,
      feature: "Time Efficiency",
      before: "Manual Processes",
      after: "Automated Workflows",
    },
    {
      icon: <FaCheckCircle className="text-2xl text-green-500" />,
      feature: "Accuracy",
      before: "Prone to Human Errors",
      after: "High Precision AI",
    },
    {
      icon: <FaDollarSign className="text-2xl text-yellow-500" />,
      feature: "Cost",
      before: "Higher Operational Costs",
      after: "Cost-Effective Solutions",
    },
    {
      icon: <FaChartLine className="text-2xl text-purple-500" />,
      feature: "Scalability",
      before: "Limited Growth Potential",
      after: "Easily Scalable",
    },
  ];

  return (
    <LampContainer>
      {/* Unified Container for Heading and Table */}
      <div className=" relative top-20 px-4">

   <h1 className="mb-8 text-center text-4xl font-medium tracking-tight text-white md:text-7xl">
    Before vs After
  </h1>


  <div className="overflow-x-auto">
    <table className="min-w-full text-left">
      <thead>
        <tr>
          <th className="py-4 px-6 text-lg font-semibold text-white">
            Feature
          </th>
          <th className="py-4 px-6 text-center text-lg font-semibold text-white">
            Before Using AI
          </th>
          <th className="py-4 px-6 text-center text-lg font-semibold text-white">
            After Using AI
          </th>
        </tr>
      </thead>
      <tbody>
        {comparisonData.map((item, index) => (
          <tr
            key={index}
            className={`border-b ${
              index % 2 === 0 ? "bg-transparent" : "bg-transparent"
            }`}
          >
            <td className="py-4 px-6 flex items-center text-white">
              {item.icon}
              <span className="ml-3 font-medium">
                {item.feature}
              </span>
            </td>
            <td className="py-4 px-6 text-center text-white">
              {item.before}
            </td>
            <td className="py-4 px-6 text-center text-white">
              {item.after}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div> 
        </div>

    </LampContainer>
  );
}
