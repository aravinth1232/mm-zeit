// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import svgImage from '../assets/blob (1).svg';

// gsap.registerPlugin(ScrollTrigger);

// const content = [
//   {
//     title: 'High-Quality Craftsmanship',
//     description:
//       'We pride ourselves on delivering top-notch craftsmanship with attention to detail. Our experienced technicians ensure each bike is remodeled with precision, using the best materials and techniques available.'
//   },
//   {
//     title: 'Personalized Designs',
//     description:
//       'Your bike, your style! We work closely with you to create a custom look that matches your personality and preferences. From color schemes to unique modifications, every detail is tailored to your vision.'
//   },
//   {
//     title: 'Experienced Team',
//     description:
//       "With over 10 years of experience in bike remodeling, our team knows how to transform any bike, whether it's vintage, modern, or custom."
//   },
// ];

// const WhyUs = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const itemsRef = useRef([]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     window.onbeforeunload = () => {
//       window.scrollTo(0, 0);
//     };
//   }, []);

//   useEffect(() => {
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0 },
//       {
//         opacity: 1,
//         duration: 1.5,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 75%',
//           end: 'bottom 25%',
//           toggleActions: 'play reverse play reverse',
//           scrub: 1,
//         },
//       }
//     );

//     gsap.fromTo(
//       titleRef.current,
//       { x: 50, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         delay: 0.2,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 50%',
//           toggleActions: 'play reverse play reverse',
//           scrub: 1,
//         },
//       }
//     );

//     itemsRef.current.forEach((item, index) => {
//       gsap.fromTo(
//         item,
//         { x: 50, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 1,
//           delay: index * 0.2,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: item,
//             start: 'top 85%',
//             toggleActions: 'play reverse play reverse',
//             scrub: 1,
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="relative bg-gradient-to-br from-gray-900 via-gray-600 to-gray-300 p-8 lg:p-16 text-white rounded-md overflow-hidden"
//     >
//       {/* SVG Mask */}
//       <img
//         src={svgImage}
//         alt="SVG Mask"
//         className="absolute top left-2 lg:left-[80%] w-1/4 h-auto opacity-40 z-0"
//         style={{ transform: 'translate(-10%, -10%)' }}
//       />
//       <h2 ref={titleRef} className="text-4xl font-bold mb-6 relative z-10">
//         Why Motomod?
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 relative z-10">
//         {content.map((item, index) => (
//           <div
//             key={index}
//             ref={(el) => (itemsRef.current[index] = el)}
//             className="backdrop-blur-md flex flex-col justify-start items-start gap-5 shadow-lg rounded-lg px-4 py-6"
//           >
//             <h3 className="text-2xl font-semibold">{item.title}</h3>
//             <p className="text-lg">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyUs;

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import svgImage from '../assets/blob (1).svg';

const content = [
  {
    title: 'High-Quality Craftsmanship',
    description:
      'We pride ourselves on delivering top-notch craftsmanship with attention to detail. Our experienced technicians ensure each bike is remodeled with precision, using the best materials and techniques available.',
  },
  {
    title: 'Personalized Designs',
    description:
      'Your bike, your style! We work closely with you to create a custom look that matches your personality and preferences. From color schemes to unique modifications, every detail is tailored to your vision.',
  },
  {
    title: 'Experienced Team',
    description:
      "With over 10 years of experience in bike remodeling, our team knows how to transform any bike, whether it's vintage, modern, or custom.",
  },
];

const WhyUs = () => {
  const sectionRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.5 });
  const controls = useAnimation();
  const titleControls = useAnimation();
  const itemsControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } });
      titleControls.start({ x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } });
      itemsControls.start((i) => ({
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: i * 0.2, ease: 'easeOut' },
      }));
    } else {
      controls.start({ opacity: 0 });
      titleControls.start({ x: 50, opacity: 0 });
      itemsControls.start((i) => ({
        x: 50,
        opacity: 0,
      }));
    }
  }, [inView, controls, titleControls, itemsControls]);

  return (
    <motion.div
      ref={(node) => {
        sectionRef.current = node;
        inViewRef(node);
      }}
      initial={{ opacity: 0 }}
      animate={controls}
      className="relative bg-gradient-to-br from-gray-900 via-gray-600 to-gray-300 p-8 lg:p-16 text-white rounded-md overflow-hidden"
    >
      {/* SVG Mask */}
      <img
        src={svgImage}
        alt="SVG Mask"
        className="absolute top left-2 lg:left-[80%] w-1/4 h-auto opacity-40 z-0"
        style={{ transform: 'translate(-10%, -10%)' }}
      />
      <motion.h2
        ref={sectionRef}
        initial={{ x: 50, opacity: 0 }}
        animate={titleControls}
        className="text-4xl text-secondary font-karla font-bold mb-6 relative z-10"
      >
        Why Motomod?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 relative z-10 one">
        {content.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ x: 50, opacity: 0 }}
            animate={itemsControls}
            className="backdrop-blur-md flex flex-col justify-start items-start gap-5 two shadow-lg rounded-lg px-4 py-6"
          >
            <h3 className="text-2xl font-karla text-secondary ">{item.title}</h3>
            <p className="text-lg font-inconsolata text-tertiary ">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyUs;

