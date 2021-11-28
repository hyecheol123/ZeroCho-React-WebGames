import React from 'react';
import styles from '../styles/ResultModal.module.css';

/**
 * React Component to show result of game
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {string} props.result Result of game
 * @param {function} props.resetGameFunc Function to restart game
 * @return {React.Element} React Element representing ResultModal
 */
const ResultModal = ({ result, resetGameFunc }) => {
  return (
    <div className={styles.ModalOverlay}>
      <div className={styles.Modal}>
        <span>{result}</span>
        <button onClick={resetGameFunc}>Start New Game</button>
      </div>
    </div>
  );
};

export default ResultModal;
