'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Carousel } from "./components/carousel";
import Sections from "./components/Section";
import HorizontalScroll from "./components/HorizontalScroll";
import Features from "./components/Features";
import Particles from "./components/Particles";
import ToolScroll from "./components/ToolScroll";
import AllTools from "./components/alltools";
import Hero from "./components/hero";
import { GlobeDemo } from "../components/Globedemo";
import { StickyScrollRevealDemo } from "@/components/stickyscroll";
import { TracingBeamDemo } from "@/components/TracingDemo";
import { WavyBackground } from "@/components/ui/wavy-background";
import { GlareCardDemo } from "@/components/Glaredemo";
import { CardHoverEffectDemo } from "@/components/CardDemo";
import Tools from "./components/PlatformTool";
import { LampDemo } from "@/components/Lamps";

export default function Home() {
  const timelineRef = useRef(null);

  // Track the scroll progress within the timeline section
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to height percentage
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
  
    <div className="bg-[#07071c] min-h-screen text-gray-200">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-lg fixed w-full bg-[#07071c] z-50">
        <div className="text-2xl font-bold text-white">
          <span className="text-purple-600">Aiphi</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-300 font-medium hover:text-white">
            Products
          </a>
          <a href="#" className="text-gray-300 font-medium hover:text-white">
            Solutions
          </a>
          <a href="#" className="text-gray-300 font-medium hover:text-white">
            Resources
          </a>
          <a href="#" className="text-gray-300 font-medium hover:text-white">
            Pricing
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 font-medium hover:text-white">
            Login
          </button>
          <button className="bg-purple-600 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition">
            Book A Demo
          </button>
        </div>
      </nav>

      {/* Spacer to account for fixed navbar height */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <Hero />

      <div className="mt-10">
        <div className="text-center font-semibold">
          <h1 className="text-3xl ">Trusted by Big Companies</h1>
        </div>

        <ToolScroll />
      </div>

      {/* Glare Card Demo */}
      <GlareCardDemo />

      {/* Main Content */}
      <div className="mt-10">
        <Carousel />

        <div className="mt-10">
          <Sections />
        </div>

        <Features />
        <WavyBackground/>
        <TracingBeamDemo />

        {/* Uncomment if needed */}
      
        {/* <StickyScrollRevealDemo/> */}
 
        {/* <div className="">
          <GlobeDemo />
        </div> */}

      </div>
    </div>
    <div className="bg-gray-900">
         <LampDemo/>
    <CardHoverEffectDemo/>

 
    {/* <Tools/> */}
   </div>
   
      </>
  );
}
