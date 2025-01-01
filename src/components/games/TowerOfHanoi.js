import React, { useState } from "react";

const TowerOfHanoi = ({ onClose }) => {
  const MAX_TOWER_HEIGHT = 5; // Maximum number of disks
  const [towerHeight, setTowerHeight] = useState(3); // Current number of disks
  const [towers, setTowers] = useState([
    Array.from({ length: towerHeight }, (_, i) => towerHeight - i), // Start with all disks on the first rod
    [],
    [],
  ]);
  const [selectedTower, setSelectedTower] = useState(null); // Tracks which tower is selected
  const [moveCount, setMoveCount] = useState(0); // Tracks the number of moves

  // Check if the player has won the game
  const checkWin = () => {
    return towers[2].length === towerHeight; // All disks are on the last rod
  };

  // Handle tower click
  const handleTowerClick = (towerIndex) => {
    if (selectedTower === null) {
      // Step 1: Select a tower (only if it has disks)
      if (towers[towerIndex].length > 0) {
        setSelectedTower(towerIndex);
      }
    } else {
      // Step 2: Attempt to move the top disk from the selected tower to the clicked tower
      if (selectedTower !== towerIndex) {
        const fromTower = [...towers[selectedTower]]; // Copy of the selected tower
        const toTower = [...towers[towerIndex]]; // Copy of the target tower
        const diskToMove = fromTower[fromTower.length - 1]; // Get the top disk from the source tower

        // Validate the move: Disk can only be placed on an empty tower or a larger disk
        if (
          toTower.length === 0 || // Target tower is empty
          diskToMove < toTower[toTower.length - 1] // Disk is smaller than the top disk on the target tower
        ) {
          fromTower.pop(); // Remove the top disk from the source tower
          toTower.push(diskToMove); // Add it to the target tower

          // Update the towers state
          const newTowers = towers.map((tower, index) =>
            index === selectedTower
              ? fromTower // Update the source tower
              : index === towerIndex
              ? toTower // Update the target tower
              : tower // Leave other towers unchanged
          );
          setTowers(newTowers);
          setMoveCount(moveCount + 1); // Increment the move counter
        }
      }

      // Deselect the tower after attempting a move
      setSelectedTower(null);
    }
  };

  // Reset the game
  const resetGame = () => {
    setTowers([
      Array.from({ length: towerHeight }, (_, i) => towerHeight - i),
      [],
      [],
    ]);
    setMoveCount(0);
    setSelectedTower(null);
  };

  // Increase tower height (up to the maximum)
  const increaseTowerHeight = () => {
    if (towerHeight < MAX_TOWER_HEIGHT) {
      const newHeight = towerHeight + 1;
      setTowerHeight(newHeight);
      setTowers([
        Array.from({ length: newHeight }, (_, i) => newHeight - i),
        [],
        [],
      ]);
      setMoveCount(0);
      setSelectedTower(null);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900/80 z-50">
      <div className="bg-slate-800 text-slate-200 p-8 rounded-lg shadow-lg border border-blue-300 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Tower of Hanoi</h2>
        <p className="mb-4 text-slate-400">
          Move all the disks from the first rod to the third rod:
        </p>

        {/* Towers */}
        <div className="flex justify-center gap-4 mb-6">
          {towers.map((tower, towerIndex) => (
            <div
              key={towerIndex}
              className={`flex flex-col items-center justify-end bg-slate-700 p-4 rounded-lg cursor-pointer ${
                selectedTower === towerIndex ? "border-4 border-blue-500" : ""
              }`}
              style={{
                width: "100px",
                height: "300px",
              }}
              onClick={() => handleTowerClick(towerIndex)}
            >
              {/* Render disks */}
              {tower
                .slice()
                .reverse()
                .map((disk, diskIndex) => (
                  <div
                    key={diskIndex}
                    className="bg-blue-500 rounded-md mb-1"
                    style={{
                      width: `${disk * 20}px`, // Disk size based on its value
                      height: "20px",
                    }}
                  ></div>
                ))}
            </div>
          ))}
        </div>

        {/* Move Counter */}
        <p className="mb-4 text-slate-400">Moves: {moveCount}</p>
        <p className="mb-4 text-slate-400">
          Minimum Moves: {Math.pow(2, towerHeight) - 1}
        </p>

        {/* Win Message */}
        {checkWin() && (
          <div className="text-green-500 font-bold text-lg mb-4">
            Congratulations! You solved it in {moveCount} moves!
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={resetGame}
            className="bg-green-500 hover:bg-green-400 text-slate-900 font-semibold py-2 px-4 rounded-lg transition"
          >
            Restart Game
          </button>
          <button
            onClick={increaseTowerHeight}
            className={`${
              towerHeight === MAX_TOWER_HEIGHT
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-400"
            } text-slate-900 font-semibold py-2 px-4 rounded-lg transition`}
            disabled={towerHeight === MAX_TOWER_HEIGHT}
          >
            Add Disk
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

export default TowerOfHanoi;