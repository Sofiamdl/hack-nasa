import React, { useEffect, useState } from 'react';
import './Question1.css';
import Cursor from "../../components/CustomCursor/index"
import LastPlanet from "../../newassets/lastPlanet.png"
import LastPlanet1 from "../../newassets/lastPlanet2.png"
import {useNavigate} from 'react-router-dom';
import gsap from 'gsap';


function Question4() {
  const options = ['Methodic', 'Freestyle'];
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const routes = ["/artistic", "/gastronomic", "/historian"]
  const randomNumberInRange = (min, max) => { 
    const random  = Math.floor(Math.random()  
            * (max - min + 1)) + min; 
    console.log(random)
    return  random
  }; 

  const randomRoute = randomNumberInRange(0, 2);

  const handleOnClick = () => navigate(routes[randomRoute]);

  const handleOptionSelected = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    addEventListener()
  }, []);

  const addEventListener = () => {
    const left = document.getElementById('left')
    const right = document.getElementById('right')

    left.addEventListener("mouseenter", () => {
      gsap.to("#left-planet", {
        x: "-30px",
        y: "-70px",
        scrubs: true,
        rotate:  15,
        duration: 2,
      })
    });

    left.addEventListener("mouseleave", () => {
      gsap.to("#left-planet", {
        x:  "0px",
        y: "0px",
        rotate: -15,
        duration: 2
      })
    })

    right.addEventListener("mouseenter", () => {
      gsap.to("#right-planet", {
        x: "30px",
        y: "-70px",
        scrubs: true,
        rotate:  15,
        duration: 2,
      })
    });

    right.addEventListener("mouseleave", () => {
      gsap.to("#right-planet", {
        x:  "0px",
        y: "0px",
        rotate: -15,
        duration: 2
      })
    })

    
  }; 
  

  return (
    <div className="container">
      <Cursor />
      <h1 className="question">Are you more...</h1>
      <div className='container-images'>

        <div className='image-container'>

          <img src={LastPlanet1} alt='planet' id='left-planet'/>

          <div className="options" id="left">
            
            <div
              key={options[1]}
              className={`option ${selectedOption === options[1] ? 'selected' : ''}`}
              // onClick={() => handleOptionSelected(options[1])
              onClick={() => handleOnClick()
              }
            >
              {options[1]}
            </div>
          </div>
        </div>

        <h1>or</h1>

        <div className='image-container' >

          <img src={LastPlanet} alt='planet' id="right-planet"/>

          <div className="options" id='right'>
            <div
              key={options[0]}
              className={`option ${selectedOption === options[0] ? 'selected' : ''}`}
              // onClick={() => handleOptionSelected(options[1])
              onClick={() => handleOnClick()
            }
            >
              {options[0]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question4;
