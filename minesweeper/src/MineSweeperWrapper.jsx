import React from 'react';
import GameStartForm from './GameStartForm/GameStartForm';
import '../styles/global.css';

const MineSweeperWrapper = () => {
  const test = () => {
    console.log('reached');
  };

  // State
  const [gameData, setGameData] = React.useState(null);

  const initializeGameData = (nRow, nColumn, nMine) => {
    setGameData({ row: nRow, col: nColumn, mine: nMine });
  };

  return (
    <>
      {test()}
      {!gameData && <GameStartForm setGameDataFunc={initializeGameData} />}
    </>
  );
};

export default MineSweeperWrapper;
