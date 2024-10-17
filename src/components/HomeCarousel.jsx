import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../assets/homeimage.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


import '../../src/App.css';

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';



const Homebutton = () =>{


  const navigate = useNavigate();

  return (
    <div className='mt-9' >
    <button className=" relative inline-block px-6 py-3 font-bold text-secondary bg-primary rounded-full hover:text-primary  overflow-hidden group" 
    onClick={()=>{
      navigate('/services')
    }}
    >
<span className="relative z-10">Upgrade Now</span>

{/* Background */}
<span className="absolute inset-0 w-full h-full bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out origin-left"></span>
</button>
    </div>
  )
}


const HomeCarousel = () => {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        autoplay={{
            delay: 1000, // Time in milliseconds between slides (3000ms = 3 seconds)
            disableOnInteraction: false, // Keeps autoplay running even if the user interacts with the carousel
          }}
        modules={[Parallax, Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg "
          style={{
            backgroundImage:
              `url(${img1})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className='backdrop-blur-[2px] lg:backdrop-blur-sm px-12 py-14 lg:px-24 '>
          <div className="title text-2xl md:text-4xl font-bold pb-2 text-gray-800 backdrop-blur-[2px] lg:backdrop-blur-sm"   data-swiper-parallax="-300">
          Transform Your Ride
          </div>
          <div className="subtitle text-xl md:text-2xl font-medium pb-7 text-slate-200 backdrop-blur-[2px] lg:backdrop-blur-sm" data-swiper-parallax="-200">
          Customize your bike to match your style
          </div>
          <div className="text text-lg md:text-xl font-normal  max-w-md  text-slate-50 backdrop-blur-[2px] lg:backdrop-blur-sm " data-swiper-parallax="-100">
            <p>
            Whether you're looking for a vintage makeover, modern upgrades, or a complete overhaul, our bike remodeling services will transform your ride into a unique work of art. Let's create something extraordinary together.
            </p>     
          </div>

          <Homebutton />

        </SwiperSlide>
        <SwiperSlide className='backdrop-blur-[2px] lg:backdrop-blur-sm px-12 py-14 lg:px-24' >
          <div className="title text-2xl md:text-4xl font-bold pb-2 text-gray-800 backdrop-blur-[2px] lg:backdrop-blur-sm" data-swiper-parallax="-300">
          Handcrafted Perfection
          </div>
          <div className="subtitle text-xl md:text-2xl font-medium pb-7 text-slate-200 backdrop-blur-[2px] lg:backdrop-blur-sm" data-swiper-parallax="-200">
          Experienced mechanics and designers
          </div>
          <div className="text text-lg md:text-xl font-normal  max-w-md  text-slate-50 backdrop-blur-[2px] lg:backdrop-blur-sm" data-swiper-parallax="-100">
            <p>
            Our team of expert mechanics and designers specialize in crafting bespoke bike remodels. With years of experience and a passion for motorcycles, we ensure that every detail is meticulously crafted to achieve the perfect finish.
            </p>
          </div>
          <Homebutton />
        </SwiperSlide>

        <SwiperSlide className='backdrop-blur-[2px] lg:backdrop-blur-sm px-12 py-14 lg:px-24'>
          <div className="title text-2xl md:text-4xl font-bold pb-2 text-gray-800 backdrop-blur-[2px] lg:backdrop-blur-sm" data-swiper-parallax="-300">
          Speed and Style
          </div>
          <div className="subtitle text-xl md:text-2xl font-medium pb-7 text-slate-200 backdrop-blur-[2px] lg:backdrop-blur-sm" data-swiper-parallax="-200">
          Boost your bike's performance
          </div>
          <div className="text text-lg md:text-xl font-normal  max-w-md  text-slate-50 backdrop-blur-[2px] lg:backdrop-blur-sm" data-swiper-parallax="-100">
            <p>
            Not just aesthetics, we also offer performance enhancements for your motorcycle. Upgrade your engine, suspension, and brakes to experience superior speed and control, all while maintaining a stylish, eye-catching design.
            </p>
          </div>
          <Homebutton />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default HomeCarousel
