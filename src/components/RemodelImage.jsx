import React, { useState, useEffect, useRef } from "react";
import toppic from "../assets/2.png";
import bottompic from "../assets/1.png";

const RemodelImage = () => {
  const wrapperRef = useRef(null);
  const topLayerRef = useRef(null);
  const handleRef = useRef(null);
  const [skew, setSkew] = useState(0);
  const [position, setPosition] = useState(0); // New state to keep track of position

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const topLayer = topLayerRef.current;
    const handle = handleRef.current;

    if (wrapper.className.indexOf("skewed") !== -1) {
      setSkew(1000);
    }

    // Automatic sliding effect
    const slideInterval = setInterval(() => {
      // Update the position from 0 to 100% of the viewport width
      setPosition((prevPosition) => {
        const newPosition = prevPosition + 2; // Increase the position by 2 pixels (or adjust as needed)

        if (newPosition >= window.innerWidth) {
          return 0; // Reset position when it reaches the end of the screen
        }
        return newPosition;
      });
    }, 10); // Adjust interval time for speed (20ms for smooth animation)

    return () => {
      clearInterval(slideInterval); // Clean up the interval when the component unmounts
    };
  }, [skew]);

  

  useEffect(() => {
    const topLayer = topLayerRef.current;
    const handle = handleRef.current;

    // Update the handle and topLayer positions based on the 'position' state
    handle.style.left = `${position}px`;
    topLayer.style.width = `${position + skew}px`;
  }, [position, skew]);


 
  return (
<>
    <div className="flex flex-col gap-5">
   
    <section
      ref={wrapperRef}
      className="relative w-full min-h-[55vw] overflow-hidden skewed"
    >
      
      <div className="layer bottom absolute w-[100vw] min-h-[55vw] overflow-hidden z-10 ">
        
        <img
          src={bottompic}
          alt="Bottom Image"
          className="absolute w-full top-4 h-full object-contain"
        />
      </div>
      <div
        ref={topLayerRef}
        className="layer top absolute min-h-[55vw] overflow-hidden z-20 bg-gray-200"
        style={{
          width: "50vw",
          transform: "skew(-30deg)",
          marginLeft: "-1000px",
        }}
      >
        <div
          className="content-wrap absolute w-[100vw] min-h-[55vw]"
          style={{ transform: "skew(30deg)", marginLeft: "1000px" }}
        >
           <h1
              className="absolute z-10 top-2 lg:left-[20%] text-2xl lg:text-5xl text-gray-500 px-4"
              >Check Out <span className="text-gray-800 font-bold ">What We Provide</span> </h1>
          <img
            src={toppic}
            alt="Top Image"
            className="absolute top-4 w-full h-full object-contain"
          />
        </div>
      </div>
      <div
        ref={handleRef}
        className="handle absolute h-full bg-white w-[5px] top-0 z-30"
        style={{
          left: "50%",
          top: "50%",
          transform: "rotate(30deg) translateY(-50%)",
          height: "200%",
          transformOrigin: "top",
        }}
      ></div>
    </section>
    </div>
    </>
  );
};

export default RemodelImage;
