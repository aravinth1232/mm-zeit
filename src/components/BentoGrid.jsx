import React, { useEffect } from 'react';
import {motion} from "framer-motion"
import img1 from "../assets/g1.png"
import img2 from "../assets/g2.png"
import img3 from "../assets/g3.png"
import img4 from "../assets/g4.png"
import img5 from "../assets/g5.png"


 
const BentoGrid = () => {
    

  return (
     

<div className='bg-gray-800 mx-3 rounded-lg flex flex-col gap-6 py-5'>
    <h1 className='  self-center text-3xl lg:text-4xl text-white px-4 '>Featured Projects
    </h1>

<div className='grid grid-cols-4  new1 px-4 py-6 gap-3  justify-items-center   '>

{/* 1 */}
<motion.div
         initial={{ scale: 1, x: 0, }} // Initial state
         whileHover={{ scale: 1, x: 20 }} // Scale and move to the right on hover
          whileTap={{ scale: 1 }} // Optional tap effect
          animate={{ x: [0, 20, 0] }} // Create an up and down effect continuously
          transition={{
            duration: 1,
            repeat: 1,
            ease: "easeInOut"
          }}
        className='new1 col-start-1 col-end-3 rounded-xl'>
        <div className='new1 w-full'>
          <img
            
            className='new1 bg-white w-full h-32 lg:h-96 mx-auto object-contain rounded-lg px-2 py-1'
            src={img1}
            alt=""
          />
        </div>
</motion.div>
{/* 2 */}
<motion.div 
     initial={{ scale: 1, x: 0, }} // Initial state
     whileHover={{ scale: 1, x: -20,duration:0.5 }} // Scale and move to the right on hover
      whileTap={{ scale: 1 }} // Optional tap effect
      animate={{ x: [0, -20, 0] }} // Create an up and down effect continuously
      transition={{
        duration: 1,
        repeat: 1,
        ease: "easeInOut"
      }}
   

className='new1 col-start-3 col-end-5  '>
        <div className=' new1 w-full h-full'>
            <img
            className='new1 w-full bg-white lg:h-96 h-32 object-contain rounded-lg px-2 py-1'
            src={img2} alt="" />
        </div>


    </motion.div>
{/* 3 */}
            <motion.div 
                
            initial={{ scale: 1, x: 0, }} // Initial state
            whileHover={{ scale: 1, x: 20 }} // Scale and move to the right on hover
            whileTap={{ scale: 1 }} // Optional tap effect
            animate={{ x: [0, -20, 0] }} // Create an up and down effect continuously
            transition={{
            duration: 1,
            repeat: 1,
            ease: "easeInOut"
            }}

            className='new1 col-start-1 col-end-3  overflow-hidden'>
        <div className=' new1 w-full h-full '>
            <img 
            className='new1 w-full h-32  lg:h-96 bg-white  object-contain rounded-lg px-2 py-1'
            src={img3} alt="" />
        </div>

    </motion.div>
{/* 4 */}
<motion.div 
initial={{ scale: 1, x: 0, }} // Initial state
whileHover={{ scale: 1, x: -20 }} // Scale and move to the right on hover
 whileTap={{ scale: 1 }} // Optional tap effect
 animate={{ x: [0, -20, 0] }} // Create an up and down effect continuously
 transition={{
   duration: 1,
   repeat: 1,
   ease: "easeInOut"
 }}

className='new1 col-start-3 col-end-5 '>
        <div className=' new1 w-full h-full overflow-hidden'>
            <img 
            className='new1 w-full bg-white h-32 lg:h-96 object-contain rounded-lg px-2 py-1'
            src={img4} alt="" />
        </div>

    </motion.div>
{/* 5 */}    
    <motion.div 
     initial={{ scale: 1, x: 0, }} // Initial state
     whileHover={{ scale: 1.05, x: 16, width: "50%" }} // Scale and move to the right on hover
      whileTap={{ scale: 1 }} // Optional tap effect
      animate={{ x: [0, -20, 0] }} // Create an up and down effect continuously
      transition={{
        duration: 1,
        repeat: 1,
        ease: "easeInOut"
      }}
    className='new1 row-start-2  row-end-3 col-start-1 col-end-5 '>
        <div className=' new1 w-full '>
            <img 
            className='new1 w-full h-28 bg-white  lg:h-72  object-contain rounded-lg px-2 py-1'
            src={img5} alt="" />
        </div>

    </motion.div>

</div>

</div>

  );
};

export default BentoGrid;
