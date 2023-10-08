import React, { useState } from 'react';
import './Question1.css'; 
import Cursor from "../../components/CustomCursor/index"
import { Link } from 'react-router-dom';

function Question3() {
    const options = ['Surrounded by people', 'More experimental experiences', 'Getting to know local particularities'];
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelected = (option) => {
        setSelectedOption(option);
      };

    return (
        <div className="container">
            <Cursor/>
        <h1 className="question">Do you prefer to spend your trips:</h1>
        <div className="options">
        {options.map((option) => (
          <Link
            key={option}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelected(option)}
            to="/q4"
          >
            {option}
          </Link>
        ))}
      </div>
      </div>
    );
};

export default Question3;
