import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-8 py-4 px-5 flex flex-col gap-6 md:gap-10 ">

    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4  ' >  
            <div className=' md:justify-self-end '>
                <h1 
                className='text-2xl'
                >Motomod</h1>
            </div>
            <div 
            className='md:col-start-3 md:col-end-4 flex flex-col gap-3   text-xl justify-self-center'
            >
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/products" >Products</Link> 
            </div>
            
           
            <div className="  col-start-1 col-end-3 md:col-start-4 md:col-end-5  justify-self-center md:place-self-center  flex space-x-4   gap-4">
                    <a href="#" className="hover:text-indigo-400">
                        <FaFacebookF className='w-6 h-6' />
                    </a>
                    <a href="#" className="hover:text-indigo-400">
                        <FaTwitter className='w-6 h-6' />
                    </a>
                    <a href="#" className="hover:text-indigo-400">
                        <FaInstagram  className='w-6 h-6'/>
                    </a>
                    <a href="#" className="hover:text-indigo-400">
                        <FaLinkedinIn  className='w-6 h-6'/>
                    </a>
         
            </div>
    </div>
    <div className=" border-t pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Motomod | Zeit | All rights reserved  </p>
        </div>
    </footer>
  );
};

export default Footer;
