import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import RemodelImage from "../components/RemodelImage"
import BentoGrid from './BentoGrid';
import Offer from './Offer';
import Footer from "../components/Footer"

const Services = () => {

  
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
    
  >
 <main className='pt-24'>

    <div className='  py-5'>
    
    <RemodelImage />

    </div>

    
    <div className='py-5'> 
      <Offer />
    </div>

    <div className='  py-5'>
    
   <BentoGrid />

    </div>

    <Footer />
    </main>

  </motion.div>
  )
}

export default Services
