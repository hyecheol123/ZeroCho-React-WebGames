import React from 'react';
import styles from '../styles/TicTacToeTurnButton.module.css';

/**
 * React Component for TicTacToeTurnButton
 *   - For 1P: User can choose whether to play first or later.
 *   - For 2P: Indicate whose turn it is.
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {string} props.turn current turn
 * @param {function} props.dispatch function to change state
 * @return {React.Element} React Element representing TicTacToeTurnButton
 */
const TicTacToeTurnButton = ({ turn, dispatch }) => {
  return (
    <div className={styles.BtnWrapper}>
      {/* TODO: Button Change Player (When changed, reset game)*/}
      <button
        className={
          turn === 'O' ? styles.Button : `${styles.Button} ${styles.InActive}`
        }
      >
        O
      </button>
      <button
        className={
          turn === 'X' ? styles.Button : `${styles.Button} ${styles.InActive}`
        }
      >
        X
      </button>
    </div>
  );
};

export default TicTacToeTurnButton;
