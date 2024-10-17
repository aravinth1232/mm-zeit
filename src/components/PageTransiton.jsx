import React from 'react'
import { motion } from 'framer-motion';

const customEasing = [0.34, 1.56, 0.64, 1];

const PageTransiton = ({children}) => {
  return (

    <>
    {/* <motion.div className= 'z-30 bg-black w-[98w] mx-auto h-screen absolute top-0 left-0 ' 
    initial={{ top: "100vh" }}
    enter={{ top:"100vh" }}
    exit={{ top: 0 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    /> */}
{/* <motion.div
        className="fixed inset-0  bg-primary z-0"
        initial={{ opacity: 1, scaleX: 0.7 }}
        animate={{ opacity: 1,scaleX: 0 }}
        exit={{ opacity: 1, scaleX: 0.7 }}
        transition={{ duration: 1 }}
      /> */}
      <motion.div
        className="fixed inset-0  bg-tertiary z-30"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 0 }}
        exit={{ opacity: 1, scaleX: -1 }}
        transition={{ duration: 0.7 , ease: customEasing}}
      />
  
          <motion.div
    // initial={{ translateY : 0,  opacity: 0, x: -100,  backgroundColor: '#000000' }}
    // animate={{ translateY : 1, opacity: 1, x: 0,  backgroundColor: '#ffffff' }}
    // exit={{ translateY : 0, opacity: 0, x: 100,  backgroundColor: '#000000' }}
    // transition={{ 
    //   ease : "linear",
    //   duration: 0.5,
    //   type: 'spring', damping: 1000, }}
    initial={{ opacity: 0, translateX: -100 }}
    animate={{ opacity: 1, translateX: 0 }}
    exit={{ opacity: 0, translateX: 100 }}
    // transition={{ duration: 0.5 }}
    transition={{ duration: 0.7, ease: customEasing }}

    className='z-20 relative'
   
  >
        {children}

  </motion.div>
  
  </>
  )
}

export default PageTransiton
