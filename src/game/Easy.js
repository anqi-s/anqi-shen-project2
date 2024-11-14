import React from 'react';
import MinesweeperGame from '../Logic';
import { GameProvider } from '../Context'; // Updated import

const Easy = () => (
  <GameProvider boardWidth={8} boardHeight={8} mineCount={10}>
    <MinesweeperGame title="Easy" />
  </GameProvider>
);

export default Easy;
