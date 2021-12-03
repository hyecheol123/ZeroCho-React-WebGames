import React from 'react';
import * as MineSweeperData from './MineSweeperData';
import Timer from './Timer';
import NumberMine from './NumberMine';
import Table from './Table/Table';
import ResetGameBtn from './ResetGameBtn';
import styles from '../../styles/MineSweeper/GamePlay.module.css';

/**
 * React Functional Component for GamePlay (Game Player)
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {object} props.gameData Contains game properties
 * @param {function} props.resetGameFunc Function to reset game
 * @return {React.ReactElement} a react element referring GamePlay
 */
const GamePlay = ({ gameData, resetGameFunc }) => {
  const test = () => {
    console.log('gameplay reached');
  };

  // Context
  const { tableData, dispatch } = React.useContext(
    MineSweeperData.TableContext
  );

  // Start Game
  React.useEffect(() => {
    if (!tableData) {
      dispatch({
        type: MineSweeperData.START_GAME,
        nRow: gameData.nRow,
        nCol: gameData.nCol,
        nMine: gameData.nMine,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData]);

  return (
    <div className={styles.MineSweeper}>
      {test()}
      <div className={styles.Header}>
        <Timer />
        <NumberMine nMine={gameData.nMine} />
      </div>
      <Table />
      <ResetGameBtn resetGameFunc={resetGameFunc} />
    </div>
  );
};

export default GamePlay;
