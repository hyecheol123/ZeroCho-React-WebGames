import React from 'react';
import styles from '../../styles/MineSweeper/ResetGameBtn.module.css';

/**
 * React Functional Component for ResetGameBtn
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {function} props.resetGameFunc Function to reset/restart the game
 * @return {React.ReactElement} React Element representing the ResetGameBtn
 */
const ResetGameBtn = ({ resetGameFunc }) => {
  return (
    <>
      <button className={styles.Btn} onClick={resetGameFunc}>
        New Game
      </button>
    </>
  );
};

export default React.memo(ResetGameBtn);
