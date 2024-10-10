import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.jpg"
import {Link} from "react-router-dom"
import { motion } from 'framer-motion';




const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
      window.scrollTo(0, 0);
      
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


  return (
    <motion.header  
    initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }} 
      
    className={`fixed w-full top-0 z-50 transition-colors duration-300  ${
        isScrolled ? 'backdrop-blur-xl shadow-xl rounded-2xl font-bold' : 'bg-white '
      }`} >
        <div className='flex items-center justify-around py-4 px-4 '>

    <div>
        <img
        className='w-10 h-10 lg:w-14 lg:h-14 rounded-full'
        src={logo} alt="logo" loading='lazy' />
    </div>
    
    <nav className='flex gap-7 text-lg'>
        
    <Link to="/" >Home</Link>
    <Link to="/about" >About</Link>
    {/* <Link to="/products" >Products</Link>  */}
    <Link to="/services" >Services</Link>   

    </nav>
    </div>
    </motion.header>    
  )
}

export default Navbar
