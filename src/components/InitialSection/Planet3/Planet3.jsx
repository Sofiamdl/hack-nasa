import React, { useRef, useEffect } from "react";
import { gsap, Linear, Sine } from "gsap";
import "./styles.css";
import planet from "../../../assets/newAssets/lastPlanet.png";

export function Planet3() {
 
  return (
    <img className="planet-around-middle" src={planet}/>
  )
}

