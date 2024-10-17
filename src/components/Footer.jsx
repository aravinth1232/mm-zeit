import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary 
     pt-8 py-4 px-5 flex flex-col gap-6 md:gap-10 ">

    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4  ' >  
            <div className=' md:justify-self-end '>
                <h1 
                className='text-2xl text-secondary'
                >Motomod</h1>
            </div>
            <div 
            className='md:col-start-3 md:col-end-4 flex flex-col gap-3   text-xl justify-self-center font-karla'
            >
            <Link to="/" className='text-tertiary hover:text-secondary font-karla'>Home</Link>
            <Link to="/about" className='text-tertiary hover:text-secondary'>About</Link>
            <Link to="/products" className='text-tertiary hover:text-secondary' >Products</Link> 
            </div>
            
           
            <div className="  col-start-1 col-end-3 md:col-start-4 md:col-end-5  justify-self-center md:place-self-center  flex space-x-4  gap-4">
                    <a href="#" className='text-tertiary hover:text-secondary'>
                        <FaFacebookF className='w-6 h-6' />
                    </a>
                    <a href="#" className='text-tertiary hover:text-secondary'>
                        <FaTwitter className='w-6 h-6' />
                    </a>
                    <a href="#" className='text-tertiary hover:text-secondary'>
                        <FaInstagram  className='w-6 h-6'/>
                    </a>
                    <a href="#" className='text-tertiary hover:text-secondary'>
                        <FaLinkedinIn  className='w-6 h-6'/>
                    </a>
         
            </div>
    </div>
    <div className=" border-t border-secondary pt-4 text-center font-inconsolata">
          <p className="text-md text-tertiary">&copy; 2024 Motomod | Zeit | All rights reserved  </p>
        </div>
    </footer>
  );
};

export default Footer;
