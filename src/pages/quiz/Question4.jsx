import React, { useState } from 'react';
import './Question1.css';
import Cursor from "../../components/CustomCursor/index"
import LastPlanet from "../../newassets/lastPlanet.png"
import LastPlanet1 from "../../newassets/lastPlanet2.png"


function Question4() {
  const options = ['Methodic', 'Freestyle'];
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelected = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container">
      <Cursor />
      <h1 className="question">Are you more...</h1>
      <div className='container-images'>

        <div className='image-container'>

          <img src={LastPlanet1} alt='planet' />

          <div className="options">
            <div
              key={options[1]}
              className={`option ${selectedOption === options[1] ? 'selected' : ''}`}
              onClick={() => handleOptionSelected(options[1])}
            >
              {options[1]}
            </div>
          </div>
        </div>

        <h1>or</h1>

        <div className='image-container'>

          <img src={LastPlanet} alt='planet' />

          <div className="options">
            <div
              key={options[0]}
              className={`option ${selectedOption === options[0] ? 'selected' : ''}`}
              onClick={() => handleOptionSelected(options[0])}
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
