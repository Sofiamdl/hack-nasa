import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import { StarsSecond } from "../StarsSecond/StarsSecond";
import { VideosAnimation } from "./VideosAnimation/VideosAnimation";

export function SecondSection({ someText }) {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 900 ) {
      gsap.to(backgroundRef.current, { y: "-24vw", opacity: 1, duration: 3});
    } else{
      gsap.to(backgroundRef.current, { y: "-30vw", opacity: 1, duration: 1});
    }
  }, []);

  
  return(
  <div ref={backgroundRef} className="background-second-section">
    <StarsSecond/>
    <h2 className="longevity-title text-animation"> FOTOS REAIS </h2>

    <VideosAnimation />
  </div>
    
  )
}
