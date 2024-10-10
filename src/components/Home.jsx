import React, { useEffect }  from 'react'
import { motion } from 'framer-motion';
import HomeCarousel from './HomeCarousel';
import WhyUs from './WhyUs';
// import FeaturedProjects from './FeaturedProjects';
import HorizontalCarousel from './FeaturedProjects';
import Testimonials from './Testimonials';
import Footer  from '../components/Footer';


const Home = () => {

  
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

    <div className=' lg:h-[500px]' >
    <HomeCarousel />
    </div>
    
    <div className='pb-14'>
      <WhyUs />

    </div>
    
    <div className='pb-14'>
      <HorizontalCarousel />

    </div>
    
    <div className=''>
      <Testimonials />
    </div>

    <Footer />

    </main>

    </motion.div>
  )
}

export default Home
