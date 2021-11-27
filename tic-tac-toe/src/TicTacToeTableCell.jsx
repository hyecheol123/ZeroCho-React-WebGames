import React from 'react';
import styles from '../styles/TicTacToeTable.module.css';

const TicTacToeTableCell = ({ content, dispatch }) => {
  return <div className={styles.TableCell}>{content}</div>;
};

export default TicTacToeTableCell;
