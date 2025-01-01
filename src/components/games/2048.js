import React, { useState, useEffect, useCallback } from "react";

const GRID_SIZE = 4; // 4x4 grid

// Create an empty grid
const createEmptyGrid = () => {
  return Array(GRID_SIZE)
    .fill(null)
    .map(() => Array(GRID_SIZE).fill(null));
};

// Get a random empty cell from the grid
const getRandomEmptyCell = (grid) => {
  const emptyCells = [];
  grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (!cell) emptyCells.push({ row: rowIndex, col: colIndex });
    });
  });
  return emptyCells.length > 0
    ? emptyCells[Math.floor(Math.random() * emptyCells.length)]
    : null;
};

// Spawn a new tile (2 or 4) on the grid
const spawnTile = (grid) => {
  const newGrid = grid.map((row) => [...row]);
  const emptyCell = getRandomEmptyCell(grid);
  if (emptyCell) {
    const { row, col } = emptyCell;
    newGrid[row][col] = Math.random() < 0.9 ? 2 : 4; // 90% chance for 2, 10% for 4
  }
  return newGrid;
};

// Slide tiles in a row to remove gaps
const slideRow = (row) => {
  const filteredRow = row.filter((cell) => cell !== null); // Remove empty cells
  const emptyCells = Array(GRID_SIZE - filteredRow.length).fill(null); // Add empty cells
  return [...filteredRow, ...emptyCells];
};

// Combine adjacent tiles in a row
const combineRow = (row) => {
  // First slide the row to remove gaps
  row = slideRow(row);

  // Then combine adjacent tiles
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] !== null && row[i] === row[i + 1]) {
      row[i] *= 2; // Combine tiles
      row[i + 1] = null; // Remove the combined tile
    }
  }

  // Slide the row again to fill any gaps after combining
  row = slideRow(row);

  return row;
};

// Handle moving tiles in a given direction
const moveTiles = (grid, direction) => {
  let newGrid = grid.map((row) => [...row]);

  const transpose = (grid) => {
    return grid[0].map((_, colIndex) => grid.map((row) => row[colIndex]));
  };

  const reverseGrid = (grid) => {
    return grid.map((row) => [...row].reverse());
  };

  if (direction === "up" || direction === "down") {
    newGrid = transpose(newGrid);
  }
  if (direction === "right" || direction === "down") {
    newGrid = reverseGrid(newGrid);
  }

  newGrid = newGrid.map((row) => combineRow(row)); // Slide and combine tiles

  if (direction === "right" || direction === "down") {
    newGrid = reverseGrid(newGrid);
  }
  if (direction === "up" || direction === "down") {
    newGrid = transpose(newGrid);
  }

  return newGrid;
};

// Check if the game is over (no moves left)
const checkGameOver = (grid) => {
  // Check for any empty cells
  for (let row of grid) {
    if (row.includes(null)) {
      return false;
    }
  }

  // Check for any possible combinations horizontally
  for (let row of grid) {
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] === row[i + 1]) {
        return false;
      }
    }
  }

  // Check for any possible combinations vertically
  for (let col = 0; col < GRID_SIZE; col++) {
    for (let row = 0; row < GRID_SIZE - 1; row++) {
      if (grid[row][col] === grid[row + 1][col]) {
        return false;
      }
    }
  }

  return true; // No moves left
};

// Get the appropriate color for a tile value
const getTileColor = (value) => {
  const colors = {
    2: "bg-yellow-100 text-gray-800",
    4: "bg-yellow-200 text-gray-800",
    8: "bg-orange-300 text-white",
    16: "bg-orange-400 text-white",
    32: "bg-orange-500 text-white",
    64: "bg-red-400 text-white",
    128: "bg-red-500 text-white",
    256: "bg-green-400 text-white",
    512: "bg-green-500 text-white",
    1024: "bg-blue-400 text-white",
    2048: "bg-blue-500 text-white",
  };

  return colors[value] || "bg-gray-700 text-gray-400"; // Default for empty or unexpected values
};

const Game2048 = ({ onClose }) => {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [isGameOver, setIsGameOver] = useState(false);

  // Spawn initial tiles when the component mounts
  useEffect(() => {
    let newGrid = createEmptyGrid(); // Start with a fresh grid
    newGrid = spawnTile(newGrid);
    newGrid = spawnTile(newGrid);
    setGrid(newGrid);
  }, []); // Empty dependency array ensures this runs only once

  // Handle key presses for moving tiles
  const handleKeyPress = useCallback(
    (e) => {
      if (isGameOver) return; // Ignore key presses if the game is over

      const directions = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
      };

      const direction = directions[e.key];
      if (direction) {
        const newGrid = moveTiles(grid, direction);

        // Only spawn a new tile if the grid actually changed
        if (JSON.stringify(newGrid) !== JSON.stringify(grid)) {
          const updatedGrid = spawnTile(newGrid);
          setGrid(updatedGrid);

          // Check if the game is over
          if (checkGameOver(updatedGrid)) {
            setIsGameOver(true);
          }
        }
      }
    },
    [grid, isGameOver] 
  );

  // Add and remove the keydown event listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]); 

  const resetGame = () => {
    let newGrid = createEmptyGrid();
    newGrid = spawnTile(newGrid);
    newGrid = spawnTile(newGrid);
    setGrid(newGrid);
    setIsGameOver(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900/80 z-50">
      <div
        className={`bg-slate-800 text-slate-200 p-8 rounded-lg shadow-lg border border-blue-300 max-w-md w-full text-center`}
      >
        <h2 className="text-2xl font-bold mb-4">2048 Game</h2>
        <p className="mb-4 text-slate-400">
          Use arrow keys to combine tiles and reach 2048!
        </p>

        {/* Grid */}
        <div
          className="grid bg-slate-700 p-2 rounded-lg"
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, 80px)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, 80px)`,
            gap: "10px", // Equal spacing between tiles
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`flex items-center justify-center rounded-md ${getTileColor(
                  cell
                )}`}
                style={{
                  width: "80px",
                  height: "80px",
                  fontSize: cell >= 128 ? "1rem" : "1.25rem",
                  fontWeight: "bold",
                }}
              >
                {cell || ""}
              </div>
            ))
          )}
        </div>

        {/* Game Over Message */}
        {isGameOver && (
          <div className="mt-4 text-red-500 font-bold text-lg">
            Game Over! No moves left.
          </div>
        )}

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={resetGame}
            className={`bg-green-500 hover:bg-green-400 text-slate-900 font-semibold py-2 px-4 rounded-lg transition`}
          >
            Restart Game
          </button>
          <button
            onClick={onClose}
            className={`bg-red-500 hover:bg-red-400 text-slate-900 font-semibold py-2 px-4 rounded-lg transition`}
          >
            Close Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game2048;