"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import AuroraBackground from "@/app/components/ui/AuroraBackground";
import { CardHoverEffectDemo } from "./CardDemo";
export function TracingBeamDemo() {
  return (
    <div>
    <AuroraBackground>
    <TracingBeam className="px-6 py-12 ">
     
      <div className="max-w-4xl mx-auto antialiased relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            What We Offer
          </h1>
          <p className="text-lg text-gray-600">
            Artificial intelligence will help everyone succeed.
          </p>
        </div>

        {/* Services Content */}
        {servicesContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-16">
            {/* Badge */}
            <h2 className="bg-blue-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4 mx-auto">
              {item.badge}
            </h2>

            {/* Title */}
            <h3 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
              {item.title}
            </h3>

            {/* Image and Description */}
            <div className="flex flex-col items-center">
              {item?.image && (
                <Image
                  src={item.image}
                  alt={`${item.title} image`}
                  height="300"
                  width="300"
                  className="rounded-lg mb-6 object-cover"
                />
              )}
              <div className="text-md prose prose-sm dark:prose-invert text-center">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
   
    </TracingBeam>
   
       </AuroraBackground>
     </div>
  );
}

const servicesContent = [
  {
    title: "AI Strategy & Advisory",
    description: (
      <>
        <p>
          Align AI initiatives with your business strategy for maximum value. Our experts provide comprehensive advisory services to help you integrate AI seamlessly into your operations, ensuring that your AI investments drive tangible results.
        </p>
      </>
    ),
    badge: "AI Strategy",
    image: "/demo.png",
  },
  {
    title: "Generative AI Solutions",
    description: (
      <>
        <p>
          Enhance creativity and problem-solving with AI-driven content and design. Our generative AI solutions empower your teams to create innovative products, marketing materials, and more, pushing the boundaries of what&apos;s possible.
        </p>
      </>
    ),
    badge: "Generative AI",
    image: "/demo.png",
  },
  {
    title: "Cloud Ops (AI Ops)",
    description: (
      <>
        <p>
          Secure and scalable cloud infrastructure optimized with Generative AI. We ensure your cloud operations are efficient, resilient, and capable of handling the demands of modern AI workloads.
        </p>
      </>
    ),
    badge: "Cloud Ops",
    image: "/demo.png",
  },
  {
    title: "Data Science Expertise",
    description: (
      <>
        <p>
          Turn data into actionable insights with analytics and predictive modeling. Our data science experts leverage advanced techniques to help you make informed decisions and stay ahead of the competition.
        </p>
      </>
    ),
    badge: "Data Science",
    image: "/demo.png",
  },
  {
    title: "AI Automation & Custom AI Agents",
    description: (
      <>
        <p>
          Streamline workflows and increase efficiency with tailored automation solutions. Our custom AI agents are designed to meet your specific business needs, automating repetitive tasks and enhancing productivity across your organization.
        </p>
      </>
    ),
    badge: "AI Automation",
    image: "/demo.png",
  },
  {
    title: "AI Training & Hiring",
    description: (
      <>
        <p>
          Corporate AI reskilling and hiring solutions. We offer training programs to upskill your workforce and provide managed services for hiring custom AI agents and human employees, ensuring you have the talent needed to drive your AI initiatives forward.
        </p>
      </>
    ),
    badge: "AI Training",
    image: "/demo.png",
  },
];
