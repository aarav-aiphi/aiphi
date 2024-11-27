// components/ScrollIcon.js
import React from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';

const ScrollIcon = ({
  section,
  index,
  scrollYProgress,
  totalSections,
  scrollToSection,
  activeSection,
}) => {
  const threshold = (index + 1) / (totalSections + 1); // Adjusted to prevent the last icon from being placed at 100%

  // Define when the icon should start appearing
  const opacity = useTransform(
    scrollYProgress,
    [threshold - 0.1, threshold],
    [0, 1]
  );
  const scale = useTransform(
    scrollYProgress,
    [threshold - 0.1, threshold],
    [0.8, 1]
  );

  return (
    <motion.div
      className="relative cursor-pointer group"
      onClick={() => scrollToSection(index)}
      style={{
        top: `${(index / (totalSections - 1)) * 100}%`,
        opacity, // Apply motion values here
        scale,   // Apply motion values here
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter') scrollToSection(index);
      }}
      aria-label={`Scroll to ${section.title}`}
    >
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-full shadow-md transition-all ${
          activeSection === index
            ? 'bg-white text-purple-500'
            : 'bg-purple-500 text-white'
        }`}
      >
        {section.icon}
      </div>
      {/* Tooltip */}
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {section.title}
      </div>
    </motion.div>
  );
};

export default ScrollIcon;
