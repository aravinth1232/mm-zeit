import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import img1 from "../assets/g1.png";
import img2 from "../assets/g2.png";
import img3 from "../assets/g3.png";
import img4 from "../assets/g4.png";
import img5 from "../assets/g5.png";

const images = [img1, img2, img3, img4, img5, img1];

const ImagePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const image = images[id];

  // Function to go back to the previous page
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='relative flex flex-col items-center gap-10 justify-center min-h-screen bg-primary z-50'>
      <button
        onClick={handleBack}
        className=' px-4 py-2 self-start text-secondary rounded hover:bg-opacity-80'
      >
        &lt;--
      </button>
      <img
        src={image}
        alt="Fullscreen view"
        className='w-auto h-auto max-w-full max-h-full'
      />
    </div>
  );
};

export default ImagePage;
