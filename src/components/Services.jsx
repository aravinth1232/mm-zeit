import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import RemodelImage from "../components/RemodelImage"
import BentoGrid from './BentoGrid';
import Offer from './Offer';
import Footer from "../components/Footer"
import ProductGrid from './ProductGrid';
import PageTransiton from './PageTransiton';

const Services = () => {

  
  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);


  return (
    
    <PageTransiton >

 <main className='pt-24'>

    <div className='  '>
    
    <RemodelImage />

    </div>

    
    <div className=''> 
      <Offer />
    </div>

    <div className='  '>
     {/* <BentoGrid /> */}

     <ProductGrid />

    </div>

    <Footer />
    </main>
    </PageTransiton>
  )
}

export default Services
