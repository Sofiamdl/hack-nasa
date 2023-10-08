import React, { useEffect, useState } from 'react';
import './Question1.css'; 
import Cursor from "../../components/CustomCursor/index"
import { Link } from 'react-router-dom';
import Question2  from "../quiz/Question2"

function Question1() {
    const options = ['Learn and explore', 'Try different foods', 'Observe local arts', 'Watch movies, plays, concerts', 'Surprise me'];
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
      let hideLoader = document.getElementById('main-loader');
      let hideLoaderText = document.getElementById('loading-text');
      hideLoader.style.display= "none"
      hideLoaderText.style.display= "none"
    }, []);

    const handleOptionSelected = (option) => {
        setSelectedOption(option);    
    };

    return (
        <div className="container">
            <Cursor/>
        <h1 className="question">What's the purpose of your trip?</h1>
        <div className="options">
        {options.map((option) => (
          <Link
            key={option}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelected(option)}
            to="/q2"
          >
            {option}
          </Link>
        ))}
      </div>
      </div>
    );
};

export default Question1;
