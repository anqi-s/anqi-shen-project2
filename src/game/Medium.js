import React from 'react';
import MinesweeperGame from '../Logic';
import { GameProvider } from '../Context'; // Updated import

const Medium = () => (
  <GameProvider boardWidth={16} boardHeight={16} mineCount={40}>
    <MinesweeperGame title="Medium" />
  </GameProvider>
);

export default Medium;
