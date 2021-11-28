import React from 'react';
import styles from '../styles/TicTacToeTurnButton.module.css';

const TicTacToeTurnButton = ({ turn, dispatch }) => {
  return (
    <div className={styles.BtnWrapper}>
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
