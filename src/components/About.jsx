import React, { useEffect } from 'react'
import { motion } from 'framer-motion';

const About = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <motion.div
    initial={{ opacity: 0, x: -100,  backgroundColor: '#000000' }}
    animate={{ opacity: 1, x: 0,  backgroundColor: '#ffffff' }}
    exit={{ opacity: 0, x: 100,  backgroundColor: '#000000' }}
    transition={{ duration: 0.5 }}
    className='z-20'
    // style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <h1>about</h1> 
    

  </motion.div>
  )
}

export default About
