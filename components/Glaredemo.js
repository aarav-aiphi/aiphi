import { GlareCard } from "./ui/glare-card";
import { FaChartLine, FaCog, FaArrowsAlt } from "react-icons/fa";

export function GlareCardDemo() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Data-Driven Insights Card */}
        <GlareCard className="flex flex-col items-center justify-center text-center">
          <FaChartLine
            size={64}
            className="text-blue-500 mb-4"
            aria-label="Data-Driven Insights Icon"
          />
          <h3 className="text-2xl font-semibold text-white">
            Data-Driven Insights
          </h3>
          <p className="mt-3 text-gray-200">
            Harness AI to gain actionable insights and predict trends, optimizing decision-making processes.
          </p>
        </GlareCard>

        {/* Efficiency & Automation Card */}
        <GlareCard className="flex flex-col items-center justify-center text-center">
          <FaCog
            size={64}
            className="text-green-500 mb-4"
            aria-label="Efficiency & Automation Icon"
          />
          <h3 className="text-2xl font-semibold text-white">
            Efficiency & Automation
          </h3>
          <p className="mt-3 text-gray-200">
            Automate tasks with AI to improve efficiency, freeing up resources for innovation and growth.
          </p>
        </GlareCard>

        {/* Scalability & Flexibility Card */}
        <GlareCard className="flex flex-col items-center justify-center text-center">
          <FaArrowsAlt
            size={64}
            className="text-purple-500 mb-4"
            aria-label="Scalability & Flexibility Icon"
          />
          <h3 className="text-2xl font-semibold text-white">
            Scalability & Flexibility
          </h3>
          <p className="mt-3 text-gray-200">
            AI offers scalable solutions adaptable to business growth, ensuring flexibility and resilience.
          </p>
        </GlareCard>
      </div>
    </div>
  );
}
