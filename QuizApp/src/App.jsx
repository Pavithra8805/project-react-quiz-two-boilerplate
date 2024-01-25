import React, { useState } from 'react';
import questionData from './resources/quizQuestion.json';
import './App.css'

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const handleNext = () => {
    if (currentQuestionIndex < questionData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleQuit = () => {
    const confirmQuit = window.confirm("Are you sure you want to quit?");

    if (confirmQuit) {
      setCurrentQuestionIndex(0);
    }
  }


  const currentQuestion = questionData[currentQuestionIndex];

  return (
    <div className="main-container">
      <div className="white-back">
        <h1 className="head">Question</h1>
        <p className="num">{currentQuestionIndex + 1} of {questionData.length}</p>
        <p className="para">{currentQuestion.question}</p>
        <div className="main">
          <div className="display">
            <button className="option-1">{currentQuestion.optionA}</button>
            <button className="option-2">{currentQuestion.optionB}</button>
          </div>
          <div className="display1">
            <button className="option-3">{currentQuestion.optionC}</button>
            <button className="option-4">{currentQuestion.optionD}</button>
          </div>
        </div>
        <div className="footer">
          <button className="blue" onClick={handlePrevious}>Previous</button>
          <button className="green" onClick={handleNext}>Next</button>
          <button className="red" onClick={handleQuit}>Quit</button>
        </div>
      </div>
    </div>
  )

};


export default Quiz;