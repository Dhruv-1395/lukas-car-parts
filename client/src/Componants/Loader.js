// src/components/Loader.js
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// import { useGSAP } from '@gsap/react';
import "../Css/Loader.css"; // Optional: Add custom styles if needed
import wheel from "../assets/wheel.png";
const Loader = () => {
  const rightDiv = useRef(null);
  const leftDiv = useRef(null);
  const [spiner, setSpiner] = useState(true);
  useEffect(() => {
    gsap.to([rightDiv.current, leftDiv.current], {
      width: "0%",
      duration: 0.5,
      delay: 0.5,
    });

    setTimeout(() => {
      setSpiner(false);
    }, 500);
  }, []);
  return (
    <>
      <div className="loader-container">
        <div ref={leftDiv} className="leftdiv"></div>
        {spiner ? <img src={wheel} alt="" /> : null}
        <div ref={rightDiv} className="rightdiv"></div>
      </div>
    </>
  );
};

export default Loader;
