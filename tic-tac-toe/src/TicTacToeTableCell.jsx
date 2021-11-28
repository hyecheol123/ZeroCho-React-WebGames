import React from 'react';
import { CLICK_CELL } from './TicTacToeData';
import styles from '../styles/TicTacToeTable.module.css';

/**
 * React Component for a Cell of TicTacToe Table
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {string} props.content Content of Cell
 * @param {number} props.rIdx current cell's row index
 * @param {number} props.cIdx current cell's column index
 * @param {boolean} props.isDisabled Indicates whether user can click the cell
 *   or not.
 *   All cells are disabled when the game is set.
 * @param {React.Dispatch} props.dispatch dispatch function to update game's
 *   states.
 * @return {React.ReactElement} A React Element representing TicTacToeTableCell.
 */
const TicTacToeTableCell = ({ content, rIdx, cIdx, isDisabled, dispatch }) => {
  /**
   * Helper method to handle click action
   */
  const cellClicked = React.useCallback(() => {
    // Prevent click on already clicked cell and when game is over
    if (content !== '' || isDisabled) {
      return;
    }
    dispatch({ type: CLICK_CELL, row: rIdx, col: cIdx });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, isDisabled]);

  return (
    <div className={styles.TableCell} onClick={cellClicked}>
      {content}
    </div>
  );
};

export default React.memo(TicTacToeTableCell);
