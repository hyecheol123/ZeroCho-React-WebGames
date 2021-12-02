import React from 'react';
import * as MineSweeperData from './MineSweeperData';
import Timer from './Timer';
import NumberMine from './NumberMine';
import ResetGameBtn from './ResetGameBtn';

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
  const { dispatch } = React.useContext(MineSweeperData.TableContext);

  // Start Game
  React.useEffect(() => {
    dispatch({
      type: MineSweeperData.START_GAME,
      nRow: gameData.nRow,
      nCol: gameData.nCol,
      nMine: gameData.nMine,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData]);

  return (
    <>
      {test()}
      <div>
        <Timer />
        <NumberMine nMine={gameData.nMine} />
      </div>
      <ResetGameBtn resetGameFunc={resetGameFunc} />
    </>
  );
};

export default MineSweeper;
