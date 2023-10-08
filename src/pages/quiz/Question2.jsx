import React, { useState } from 'react';
import './Question1.css';
import Cursor from "../../components/CustomCursor/index"
import Tarot from "../../newassets/tarotj.png"
import { Link } from 'react-router-dom';

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

      <img src={Tarot} alt='tarot'/>
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
