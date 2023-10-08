import React, { useRef, useEffect } from "react";
import { gsap, Linear, Sine } from "gsap";
import "./styles.css";
import Rocket from "../../../assets/newAssets/rocket.png";

export function RocketUp() {
  return (

    <img className="rocket-up" src={Rocket}/>
    
  )
}

