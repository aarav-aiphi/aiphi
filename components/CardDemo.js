import { HoverEffect } from "./ui/card-hover-effect";
import { Meteors } from "./ui/meteors";
export function CardHoverEffectDemo() {
  return (
    <>
      {/* Heading Section */}
      <div className="max-w-5xl mx-auto px-8 text-center my-10">
        <h1 className="text-5xl font-extrabold text-purple-500 pt-16">
          Artisan For Enterprise
        </h1>
        <p className="mt-4 text-lg text-white">
          We&apos;re building the next generation of outbound software: all-in-one and AI-first. The days of a 15-product stack centered around Outreach or SalesLoft are over.
        </p>
        <button className="mt-6 inline-flex items-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          <span>Talk to Sales</span>
          {/* Icon */}
        
        </button>
        {/* <Meteors number={20} /> */}
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      
      </div>
    </>
  );
}

export const projects = [
  {
    title: "Consolidate Your Fragmented Stack",
    description:
      "We consolidate every tool your team needs for outbound with best-in-class products - from B2B Data to Email Warmup.",
    link: "/features/consolidate-stack", // Update with actual route or external link
    icon: (
      <svg
        className="w-8 h-8 text-purple-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    title: "Free Reps to Focus on High-Leverage Work",
    description:
      "Ava automates over 80% of your BDRs' outbound workflow, and does it more effectively. This frees up your reps so they focus on high-leverage activities like calling prospects and closing deals.",
    link: "/features/free-reps", // Update with actual route or external link
    icon: (
      <svg
        className="w-8 h-8 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Automate Your Best Manual Strategies",
    description:
      "Automatically detect intent signals across our data sources to identify high-value leads and instantly enroll them in tailored outbound campaigns.",
    link: "/features/automate-strategies", // Update with actual route or external link
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];
