import React, { useState } from 'react';


const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a range of bike modification services, including custom builds, performance upgrades, and aesthetic enhancements.",
  },
  {
    question: "How long does a bike modification take?",
    answer: "The time frame depends on the complexity of the project. Typically, it ranges from a few days to a couple of weeks.",
  },
  {
    question: "Do you offer a warranty on modifications?",
    answer: "Yes, we offer a limited warranty on our modifications. Please contact us for more details.",
  },
  {
    question: "Can I bring my own parts for customization?",
    answer: "Yes, you are welcome to bring your own parts, and we will incorporate them into your custom build.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <section className="bg-primary p-8 lg:p-16 pb-24">
      <h2 className="text-4xl font-semibold text-center text-tertiary pb-8 font-karla">Frequently Asked Questions</h2>
      <div className="space-y-4 ">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-secondary pb-4">
            <button
              className="flex justify-between w-full text-lg lg:text-3xl font-bold text-left font-karla text-secondary focus:outline-none"
              onClick={() => toggleAccordion(index)}
             
            >
              {item.question}
              <span className={`transition-transform transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="pt-4 text-tertiary text-lg lg:text-xl font-inconsolata">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
