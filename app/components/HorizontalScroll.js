// components/HorizontalScroll.js
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const horizontalSections = [
  {
    id: 1,
    title: 'Innovative Solutions',
    description:
      'Discover our innovative solutions designed to streamline your business processes and enhance productivity.',
    image: '/demo.png',
  },
  {
    id: 2,
    title: 'Creative Design',
    description:
      'Our creative design team crafts visually stunning and user-friendly interfaces tailored to your needs.',
    image: '/demo.png',
  },
  {
    id: 3,
    title: 'Robust Development',
    description:
      'Leverage our robust development services to build scalable and efficient applications.',
    image: '/demo.png',
  },
  {
    id: 4,
    title: 'Reliable Support',
    description:
      'Experience unparalleled support with our dedicated team ready to assist you 24/7.',
    image: '/demo.png',
  },
];

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  // Track the vertical scroll progress relative to this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  // Function to handle previous and next
  const handleScroll = (direction) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollAmount = container.clientWidth;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Optional: Prevent vertical scrolling within the horizontal container
  useEffect(() => {
    const container = containerRef.current;
    const onWheel = (e) => {
      e.preventDefault();
      container.scrollBy({ left: e.deltaY, behavior: 'auto' });
    };

    if (container) {
      container.addEventListener('wheel', onWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', onWheel);
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen">
      {/* Sticky Container */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center bg-white">
        {/* Navigation Buttons */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-8 bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Scroll Left"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-8 bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Scroll Right"
        >
          <FaArrowRight />
        </button>

        {/* Horizontal Scroll Container */}
        <motion.div
          ref={containerRef}
          className="flex space-x-8 px-8 scrollbar-hide snap-x snap-mandatory"
          style={{ x }}
        >
          {horizontalSections.map((section, index) => (
            <motion.div
              key={section.id}
              className="min-w-full flex-shrink-0 flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-lg p-8 snap-start"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 relative">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
                <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                <p className="mt-4 text-gray-600">{section.description}</p>
                <button className="mt-6 px-5 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div className="fixed bottom-4 left-0 w-full flex justify-center">
        <motion.div className="w-3/4 h-2 bg-gray-300 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-purple-500"
            style={{ scaleX: scrollYProgress }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ ease: 'linear', duration: 0.2 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HorizontalScroll;
