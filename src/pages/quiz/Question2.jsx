import React, { useState } from 'react';
import './Question1.css';
import Cursor from "../../components/CustomCursor/index"
import Tarot from "../../newassets/tarotj.png"
import { Link } from 'react-router-dom';

import LeftCard from "../../newassets/left-card.png"
import RightCard from "../../newassets/right-card.png"

function Question2() {
  const options = ['Chill', 'Adventurous'];
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelected = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container2">
      <Cursor />
      <h1 className="question">Are you more...</h1>

      <div className='card-images'>
        <img src={LeftCard} alt="left-card" id='left-card'/> 
        <img src={RightCard} alt='right-card' id='right-card'/>
      </div>

      <div className="options2">
        {options.map((option) => (
          <Link
            key={option}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelected(option)}
            to={"/q3"}
          >
            {option}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Question2;
