import React from 'react';
import styles from '../styles/TicTacToeTurnButton.module.css';
import { SET_PLAYER } from './TicTacToeData';

/**
 * React Component for TicTacToeTurnButton
 *   - For 1P: User can choose whether to play first or later.
 *   - For 2P: Indicate whose turn it is.
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {string} props.turn current turn
 * @param {string} props.player player's stone
 * @param {function} props.dispatch function to change state
 * @return {React.Element} React Element representing TicTacToeTurnButton
 */
const TicTacToeTurnButton = ({ turn, player, dispatch }) => {
  /**
   * Function to change player and reset the game
   *
   * @param {Event} event Click event
   */
  const onClickBtn = React.useCallback((event) => {
    if (dispatch) {
      dispatch({ type: SET_PLAYER, player: event.target.innerText });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.BtnWrapper}>
      <button
        className={
          (!dispatch && turn === 'O') || (dispatch && player === 'O')
            ? styles.Button
            : `${styles.Button} ${styles.InActive}`
        }
        onClick={onClickBtn}
      >
        O
      </button>
      <button
        className={
          (!dispatch && turn === 'X') || (dispatch && player === 'X')
            ? styles.Button
            : `${styles.Button} ${styles.InActive}`
        }
        onClick={onClickBtn}
      >
        X
      </button>
    </div>
  );
};

export default TicTacToeTurnButton;
