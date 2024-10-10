
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import svgImage from '../assets/blob.svg';

	
const content = [
  {
    title: 'Custom Bike Builds',
    description:
    "Transform your vision into reality with our custom bike build services. Whether you're looking for a complete overhaul or a unique design to match your personality, our expert team will work with you to create a bike that stands out."
  },
  {
    title: 'Performance Upgrades',
    description:
      'Take your bike to the next level with our performance upgrade services. From improved suspension to faster gearing, we ensure your bike delivers optimal performance on any terrain.'
  },
  {
    title: 'Restoration Services',
    description:
      "Breathe new life into your classic or vintage bike with our restoration services. Our team specializes in restoring bikes to their former glory, preserving both style and functionality."
  },
];


const Offer = () => {
  const sectionRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.5 });
  const controls = useAnimation();
  const titleControls = useAnimation();
  const itemsControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } });
      titleControls.start({ x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } });
      itemsControls.start((i) => ({
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: i * 0.2, ease: 'easeOut' },
      }));
    } else {
      controls.start({ opacity: 0 });
      titleControls.start({ x: 50, opacity: 0 });
      itemsControls.start((i) => ({
        x: 50,
        opacity: 0,
      }));
    }
  }, [inView, controls, titleControls, itemsControls]);

  return (
    <motion.div
      ref={(node) => {
        sectionRef.current = node;
        inViewRef(node);
      }}
      initial={{ opacity: 0 }}
      animate={controls}
      className="relative bg-gradient-to-br from-gray-600 via-gray-900 to-gray-300  p-8 lg:p-16 text-white rounded-md overflow-hidden"
    >
      {/* SVG Mask */}
      <img
        src={svgImage}
        alt="SVG Mask"
        className="absolute top left-2 lg:left-[80%] w-1/4 h-auto opacity-40 z-0"
        style={{ transform: 'translate(-10%, -10%)' }}
      />
      <motion.h2
        ref={sectionRef}
        initial={{ x: 50, opacity: 0 }}
        animate={titleControls}
        className="text-4xl font-bold mb-6 relative z-10"
      >
        What we Offer 
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 relative z-10">
        {content.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ x: 50, opacity: 0 }}
            animate={itemsControls}
            className="backdrop-blur-md flex flex-col justify-start items-start gap-5 shadow-lg rounded-lg px-4 py-6"
          >
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-lg">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Offer;

