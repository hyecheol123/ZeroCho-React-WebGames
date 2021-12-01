import React from 'react';
import * as MineSweeperData from './MineSweeperData';

/**
 * React Functional Component for MineSweeper (Game Player)
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {object} props.gameData Contains game properties
 * @param {function} props.resetGameFunc Function to reset game
 * @return {React.ReactElement} a react element referring MineSweeper
 */
const MineSweeper = ({ gameData, resetGameFunc }) => {
  const test = () => {
    console.log('minesweeper reached');
  };

  // Context
  const { halted, dispatch } = React.useContext(MineSweeperData.TableContext);

  // Timer
  React.useEffect(() => {
    let interval;
    // When game is on-going, count time
    if (halted === false) {
      interval = setInterval(() => {
        dispatch({ type: MineSweeperData.INCREMENT_TIMER });
      }, 1000);
    }

    // Clear interval when MineSweeper unmounts
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [halted]);

  // Start Game
  React.useEffect(() => {
    dispatch({
      type: MineSweeperData.START_GAME,
      nRow: gameData.nRow,
      nCol: gameData.nCol,
      nMine: gameData.nMine,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData.nRow, gameData.nCol, gameData.nMine]);

  return (
    <>
      {test()}
      <span>Reached</span>
    </>
  );
};

export default MineSweeper;
