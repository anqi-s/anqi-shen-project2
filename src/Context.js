import React, { createContext, useState, useEffect } from 'react';

export const GameContext = createContext();

const generateBoard = (width, height, mineCount) => {
  const board = Array.from({ length: height }, () => 
    Array.from({ length: width }, () => ({ isRevealed: false, isMine: false, adjacentMines: 0, isFlagged: false }))
  );

  let minesPlaced = 0;
  while (minesPlaced < mineCount) {
    const x = Math.floor(Math.random() * height);
    const y = Math.floor(Math.random() * width);
    if (!board[x][y].isMine) {
      board[x][y].isMine = true;
      minesPlaced++;
    }
  }

  for (let x = 0; x < height; x++) {
    for (let y = 0; y < width; y++) {
      if (!board[x][y].isMine) {
        let adjacentMines = 0;
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (x + i >= 0 && x + i < height && y + j >= 0 && y + j < width && board[x + i][y + j].isMine) {
              adjacentMines++;
            }
          }
        }
        board[x][y].adjacentMines = adjacentMines;
      }
    }
  }

  return board;
};

export const GameProvider = ({ children, boardWidth, boardHeight, mineCount }) => {
  const [board, setBoard] = useState(generateBoard(boardWidth, boardHeight, mineCount));
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const resetGame = () => {
    setBoard(generateBoard(boardWidth, boardHeight, mineCount));
    setGameOver(false);
    setGameWon(false);
  };

  return (
    <GameContext.Provider value={{ board, setBoard, gameOver, setGameOver, gameWon, setGameWon, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};
