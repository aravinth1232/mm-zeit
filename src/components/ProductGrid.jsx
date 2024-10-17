import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/g1.png";
import img2 from "../assets/g2.png";
import img3 from "../assets/g3.png";
import img4 from "../assets/g4.png";
import img5 from "../assets/g5.png";

const images = [img1, img2, img3, img4, img5, img1];

const ProductGrid = () => {
  const navigate = useNavigate();

  // Function to navigate to the image page
  const handleImageClick = (index) => {
    navigate(`/image/${index}`);
  };

  return (
    <div className='flex flex-col justify-center items-center gap-7 bg-primary py-6'>
      <div>
        <h1 className='text-4xl font-karla font-bold text-secondary'>Featured Projects</h1>
      </div>
      <div className='products grid grid-cols-2 md:grid-cols-3 gap-7 justify-items-center one'>
        {images.map((image, index) => (
          <div
            key={index}
            className='new1 two'
            onClick={() => handleImageClick(index)} // Navigate to the image page
          >
            <img
              className='productimage w-36 h-36 object-cover lg:w-80 lg:h-80 px-2 py-2 rounded-full border-4 border-secondary shadow-xl cursor-pointer'
              src={image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
