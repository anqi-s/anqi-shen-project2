import React, { useContext } from 'react';
import { GameContext } from './Context';
import { Link } from 'react-router-dom';

const MinesweeperGame = ({ title }) => {
  const { board, setBoard, gameOver, setGameOver, gameWon, setGameWon, resetGame } = useContext(GameContext);

  const handleCellClick = (x, y) => {
    if (gameOver || board[x][y].isRevealed) return;

    const newBoard = [...board];
    if (newBoard[x][y].isMine) {
      newBoard[x][y].isRevealed = true;
      setBoard(newBoard);
      setTimeout(() => setGameOver(true), 100);
    } else {
      newBoard[x][y].isRevealed = true;
      setBoard(newBoard);
      checkWinCondition(newBoard);
    }
  };

  const handleRightClick = (e, x, y) => {
    e.preventDefault();
    if (gameOver || board[x][y].isRevealed) return;

    const newBoard = [...board];
    newBoard[x][y].isFlagged = !newBoard[x][y].isFlagged;
    setBoard(newBoard);
  };

  const checkWinCondition = (board) => {
    for (let row of board) {
      for (let cell of row) {
        if (!cell.isRevealed && !cell.isMine) {
          return;
        }
      }
    }
    setGameWon(true);
    setGameOver(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{title}</h2>
      {gameOver && gameWon && <p>Game over! You Won!</p>}
      {gameOver && !gameWon && <p>Game over! You lost!</p>}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${board[0].length}, 25px)`, justifyContent: 'center', gap: '5px', marginTop: '20px' }}>
        {board.map((row, x) =>
          row.map((cell, y) => (
            <div
              key={`${x}-${y}`}
              onClick={() => handleCellClick(x, y)}
              onContextMenu={(e) => handleRightClick(e, x, y)}
              style={{
                width: '25px',
                height: '25px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: cell.isRevealed ? '#ddd' : '#bbb',
                border: '1px solid #888',
                cursor: gameOver ? 'not-allowed' : 'pointer',
                fontSize: '12px',
                fontWeight: 'bold',
                color: cell.isFlagged ? 'red' : 'black',
                transition: 'background-color 0.2s',
              }}
              className={!cell.isRevealed && !gameOver ? "hover-effect" : ""}
            >
              {cell.isRevealed && (cell.isMine ? '💣' : cell.adjacentMines)}
              {!cell.isRevealed && cell.isFlagged && '🚩'}
            </div>
          ))
        )}
      </div>
      <button onClick={resetGame} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>Reset Game</button>
      
      <div style={{ marginTop: '20px' }}>
        <Link to="/">
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>Back to Home</button>
        </Link>
      </div>
      <style>
        {`
          .hover-effect:hover {
            background-color: #ddd !important;
          }
        `}
      </style>
    </div>
  );
};

export default MinesweeperGame;
