import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorTrail = () => {
  const [cursorPos, setCursorPos] = useState({ x: 1, y: 2 });
  
  // Motion values for smooth animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring transition for the cursor trail
  const springConfig = { damping: 25, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update motion values based on cursor position
  useEffect(() => {
    x.set(cursorPos.x);
    y.set(cursorPos.y);
  }, [cursorPos.x, cursorPos.y, x, y]);

  return (
    <>
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 80,
        height: 80,
        backgroundColor: 'transparent',
        backdropFilter: 'blur(2px)',
        borderColor:"black",
        borderRadius: '50%',
        x: xSpring,
        y: ySpring,
        pointerEvents: 'none', // Prevents the dot from blocking mouse interactions
        zIndex: 1000, // Make sure it stays above other elements
      }}
    />
    {/* <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        backgroundColor: 'black',
        backdropFilter: 'blur(2px)',
        borderColor:"black",
        borderRadius: '50%',
        x: xSpring,
        y: ySpring,
        pointerEvents: 'none', // Prevents the dot from blocking mouse interactions
        zIndex: 1000, // Make sure it stays above other elements
      }}
    /> */}
  </>
  );
};

export default CursorTrail;
