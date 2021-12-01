import React from 'react';
import GameStartForm from './GameStartForm/GameStartForm';
import { TableProvider } from './MineSweeper/MineSweeperData';
import MineSweeper from './MineSweeper/MineSweeper';
import '../styles/global.css';

/**
 * React Functional Component for MineSweeperWrapper (React Root)
 *
 * @return {React.ReactElement} a react element referring MineSweeperWrapper
 */
const MineSweeperWrapper = () => {
  // State
  const [gameData, setGameData] = React.useState(null);

  /**
   * Helper method to initilize game data
   *
   * @param {number} nRow number of row
   * @param {number} nColumn number of column
   * @param {number} nMine number of mine
   */
  const initializeGameData = (nRow, nColumn, nMine) => {
    setGameData({ nRow: nRow, nCol: nColumn, nMine: nMine });
  };

  /**
   * Helper method to reset game
   */
  const resetGame = () => {
    setGameData(null);
  };

  return (
    <>
      {!gameData && <GameStartForm setGameDataFunc={initializeGameData} />}
      {gameData && (
        <TableProvider>
          <MineSweeper gameData={gameData} resetGameFunc={resetGame} />
        </TableProvider>
      )}
    </>
  );
};

export default MineSweeperWrapper;
