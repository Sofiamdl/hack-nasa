import React, { useEffect, useState } from 'react';
import './Question1.css';
import Cursor from "../../components/CustomCursor/index"
import Tarot from "../../newassets/tarotj.png"
import { Link } from 'react-router-dom';

import LeftCard from "../../newassets/left-card.png"
import RightCard from "../../newassets/right-card.png"

import gsap from 'gsap';

function Question2() {
  const options = ['Chill', 'Adventurous'];
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelected = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    addCardEventListener()
  }, []);

  const addCardEventListener = () => {
    const left = document.getElementById('left-card-image');
    const right = document.getElementById('right-card-image');

    left.addEventListener("mouseenter", () => {
      gsap.to("#left-card", {
        x: "-30px",
        y: "-70px",
        scrubs: true,
        rotate:  15,
        duration: 1,
      })
    })

    left.addEventListener("mouseleave", () => {
      gsap.to("#left-card", {
        x: "0px",
        y: "0px",
        scrubs: true,
        rotate: -15 ,
        duration: 1
      })
    })

    right.addEventListener("mouseenter", () => {
      gsap.to("#right-card", {
        x: "30px",
        y: "-70px",
        scrubs: true,
        rotate: -15,
        duration: 1
      })
    })

    right.addEventListener("mouseleave", () => {
      gsap.to("#right-card", {
        x: "0px", 
        y: "0px",
        scrubs: true,
        rotate: 15,
        duration: 1 
      })
    })

    
  }

  

  return (
    <div className="container2">
      <Cursor />
      <h1 className="question">Are you more...</h1>

      <div className='card-images'>
        <img src={LeftCard} alt="left-card" id='left-card'/> 
        <img src={RightCard} alt='right-card' id='right-card'/>
      </div>

      <div className="options2">
        {options.map((option, index) => (
          <Link
            key={option}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelected(option)}
            to={"/q3"}
            id={index === 0 ? "left-card-image" : "right-card-image"}
          >
            {option}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Question2;
