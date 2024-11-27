// components/About.js
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaBullhorn, FaSearch, FaLaptopCode, FaPenNib } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import ScrollIcon from './ScrollIcon'; // Ensure this path is correct based on your project structure

const sections = [
  {
    id: 1,
    title: 'Create A Campaign',
    description:
      'With campaigns, you decide who Ava targets, what she’s pitching, and what messaging & language she targets them with.',
    image: '/demo.png',
    icon: <FaBullhorn />,
  },
  {
    id: 2,
    title: 'Ava Finds You Leads',
    description:
      'Ava identifies leads that match your targeting criteria with her international B2B database that has over 300M contacts in over 200 countries.',
    image: '/demo.png',
    icon: <FaSearch />,
  },
  {
    id: 3,
    title: 'Ava Researches Leads',
    description:
      'Ava scrapes the web and her database for relevant intent signals, such as fundraising announcements, Google searches, and hiring news.',
    image: '/demo.png',
    icon: <FaLaptopCode />,
  },
  {
    id: 4,
    title: 'Ava Ghostwrites Hyper-Personalized Emails',
    description:
      'Using our Personalization Waterfall, Ava identifies the optimal personalization approach for each lead, referencing social media posts, website visits, and much more.',
    image: '/demo.png',
    icon: <FaPenNib />,
  },
];

const About = () => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef, // Tracks the scroll progress of the About container
    offset: ['start start', 'end end'], // Map the scroll progress from start to end of the container
  });

  // Create a smooth spring animation for the scroll progress
  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Determine the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const selected = sectionRefs.current.findIndex((ref) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });
      setActiveSection(selected !== -1 ? selected : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-row items-stretch justify-center p-8 bg-gradient-to-b from-white to-gray-100"
    >
      {/* Vertical Line and Icons Container */}
      <div className="flex flex-col items-center mr-8 relative w-10">
        {/* Animated Vertical Line */}
        <motion.div
          style={{
            scaleY: lineHeight,
            transformOrigin: 'top',
          }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[4px] bg-gradient-to-b from-purple-500 to-indigo-500 rounded h-full"
        ></motion.div>

        {/* Icons Along the Line */}
        <div className="flex flex-col items-center space-y-24 mt-4">
          <IconContext.Provider value={{ size: '24px' }}>
            {sections.map((section, index) => (
              <ScrollIcon
                key={section.id}
                section={section}
                index={index}
                scrollYProgress={scrollYProgress}
                totalSections={sections.length}
                scrollToSection={scrollToSection}
                activeSection={activeSection}
              />
            ))}
          </IconContext.Provider>
        </div>
      </div>

      {/* Sections Content */}
      <div className="w-full max-w-4xl space-y-24">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`flex flex-col md:flex-row items-center mx-auto space-y-6 md:space-y-0 md:space-x-6 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Image Section */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={section.image}
                alt={section.title}
                width={300}
                height={300}
                className="rounded-lg shadow-lg object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Text Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
              <button className="px-5 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
                Talk to Sales
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
