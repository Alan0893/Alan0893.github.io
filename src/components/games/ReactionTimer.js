import React, { useState } from "react";

const ReactionTimer = ({ onClose }) => {
  const [gameState, setGameState] = useState("idle"); // New "idle" state for initial load
  const [reactionTime, setReactionTime] = useState(null); // Time taken to react
  const [startTime, setStartTime] = useState(null); // When the timer started
  const [timeoutId, setTimeoutId] = useState(null); // To store the timeout for ready state

  const startGame = () => {
    setGameState("waiting"); // Set game state to waiting immediately
    setReactionTime(null);

    // Set a random delay (2-5 seconds) before transitioning to the "ready" state
    const randomDelay = Math.random() * 3000 + 2000; // 2000ms to 5000ms
    const newTimeoutId = setTimeout(() => {
      setGameState("ready");
      setStartTime(Date.now()); // Record the time when the user is supposed to react
    }, randomDelay);

    setTimeoutId(newTimeoutId);
  };

  const handleClick = () => {
    // If the player clicks too soon
    if (gameState === "waiting") {
      clearTimeout(timeoutId); // Cancel the timeout
      setGameState("tooSoon");
    }

    // If the player clicks after the signal
    if (gameState === "ready") {
      const endTime = Date.now();
      setReactionTime(endTime - startTime); // Calculate reaction time
      setGameState("clicked");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900/80 z-50">
      <div className="bg-slate-800 text-slate-200 p-8 rounded-lg shadow-lg border border-blue-300 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Reaction Timer</h2>
        <p className="mb-4 text-slate-400">
          Click as fast as you can when the screen turns green!
        </p>

        {/* Game State Display */}
        <div
          className={`flex items-center justify-center w-full h-40 rounded-lg mb-4 ${
            gameState === "idle"
              ? "bg-gray-600" : gameState === "waiting"
              ? "bg-blue-600" : gameState === "ready"
              ? "bg-green-600" : gameState === "clicked"
              ? "bg-gray-600" : "bg-red-600"
          }`}
          onClick={handleClick}
        >
          {gameState === "idle" && (
            <p className="text-xl font-bold text-white">Press Start to Begin</p>
          )}
          {gameState === "waiting" && (
            <p className="text-xl font-bold text-white">Get Ready...</p>
          )}
          {gameState === "ready" && (
            <p className="text-xl font-bold text-white">Click Now!</p>
          )}
          {gameState === "clicked" && (
            <p className="text-xl font-bold text-white">
              Your Reaction Time: {reactionTime}ms
            </p>
          )}
          {gameState === "tooSoon" && (
            <p className="text-xl font-bold text-white">Too Soon! Try Again.</p>
          )}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          {/* Start Game Button */}
          <button
            onClick={startGame}
            disabled={gameState === "waiting" || gameState === "ready"} // Disable during gameplay
            className={`${
              gameState === "waiting" || gameState === "ready"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-400"
            } text-slate-900 font-semibold py-2 px-4 rounded-lg transition`}
          >
            {gameState === "clicked" || gameState === "tooSoon"
              ? "Try Again"
              : "Start Game"}
          </button>

          {/* Close Game Button */}
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

export default ReactionTimer;