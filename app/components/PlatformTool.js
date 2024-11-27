import React from "react";
import {
  FaPython,
  FaNodeJs,
  FaRust,
  FaReact,
} from "react-icons/fa";
import { SiGo, SiSupabase, SiVercel } from "react-icons/si";
// import { BsOpenai } from "react-icons/bs";
import { MdOutlineModelTraining } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
import { Meteors } from "@/components/ui/meteors";

const Tools = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bring your own models */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4 space-x-4">
            {/* <BsOpenai className="text-4xl text-white" /> */}
            <MdOutlineModelTraining className="text-4xl text-red-500" />
            <AiFillApi className="text-4xl text-yellow-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Bring your own models.
          </h3>
          <p className="text-gray-400 text-sm">
            Or, use any platform we support built-in: OpenAI, Groq, Mistral,
            OpenRouter, Together, Anyscale.
          </p>
          {/* <Meteors number={20} /> */}
        </div>

        {/* Bring your own voices */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4 space-x-4">
            {/* <BsOpenai className="text-4xl text-white" /> */}
            <SiVercel className="text-4xl text-blue-400" />
            <SiSupabase className="text-4xl text-green-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Bring your own voices.
          </h3>
          <p className="text-gray-400 text-sm">
            Or, use any platform we support built-in: ElevenLabs, PlayHT, LMNT,
            Deepgram, Cartesia, Rime, Azure.
          </p>
        </div>

        {/* Supported Programming Languages */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4 space-x-4">
            <FaPython className="text-4xl text-blue-500" />
            <FaNodeJs className="text-4xl text-green-400" />
            <FaRust className="text-4xl text-orange-500" />
            <SiGo className="text-4xl text-cyan-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Supported Programming Languages.
          </h3>
          <p className="text-gray-400 text-sm">
            Use any language you prefer: Python, Node.js, Rust, Go, and more.
          </p>
        </div>

        {/* Frameworks and Tools */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4 space-x-4">
            <FaReact className="text-4xl text-blue-500" />
            <SiSupabase className="text-4xl text-green-400" />
            <SiVercel className="text-4xl text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Frameworks and Tools.
          </h3>
          <p className="text-gray-400 text-sm">
            Seamlessly integrate with frameworks like React, Vercel, and Supabase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
