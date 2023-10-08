import React, { useRef, useEffect, useState } from "react";
import { Planet } from "./Planet/Planet";
import { Planet2 } from "./Planet2/Planet2";
import { Planet3 } from "./Planet3/Planet3";
import "./styles.css";
import { gsap } from "gsap";
import backgroundLeft from "../../assets/newAssets/left.png";
import backgroundRight from "../../assets/newAssets/right.png";
import Ballon from "../../assets/newAssets/ballon.png";
import { Passports } from "./Passports/Passports";
import { Orbit, Stars } from "..";
import { RocketUp } from "./Rocket/Rocket";
import ReactRotatingText from 'react-rotating-text'
import { Link } from 'react-router-dom';

export function InitialSection() {
  const [typerTrigger, setTyperTrigger] = useState(false)

  
  useEffect(() => {
      gsap.to(".new-planets", { 
        scrollTrigger:  {
          trigger: ".new-planets",
          start: "top top",
          end: '+=100vh',
          scrub: true,
        },
        scale: 1.4,
        y: "15vw"
      }); 

      gsap.to(".planet-around-middle", { 
        scrollTrigger:  {
          trigger: ".new-planets",
          start: "top top",
          end: '+=300vh',
          scrub: true,
        },
        scale: 0.5,
        y: "100vw",
      }); 

      gsap.to(".title-initial-screen", { 
        scrollTrigger:  {
          trigger: ".new-planets",
          start: "top top",
          end: '+=50vh',
          scrub: true,
        },
        opacity: 0,
        scale: 0.8,
      }); 
      gsap.to(".subtitle-initial-screen", { 
        scrollTrigger:  {
          trigger: ".new-planets",
          start: "top top",
          end: '+=50vh',
          scrub: true,
        },
        opacity: 0,
        scale: 0.8,
      }); 

      gsap.to(".next-title-initial-screen", { 
        scrollTrigger:  {
          trigger: ".new-planets",
          start: "top+=100 top",
          end: '+=100vh',
          scrub: true,
        },
        opacity: 1,
        y: "-40vh"
      }); 

      gsap.to(".ballon-speak", { 
        scrollTrigger:  {
          trigger: ".rocket-up-container",
          start: "top center",
          end: "top+=100px center",

          scrub: false,
          onLeave: () => setTyperTriggerTrue()
        },
        opacity: 1,
      }); 


      const mainTimeline = gsap.timeline({
        scrollTrigger: { 
          trigger: '.background-initial-screen',
          pin: '.background-initial-screen', 
          // pinSpacing: false,
          start: "top top",
          // markers: true,
          end: '2000vw', 
          anticipatePin: 1,
          scrub: true,
        },
      })

      mainTimeline
      .to('.background-initial-screen', { scale: 1.1 }, "10vh")
      .to(".initial-section-background-image-left", { xPercent: -100 }, "100vh")
      .to(".initial-section-background-image-right", { xPercent: 100 }, "100vh")
      
    }, []);


  const setTyperTriggerTrue = () => {
    setTyperTrigger(true)
  }


  return(
    <div className="initial-section-background">
        <Stars />
      <div className="new-planets">
        <Planet />
        <Planet2 />
        <Planet3 />
        <h1 className="title-initial-screen">GALACWAY</h1>
        <h2 className="subtitle-initial-screen">Your way to navigate the universe</h2>

      </div>
      <div className="title-initial-container">
        <h1 className="next-title-initial-screen">Unlock Your Personalized Galactic Adventure.</h1>
      </div>
      <div className="rocket-up-container">
        <div className="spacer-initial-section"/>
        <RocketUp />
        <div className="spacer-initial-section">
        <Link to="/quiz">
          <div className="ballon-text-container">
            <img src={Ballon} className="ballon-speak" />
            { typerTrigger && <ReactRotatingText className="write-words" typingInterval="50" items={["TAKE THE QUIZ"]} />}
          </div>
          </Link>
        </div>
      </div>
      <Passports/>
      <div className="background-initial-screen">
        <img src={backgroundLeft} className="initial-section-background-image-left"></img>
        <img src={backgroundRight} className="initial-section-background-image-right"></img>
      </div>
    </div>
  )
}