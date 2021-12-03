import React from 'react';
import styles from '../../styles/Modal.module.css';

/**
 * React Component to show result modal.
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {string} props.result result of game
 * @param {function} props.closeModalFunc Function to close modal
 * @return {React.ReactElement} React Element representing the modal
 */
const ResultModal = ({ result, closeModalFunc }) => {
  return (
    <div className={styles.ModalOverlay}>
      <div className={styles.Modal}>
        <span>{result}</span>
        <button onClick={closeModalFunc}>Close</button>
      </div>
    </div>
  );
};

export default ResultModal;
