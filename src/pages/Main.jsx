import React, { useState, useEffect } from 'react';
import { FirstSection, SecondSection, ThirdSection, FourthSection, AstronautInBottle } from '../components/index';
import "./global.css";
import { ScrollTrigger } from "gsap/all";
import Cursor from "../components/CustomCursor/index"

import { Link } from 'react-router-dom';
import { InitialSection } from '../components/InitialSection/InitialSection';


function Main() {
  const [loading, setLoading] = useState(true);
  ScrollTrigger.defaults({
    scroller: "#root"
  });


  ScrollTrigger.scrollerProxy("#root", { pinType: "fixed" });

  useEffect(() => {
    let hideLoader = document.getElementById('main-loader');
    let hideLoaderText = document.getElementById('loading-text');
    hideLoader.style.display= "none"
    hideLoaderText.style.display= "none"

  }, []);

  return (
    <div>
        <>
          <InitialSection></InitialSection>
          <Link to="/sobre">Sobre</Link>
          <Cursor />
          <SecondSection />
          {/* <ThirdSection /> */}
          {/* <AstronautInBottle />
          <FourthSection />
          <div className='fix-size'>
            <Csection></Csection>
          </div>
          <Footer></Footer> */}
        </>      
    </div>
  )
}

export default Main
