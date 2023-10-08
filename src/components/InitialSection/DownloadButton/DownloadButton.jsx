import React, { useRef, useEffect } from "react";
import { gsap, Linear, Sine } from "gsap";
import "./styles.css";
import Rocket from "../../../assets/newAssets/rocket.png";
import { Link } from "react-router-dom";

export function DownloadButton({ onClick }) {
  return (
    <Link to="/quiz">
      <button className="download-button" onClick={onClick}>
        Download
      </button>
    </Link>
  )
}

