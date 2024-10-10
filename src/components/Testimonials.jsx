import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AnimatePresence, motion } from 'framer-motion';

// Sample testimonials data
const testimonials = [
  {
    name: "Jane D.",
    content: "The team transformed my old bike into a stunning piece of art! Highly recommend!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Mark T.",
    content: "I love the custom design they created for me. It's exactly what I wanted!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Sarah L.",
    content: "Exceptional craftsmanship and attention to detail!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Tom R.",
    content: "Great experience from start to finish. My bike looks amazing!",
    image: "https://via.placeholder.com/100",
  },
];

const Testimonials = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) { // Ensure card exists
        // Set up GSAP hover effect
        const hoverAnimation = gsap.fromTo(
          card,
          { scale: 1 },
          { scale: 1.05, duration: 0.3, paused: true, ease: "power1.inOut" }
        );

        const handleMouseEnter = () => hoverAnimation.play();
        const handleMouseLeave = () => hoverAnimation.reverse();

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup event listeners on unmount
        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
  }, []);

  return (
    <section className="bg-gray-100 p-8 lg:p-16 rounded-md">
      <h2 className="text-4xl font-bold text-center pb-24">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-6">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)} // Assigning refs to each card
              className="bg-white p-4 rounded shadow-lg flex flex-col items-center relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {/* Centered User Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full absolute top-[-40px] border-4 border-gray-800" // Adjusted positioning
              />
              <div className="pt-16"> {/* Padding for text area */}
                <p className="text-lg italic text-center">"{testimonial.content}"</p>
                <p className="text-md font-semibold mt-2 text-center">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
