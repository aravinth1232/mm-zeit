import React, { useEffect, useRef, useState } from 'react';
import { motion,useCycle } from 'framer-motion';
import img1 from "../assets/g2.png"
import img2 from "../assets/g4.png"
import img3 from "../assets/g1.png"
// Example images (replace these URLs with your actual images)
const images = [
    img3,
    img1,
    img2,
    img3,
    img1,
    img2,
];
const HorizontalScroll = () => {

    const [direction, cycleDirection] = useCycle('left', 'right');

    return (
        <div className="overflow-hidden w-full flex items-center">
        <motion.div
          className="flex"
          animate={{
            x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'linear',
            repeatType: 'loop',
          }}
          onClick={() => cycleDirection()} // Changes direction when clicked
        >
          {/* Repeat images for a seamless loop */}
          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="w-64 h-60 object-cover mr-4"
            />
          ))}
        </motion.div>
      </div>
    );
  };
  
  export default HorizontalScroll;