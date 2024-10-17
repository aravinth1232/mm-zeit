import React from 'react';
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

// Animation variants for Framer Motion
const testimonialVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Testimonials = () => {
  return (
    <section className="bg-fourth p-8 lg:p-16 rounded-md">
      <h2 className="text-4xl font-bold text-center text-primary pb-24 font-karla">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-6 one">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-primary p-4 two rounded-lg shadow-lg flex flex-col items-center relative"
            variants={testimonialVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Centered User Image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full absolute top-[-40px] border-2 border-primary"
            />
            <div className="pt-16">
              <p className="text-xl text-center font-karla text-secondary">
                "{testimonial.content}"
              </p>
              <p className="text-lg mt-2 font-inconsolata text-center text-tertiary">
                {testimonial.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
