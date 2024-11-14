import React from 'react';
import { Link } from 'react-router-dom';

const Rule = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Game Rules</h2>
      <p>Minesweeper is a puzzle game where players uncover tiles on a grid, aiming to avoid hidden mines.</p>
      <p>
        Clicking on a square reveals 2 states:
      </p>
      <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
        <li>
          <strong>A number:</strong> a number of cells around (vertically, horizontally, or orthogonally) the selected cell has the indicated number of mines.
        </li>
        <li>
          <strong>A bomb!</strong> This indicates that you have lost.
        </li>
      </ul>
      <p>If you revealed ALL of the empty squares, you win!</p>
      <p>If you have selected a bomb at some point during the game, you lost!</p>
      <p>There are three difficulty levels for you to choose:</p>
      <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
        <li><strong>Easy:</strong> The size of the board will be 8 x 8 and will contain 10 mines.</li>
        <li><strong>Medium:</strong> The size of the board will be 16 x 16 and will contain 40 mines.</li>
        <li><strong>Hard:</strong> The size of the board will be 30 x 16 and will contain 99 mines.</li>
      </ul>
      <p>By clicking the reset button, you can start a new game.</p>
      <p>By right-clicking the mouse, you can mark a square as a bomb.</p>
      
      <div style={{ marginTop: '20px' }}>
        <Link to="/">
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Rule;
