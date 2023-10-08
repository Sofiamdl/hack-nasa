import React, { useRef, useEffect } from "react";
import { gsap, Linear, Sine } from "gsap";
import "./styles.css";
import Passport1 from "../../../assets/newAssets/passport1.png";
import Passport2 from "../../../assets/newAssets/passport2.png";
import Passport3 from "../../../assets/newAssets/passport3.png";
import { DownloadButton } from "../DownloadButton/DownloadButton";
import { Link } from 'react-router-dom';

export function Passports() {
  return (
    <div className="geral-container-passport">
      <h1 className="title-passports">PASSPORTS</h1>
      <div className="images-passports">
        <div className="passport-container">
          <img src={Passport1} className="first-passport"/>
          <h1 className="desc-passports">HISTORICAL</h1>
          <Link to="/historical">
            <DownloadButton></DownloadButton>
          </Link>
        </div>
        <div className="passport-container">
         <img src={Passport2} className="first-passport"/>
         <h1 className="desc-passports">GASTRONOMIC</h1>
         <Link to="/gastronomic">
          <DownloadButton></DownloadButton>
         </Link>
        </div>
        <div className="passport-container">
          <img src={Passport3} className="first-passport"/>
          <h1 className="desc-passports">ARTISTIC</h1>
          <Link to="/artistic">
            <DownloadButton></DownloadButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

