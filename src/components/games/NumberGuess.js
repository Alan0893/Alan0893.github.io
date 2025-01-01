import React, { useState } from "react";

const NumberGuessingGame = ({ onClose }) => {
  const [targetNumber, setTargetNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(0);

  // Function to handle the player's guess when they submit it
  const handleGuess = () => {
    const playerGuess = parseInt(guess, 10);

    // Check if the input is not a valid number
    if (isNaN(playerGuess)) {
      setFeedback("⚠️ Please enter a valid number."); 
      return; // Exit the function to prevent further processing
    }

    // Increment the number of attempts by 1
    setAttempts((prev) => prev + 1);

    if (playerGuess === targetNumber) {
      setFeedback(`🎉 Correct! You guessed it in ${attempts + 1} attempts.`);
    } else if (playerGuess > targetNumber) {
      setFeedback("📉 Too high. Try again!");
    } else {
      setFeedback("📈 Too low. Try again!");
    }

    // Reset the guess input field for the next attempt
    setGuess("");
  };

  // Function to reset the game to its initial state
  const resetGame = () => {
    // Generate a new random target number between 1 and 100
    setTargetNumber(Math.floor(Math.random() * 100) + 1);

    // Clear the player's guess, feedback, and attempts
    setGuess("");
    setFeedback("");
    setAttempts(0);
  };

  return (
    <div className={` fixed inset-0 flex items-center justify-center bg-slate-900/80 z-50 `}>
      <div className={` bg-slate-800 text-slate-200 p-8 rounded-lg shadow-lg border border-blue-300 max-w-md w-full text-center` }>
        <h2 className="text-2xl font-bold mb-4">Number Guessing Game</h2>
        <p className="mb-4 text-slate-400">
          Guess a number between <span className="text-sky-400">1</span> and <span className="text-sky-400">100</span>!
        </p>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
          className={` w-full bg-slate-700 text-slate-200 border border-slate-600 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400 `}
        />
        <div className="flex justify-center gap-4">
          <button
            onClick={handleGuess}
            className={` bg-sky-400 hover:bg-sky-300 text-slate-900 font-semibold py-2 px-4 rounded-lg transition `}
          >
            Submit Guess
          </button>
          <button
            onClick={resetGame}
            className={` bg-green-500 hover:bg-green-400 text-slate-900 font-semibold py-2 px-4 rounded-lg transition `}
          >
            Restart Game
          </button>
        </div>
        <button
          onClick={onClose}
          className={` bg-red-500 hover:bg-red-400 text-slate-900 font-semibold py-2 px-4 mt-4 rounded-lg transition `}
        >
          Close Game
        </button>
        <p className={` mt-4 text-lg font-semibold ${feedback.includes("🎉") ? "text-green-400" : "text-red-400"} `} >
          {feedback}
        </p>
      </div> 
    </div>
  );
};

export default NumberGuessingGame;