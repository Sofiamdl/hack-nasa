import React, { useRef, useEffect } from "react";
import { gsap, Linear, Sine } from "gsap";
import "./styles.css";

export function CardItinerary({title, desc}) {
  return (
    <div className="background-card-itinerary">
      <h1 className="title-itinerary-card">{title}</h1>
      <p className="desc-itinerary-card">{desc}</p>
    </div>
  )
}

