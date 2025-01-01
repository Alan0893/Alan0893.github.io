import React, { useState, useEffect, useCallback } from "react";

const COLORS = ["red", "green", "blue", "yellow"]; // The four buttons/colors for Simon Says

const SimonSays = ({ onClose }) => {
  const [sequence, setSequence] = useState([]); // The current sequence of colors
  const [playerSequence, setPlayerSequence] = useState([]); // The player's input
  const [isPlayerTurn, setIsPlayerTurn] = useState(false); // Whether it's the player's turn
  const [score, setScore] = useState(0); // Player's score
  const [gameState, setGameState] = useState("waiting"); // "waiting", "playing", or "gameover"
  const [activeColor, setActiveColor] = useState(null); // The color currently being displayed

  // Start a new game
  const startGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setScore(0);
    setGameState("playing");
    addColorToSequence();
  };

  // Add a random color to the sequence
  const addColorToSequence = () => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setSequence((prev) => [...prev, randomColor]);
    setPlayerSequence([]);
    setIsPlayerTurn(false);
  };

  // Play the sequence for the player (wrapped in useCallback)
  const playSequence = useCallback(async () => {
    for (let i = 0; i < sequence.length; i++) {
      setActiveColor(sequence[i]); // Highlight the color
      await new Promise((resolve) => setTimeout(resolve, 600));
      setActiveColor(null); // Reset the color
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
    setIsPlayerTurn(true); // Player's turn starts after the sequence is displayed
  }, [sequence]); // Dependency: sequence

  // Handle player input
  const handleColorClick = async (color) => {
    if (!isPlayerTurn) return; // Ignore clicks if it's not the player's turn

    // Temporarily highlight the clicked button
    setActiveColor(color);
    await new Promise((resolve) => setTimeout(resolve, 200));
    setActiveColor(null);

    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);

    // Check if the player's input matches the sequence so far
    if (sequence[newPlayerSequence.length - 1] !== color) {
      setGameState("gameover"); // Game over if the input is wrong
      return;
    }

    // If the player completes the sequence correctly
    if (newPlayerSequence.length === sequence.length) {
      setScore((prev) => prev + 1); // Increase the score
      setIsPlayerTurn(false);
      setTimeout(() => addColorToSequence(), 1000); // Add a new color to the sequence after a short delay
    }
  };

  // Play the sequence whenever it changes
  useEffect(() => {
    if (gameState === "playing" && sequence.length > 0) {
      playSequence();
    }
  }, [sequence, gameState, playSequence]); // Include playSequence as a dependency

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900/80 z-50">
      <div className="bg-slate-800 text-slate-200 p-8 rounded-lg shadow-lg border border-blue-300 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Simon Says</h2>
        <p className="mb-4 text-slate-400">
          Memorize the sequence and repeat it. How far can you go?
        </p>

        {/* Game Grid */}
        <div
          className="grid justify-center items-center"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 100px)",
            gridTemplateRows: "repeat(2, 100px)",
            gap: "10px",
          }}
        >
          {COLORS.map((color) => (
            <button
              key={color}
              className={`rounded-lg text-lg font-bold ${
                activeColor === color
                  ? `${color === "red" ? "bg-red-600" : ""}
                     ${color === "green" ? "bg-green-600" : ""}
                     ${color === "blue" ? "bg-blue-600" : ""}
                     ${color === "yellow" ? "bg-yellow-600" : ""}`
                  : `${color === "red" ? "bg-red-500" : ""}
                     ${color === "green" ? "bg-green-500" : ""}
                     ${color === "blue" ? "bg-blue-500" : ""}
                     ${color === "yellow" ? "bg-yellow-500" : ""}`
              }`}
              style={{
                width: "100px",
                height: "100px",
                border: "2px solid #333",
              }}
              onClick={() => handleColorClick(color)}
              disabled={!isPlayerTurn} // Disable buttons when it's not the player's turn
            ></button>
          ))}
        </div>

        {/* Game State */}
        {gameState === "gameover" ? (
          <div className="text-red-500 font-bold text-lg mt-4">
            Game Over! Your score: {score}
          </div>
        ) : (
          <div className="text-green-500 font-bold text-lg mt-4">
            Score: {score}
          </div>
        )}

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={startGame}
            className="bg-green-500 hover:bg-green-400 text-slate-900 font-semibold py-2 px-4 rounded-lg transition"
          >
            {gameState === "gameover" ? "Restart Game" : "Start Game"}
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-400 text-slate-900 font-semibold py-2 px-4 rounded-lg transition"
          >
            Close Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimonSays;