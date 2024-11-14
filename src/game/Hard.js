import React from 'react';
import MinesweeperGame from '../Logic';
import { GameProvider } from '../Context'; // Updated import

const Hard = () => (
  <GameProvider boardWidth={30} boardHeight={16} mineCount={99}>
    <MinesweeperGame title="Hard" />
  </GameProvider>
);

export default Hard;
