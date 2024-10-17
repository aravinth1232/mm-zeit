import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.jpg"
import {Link,useLocation} from "react-router-dom"
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaXmark, FaBars } from "react-icons/fa6";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";




const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { pathname } = useLocation();
    const currentPath = pathname.split("/")?.[1];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
  

    const navLinkClasses = (path) =>
      ` transition-all font-karla text-lg duration-300 ${
        path === currentPath
          ? "font-bold border-2  px-2 bg-black text-secondary rounded-full border-black   text-gray-800 "
          : "font-bold border-transparent border-2 text-primary px-2 hover:bg-black hover:rounded-full hover:text-secondary navactive"
      }`;

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
    <>
    <motion.header  
    initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }} 
      
    className={`fixed w-full top-0 z-40 transition-colors duration-300   ${
        isScrolled ? 'backdrop-blur-xl shadow-xl rounded-2xl font-bold text-teal-400' : 'bg-fourth'
      }`} >
        
    <div className='flex items-center justify-between  md:justify-around py-4 px-4 '>

      <div>
        <img
        className='w-10 h-10 lg:w-14 lg:h-14 rounded-full'
        src={logo} alt="logo" loading='lazy' />
    </div>
    
    <nav className='hidden md:flex gap-7 '>
        
    <Link to="/" className={navLinkClasses("")} >Home</Link>
    {/* <Link to="/about" className={navLinkClasses("about")} >About</Link> */}
    {/* <Link to="/products" >Products</Link>  */}
    <Link to="/services"  className={navLinkClasses("services")} >Services</Link>
    <Link to="/contact"  className={navLinkClasses("contact")} >Contact</Link>
    

    </nav>
    <div className="md:hidden flex items-center">
             <button
            onClick={toggleMenu}
            className="md:hidden text-gray-500 focus:outline-none"
          >
            {isMenuOpen ? (
              <FaXmark className="h-6 w-6 text-primary" />
            ) : (
              <FaBars className="h-6 w-6 text-primary" />
            )}
          </button>
          </div>

    </div>

    <div
        className={`
          md:hidden fixed top-16 right-0 w-64 h-screen
          bg-tertiary shadow-lg transform transition-transform duration-300 ease-in-out 
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"} 
          rounded-tl-lg
        `}
      >
        <nav className="py-4 flex flex-col gap-6 px-5 ">
          
        <Link 
        onClick={closeMenu}
        to="/" className={navLinkClasses("")} >Home</Link>
    {/* <Link to="/about" className={navLinkClasses("about")} >About</Link> */}
    {/* <Link to="/products" >Products</Link>  */}
    <Link
    onClick={closeMenu}

    to="/services"  className={navLinkClasses("services")} >Services</Link>
    <Link 
    onClick={closeMenu}
    to="/contact"  className={navLinkClasses("contact")}>Contact</Link>
    
        </nav>
      </div>

    
    </motion.header> 
     <div className=" relative flex items-center">
     <a 
       href="https://wa.me/1234567890"
       className="fixed bottom-14 right-3 md:bottom-4 md:right-4 bg-secondary text-primary p-3 lg:p-3  rounded-full shadow-lg flex items-center justify-center z-50 group"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Contact us on WhatsApp"
     >
      <IoChatbubbleEllipsesOutline className="w-6 h-6 lg:w-9 lg:h-9" />
       
       <span className="absolute left-0 bottom-0  transform -translate-x-full -translate-y-1/2 bg-secondary text-primary text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
         Let's Chat
       </span>
     </a>
   </div>
   </>
  )
}

export default Navbar
