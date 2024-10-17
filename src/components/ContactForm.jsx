import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from "../assets/homeimage.jpg"



const CustomCloseButton = ({ closeToast }) => (
  <button
    onClick={closeToast}
    style={{
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '12px',
      color: '#fcfbb4',
      cursor: 'pointer',
      position: 'absolute',
      top: '6px',
      right :'10px',
    }}
  >
    ✖
  </button>
);



const ContactForm = () => {  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const [isSubmitting, setIsSubmitting] = useState(false);
const [showSuccessMessage, setShowSuccessMessage] = useState(false); 

// Handle input changes
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

 

const serviceID = 'service_s1l0x0f'; // EmailJS Service ID
const templateID = 'template_40c1n6a'; // EmailJS Template ID
const userID = '-81kG-1pW3dPvi6FJ'; // EmailJS User ID

  emailjs
    .send(serviceID, templateID, formData, userID)
    .then(() => {
     
      setIsSubmitting(false);
      // setShowSuccessMessage(true);
     toast.success('Message sent successfully!', {
          position: "top-right",
          progressClassName: 'toast-progress-success',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          closeButton: <CustomCloseButton />,
          style: {
            backgroundColor: '#342e37', 
            color: '#00c853', 
          },
        })
      // Added: show success message after submission
      // setFormData({
      //   name: '',
      //   email: '',
      //   phone: '',
      //   message: '',
      // });
    })
    .catch(() => {
     
      setIsSubmitting(false);
    });
};


// const handleCloseSuccessMessage = () => {
//   setShowSuccessMessage(false); // Added: function to close the success message
// };


  return (
  
  <section id="contact" 
  
  className="form-bg bg-[url('/src/assets/homeimage.jpg')] bg-no-repeat bg-cover  py-16  flex items-center justify-center " data-aos="fade-up">
    <div className="backdrop-opacity-10 p-8 my-auto rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-3xl font-bold font-karla text-center mb-6 formcolor">Get in touch
      </h2>

      {showSuccessMessage ? ( // Added condition to show success message
        <div className="relative p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-100">
          <span className="block text-center font-bold">Message Sent Successfully!</span>
          <button
            onClick={handleCloseSuccessMessage} // Added: close button action
            className="absolute top-0 right-0 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ) : (
        <>
        <form onSubmit={handleSubmit} className="space-y-4 font-inconsolata">
          <div>
            {/* <label htmlFor="name" className="block text-sm font-medium formcolor">
              Name
            </label> */}
            <input
              type="text"
              name="name"
              id="name"
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg   "
            />
          </div>

          <div>
            {/* <label htmlFor="phone" className="block text-sm font-medium formcolor">
              Phone Number
            </label> */}
            <input
              type="tel"
              name="phone"
              placeholder='Mobile'
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            {/* <label htmlFor="email" className="block text-sm font-medium formcolor">
              Email
            </label> */}
            <input
              type="email"
              name="email"
              placeholder='Email-id'
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg font-karla"
            />
          </div>

          <div>
            {/* <label htmlFor="message" className="block text-sm font-medium formcolor">
              Message
            </label> */}
            <textarea
            placeholder='Drop us a Message'
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg "
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-secondary text-primary font-bold py-2 px-4 rounded-lg hover:bg-tertiary transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
          <ToastContainer />
       </>
      )}
    </div>
  </section>
  );
};

export default ContactForm;
