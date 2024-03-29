import React from 'react';
import styles from '../../styles/Modal.module.css';

/**
 * React Component to show warning modal.
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {string} props.msg Warning Message
 * @param {function} props.closeModalFunc Function to close modal
 * @return {React.ReactElement} React Element representing the modal
 */
const MineNumberWarningModal = ({ msg, closeModalFunc }) => {
  return (
    <div className={styles.ModalOverlay}>
      <div className={styles.Modal}>
        <span>{msg}</span>
        <button onClick={closeModalFunc}>Close</button>
      </div>
    </div>
  );
};

export default MineNumberWarningModal;
