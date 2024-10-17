import React, { useEffect }  from 'react'
import { motion } from 'framer-motion';
import HomeCarousel from './HomeCarousel';
import WhyUs from './WhyUs';
// import FeaturedProjects from './FeaturedProjects';
import HorizontalCarousel from './FeaturedProjects';
import Testimonials from './Testimonials';
import Footer  from '../components/Footer';
import PageTransiton from './PageTransiton';
import BikeScene from './BikeScene';
import { FaWhatsapp } from 'react-icons/fa';


const Home = () => {

  
  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);


  return (
<>

    <PageTransiton >
  
    <main className='pt-16 lg:pt-24 bg-fourth'>

    <div className=' h-screen ' >
    <HomeCarousel />
    </div>
    
    <div className=''>
      <WhyUs />

    </div>
    
    {/* <div className='pb-14'>
      <HorizontalCarousel />

    </div> */}
    
    <div className=''>
      <Testimonials />
    </div>
    
    {/* <div>
      <BikeScene />
    </div> */}
    <Footer />

    </main>
    </PageTransiton>  
    </>
  
  )
}

export default Home
