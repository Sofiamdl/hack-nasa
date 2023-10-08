import React, { useRef, useEffect } from "react";
import { gsap, Linear, Sine } from "gsap";
import "./styles.css";
import Passport1 from "../../../assets/newAssets/passport1.png";
import Passport2 from "../../../assets/newAssets/passport2.png";
import Passport3 from "../../../assets/newAssets/passport3.png";
import { DownloadButton } from "../DownloadButton/DownloadButton";
import { useNavigate } from 'react-router-dom';

export function Passports() {
  const navigate = useNavigate();


  const handleOnClick = (route) => navigate(route);
  useEffect(() => {

  gsap.to(".geral-container-passport", { 
    scrollTrigger:  {
      trigger: ".geral-container-passport",
      start: "top  top+=200px",
      end: "top top+=200px",
      scrub: true,
    },
    zIndex: 1,
  }); 

  gsap.to(".images-passports", { 
    scrollTrigger:  {
      trigger: ".geral-container-passport",
      start: "top top+=200px",
      end: "top top+=200px",
      scrub: true,
    },
    zIndex: 1,
  }); 
  }, [])  

  return (
    <div className="geral-container-passport">
      <h1 className="title-passports">PASSPORTS</h1>
      <div className="images-passports">
        <div className="passport-container">
          <img src={Passport1} className="first-passport"/>
          <h1 className="desc-passports">HISTORIAN</h1>
          <DownloadButton onClick={() => handleOnClick("/historian")}></DownloadButton>
        </div>
        <div className="passport-container">
         <img src={Passport2} className="first-passport"/>
         <h1 className="desc-passports">GASTRONOMIC</h1>
          <DownloadButton onClick={() => handleOnClick("/gastronomic")}></DownloadButton>
        </div>
        <div className="passport-container">
          <img src={Passport3} className="first-passport"/>
          <h1 className="desc-passports">ARTISTIC</h1>
            <DownloadButton onClick={() => handleOnClick("/artistic")}></DownloadButton>
        </div>
      </div>
    </div>
  )
}

