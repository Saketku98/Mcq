import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of India?",
      options: [
        { id: 0, text: "Mumbai", isCorrect: false },
        { id: 1, text: "Bengal", isCorrect: false },
        { id: 2, text: "Magadh", isCorrect: false },
        { id: 3, text: "New Delhi", isCorrect: true },
      ],
    },
    {
      text: "Which Indian leader is known as the Father of the Nation?",
      options: [
        { id: 0, text: "Mahatma Gandhi", isCorrect: true },
        { id: 1, text: "Sardar Patel", isCorrect: false },
        { id: 2, text: "Bhagat Singh", isCorrect: false },
        { id: 3, text: "Narendra Modi", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is one of the Seven Wonders of the Ancient World located in India?",
      options: [
        { id: 0, text: "Taj Mahal", isCorrect: true },
        { id: 1, text: "Red Fort", isCorrect: false },
        { id: 2, text: "Lotus Temple", isCorrect: false },
        { id: 3, text: "Jama Masjid ", isCorrect: false },
      ],
    },
    {
      text: " Which festival is known as the Festival of Lights in India?",
      options: [
        { id: 0, text: "Holi", isCorrect: false },
        { id: 1, text: "Diwali", isCorrect: true },
        { id: 2, text: "Eid", isCorrect: false },
        { id: 3, text: "Christmas", isCorrect: false },
      ],
    },
    {
      text: "What is the national emblem of India?",
      options: [
        { id: 0, text: "Peacock", isCorrect: false },
        { id: 1, text: "Ashoka Chakra", isCorrect: false },
        { id: 2, text: "Lion Capital", isCorrect: true },
        { id: 3, text: "Lotus", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>INDIA Quiz IND</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
