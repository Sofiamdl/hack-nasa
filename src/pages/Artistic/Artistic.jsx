import React, { useRef, useEffect } from "react";
import { gsap, Linear, Sine } from "gsap";
import "./styles.css";
import { CardItinerary } from "../../components/CardItinerary/CardItinerary";
import Cursor from "../../components/CustomCursor";

export default function Artistic() {
  return (
    <div className="background-of-itinerary artistic-background">
      <Cursor />

      {/* <div  className="on-top-of-itinerary" >
       <h1 className="title-itinerary">Artistic itinerary</h1>
      </div>  
      <CardItinerary title={"Space-Time on Other Worlds"} desc={"This journey will provide a fascinating insight into Einstein's groundbreaking theories."} /> */}

    </div>
  )
}
