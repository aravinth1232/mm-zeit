import React from 'react'
import { motion } from 'framer-motion';
import RemodelImage from "../components/RemodelImage"

const Products = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: -100,  backgroundColor: '#000000' }}
    animate={{ opacity: 1, x: 0,  backgroundColor: '#ffffff' }}
    exit={{ opacity: 0, x: 100,  backgroundColor: '#000000' }}
    transition={{ duration: 0.5 }}
    className='z-20'
    
  >
     <main className='pt-24'>

    <div className='border-black border-2  py-5'>
  
  

  <RemodelImage />

</div>

</main>

  </motion.div>
  )
}

export default Products
