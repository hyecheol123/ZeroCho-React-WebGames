import React from 'react';
import { CLICK_CELL } from './TicTacToeData';
import styles from '../styles/TicTacToeTable.module.css';

const TicTacToeTableCell = ({ content, rIdx, cIdx, isDisabled, dispatch }) => {
  const cellClicked = () => {
    // Prevent click on already clicked cell and when game is over
    if (content !== '' || isDisabled) {
      return;
    }
    dispatch({ type: CLICK_CELL, row: rIdx, col: cIdx });
  };

  return (
    <div className={styles.TableCell} onClick={cellClicked}>
      {content}
    </div>
  );
};

export default TicTacToeTableCell;
